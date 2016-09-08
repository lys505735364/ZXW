var mySwiper = new Swiper('.BBY', {
	//direction: 'vertical',
	//loop: true,
	pagination: '.swiper-pagination',
	onInit: function(swiper) {
		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper) {
		swiperAnimate(swiper);
	}
});

var timer = setInterval(function(){
	$(".tips").css({display:"none"});
	clearInterval(timer);
},3000)

$(".P4but").click(function(){
	location.href="index.html"
})
