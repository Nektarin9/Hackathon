import {Module} from '../core/module'
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
        const SQUARES_NUMBER=1480
        const colors=['#ff69b4','#c71585','#f8f8ff','#48d1cc','#00ffff','#9acd32','#ffd700','#ff7f50','#2f4f4f', '#0000cd']

        for(let i=0;i<SQUARES_NUMBER;i++) {
            const square = document.createElement('div')
            square.classList.add('square')

            square.addEventListener('mouseover',() => setColor(square))
            square.addEventListener('mouseleave',() => removeColor(square))

            board.appendChild(square)
        }

        function setColor(element) {
            const color = getRandomColor()
            element.style.backgroundColor=color
            element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        }

        function removeColor(element) {
            element.style.backgroundColor='#1d1d1d'
            element.style.boxShadow=`0 0 2px #000`
        }

        function getRandomColor() {
            const index=Math.floor(Math.random()*colors.length)

            return colors[index]
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
