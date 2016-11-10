'use strict';

export const rotate = value => {
    var rotated = (value >> 1) | (value << 7);
    var eightBitArray = new Uint8Array([rotated]);
    return eightBitArray[0];
}

export const reverseBits = x => {
    const intSize = 8;
    let y = 0;
      for (let position = intSize - 1; position > 0; position--) {
            y += ((x & 1) << position);
            x >>= 1;
      }
    return y;
}