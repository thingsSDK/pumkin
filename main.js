import { connect16x8 } from 'thingssdk-adafruit-matrix/espruino';
import { animate as animateEye } from './eye';

function main() {

    const eyeMatrix = connect16x8();
    const leftMouthMatrix = matrix8x8({ scl: 5, sda: 4, address: 0x71, brightness: 15 });
    const middleMouthMatrix = matrix8x8({ scl: 5, sda: 4, address: 0x74, brightness: 15 });
    const rightMouthMatrix = matrix8x8({ scl: 5, sda: 4, address: 0x75, brightness: 15 });

    animateEye(eyeMatrix);
    animateMouth(leftMouthMatrix, middleMouthMatrix, rightMouthMatrix);

}