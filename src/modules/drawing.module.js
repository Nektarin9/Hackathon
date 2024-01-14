import {Module} from '../core/module'
import {changeBackground} from '../utils.js'

export class DrawingModule extends Module {

    trigger() {
        const containerBoard = document.createElement('div')
        containerBoard.id = 'board'
        const contBoard = document.createElement('div')
        contBoard.className = 'board-container'

        document.body.appendChild(contBoard)
        contBoard.appendChild(containerBoard)

        const squareContainer = document.createElement('div')
        squareContainer.className = "container"
        containerBoard.appendChild(squareContainer)

        const board = document.querySelector('.container')
        const SQUARES_NUMBER = 10000

        for(let i = 0; i < SQUARES_NUMBER; i++) {
            const square = document.createElement('div')
            square.classList.add('square')

            square.addEventListener('mouseover',() => setColor(square))
            square.addEventListener('mouseleave',() => removeColor(square))

            board.appendChild(square)
        }

        function setColor(element) {
            element.style.backgroundColor= changeBackground()
            element.style.boxShadow = `0 0 2px ${changeBackground()}, 0 0 10px ${changeBackground()}`
        }

        function removeColor(element) {
            element.style.backgroundColor='#b8b8b8'
            element.style.boxShadow=`0 0 2px #000`
        }

        
        document.addEventListener('contextmenu', handleClick)

        function handleClick(evt) {
            evt.preventDefault()
            if (contBoard) {
                contBoard.remove()
            }
        }
    }
}
