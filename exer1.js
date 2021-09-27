window.addEventListener("scroll", onScroll)

var container = document.getElementById('container')
var sections = document.getElementsByClassName('section')
var item = document.getElementById('item-holder')

window.scrollTo(0, 0)

function onScroll(evt){
    // console.log("window scrollY : ", window.scrollY)
    // console.log("window heightY : ", container.scrollHeight)
    // console.log("window scroll% : ", window.scrollY / (container.scrollHeight - window.innerHeight) * 100)

    // console.log("section 2 offsettop", sections[1].offsetTop)

    document.getElementById('bar').style.width = (window.scrollY / (container.scrollHeight - window.innerHeight) * 100) + '%'

    // if(window.scrollY >= (sections[1].offsetTop * 0.5)){
    //     item.style.display = "block"
    // } else item.style.display = "none"

    var itemList = document.querySelectorAll('.item');

    // for(let i = 0; i < itemList.length; i += 1){
    //     if(window.scrollY >= itemList[i].offsetTop - 600){
    //         itemList[i].classList.add('slideIn');
    //         itemList[i].classList.remove('slideOut');
    //     } else { 
    //         itemList[i].classList.remove('slideIn')
    //         itemList[i].classList.add('slideOut');
    //     }
    // }

    itemList.forEach((item, i, arr) =>  {
        if(window.scrollY >= arr[i].offsetTop - 600){
            arr[i].classList.add('slideIn');
            arr[i].classList.remove('slideOut');
        } else { 
            arr[i].classList.remove('slideIn')
            arr[i].classList.add('slideOut');
        }
    });
}