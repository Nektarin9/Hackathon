import {Menu} from './core/menu'


export class ContextMenu extends Menu {
    ul = document.querySelector("#menu")
    open() {
        // Всплытие контекстного меню
        document.body.addEventListener("contextmenu", event => {
            event.preventDefault()
            let Y = String(event.y + "px")
            let X = String(event.x + "px")
            this.ul.style.top = Y
            this.ul.style.left = X
            this.ul.style.display = "block"
        })
    }
    close() {
        // Скрываем контекстное меню
        document.body.addEventListener("click", event => {
            this.ul.style.display = "none"
        })
    }
    add(module) {
        this.ul.innerHTML = this.ul.innerHTML + module.toHTML()
    }
}

