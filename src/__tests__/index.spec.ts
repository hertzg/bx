import { bx, bxx } from '../index';

describe('bx', () => {
  it('should produce 0 length ArrayBuffer on empty string', () => {
    expect(bx('')).toStrictEqual(new ArrayBuffer(0));

    expect(bx('')).not.toStrictEqual(new ArrayBuffer(1));
  });
  it('should convert hex strings to ArrayBuffer', () => {
    expect(bx('fe')).toStrictEqual(new Uint8Array([0xfe]).buffer);
    expect(bx('feef')).toStrictEqual(new Uint8Array([0xfe, 0xef]).buffer);
    expect(bx('feeffaaf')).toStrictEqual(
      new Uint8Array([0xfe, 0xef, 0xfa, 0xaf]).buffer
    );

    expect(bx('fa')).not.toStrictEqual(new Uint8Array([0xaa]).buffer);
    expect(bx('feef')).not.toStrictEqual(new Uint8Array([0xef, 0xfe]).buffer);
    expect(bx('feeffaaf')).not.toStrictEqual(
      new Uint8Array([0xaa, 0xaa, 0xaa, 0xaa]).buffer
    );
  });
  it('should convert hex strings with separators to ArrayBuffer', () => {
    expect(bx('fe_ef af be b0 xba-ab')).toStrictEqual(
      new Uint8Array([0xfe, 0xef, 0xaf, 0xbe, 0xb0, 0xba, 0xab]).buffer
    );

    expect(bx('fe_ef af be b0 xba-ab')).not.toStrictEqual(
      new Uint8Array([0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa]).buffer
    );
  });
  it('should throw on invalid strings', () => {
    expect(() => bx(' ')).toThrowError(TypeError);
    expect(() => bx('zz')).toThrowError(TypeError);
    expect(() => bx('0')).toThrowError(TypeError);
    expect(() => bx('1')).toThrowError(TypeError);
    expect(() => bx('deadbea')).toThrowError(TypeError);
  });
});

describe('bxx', () => {
  it('should convert hex strings with separators to Buffer', () => {
    expect(bxx('fe_ef af be b0 xba-ab')).toEqual(
      Buffer.from([0xfe, 0xef, 0xaf, 0xbe, 0xb0, 0xba, 0xab])
    );

    expect(bxx('fe_ef af be b0 xba-ab')).not.toEqual(
      Buffer.from([0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa])
    );
  });
});
