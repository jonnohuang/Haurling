//主選單
$(document).ready(function(){
    var str = location.href.toLowerCase().split("_");
    $("#nav_main li a").each(function() {
		var brokenstring = this.href.toLowerCase().split("_");
         if (str[0].indexOf(brokenstring[0]) > -1) {
                $("li.highlight").removeClass("highlight");
                     $(this).parent().addClass("highlight");
            }
    });
})

/* 如果主選單有下拉的設定方式
$(document).ready(function(){
    var str = location.href.toLowerCase().split("_");
    $("#nav_main li a[rel=nav]").each(function() {
		var brokenstring = this.href.toLowerCase().split("_");
         if (str[0].indexOf(brokenstring[0]) > -1) {
                $("li.highlight").removeClass("highlight");
                     $(this).parent().addClass("highlight");
            }
    });
})

---------------------------------------------example---------------------------------------------
<ul id="nav_main">
	<li><a href="Company_01.php" rel="nav"><span>Comapny</span></a>
		<ul>
			<li><a href="Company_01.php">Comapny</a></li>
			<li><a href="Company_02.php">Investor Relations</a></li> 
		</ul>
	</li>  
	<li><a href="Products_list.php" rel="nav"><span>AIT Products Overview</span></a>
		<ul>
			<li><a href="Products_01.php">H.264 Web/TV Camera</a></li>
			<li><a href="Products_02.php">Image Signal processor</a></li>
			<li><a href="Products_03.php">Consumer Electronic Product Line</a></li>  
			<li><a href="Products_04.php">Multimedia Processor</a></li> 
		</ul>
	</li>    
</ul>
*/

//次選單
$(document).ready(function(){
    var str = location.href.toLowerCase().split("_");
    $(".navsub_menu li a").each(function() {
         if (str[0].indexOf(brokenstring[0]) > -1) {
              $("li.active").removeClass("active");
                  $(this).parent().addClass("active");
            }
    });
})	