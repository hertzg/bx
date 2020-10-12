import { bx } from '../index';

describe('bx', () => {
  it('should produce 0 length buffer on empty string', () => {
    expect(bx('')).toStrictEqual(Buffer.alloc(0));
  });
  it('should convert hex strings to buffer', () => {
    expect(bx('feef')).toEqual(Buffer.from([0xfe, 0xef]));
    expect(bx('feeffaaf')).toEqual(Buffer.from([0xfe, 0xef, 0xfa, 0xaf]));
  });
  it('should convert hex strings with separators to buffer', () => {
    expect(bx('fe_ef af be b0 xba-ab')).toEqual(
      Buffer.from([0xfe, 0xef, 0xaf, 0xbe, 0xb0, 0xba, 0xab])
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
