
  $('.carousel').carousel({
    interval: 4000
  });

  // 产品下拉菜单
  $(".navbar-nav>li:eq(1)").mouseenter(function(){
  	$(".chanpin-menu").slideDown();
  })
  $(".navbar-nav>li:eq(1)").mouseleave(function(){
  	$(".chanpin-menu").delay("slow").slideUp(300);
  })

  // 鼠标滚轮事件
$(window).scroll(function(){
	// console.log($(window).scrollTop())
	if($(window).scrollTop()>=700){
		$("#toTop").fadeIn(100)
	}else if($(window).scrollTop()<700){
		$("#toTop").fadeOut(800)
	}

	if($(window).scrollTop()>=75){
		$("nav").slideDown(2000).css({
			position:"fixed",
			top:0,
			left:0,
			width:"100%"
		});
		$("main").css("marginTop",75);
	}else if($(window).scrollTop()<75){
		$("nav").css({position:"relative"});
		$("main").css("marginTop",0);
	}
})

// 返回顶部
$("#toTop").click(function(){
	$("html,body").animate({"scrollTop":0})
})


// 咖啡讲堂滑动
$(".arr-right").click(function(){
	$(".coffee-know").css({"margin-left":"3%"});
	$(".arr-left").fadeIn();
	$(".arr-right").fadeOut();
})
$(".arr-left").click(function(){
	$(".coffee-know").css({"margin-left":"17%"});
	$(".arr-right").fadeIn();
	$(".arr-left").fadeOut();
})

//菜单展开
$(".menu-down").click(function(){
	$(".navs").hide();
	$(".menues").show();
})
$(".menu-close").click(function(){
	$(".navs").show();
	$(".menues").hide();
})