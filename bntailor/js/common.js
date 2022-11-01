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

    /* 모바일 메뉴 열기
       .header .gnb .gnb_open을 클릭했을 때
       1. .header .gnb한테 mobile_open class를 추가하거나 삭제
          (닫는 버튼과 여튼 버튼 두 가지 역할을 모두 함)
       2. .header .gnb .gnb_open strong에 쓰여 있는 글자를 메뉴 열기, 메뉴 닫기로 변경해줘야 함

       메뉴가 열려 있는 상태인지 메뉴가 닫혀 있는 상태인지 구분
       닫혀 있으면 mobile_open class 추가, "메뉴 닫기"로 문구 변경
       열려 있으면 mobile_open class 삭제, "메뉴 열기"로 문구 변경

       mobile_open class가 없으면 닫혀 있는 상태 / 있으면 열려 있는 상태 */

    let gnbStu // true (열린 상태), false (닫힌 상태)
    $('.header .gnb .gnb_open').on('click', function(){
        gnbStu = $('.header .gnb').hasClass('mobile_open')
        if(gnbStu == true){ // 열린 상태 - 닫는 기능
            // console.log('true 열린 상태')
            $('.header .gnb').removeClass('mobile_open')
            $('.header .gnb .gnb_open strong').text('메뉴 열기')
        }else{ // 닫힌 상태 - 여는 기능
            // console.log('false 닫힌 상태')
            $('.header .gnb').addClass('mobile_open')
            $('.header .gnb .gnb_open strong').text('메뉴 닫기')
        }
    })

})