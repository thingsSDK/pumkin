import {reverseBits} from './matrix/utils';

const left_0 = [12,12,28,28,12,14,6,2];
const left_1 = [12,12,60,60,28,14,6,2];
const left_2 = [28,12,4,4,4,2,2,2];
const left_3 = [14,12,28,28,14,14,6,2];
const left_4 = [6,60,28,12,4,2,2,0];


const middle_0 = [8,56,56,56,56,56,56,8];
const middle_1 = [8,120,120,120,120,120,120,8];
const middle_2 = [4,6,30,30,30,30,6,4];
const middle_3 = [14,62,63,63,63,63,62,14];
const middle_4 = [6,6,63,63,63,63,6,6];

let leftAnimation = [
    left_0,
    left_1,
    left_0,
    left_2,
    left_1,
    left_3
];

let middleAnimation = [
    middle_0,
    middle_1,
    middle_0,
    middle_2,
    middle_1,
    middle_3
];

let leftReverse = [];
let middleReverse = [];

export const animate = (leftMatrix, middleMatrix, rightMatrix) => {
    setInterval(function () {
        const leftBitmap = leftAnimation[0];
        const middleBitmap = middleAnimation[0];
        const rightBitmap = leftBitmap.map(line => line).reverse()

        leftReverse.unshift(leftBitmap);
        leftMatrix.render(leftBitmap);
                    
        middleReverse.unshift(middleBitmap);
        middleMatrix.render(middleBitmap);

        rightMatrix.render(rightBitmap);

        leftAnimation.shift();
        middleAnimation.shift();

        if (leftAnimation.length === 0) {
            leftAnimation = leftReverse;
            leftReverse = [];
        }
        if (middleAnimation.length === 0) {
            middleAnimation = middleReverse;
            middleReverse = [];
        }
    }, 250);
}