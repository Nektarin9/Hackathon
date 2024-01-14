import {Module} from '../core/module'

export class ClicksModule extends Module {
    trigger() {
        let lastClickTime = 0
        let clickCount = 0
        let doubleclickCount = 0

        document.body.addEventListener('click', handleClick)
        document.body.addEventListener('dblclick', handleDoubleClick)
        document.body.addEventListener('contextmenu', handleCloseContextMenu)

        setTimeout(function () {
            createMassage()
        }, 5000)

        function handleClick() {
            const currentTime = new Date().getTime();
            const timeSinceLastClick = currentTime - lastClickTime

            if (timeSinceLastClick >= 300) {
                clickCount++
            }

            lastClickTime = currentTime
        }

        function handleDoubleClick() {
            doubleclickCount++;
            clickCount = Math.round(clickCount / 2)
            lastClickTime = new Date().getTime()
        }

        function handleCloseContextMenu(evt) {
            evt.preventDefault()
            clickCount = 0
            doubleclickCount = 0
            const clickCountsMessage = document.querySelector('.count-message')
            if (clickCountsMessage) {
                clickCountsMessage.remove()
            }
        }

        function createMassage() {
            const clickCountsMessage = document.createElement('div')
            clickCountsMessage.className = "count-message"
            const titleCount = document.createElement('h2')
            titleCount.style.textAlign = 'center'
            titleCount.textContent = "Вы сделали:"
            clickCountsMessage.insertAdjacentElement("afterbegin", titleCount)

            const doubleClick = document.createElement('p')
            doubleClick.textContent = `Двойных кликов: ${doubleclickCount}`

            const onceClick = document.createElement('p')
            onceClick.textContent = `Одинарных кликов: ${clickCount - 1}`

            const sumClick = document.createElement('p')
            sumClick.textContent = `Всего: ${clickCount - 1 + doubleclickCount} кликов`

            titleCount.insertAdjacentElement('afterend', doubleClick)
            doubleClick.insertAdjacentElement('afterend', onceClick)
            onceClick.insertAdjacentElement('afterend', sumClick)
            document.body.insertAdjacentElement('afterbegin', clickCountsMessage)
        }
    }
}
