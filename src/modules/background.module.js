import {Module} from '../core/module'

export class BackgroundModule extends Module {
    trigger() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        document.body.style.backgroundColor = color
    }
}