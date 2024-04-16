function moveButton(x) {
    marginX = Math.floor(Math.random()*600)
    marginY = Math.floor(Math.random()*600)

    x.style.left = marginY.toString() + 'px '
    x.style.top = marginX.toString() + 'px'
}
