let grandparent=document.getElementById('one')
let parent=document.getElementById('two')
let child=document.getElementById('three')
grandparent.addEventListener('click',function(e){
          
console.log("Grandparent Clicked")
})
parent.addEventListener('click',function(e){

console.log("Parent Clicked")
})
child.addEventListener('click',function(e){
       
console.log("Child Clicked")
})