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

export const bxx = (hex: string): Buffer => Buffer.from(bx(hex));
