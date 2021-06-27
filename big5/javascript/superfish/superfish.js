
/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb', //初始預設作用層標記
		menuClass   : 'sf-js-enabled', //第1層ul標記
		anchorClass : 'sf-with-ul', //li之a的標記
		arrowClass  : 'sf-sub-indicator', //箭頭標記
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover', //當滑鼠滑過時的class
		pathClass	: 'overideThisToUse', //啟動的菜單項的class
		pathLevels	: 1, //菜單一開始顯示級數
		delay		: 800, //下拉功能表在滑鼠離開時自動隱藏時間。默認是800毫秒
		animation	: {opacity:'show'}, //動畫效果，參考Jquery的動畫jQuery's .animate()
		speed		: 'normal', //動畫速度， 參考Jquery的動畫jQuery's .animate()
		autoArrows	: false, //箭頭標記是否顯示
		dropShadows : false, //陰影效果，關閉用'false'
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, //初始化的回調函數
		onBeforeShow: function(){}, //子功能表隱藏時回調函數
		onShow		: function(){}, //子功能表隱藏時回調函數
		onHide		: function(){}  //子功能表隱藏時回調函數
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);


/*
1.Superfish樣式在IE 6支援懸停(hover屬性），增加的默認類為"sfHover"，你也可以改變類名。
2.滑鼠移動的延時功能。為了更方便解決滑鼠存在問題的朋友，默認延時為800毫秒，你也可以更改延時時間。
3.子功能表以動畫顯示。顯示是是淡入淡出效果。淡入淡出的效果（如速度）也是可以自己設定的。默認為正常（normal）
4.功能表和子功能表可設定為顯示或不顯示。
5.支持hoverIntent插件，Superfish自動查看是否含有hoverIntent插件，在有hoverIntent插件的情況下執行hoverIntent而忽視淡入淡出效果。
  如果基於某種原因在你使用superfish時不想使用hoverIntent，將disableHI設置 為" true"。
6.顯示是否含有子功能表，可透過功能表添加一張小圖片，你也可用通過改變"autoArrows"值來設定是否自動彈出子功能表。
7.陰影效果，僅支援最新流覽器。在IE6下沒什麼效果。
8.可突出顯示當前所在頁
*/
