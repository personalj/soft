$(document).ready(function() {
	var slider = $(".app-slider-wrapper");
	
	 slider.owlCarousel({
	  items : 5,

	  lazyLoad : true,

	  navigation : true,

	  loop : true,

	  pagination: true,

	  paginationNumbers: true,
	  
	  responsive: true,
	   afterAction: function(el){
	     //remove class active
	     this
	     .$owlItems
	     .removeClass('active')
	    
	     //add class active
	     this
	     .$owlItems //owl internal $ object containing items
	     .eq(this.currentItem + 2)
	     .addClass('active')
	    
	   }
	   
	  });
	 $(window).scroll(function() {
	 	var wscroll = $(this).scrollTop();
	 	if(wscroll> 20) {
	 		$('.header').addClass('active');
	 	}else {
	 		$('.header').removeClass('active');
	 	}
	 });
	 $('[data-opener]').click(function() {
	 	$this = $(this);
		 if($this.is('.active')) {
		 	$this.removeClass('active');
		 	$('[data-target="'+$this.data('opener')+'"]').removeClass('active');
		 }else{
	 		$this.addClass('active');
	 		$('[data-target="'+$this.data('opener')+'"]').addClass('active');
	 	}
	});
	 
});
$(document).ready(function() {
	
	$(".testimonials-slider").owlCarousel({

	    items : 1,

	    itemsDesktop : [1199, 1],

	    itemsDesktopSmall : [980, 1],

	    itemsTablet: [768, 1],

	    itemsTabletSmall: true,

	    itemsMobile : [479, 1],

	    paginationNumbers: true,

	    transitionStyle: "backSlide",

	});
	$('textarea').each(function () {
	  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
	}).on('input', function () {
	  this.style.height = 'auto';
	  this.style.height = (this.scrollHeight) + 'px';
	});
	$('.header-menu a[href^="#"]').click( function(){
	    var scroll_el = $(this).attr('href');
	    if ($(scroll_el).length != 0) {
	        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	    }
	    return false;
	});
	$('.header-menu a').click(function(){
		var $this = $(this);
		var item = $this.closest('.header-menu li');
		item.addClass('active');
		item.siblings().removeClass('active');
	});
	var sections = $('section'),
	   nav = $('.header-menu'),
	   nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();

	  sections.each(function() {
	    var top = $(this).offset().top - nav_height,
	        bottom = top + $(this).outerHeight();

	    if (cur_pos >= top && cur_pos <= bottom) {
	      nav.find('li').removeClass('active');
	      sections.removeClass('active');

	      $(this).addClass('active');
	      nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
	    }
	  });
	});
});