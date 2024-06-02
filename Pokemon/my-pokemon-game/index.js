const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

context.fillStyle = 'White'
context.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './images/Pallet Town.png'
image.onload = () => {
  context.drawImage(image, -1300, -800)
}