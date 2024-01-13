import {Module} from '../core/module'

export class ClicksModule extends Module {
    trigger() {
        let clickCount = 0

        document.body.addEventListener('dblclick', handleClick)
        document.body.addEventListener('click', handleClick)

        setTimeout( function () {
            createMassage()
        }, 5000)



        function handleClick(evt) {
            clickCount++;
                console.log('click');
        }


        function createMassage() {
            const clickCountsMessage = document.createElement('div')
            clickCountsMessage.className = "count-message"
            const titleCount = document.createElement('h2')
            titleCount.style.textAlign = 'center'
            titleCount.textContent = "Вы сделали:"
            clickCountsMessage.insertAdjacentElement("afterbegin", titleCount)

            const sumClick = document.createElement('p')
            sumClick.textContent = `${clickCount} кликов`

            titleCount.insertAdjacentElement("afterend", sumClick)
            document.body.insertAdjacentElement("afterbegin", clickCountsMessage)
        }
    }
}
