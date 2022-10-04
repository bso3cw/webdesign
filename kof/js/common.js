/* header, footer에 포함되는 jquery - 모든 페이지에 공통으로 적용되는 기능 */

$(document).ready(function(){
    // 로딩됐을 때 단 한 번
    let pcMo // pc일 때 pc, 모바일일 때는 mobile
    let winW
    pcChk()

    $(window).resize(function(){
        // 브라우저가 resize 될 때마다 실행
        pcChk() // 함수 실행
    }) // window.resize 종료

    function pcChk(){ // 함수 선언
        winW = $(window).width()
        if(winW>640){
            pcMo='pc'
        }else{
            pcMo='mobile'
        }
        // console.log(pcMo)
    }

    $('.header .gnb>ul>li').on('mouseenter focusin', function(){
        if(pcMo=='pc'){
            $('.header').addClass('memu_open')
        }
    })
    $('.header').on('mouseleave', function(){
        $('.header').removeClass('memu_open')
    })
    $('.header .gnb>ul>li:last-child>ul>li:last-child>a').on('mouseleave focusout', function(){
        $('.header').removeClass('memu_open')
    })

    let scrolling
    scrollChk()

    $(window).scroll(function(){
        scrollChk() // header 고정 함수
        topshow() // top 버튼 보이는 함수
    })

    function scrollChk(){ // 함수 선언
        scrolling=$(window).scrollTop()
        console.log(scrolling)
        if(scrolling>0){
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
    }

    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_mobile')
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_mobile')
    })

    $('.header .gnb>ul>li>a').on('click', function(e){
        if(pcMo=='mobile'){
            e.preventDefault();
            $(this).parents('li').toggleClass('sub_open')
        }
    })

    /* top 버튼을 누르면 상단으로 스크롤 */
    $('aside.top').on('click', function(){
        $('html, body').animate({
            scrollTop:0
        },500)
    })

    /* 스크롤을 어느 정도 내리면 aside가 나타나고, 다시 상단으로 올라가면 aside가 사라짐 */
    topshow()
    function topshow(){
        scrolling=$(window).scrollTop()
        console.log(scrolling)
        if(scrolling>500){
            $('aside.top').fadeIn()
        }else{
            $('aside.top').fadeOut()
        }
    }

}) // document.ready 종료