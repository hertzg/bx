const bx = (hex: string): Buffer => {
  if (hex === '') {
    return Buffer.alloc(0);
  }

  const cleanHex = hex.replace(/[^0-9a-f]/g, '');

  if (cleanHex.length === 0 || cleanHex.length % 2 !== 0) {
    throw new TypeError(
      'hex string must yield non zero positive even number of characters'
    );
  }

  return Buffer.from(cleanHex, 'hex');
};

export default bx;
