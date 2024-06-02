const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

context.fillStyle = 'White'
context.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './images/Pallet Town.png'

const playerImage = new Image()
playerImage.src = './images/playerDown.png'

image.onload = () => {
  context.drawImage(image, -1340, -800)
  context.drawImage(
    playerImage,
    0,
    0,
    playerImage.width/4,
    playerImage.height, 
    canvas.width/2 - playerImage.width/8, 
    canvas.height/2 - playerImage.height/2,
    playerImage.width/4,
    playerImage.height)
}

