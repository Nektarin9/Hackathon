import {Module} from '../core/module'
import {changeBackground} from '../utils.js'

export class BackgroundModule extends Module {
    trigger() {
        document.body.style.backgroundColor = changeBackground()
    }
}