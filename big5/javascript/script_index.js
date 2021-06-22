include("big5/javascript/mobile.js"); // 手機設定
include("big5/javascript/highlightNav.js"); //選單亮高
include("big5/javascript/scrollUp/jquery.scrollUp.js"); //置頂
include("big5/javascript/jquery.easing.1.3.js"); //動畫效果 Easing library
include("big5/javascript/superfish/hoverIntent.js"); //superfish電腦版選單
include("big5/javascript/superfish/superfish.js"); //superfish電腦版選單
include("big5/javascript/rd-navbar/rd-navbar.js"); //rd-navbar手機版選單
include("big5/javascript/bxslider/jquery.bxslider.min.js"); //首頁banner動畫特效
include("big5/javascript/slick/slick.min.js"); //首頁小圖輸播
include("big5/javascript/wow/wow.min.js"); //動畫效果

function include(url) {
    document.write('<script src="' + url + '"></script>');
}