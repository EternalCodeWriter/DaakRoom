menuData = document.querySelector("nav .dropdown-content")
var flag = 0;

document.querySelector("nav .menu").addEventListener("click", function(){
    if(flag == 0){
        menuData.style.opacity = 1,
        menuData.style.left = "-8rem",
        flag++
    }
    else{
        menuData.style.opacity = 0,
        menuData.style.left = "10rem",
        flag--
    }
})




const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true,
    // lerp: 0.05
});


var main = document.querySelector("main");
var cursor = document.querySelector(".cursor");
var video1 = document.querySelector(".daak video");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x: dets.clientX + "px",
        y: dets.clientY + "px",
        duration: 1,
        ease: "back.out",    
    })
})
scroll.on('scroll', function() {
    cursor.style.top = `${window.scrollY + scroll.scroll.instance.delta.y}px`;
    cursor.style.left = `${window.scrollX + scroll.scroll.instance.delta.x}px`;
});

video1.addEventListener("mouseenter",function(){
    if(!video1.paused){
        cursor.innerHTML = "Pause"
    }
    else{
        cursor.innerHTML = "Play"
    }
    gsap.to(cursor,{
        height: "90px",
        width:"90px"
    })
})

video1.addEventListener("mouseleave",function(){
    cursor.innerHTML = "",
    gsap.to(cursor,{
        height: "30px",
        width:"30px"
    })
})

video1.addEventListener("click",function(){
    if (video1.paused) {
        video1.play();
        cursor.innerHTML = "Pause"
    } else {
        video1.pause();
        cursor.innerHTML = "Play"
    }
    
})


var tl = gsap.timeline();

tl.to(".daak",{
    duration: 1,
    opacity: 1,
    scale: 1
})

document.addEventListener("DOMContentLoaded", function () {
    let previousBox = document.querySelector('.box-1'); // Set the initial box

    previousBox.style.width = '50%'; // Set initial active box to 50%

    const boxes = document.querySelectorAll('.box');
    const boxe = document.querySelector('.box1-in .image');
    const boxout = document.querySelector('.box box1-out');

    boxes.forEach((box) => {
        box.addEventListener('mouseenter', function () {
            if (previousBox && previousBox !== box) {
                previousBox.style.width = '15%'; // Reset the width of the previously active box
                // boxout.style.display='none';
            }
            box.style.width = '50%'; // Set the width of the hovered box to 40%
            previousBox = box; // Update the previously active box
        });

        box.addEventListener('mouseleave', function () {
            if (box !== previousBox) {
                box.style.width = '15%'; // Reset the width of the hovered box when the mouse leaves
                boxe.style.display= 'none';
                // boxout.style.display='none';

            }
        });
    });
});