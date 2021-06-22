function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

/* 下拉選單select設定
========================================================*/
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}	


/* bxslider設定
========================================================*/
;
(function ($) {
	$(document).ready(function() {
		$('.bxslider1').bxSlider({
			mode: 'fade',
			captions: true,
			auto: true,
			pause: 6000,
			speed: 2000,
			pager: false,
			controls: true
		});
		$('.bxslider2').bxSlider({
			mode: 'fade',
			captions: true,
			auto: true,
			pause: 6000,
			speed: 2000,
			pager: false,
			controls: true
		});
	});
})(jQuery);



/* 置頂設定
========================================================*/

$(function(){
  $.scrollUp();
});


/* 首頁小圖輸播
========================================================*/

$('.responsive').slick({
  arrows: true,
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1599,
      settings: {
  		arrows: false,
      }
    },
    {
      breakpoint: 1200,
      settings: {
  		arrows: false, 
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
  		arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



/* EqualHeights 資料等高
========================================================
include("big5/javascript/jquery.equalheight.min.js");
;
(function ($) {
	$(document).ready(function () {
		$('.word-list .col-sm-6').equalHeight();
	});
})(jQuery);
*/


