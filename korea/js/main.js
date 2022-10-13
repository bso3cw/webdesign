$(document).ready(function(){
    let idx = 1
    let obj_left = 0

    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        
        // console.log(idx)
        obj_left = -(idx-1)*1200
        $('.popup ul').animate({
            left: obj_left
        }, 500)
    }, 3000)
})