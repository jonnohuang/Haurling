include("javascript/mobile.js"); // 手機設定
include("javascript/highlightNav.js"); //選單亮高
include("javascript/scrollUp/jquery.scrollUp.js"); //置頂
include("javascript/jquery.easing.1.3.js"); //動畫效果 Easing library
include("javascript/superfish/hoverIntent.js"); //superfish電腦版選單
include("javascript/superfish/superfish.js"); //superfish電腦版選單
include("javascript/rd-navbar/rd-navbar.js"); //rd-navbar手機版選單
include("javascript/bxslider/jquery.bxslider.min.js"); //首頁banner動畫特效
include("javascript/wow/wow.min.js"); //動畫效果

function include(url) {
    document.write('<script src="' + url + '"></script>');
}