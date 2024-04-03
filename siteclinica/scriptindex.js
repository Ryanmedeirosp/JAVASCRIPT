const getHours = () => {
    const clock = document.querySelector('#relogio')
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    clock.textContent = `${hour}:${minute}:${second}`
    
  }
  
  setInterval(getHours,1000)

const listaBanner = ["img1.png","img2.png","img3.png","img4.png","img5.png"]
const banner = document.querySelector("#imgEntrada")
var contador = 0

setInterval(() => {
  banner.src = listaBanner[contador]
  banner.style.opacity = 1
  contador++
  if(contador === 5){
    contador = 0
  }

  setTimeout(() => {
    banner.style.opacity = 0.6
  },1500);

}, 3000);
