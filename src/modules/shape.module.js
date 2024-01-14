import {Module} from '../core/module'
import {random, changeBackground} from '../utils.js'

export class ShapeModule extends Module {
    trigger() {
        let figureСheck = document.querySelector('.figure')
        if (figureСheck !== null) {
            figureСheck.remove()
        }
        const figure = document.createElement('div')
        const count = random(0, 2)
        figure.classList.add('figure')
        figure.style.position = 'absolute'
        figure.style.width = `${random(10, 200)}px`
        figure.style.top = `${random(10, 90)}%`
        figure.style.left = `${random(10, 90)}%`
        figure.style.transform = `rotate(${random(0, 360)}deg)`
        if (count === 1) {
            figure.style.height = `${random(10, 200)}px`
            figure.style.borderRadius = `${random(0, 50)}px`
            figure.style.backgroundColor = `${changeBackground()}`
            document.body.append(figure)
        } else {
            figure.style.border = `${random(10, 90)}px solid transparent`
            figure.style.borderBottom = `${random(10, 90)}px solid ${changeBackground()}`
            document.body.append(figure)
        }
        figureСheck = document.querySelector('.figure')
        setTimeout(() => {
            figureСheck.remove()
        }, 5000);

    }
   
}