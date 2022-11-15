$(document).ready(function(){

    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

    navigation: true, /* 오른쪽에 각 페이지의 paging */
    navigationPosition: 'left', /* 위치 */
    navigationTooltips: ['1', '2', '3', '4'], /* 툴팁 */
    showActiveTooltip: false, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */

    autoScrolling:true, /* 한페이지씩 스크롤 */
    scrollHorizontally: true,

    verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */

    afterLoad: function(origin, destination, direction, trigger){
        if(destination.index == 2){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
            console.log('3번째 슬라이드가 로딩 되었을때');
        }
    },

    responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */
});



});