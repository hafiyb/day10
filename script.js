var para1pos=[
    {
        x:0,
        y:50,
        w:1000,
        h:1000,
        mul: 0.15
    },
    {
        x:200,
        y:100,
        w:1000,
        h:800,
        mul: 0.1
    },
    {
        x:-100,
        y:100,
        w:1000,
        h:800,
        mul: 0.05
    },
    {
        x:100,
        y:0,
        w:1000,
        h:800,
        mul: 0.02
    },
    {
        x:0,
        y:0,
        w:1100,
        h:800,
        mul: 0.01
    }
]

var para2pos=[
    {
        x:0,
        y:0,
        w:1400,
        h:500,
        mul: 0.005
    },
    {
        x:0,
        y:0,
        w:1400,
        h:500,
        mul: 0.01
    },
    {
        x:0,
        y:0,
        w:1400,
        h:500,
        mul: 0.02
    },
    {
        x:0,
        y:0,
        w:1400,
        h:500,
        mul: 0.05
    },
    {
        x:0,
        y:0,
        w:1400,
        h:500,
        mul: 0.10
    },
    {
        x:100,
        y:0,
        w:1400,
        h:500,
        mul: 0.15
    },
    {
        x:150,
        y:0,
        w:1400,
        h:500,
        mul: 0.2
    }
]

window.scroll(0,0)

var containerPos= {
    x:0,
    y:0,
    w:1000,
    h:800
}

window.addEventListener("mousemove", mouseMove)
var para1 = document.getElementsByClassName('para1')
var para2 = document.getElementsByClassName('para2')
var container = document.getElementById('container')

window.addEventListener("scroll", onScroll)

function onScroll(){
    if(window.scrollY >= para2[0].offsetTop){
        for(let i = 0; i < para2.length ; i++){
            para2[i].classList.add('fadeIn')
            para2[i].classList.remove('fadeOut')
        }
    } else {
        for(let i = 0; i < para2.length ; i++){
            para2[i].classList.add('fadeOut')
            para2[i].classList.remove('fadeIn')
        }
    }
}

console.log(para1.length)


function mouseMove(evt){
    var mouse = {
        x: evt.pageX - container.offsetLeft,
        y: evt.pageY - container.offsetTop
    }
    
    for(i = 0; i < para1.length; i++){
        para1[i].style.left = ((-mouse.x * para1pos[i].mul) + (containerPos.w*0.5 - para1pos[i].w*0.5 + para1pos[i].x)) + 'px'
        para1[i].style.top = -((mouse.y * (para1pos[i].mul * 0.4)) - (containerPos.h*0.5 - para1pos[i].h*0.5  + para1pos[i].y)) + 'px'
        console.log(mouse.x)
        console.log(containerPos.h)
        console.log(para1[i].mul)
    }

    for(i = 0; i < para2.length; i++){
        para2[i].style.left = ((-mouse.x * para2pos[i].mul) + (containerPos.w*0.5 - para2pos[i].w*0.5 + para2pos[i].x)) + 'px'
        // para2[i].style.top = -((mouse.y * (para2pos[i].mul * 0.25)) - (containerPos.h*0.5 - para2pos[i].h*0.5  + para2pos[i].y)) + 'px'
        console.log(mouse.x)
        console.log(containerPos.h)
        console.log(para2[i].mul)
    }



    // para1[0].style.left = mouse.x + 'px'

    // console.log(mouse.x, ", ", mouse.y)
}