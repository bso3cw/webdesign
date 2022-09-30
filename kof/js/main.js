$(document).ready(function(){

    /* 공지사항 보도자료 탭 교체
       .notice ul li를 클릭하면 해당 탭이 보여야 함.
       보이는 탭의 li에만 active class가 추가되어야 함.
       
       클릭 대상: .notice ul li
       실행: 클릭한 li에 active class 추가 = $(this)
       --> 내가 클릭하지 않은 다른 li에 active class를 삭제해야 함
           모든 li의 active class를 지우고, 내가 클릭한 li에만 active를 다시 줌 */

    $('.notice ul li').on('click',function(){
        $('.notice ul li').removeClass('active')
        $(this).addClass('active')
    })
})