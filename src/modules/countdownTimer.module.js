import {Module} from '../core/module'

export class CountdownTimerModule extends Module {
    trigger() {
        let timeInSeconds = parseInt(prompt('Введите время в секундах'), 10)

        if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
            alert('Введите корректное значение.')
            return
        }

        const timerContainerElement = document.createElement('div')
        timerContainerElement.id = 'timer'
        document.body.appendChild(timerContainerElement)

        const timerContainer = document.getElementById('timer')

        let timer = setInterval(() => {
            if (timeInSeconds > 0) {
                timerContainer.textContent = `До окончания отсчета: ${timeInSeconds} секунд`
                timeInSeconds--
            } else {
                clearInterval(timer)
                timerContainer.textContent = 'Отсчет окончен!'
                setTimeout(() => {
                    timerContainer.textContent = ''
                }, 3000)
            }
        }, 1000)

        document.addEventListener('contextmenu', handleClick)

        function handleClick(evt) {
            evt.preventDefault()
            if (timerContainerElement) {
                timerContainerElement.remove()
            }
        }
    }
}
