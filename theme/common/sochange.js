/*
 *	soChange 1.6.1 - simple object change with jQuery
 *	made by bujichong 2011-10-10
 *	作者：不羁虫  2011-10-10
 * http://hi.baidu.com/bujichong/
 *E-mail:bujichong@163.com
 */
;(function(a){a.fn.extend({"soChange":function(b){b=a.extend({thumbObj:null,botPrev:null,botNext:null,changeType:'fade',thumbNowClass:'now',thumbOverEvent:true,slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300},b||{});var c=a(this);var d;var e=c.size();var f=0;var g;var h;var i;function j(){if(f!=g){if(b.thumbObj){a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)};if(b.slideTime<=0){c.eq(f).hide();c.eq(g).show()}else if(b.changeType=='fade'){c.eq(f).fadeOut(b.slideTime);c.eq(g).fadeIn(b.slideTime)}else{c.eq(f).slideUp(b.slideTime);c.eq(g).slideDown(b.slideTime)};f=g;}};function k(){g=(f+1)%e;j()};c.hide().eq(0).show();if(b.thumbObj){d=a(b.thumbObj);d.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);d.click(function(){g=d.index(a(this));j();if(b.clickFalse){return false}});if(b.thumbOverEvent){d.hover(function(){g=d.index(a(this));i=setTimeout(j,b.delayTime)},function(){clearTimeout(i)})}};if(b.botNext){a(b.botNext).click(function(){if(c.queue().length<1){k()};return false})};if(b.botPrev){a(b.botPrev).click(function(){if(c.queue().length<1){g=(f+e-1)%e;j()};return false})};if(b.autoChange){h=setInterval(k,b.changeTime);if(b.overStop){c.hover(function(){clearInterval(h);},function(){h=setInterval(k,b.changeTime)})}}}})})(jQuery);

$(function(){
	
	if( $(".b3 .u1 li").length>0 )
	{
		$(".b3 .u1 li").soChange({changeTime:5000,thumbOverEvent:false,botPrev:".botPrev",botNext:".botNext", slideTime:500});
	}
	
	if( $(".hsd .u1 li").length>0 )
	{
		$(".hsd .u1 li").soChange({thumbObj:'.hsd .u2 li',changeTime:5000,thumbOverEvent:false, thumbNowClass:'hover', slideTime:500});
	}
});
