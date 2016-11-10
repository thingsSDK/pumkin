import { initializeDisplay as matrix8x8 } from './matrix/main';

import {animate as animateEye} from './eye';
import {animate as animateMouth} from './mouth';

function main() {
    const eyeMatrix = matrix8x8({ scl: 5, sda: 4, address: 0x70, brightness: 15 });
    const leftMouthMatrix = matrix8x8({ scl: 5, sda: 4, address: 0x71, brightness: 15 });
    const middleMouthMatrix = matrix8x8({ scl: 5, sda: 4, address: 0x74, brightness: 15 });
    const rightMouthMatrix = matrix8x8({ scl: 5, sda: 4, address: 0x75, brightness: 15 });

    const updateEyeAnimation = animateEye(eyeMatrix);
    
    animateMouth(leftMouthMatrix, middleMouthMatrix, rightMouthMatrix);
}

E.on("init", main);
save();