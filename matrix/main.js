'use strict';
import { rotate } from './utils';

export function initializeDisplay(options) {
    if (typeof options.scl === "undefined" ||
        typeof options.sda === "undefined" ||
        typeof options.brightness === "undefined" ||
        typeof options.address === "undefined") {
        throw new Error("Required option of `scl`, `sda`, `brightness` and/or `address` is missing.");
    }
    const address = options.address;
    I2C1.setup({ scl: options.scl, sda: options.sda });
    I2C1.writeTo(address, 0x21); // turn on oscillator
    I2C1.writeTo(address, 0x81); // disp on
    setBrightness(address, options.brightness);

    return {
        address,
        render: render
    }
}

export function setBrightness(address, brightness) {
    // brightness 0-15
    I2C1.writeTo(address, 0xE0 | brightness);
}

export function render(bitmap) {
    var a = [];
    bitmap.forEach(function (i) {
        a.push(i);
        a.push(i);
    });
    I2C1.writeTo(this.address, 0,
        //Because of how the 8x8 Matrix is wired you need to rotate right by one bit
        (a).map(rotate)
    );
}


/**
* Clears graphics buffer.
*/
export function clear() {
    context.clear();
}

/**
* Same as `render()`.
*/
export function writeDisplay() {
    render();
}

/**
* Writes an array of 8 8-bit values to the display graphics context
* @param uint8array
*/
export function drawBitmap(uint8array) {
    var array = [];
    uint8array.forEach(function (i) {
        array.push(i);
        array.push(i);
    });
    context.buffer = new Uint8Array(array);
}

export function drawPixel(x, y, state) {
    context.setPixel(x, y, state);
}

export function drawLine(x1, y1, x2, y2) {
    context.drawLine(x1, y1, x2, y2);
}

/**
* Draws a rectangle at a set of co-ordinates of a given width and height
*
* @param x is the x value where you want to start
* @param y is the y value where you want to start
* @param width is the width of the rectangle
* @param height is the height of the rectangle
*/
export function drawRect(x, y, width, height) {
    context.drawRect(x, y, x + width - 1, y + height - 1);
}

/**
* Draws a filled in rectangle at a set of co-ordinates of a given width and height
* @param x is the x value where you want to start
* @param y is the y value where you want to start
* @param width is the width of the rectangle
* @param height is the height of the rectangle
*/
export function fillRect(x, y, width, height) {
    context.fillRect(x, y, x + width - 1, y + height - 1);
}