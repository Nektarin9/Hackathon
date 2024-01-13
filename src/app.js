import './styles.css'
import {ContextMenu} from "./menu.js"

import {ClicksModule} from "./modules/clicks.module.js"
import {BackgroundModule} from "./modules/background.module.js"
import {RandomMessage} from "./modules/message.module.js"
import {ShapeModule} from "./modules/shape.module.js"

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
    })

}

const backgroundModule = new BackgroundModule("BackgroundModule","Поменять цвет")
const clicksModule = new ClicksModule("ClicksModule", "Считать кнопки (за 3 секунды)")
const randomMessage = new RandomMessage("RandomMessage", "Вызвать сообщение")
const shapeModule = new ShapeModule("ShapeModule", "Случайная фигура")

const menu = new ContextMenu()

menu.add(backgroundModule)
menu.add(clicksModule)
menu.add(randomMessage)
menu.add(shapeModule)

menu.open()
menu.close()



addMenuEvent()