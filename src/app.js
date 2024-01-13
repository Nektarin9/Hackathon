import './styles.css'
import {ContextMenu} from "./menu.js"

import {DrawingModule} from "./modules/drawing.module.js"
import {BackgroundModule} from "./modules/background.module.js"
// import {RandomMessage} from "./modules/message.module.js"

function addMenuEvent() {
    const ul = document.querySelector("#menu")
    ul.addEventListener("click", event => {
        const {target} = event
        if (target.dataset.type === "BackgroundModule") {
            document.body.style.background = "green"
            backgroundModule.trigger()
        }
        else if (target.dataset.type === "ClicksModule") {
            document.body.style.background = "red"
            clicksModule.trigger()
        }
        // else if (target.dataset.type === "RandomMessage") {
        //     document.body.style.background = "black"
        //     randomMessage.trigger()
        // }
        else if (target.dataset.type === "DrawingModule") {
            drawingModule.trigger()
        }

    })
}

const backgroundModule = new BackgroundModule("BackgroundModule","Поменять цвет")
const drawingModule = new DrawingModule("DrawingModule", "Рисовалка")
// const randomMessage = new RandomMessage("RandomMessage", "Вызвать сообщение")

const menu = new ContextMenu()

menu.add(backgroundModule)
menu.add(drawingModule)
// menu.add(randomMessage)

menu.open()
menu.close()



addMenuEvent()
