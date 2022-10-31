$(document).ready(function(){
    /* 브라우저를 스크롤하면 header에 fixed class 추가
       $(window).scrollTop() 브라우저 스크롤값
       $(window).scroll() 브라우저 스크롤될 때마다 실행
       
       1. 브라우저가 스크롤이 되면 header에 fixed class 추가
       2. 브라우저가 다시 상단에 올라가면 header에 fixed class 추가*/
    let scrolling
    // console.log(scrolling, '처음 로딩됐을 때')

    $(window).scroll(function(){
        scrollChk()
    })

    function scrollChk(){
        scrolling = $(window).scrollTop()
        // console.log(scrolling, '스크롤될 때마다')

        if(scrolling > 0){ // 스크롤 중
            $('.header').addClass('fixed')
        }else{ // 맨 위로 이동
            $('.header').removeClass('fixed')
        }
    }
})