
if (!(isMobile)) {

	var $el = $('.description'); 
	var $ns = $('.newsite');

	$el.find("a").click(function(e){
			
			var href= $(this).attr("href");
			$('html,body').stop().animate({
				scrollTop: ($(href).offset().top - $el.height())
			}, 1000);
			e.preventDefault();
	});
	if (document.location.hash!=='') {
		$('html,body').stop().animate({
			scrollTop: $(document.location.hash).offset().top - $el.height(),
		}, 1);
	}

		var newElm = $el.clone(true).hide().appendTo($(".vevent")).css({"width": "100%",   "z-index": "1000", 'position': 'fixed','top': '0'});

		$(window).scroll(function(e){ 
		  var minH = $el.offset().top - $ns.height();
		  if (($(this).scrollTop() > minH) && ($(this).scrollTop() < $el.offset().top)) {
			var barPos = minH - $(this).scrollTop() + 'px';
			$ns.css({'top': barPos});
		  } else {
			$ns.css({'top': 0});
		  }
		  if ($(this).scrollTop() > $el.offset().top){ 
			newElm.show();
		  } else{
			newElm.hide();
		  }
	});
	
	$("a[href='http://fromthefront.wufoo.com/forms/contact-us/']").click(function(e){
		e.preventDefault();

		var layer = $('<div id="guestlist" class="guestlist-lightbox contact-form"><div class="guestlist-wrapper"><div class="guestlist-container"><div class="guestlist-header"><a class="guestlist-close" href="#"></a><span id="guestlist-title">Contact Form</span></div><div class="guestlist-body"><iframe allowTransparency="true" frameborder="0" scrolling="no" style="width:70%;margin:-6% 0 0  15%;border:none;"  src="https://fromthefront.wufoo.com/embed/z7x3k7/"><a href="http://fromthefront.wufoo.com/forms/z7x3k7/" title="Contact Us" rel="nofollow">Fill out my Wufoo form!</a></iframe></div></div>');
		
		
		
		layer.appendTo($(document.body));
		var iframe = $(".contact-form .guestlist-container iframe");
		iframe.height($(".contact-form .guestlist-container").height()+"px");
		$(".contact-form .guestlist-close").click(function(e){e.preventDefault();$(".contact-form").remove()});
	});
		

		
	
} else {
	$("a[href='http://fromthefront.wufoo.com/forms/contact-us/']").attr("href", "mailto:marco@fromthefront.it");
	
	$(".guestlist-event-60429").click(function(){$('#guestlist').hide();document.location.href="http://guestlistapp.com/events/60429"})
}
