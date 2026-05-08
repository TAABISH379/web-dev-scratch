var elems = document.querySelector(".elem")

var elemimage = document.querySelector(".elem img")

elems.addEventListener("mousemove", function(dets){
    elemimage.style.left = dets.x+"px"
    elemimage.style.right= dets.y+"px"
})
elems.addEventListener("mouseenter", function(dets){
    elemimage.style.opacity = 1
})