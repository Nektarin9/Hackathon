import {Menu} from './core/menu'
import {Module} from "./core/module"

export class ContextMenu extends Menu {
    ul = document.querySelector("#menu")
    
    open() {
        let module = new Module(1,"Поменять цвет")
        // Всплытие контекстного меню
        document.body.addEventListener("contextmenu", event => {
            event.preventDefault()
            let Y = String(event.y + "px")
            let X = String(event.x + "px")
            this.ul.style.top = Y
            this.ul.style.left = X
            this.ul.style.display = "block"
            this.ul.innerHTML = module.toHTML() + module.toHTML() + 
                                module.toHTML() + module.toHTML()
            
            let li = document.querySelectorAll("li")
            console.log(li)
        })
    }
    close() {
        // Скрываем контекстное меню
        document.body.addEventListener("click", event => {
            if (event.target === document.body){
                this.ul.style.display = "none"
            }
        })
    }
   add() {
   // Тут что-то будет =)
   }
   

}