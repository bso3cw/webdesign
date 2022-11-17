$(document).ready(function(){

    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

    navigation: true, /* 오른쪽에 각 페이지의 paging */
    navigationPosition: 'left', /* 위치 */
    navigationTooltips: ['1','<strong>Production/Investment</strong> 영화 제작/투자', '<strong>Film Distribution</strong> 국내/해외영화 배급', '<strong>Advertisement/Marketing</strong> 홍보/마케팅', '<strong>Overseas Theater Business</strong> 해외 영화관 사업'], /* 툴팁 */
    showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */

    autoScrolling:true, /* 한페이지씩 스크롤 */
    scrollHorizontally: true,

    verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */

    afterLoad: function(origin, destination, direction, trigger){
        if((destination.index == 1)||(destination.index == 2)||(destination.index == 3)||(destination.index == 4)){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
        if(destination.index == 0){
            $('#fp-nav').hide()
        }else{
            $('#fp-nav').show()
        }
    },

    responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */
});



});