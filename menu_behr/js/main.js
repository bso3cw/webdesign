$(document).ready(function(){
/* html 요소가 모두 다 로딩된 이후에 jquery 실행
   jquery에서 html 요소를 호출해서 이벤트를 주기 때문 */

    // 맨 처음에 로딩됐을 때 한 번만 실행
    let winW;
    let pcMobile;
    deviceChk() // deviceChk라는 이름을 가진 함수 호출

    // 브라우저가 resize될 때마다 실행
    $(window).resize(function(){
        deviceChk()
    })
    

    function deviceChk(){
        winW = $(window).width()
        if(winW > 640){ // 브라우저의 넓이가 640px보다 크면
            pcMobile = 'pc'
            console.log(pcMobile)
        }else{ // 브라우저의 넓이가 640px 이하면
            pcMobile = 'moblie'
            console.log(pcMobile)
        } // if
    } // function

    /* 메뉴에 마우스를 오버하면 header에 menu_open class 추가
      (단, pc에서만 - window.width가 640px 초과면 pc)
        이벤트핸들러는 pc와 모바일 상관없이 준다.
        단, 실행을 pc일 때만 실행하게 한다.
        on은 이벤트핸들러로 단 한 번만 주면, mouseenter 이벤트가 발생할 때마다 실행됨
        pc일 때만 on을 주려고 하면 안 된다.
      
      메뉴: .header .gnb > ul > li */
    
    $('.header .gnb > ul > li').on('mouseenter focusin', function(){
        if(pcMobile == 'pc'){ // pc일 때만 실행 (같다는 의미는 ==)
            $('.header').addClass('menu_open')
        } // if
    }) // mouseenter

    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_open')
    })

    $('.header .gnb > ul > li:last-child > ul > li:last-child > a').on('focusout', function(){
        $('.header').removeClass('menu_open')
    })

    /* .header .gnb .gnb_open을 클릭하면 header에 menu_mobile이라는 class 추가 (메뉴열기)
       .header .gnb .gnb_close를 클릭하면 header에서 menu_mobile이라는 class 삭제 (메뉴닫기)
       단, 모바일일 때만 작동 (gnb_open이 pc에서 숨겨져 있는 버튼)
       header에 menu_mobile이라는 스타일이 적용된 상태에서 pc로 전환됐을 때도 고려해야 함. */
    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_mobile')
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_mobile')
    })

    /* 1차 메뉴 li를 클릭했을 때 (.header .gnb >ul >li)
       클릭한 li에만 sub_open class 추가 (메뉴열기)
       만약에 현재 열려있는 상태면 닫기 (sub_open 삭제)
              현재 닫혀있는 상태라면 열기 (sub_open 추가)
       서브메뉴는 직접 닫기 전에는 모두 열린 상태를 유지 (여러 메뉴가 동시에 열릴 수 있음)
       pc에서는 1차 메뉴를 클릭하면 첫 번째 하위 메뉴로 이동 (href 값으로 이동)
       그러나 모바일에서는 하위 메뉴 페이지로 이동하면 안 됨, 하위 메뉴를 열어야 함. */
    $('.header .gnb > ul > li').on('click', function(e){
        if(pcMobile == 'moblie'){ // 모바일에서만 실행
            e.preventDefault();
            $(this).toggleClass('sub_open')
            /* 4개의 1차 메뉴 li중에서 클릭한 li를 this라고 함 */
        }
        /* 해당 요소를 클릭했을 때 기본적으로 발생하는 이벤트를 취소 - href로 페이지가 이동하는 걸 취소 시킴 */
    })

}) // document.ready