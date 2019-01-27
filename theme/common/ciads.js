
/*
	*名称: caids.js
	*日期: 2015-03-10
	*功能: 影楼/企业网站浏览器动效程式
	*作者: 武汉奕创互动广告有限公司前端架构团队
	*版权: 武汉奕创互动广告有限公司(http://www.ciads.net http://www.ciads.com)保留
 */
$(function(){
	var userAgentInfo = navigator.userAgent;
    if (userAgentInfo.indexOf("Android") > 0 || userAgentInfo.indexOf("iPhone") > 0 || userAgentInfo.indexOf("SymbianOS") > 0 || userAgentInfo.indexOf("Windows Phone") > 0 || userAgentInfo.indexOf("iPod") > 0) {
		if( $('body.ciads_phone').length<=0 )
		{
			$("body,html").css({"width":"1250px","position":"relative"});
			$("body").wrapInner('<div style="width:1250px; margin:0 auto; position:relative;" />');
		}
    }
	
	fd();
	
	$(window).resize(function(){
		fd();
	});
	
	$(window).scroll(function(){
		if( $(document).scrollTop()>300 )
		{
			$(".ciadsff2").addClass("ciadsff2o5");
		}
		else
		{
			$(".ciadsff2").removeClass("ciadsff2o5");
		}
	});
	
	$('.gotop').click(function(){$('html, body').animate({scrollTop:0}, 1000);});
	$('.ciads_qq').click(function(){$('.qq_window').fadeIn();})
	$('.qq_window h2.png a.close').click(function(){$('.qq_window').fadeOut();})
	$('.qq_window').css({"top":($(window).height() - $('.qq_window').height())/2});
	$(".h_d_07 .scroll").scrollable({size:3,items:".h_d_07 .scroll ul",loop:true}).autoscroll({autoplay:true,interval:2000,steps:1}).navigator({navi:".num",naviItem:"li",activeClass:"focus"});
//$(".banner .scroll").scrollable({size:1,items:".banner .scroll ul",loop:true}).autoscroll({autoplay:true,interval:7000,steps:1});
	$(".list_01 .scroll").scrollable({size:2,items:".list_01 .scroll ul",loop:true}).autoscroll({autoplay:true,interval:2000,steps:1});
	//them:
	$(".list_03 .scroll").scrollable({size:3,items:".list_03 .scroll ul",loop:true}).autoscroll({autoplay:true,interval:2000,steps:1});
	$(".h_d_03 .d3 div.scroll2").scrollable({size:9,items:".h_d_03 .d3 div.scroll2 ul",loop:true,vertical:true}).autoscroll({autoplay:true,interval:1000,steps:1});
//	$(".n_list06 .scroll").scrollable({size:1,items:".n_list06 .scroll ul",loop:true});
	$(".banner").hover(function(){$(this).find('a.prev,a.next').show();},function(){$(this).find('a.prev,a.next').hide();})
	$('.h_d_03 .d1 dl').click(function(){
		if(!$(this).hasClass('hover')){
		$('.h_d_03 .d1 dl').removeClass('hover');
		$(this).addClass('hover');
		$('.h_d_03 .d1 dl dd').slideUp();
		$(this).find('dd').slideDown();
		}
		
	});
	$('.Fnhover li').hover(function(){$(this).addClass('hover')},function(){$(this).removeClass('hover')})
	$('.n_d_01  ul li').hover(function(){
		$(this).width(210).find('span').show();
	},function(){
		$(this).width(110).stop().find('span').hide();
		})

	$('.h_d_03 .d3 div.scroll2 ul li').click(function(){
		$('.h_d_03 .d3 .n1').html($(this).index() +1 )
	})
	$('.h_list10 .wrap a.btn').click(function(){
		$('.h_list10').slideUp()
	});
	$('.list_02 ul.overview').width(($('.list_02 ul li').index() + 1) * 190)
	var a = 1
	$('.n_list06 li div.scrollb').each(function(){
		$(this).attr('id','scrollbar' + a);
		a ++
	})
});
$(this).scroll(function() {
		var bodyTop = 0;   
		if (typeof window.pageYOffset != 'undefined') {   
			bodyTop = window.pageYOffset;   
		}
		 else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat')
		 {   
			bodyTop = document.documentElement.scrollTop;   
		}   
		else if (typeof document.body != 'undefined') {   
			bodyTop = document.body.scrollTop;   
		}   
		setTimeout(function(){
			if(bodyTop>650){
				$("#qqLeft,#qqRight").animate({top:100 + bodyTop},50)
			}else{
				$("#qqLeft,#qqRight").animate({top:750},10)
			}
			
		},100)
	   
	}); 
	
	function fd()
	{
		if( parseInt($(window).width()) <1400 )
		{
			$("#qqLeft,#qqRight").hide();
			$(".gbgs").show();
		}
		else
		{
			$("#qqLeft,#qqRight").show();
			$(".gbgs").hide();
		}
	}