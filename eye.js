const cpArr = from => {
    return from.map(bmp => bmp.map(line => line));
}

const bmp_0 = [1,3,1,9,31,63,127,255];
const bmp_1 = [1,3,7,9,25,63,127,255];
const bmp_2 = [0,1,3,1,9,31,63,127];
const bmp_3 = [0,0,1,1,1,15,31,63];
const bmp_4 = [0,0,0,1,1,7,15,31];
const bmp_5 = [0,0,0,0,1,3,7,15];
const bmp_6 = [0,0,0,0,0,1,3,7];
const bmp_7 = [0,0,0,0,0,0,0,1];
const bmp_8 = [0,0,0,0,0,0,0,0];
const bmp_9 = bmp_7;
const bmp_10 = bmp_6;
const bmp_11 = bmp_11;
const bmp_12 = bmp_4;
const bmp_13 = bmp_3;
const bmp_14 = bmp_2;
const bmp_15 = bmp_1;
const bmp_16 = [1,3,7,15,25,57,127,255];
const bmp_17 = [1,3,7,15,31,57,121,255];
const bmp_18 = [1,3,7,15,31,51,115,255];
const bmp_19 = [1,3,7,15,31,39,103,255];
const bmp_20 = [1,3,7,15,31,15,79,255];
const bmp_21 = bmp_19;
const bmp_22 = [1,3,7,15,19,51,127,255];
const bmp_23 = bmp_17;
const bmp_24 = bmp_16;
const bmp_25 = bmp_1;


const evil_0 = [60,126,207,199,227,243,126,60];
const evil_1 = [60,102,227,241,249,255,126,60];
const evil_2 = [60,126,255,159,143,199,102,60];
const evil_3 = [12,62,127,31,143,198,100,48];
const evil_4 = [4,30,63,30,14,196,96,0];
const evil_5 = [0,6,30,30,12,64,64,0];
const evil_6 = [0,2,14,28,8,0,64,0];
const evil_7 = [0,0,12,24,0,0,0,0];
const evil_8 = [0,0,0,0,0,0,0,0];

let tea = [
    bmp_0,
    bmp_0,
    bmp_0,    
    bmp_0,
    bmp_0,
    bmp_0,    
    bmp_0,
    bmp_0,
    bmp_0,   
    bmp_0,
    bmp_0,
    bmp_0,    
    bmp_0,
    bmp_0,
    bmp_0,    
    bmp_0,
    bmp_0,
    bmp_0,
    bmp_0,
    bmp_0,
    bmp_0,
    bmp_0,
    bmp_0,
    bmp_0,
    bmp_1,
    bmp_2,
    bmp_3,
    bmp_4,
    bmp_5,
    bmp_6,
    bmp_7,
    bmp_8,
    bmp_9,
    bmp_10,
    bmp_11,
    bmp_12,
    bmp_13,
    bmp_14,
    bmp_15,
    bmp_16,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_17,
    bmp_18,
    bmp_19,
    bmp_20,
    bmp_20,
    bmp_20,
    bmp_20,    
    bmp_20,
    bmp_20,
    bmp_20,
    bmp_20,    
    bmp_20,
    bmp_20,
    bmp_20,
    bmp_20,
    bmp_20,
    bmp_20,
    bmp_20,
    bmp_21,
    bmp_22,
    bmp_23,
    bmp_23,
    bmp_23,
    bmp_23,
    bmp_23,
    bmp_23,
    bmp_23,
    bmp_23,
    bmp_23,
    bmp_23,
    bmp_23,
    bmp_23,
    bmp_23,
    bmp_23,
    bmp_23,
    bmp_24,
    bmp_25,
    bmp_25,
    bmp_25,
    bmp_25,
    bmp_25,
    bmp_25,
    bmp_25,
    bmp_25,
    bmp_25,
    bmp_25
];

let lea = [
    evil_0,
    evil_0,
    evil_0,
    evil_0,
    evil_0,
    evil_0,
    evil_1,
    evil_1,
    evil_1,
    evil_1,
    evil_1,
    evil_1,
    evil_1,
    evil_1,
    evil_1,
    evil_1,
    evil_1,
    evil_1,
    evil_1,
    evil_1,
    evil_0,
    evil_0,
    evil_0,
    evil_0,
    evil_0,
    evil_0,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_2,
    evil_3,
    evil_4,
    evil_5,
    evil_6,
    evil_7,
    evil_8  
];

let typeOfEyes = "lizardEyes";

let animation = cpArr(lea)
                    
let reverse = [];

export const animate = matrix => {
    setInterval(function () {
        const bmp = animation.shift();
        reverse.unshift(bmp);
        matrix.render(bmp);
        if (animation.length === 0) {
            animation = reverse;
            reverse = [];
        }
    }, 50);
}

