import './styles.css'
import {ContextMenu} from "./menu.js"

import {ClicksModule} from "./modules/clicks.module.js"
import {BackgroundModule} from "./modules/background.module.js"
import {RandomMessage} from "./modules/message.module.js"
import {ShapeModule} from "./modules/shape.module.js"
import {DrawingModule} from "./modules/drawing.module";
import {RndAudioModule} from "./modules/randomAudio.module.js"

// туу тесты

const myAudio1 = './src/test/18775-rickroll354.mp3'
const myAudio2 = './src/test/716328-5435434.mp3'
const myAudio3 = './src/test/7163335354.mp3'
const myAudio4 = './src/test/71633153454.mp3'
const myAudio5 = './src/test/716334423432.mp3'

const audios = [myAudio1, myAudio2, myAudio3, myAudio4, myAudio5];

let randomNum = () => { return Math.ceil(audios.length * Math.random()) }

console.log(randomNum())

const audio = new Audio();
function soundClick() {
    audio.src = audios[randomNum() - 1];
    audio.autoplay =true;
}
let btn = document.querySelector("button")

btn.addEventListener("click", event => {
    soundClick();
})

// ..................

function addMenuEvent() {
    const ul = document.querySelector("#menu")
    ul.addEventListener("click", event => {
        const {target} = event
        if (target.dataset.type === "BackgroundModule") {
            backgroundModule.trigger()
        }
        else if (target.dataset.type === "ClicksModule") {
            clicksModule.trigger()
        }
        else if (target.dataset.type === "RandomMessage") {
            randomMessage.trigger()
        }
        else if (target.dataset.type === "ShapeModule") {
            shapeModule.trigger()
        }
        else if (target.dataset.type === "DrawingModule") {
            drawingModule.trigger()
        }
        else if (target.dataset.type === "RndAudioModule") {
        }
    })

}

const backgroundModule = new BackgroundModule("BackgroundModule","Поменять цвет")
const clicksModule = new ClicksModule("ClicksModule", "Считать кнопки (за 3 секунды)")
const randomMessage = new RandomMessage("RandomMessage", "Вызвать сообщение")
const shapeModule = new ShapeModule("ShapeModule", "Случайная фигура")
const drawingModule = new DrawingModule("DrawingModule", "Рисовалка")
const rndAudioModule = new RndAudioModule("RndAudioModule", "Случайный звук")


const menu = new ContextMenu()







menu.add(backgroundModule)
menu.add(clicksModule)
menu.add(randomMessage)
menu.add(shapeModule)
menu.add(drawingModule)
menu.add(rndAudioModule)

menu.open()
menu.close()



addMenuEvent()
