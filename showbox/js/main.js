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
        
        if(destination.index == 0){
            $('#fp-nav').hide()
        }
    },
    onLeave: function(origin, destination, direction, trigger){
		
            console.log(destination.index)
            if((destination.index == 1)||(destination.index == 2)||(destination.index == 3)||(destination.index == 4)||(destination.index == 5)||(destination.index == 6)||(destination.index == 7)||(destination.index == 8)){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
                $('.header').addClass('fixed')
            }else{
                $('.header').removeClass('fixed')
            }
            if((destination.index == 0)||(destination.index == 5)||(destination.index == 6)||(destination.index == 7)||(destination.index == 8)){
                $('#fp-nav').hide()
            }else{
                $('#fp-nav').show()
            }

            //구역 2를 떠난 후
            // if(destination.index == 1 && direction =='down'){
            // 	alert("Going to section 3!");
            // }

            // else if(origin.index == 1 && direction == 'up'){
            // 	alert("Going to section 1!");
            // }
        },

        responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */
        
    });

    const swiper = new Swiper('.history .year', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
	spaceBetween: 80, /* li와 li사이 - 제일 작은 여백 */
	breakpoints: {
        320: {  
            slidesPerView: "auto",
			spaceBetween: 20, 
		},
		640: {  /* 640px 이상이 되면 적용 */
            slidesPerView: "auto",  
			spaceBetween: 40, 
		},
		1024: {  /* 1024px 이상이 되면 적용 */
            slidesPerView: "auto",
			spaceBetween: 40,
		},
        1440: { 
            slidesPerView: "auto",
			spaceBetween: 80,
		},
	},
	navigation: {
		nextEl: '.history .tit .arrow button.next',
		prevEl: '.history .tit .arrow button.prev',
	},
	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
	},
});



const swiper_sns = new Swiper(".sns .event", {
    slidesPerView: "auto",
    spaceBetween: 70,
    centeredSlides: true,
    loop: true, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        320: {  
            slidesPerView: "auto",
            spaceBetween: 39, 
        },
        640: {  
            slidesPerView: "auto",
            spaceBetween: 60, 
        },
        1024: {  
            slidesPerView: "auto",
            spaceBetween: 65, 
        },
        1440: {  
            slidesPerView: "auto",
            spaceBetween: 70, 
        },
    },
});



 


});