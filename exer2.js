window.addEventListener("mousemove", mouseMove)
var onion = document.getElementById('onion')
var onionPos = {
    x:0, 
    y:0,
    w:50,
    h:50
}
var layerOnePos = {
    x: 0,
    y: 0,
    h: 512,
    w: 1000
}
var layerTwoPos = {
    x: 0,
    y: 0,
    h: 512,
    w: 1000
}
var layerThreePos = {
    x: 0,
    y: 0,
    h: 512,
    w: 1000
}
var layerFourPos = {
    x: 0,
    y: 0,
    h: 512,
    w: 1000
}
var containerPos = {
    x: 0,
    y: 0,
    h: 512,
    w: 512
}
var container = document.getElementById('container')
var layerOne = document.getElementById('layer1')
var layerTwo = document.getElementById('layer2')
var layerThree = document.getElementById('layer3')
var layerFour = document.getElementById('layer4')

function mouseMove(evt){
    console.log(evt)
    var mouse = {
        x :evt.pageX - container.offsetLeft,
        y :evt.pageY - container.offsetTop
    }

    onionPos.x = mouse.x - (onionPos.w *0.5)
    onionPos.y = mouse.y - (onionPos.h *0.5)
    console.log(`${mouse.x} , ${mouse.y}`)
    onion.style.left = onionPos.x + 'px'
    onion.style.top = onionPos.y + 'px'

    layerOnePos.x =  ((-mouse.x* 0.2) + (containerPos.w*0.5 - layerOnePos.w*0.5))
    layerOne.style.left = layerOnePos.x + "px" 

    layerTwoPos.x =  ((-mouse.x * 0.1) + (containerPos.w*0.5 - layerTwoPos.w*0.5))
    layerTwo.style.left = layerTwoPos.x + "px" 

    layerThreePos.x =  ((-mouse.x * 0.02) + (containerPos.w*0.5 - layerThreePos.w*0.5))
    layerThree.style.left = layerThreePos.x + "px" 
}

