const photos=document.querySelectorAll('.photo')
document.querySelector("body")
photos.forEach(function(photo){
 photo.addEventListener('click',function(event){
    if(photo.id==='mountain'){
        document.body.style.backgroundImage="url('1.jpeg')"
    }
    if(photo.id==='forest'){
        document.body.style.backgroundImage="url('2.jpeg')"
    }
    if(photo.id==='beach'){
        document.body.style.backgroundImage="url('3.jpeg')"
    }

 })

})