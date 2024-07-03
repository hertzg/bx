  /**
   * A method that accepts a string containing hex encoded buffer. 
   * The string will be stripped of any non-hexadecimal symbols (eg: [^0-9-a-f]) and 
   * if the resulting string has even length then it's used as new Uint8Array(value).buffer 
   * or otherwise throws a TypeError.
   *
   * Examples of cases where it returns an ArrayBuffer
   * ```ts
   * const HEADER = bx('00 ff 00 ff'); // ArrayBuffer { [Uint8Contents]: <00 ff 00 ff>, byteLength: 4 }
   * const SYNC1 = bx('00ff00ff_b4_01020304'); // ArrayBuffer { [Uint8Contents]: <00 ff 00 ff b4 01 02 03 04>, byteLength: 9 }
   * const ZEROLENGTH = bx(''); // ArrayBuffer { [Uint8Contents]: <>, byteLength: 0 }
   * ```
   * 
   * Examples of cases when it throws
   * ```ts
   * const WRONGHEX = bx('z ff 00 00'); // throws
   * const MISSZERO = bx('f2-00_0_00'); // throws
   * const SPACES = bx('          '); // throws
   * ```
   * 
   * @param hex The string containing hex encoded data
   * @returns An {@link ArrayBuffer} containing that data.
   */
export const bx = (hex: string): ArrayBuffer => {
  if (hex === '') {
    return new ArrayBuffer(0);
  }

  const cleanHex = hex.replace(/[^0-9a-f]/g, '');

  if (cleanHex.length === 0 || cleanHex.length % 2 !== 0) {
    throw new TypeError(
      'hex string must yield non zero positive even number of characters'
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const data = cleanHex.match(/../g)!.map((hex) => parseInt(hex, 16));

  return new Uint8Array(data).buffer;
};

/**
 * Exactly the same as {@link bx} just returns NodeJS Buffer instead of ArrayBuffer
 * 
 * @param hex The string containing hex encoded data
 * @returns A {@link Buffer} containing that data.
 */
export const bxx = (hex: string): Buffer => Buffer.from(bx(hex));
