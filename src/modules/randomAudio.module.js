import {Module} from '../core/module'
import {random} from '../utils.js'

import myAudio1 from "../mp3/18775-rickroll354.mp3"
import myAudio2 from '../mp3/716328-5435434.mp3'
import myAudio3 from '../mp3/7163335354.mp3'
import myAudio4 from '../mp3/71633153454.mp3'
import myAudio5 from '../mp3/716334423432.mp3'

export class RndAudioModule extends Module {
    trigger() {
        const audios = [myAudio1, myAudio2, myAudio3, myAudio4, myAudio5]
        let randomNum = random(0, audios.length - 1)
        
        const myAudio = new Audio(audios[randomNum])
        myAudio.play()
        document.addEventListener('contextmenu', event =>{
            myAudio.currentTime = 0
            myAudio.pause()
        })
    }
}