import {ShapeModule} from './modules/shape.module'

export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getOneFigure() {
  figure = new ShapeModule();
  const figureOne = document.createElement('div');
  figureOne.classList.add('figure');

  figureOne.style.position = 'absolute'
  figureOne.style.width = `${figure.getRandomSize(10, 200)}px`
  figureOne.style.height = `${figure.getRandomSize(10, 200)}px`
  figureOne.style.borderRadius = `${figure.getRandomSize(0, 50)}px`
  figureOne.style.top = `${figure.getRandomSize(10, 90)}%`
  figureOne.style.left = `${figure.getRandomSize(10, 90)}%`
  figureOne.style.backgroundColor = `${figure.changeBackground()}`
  figureOne.style.transform = `rotate(${figure.randomNum(360)}deg)`
  document.body.append(figureOne);
}

export function getTwoFigure() {
  figure = new ShapeModule();
  const figureTwo = document.createElement('div');
  figureTwo.style.position = 'absolute'
  figureTwo.style.width = `${figure.getRandomSize(10, 200)}px`
  figureTwo.classList.add('figure');
  figureTwo.style.top = `${figure.getRandomSize(10, 90)}%`
  figureTwo.style.left = `${figure.getRandomSize(10, 90)}%`
  figureTwo.style.border = `${figure.getRandomSize(10, 90)}px solid transparent`
  let randomBorder = figure.randomNum(4)
  if (randomBorder === 1) {
      figureTwo.style.borderTop = `${figure.getRandomSize(10, 90)}px solid ${figure.changeBackground()}`
  } else if (randomBorder === 2) {
      figureTwo.style.borderBottom = `${figure.getRandomSize(10, 90)}px solid ${figure.changeBackground()}`
  } else if (randomBorder === 3) {
      figureTwo.style.borderLeft = `${figure.getRandomSize(10, 90)}px solid ${figure.changeBackground()}`
  } else if (randomBorder === 4) {
      figureTwo.style.borderRight = `${figure.getRandomSize(10, 90)}px solid ${figure.changeBackground()}`
  }
  figureTwo.style.transform = `rotate(${figure.randomNum(360)}deg)`
  
  document.body.append(figureTwo);
}
