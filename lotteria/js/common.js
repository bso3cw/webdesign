$(document).ready(function(){


    $('aside.top').on('click', function(){
        $('html, body').animate({
            scrollTop:0
        },500)
    })


    $(window).scroll(function(){
        topshow()
    })

    topshow()
    function topshow(){
        scrolling = $(window).scrollTop()
        if(scrolling > 600){
            $('aside.top').fadeIn()
        }else{
            $('aside.top').fadeOut()
        }
    }

})