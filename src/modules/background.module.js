import {Module} from '../core/module'

export class BackgroundModule extends Module {
<<<<<<< HEAD
    changeBackground() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
=======
    trigger() {
        console.log(1)
>>>>>>> 00fcb11c15f7ad29ade432e31f49b033956db99e
    }
}