import {Module} from '../core/module'

export class ShapeModule extends Module {



    trigger() {
        function randomNum(randomNum) {
            return Math.ceil(randomNum * Math.random());
        }

        function getRandomSize(minSize, maxSize) {
            return Math.round(Math.random() * (maxSize - minSize) + minSize)
        }

        
        function changeBackground() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        const figure = document.createElement('div');
        const randomNum = randomNum(2)

        if (randomNum === 1) {
            figure.classList.add('figure');
            figure.style.position = 'absolute'
            figure.style.width = `${getRandomSize(10, 200)}px`
            figure.style.height = `${getRandomSize(10, 200)}px`
            figure.style.borderRadius = `${getRandomSize(0, 50)}px`
            figure.style.top = `${getRandomSize(10, 90)}%`
            figure.style.left = `${getRandomSize(10, 90)}%`
            figure.style.backgroundColor = `${changeBackground()}`
            figure.style.transform = `rotate(${randomNum(360)}deg)`
            document.body.append(figure);
        } else {
            figure.style.position = 'absolute'
            figure.style.width = `${getRandomSize(10, 200)}px`
            figure.classList.add('figure');
            figure.style.top = `${getRandomSize(10, 90)}%`
            figure.style.left = `${getRandomSize(10, 90)}%`
            figure.style.border = `${getRandomSize(10, 90)}px solid transparent`
            figure.style.transform = `rotate(${randomNum(360)}deg)`
            document.body.append(figure);
        }

    }
}