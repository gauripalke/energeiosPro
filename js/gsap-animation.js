gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});
/*----  Functions  ----*/

function getpercentage(x, y, elm) { 
    elm.find('.energe-fid-inner').html(y + '/' + x);
    var cal = Math.round((y * 100) / x);
    return cal;
}

function energe_title_animation() {

	ScrollTrigger.matchMedia({
		"(min-width: 1025px)": function() {

		var energe_var = jQuery('.energe-heading, .energe-heading-subheading');
		if (!energe_var.length) {
			return;
		}
		const quotes = document.querySelectorAll(".energe-heading-subheading .energe-title, .energe-heading .energe-title");

			quotes.forEach(quote => {

				//Reset if needed
				if (quote.animation) {
					quote.animation.progress(1).kill();
					quote.split.revert();
				}

				var getclass = quote.closest('.energe-heading-subheading, .energe-heading').className;
				var animation = getclass.split('animation-');
				if (animation[1] == "style4") return

				quote.split = new SplitText(quote, {
					type: "lines,words,chars",
					linesClass: "split-line"
				});
				gsap.set(quote, { perspective: 400 });

				if (animation[1] == "style1") {
					gsap.set(quote.split.chars, {
						opacity: 0,
						y: "90%",
						rotateX: "-40deg"
					});
				}
				if (animation[1] == "style2") {
					gsap.set(quote.split.chars, {
						opacity: 0,
						x: "50"
					});
				}
				if (animation[1] == "style3") {
					gsap.set(quote.split.chars, {
						opacity: 0,
					});
				}
				quote.animation = gsap.to(quote.split.chars, {
					scrollTrigger: {
						trigger: quote,
						start: "top 90%",
					},
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 1,
					ease: Back.easeOut,
					stagger: .02
				});
			});
		},
	});
}

function energe_img_animation() {
	const boxes = gsap.utils.toArray('.energe-animation-style1,.energe-animation-style2,.energe-animation-style3,.energe-animation-style4,.energe-animation-style5,.energe-animation-style6,.energe-animation-style7');
	boxes.forEach(img => {
		gsap.to(img, {
			scrollTrigger: {
				trigger: img,
				start: "top 70%",
				end: "bottom bottom",
				toggleClass: "active",
				once: true,
			}
		});
	});
}

function energe_extend_section() {
	const energe_elm = gsap.utils.toArray('.energe-extend-animation');
	if (energe_elm.length == 0) return	
	ScrollTrigger.matchMedia({
		"(min-width: 1201px)": function() {
			energe_elm.forEach(section => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: section,
						start: "top 50%",
						end: "+=400px",
						scrub: 1
					},
					defaults: { ease: "none" }
				});
				tl.fromTo(section, { clipPath: 'inset(0% 5% 0% 5% round 30px)' }, { clipPath: 'inset(0% 0% 0% 0% round 30px)', duration: 1.5 })	
			});			 
		},
		"(max-width:1200px)": function() {
			ScrollTrigger.getAll().forEach(section => section.kill(true));
		}
	});
}

var energe_thia_sticky = function() {	
	jQuery('.energe-sticky-sidebar').theiaStickySidebar({
		additionalMarginTop: 100
	});
	jQuery('.energe-sticky-column').theiaStickySidebar({
		additionalMarginTop: 120
	});
}

function energe_tween_effect() {
	const energe_tween = gsap.utils.toArray('.energe-tween-effect');
	if (energe_tween.length == 0) return
	ScrollTrigger.matchMedia({
		"(min-width: 1025px)": function() {
			energe_tween.forEach((box, i) => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: box,
						start: "top 90%",
						end: "bottom 70%",
						scrub: 1
					},
					defaults: { ease: "none" }
				});
				let xpos_val = box.getAttribute('data-x-start');
				let xpose_val = box.getAttribute('data-x-end');
				let ypos_val = box.getAttribute('data-y-start');
				let ypose_val = box.getAttribute('data-y-end');
				let scale_x_val = box.getAttribute('data-scale-x-start');
				let scale_xe_val = box.getAttribute('data-scale-x-end');
				let skew_x_val = box.getAttribute('data-skew-x-start');
				let skew_xe_val = box.getAttribute('data-skew-x-end');
				let skew_y_val = box.getAttribute('data-skew-y-start');
				let skew_ey_val = box.getAttribute('data-skew-y-end');
				let rotation_x_val = box.getAttribute('data-rotate-x-start');
				let rotation_xe_val = box.getAttribute('data-rotate-x-end');
				gsap.set(box, { xPercent: xpos_val, yPercent: ypos_val, scale: scale_x_val, skewX: skew_x_val, skewY: skew_y_val, rotation: rotation_x_val });
				tl.to(box, { xPercent: xpose_val, yPercent: ypose_val, scale: scale_xe_val, skewX: skew_xe_val, skewY: skew_ey_val, rotation: rotation_xe_val })
			});
		},
		"(max-width:1024px)": function() {
			ScrollTrigger.getAll().forEach(section => section.kill(true));
		}
	});
}

function energe_testimonial_review() {
	jQuery(".energe-element-testimonial-style-3").each(function() {
		if (typeof Swiper !== 'undefined') {
			var energe_blockquote = new Swiper('.energe-gallery-top', {
				spaceBetween: 0,
				loop:true,
				loopedSlides: 5, //looped slides should be the same
				centeredSlides: true,
				grabCursor: true,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				},
			});
			var energe_thumb = new Swiper('.energe-gallery-thumbs', {
				spaceBetween: 0,
				loop: true,
				slidesPerView: 5,
				loopedSlides: 5, //looped slides should be the same
				slideToClickedSlide: true,
				centeredSlides: true,
				grabCursor: true,
			});
			energe_blockquote.controller.control = energe_thumb;
			energe_thumb.controller.control = energe_blockquote;
		}
	});
}

function energe_staticbox_hover() {
	var energe_var = jQuery('.energe-element-static-box-style-1');
	if (!energe_var.length) {
		return;
	}
	energe_var.each(function() {
		var energe_Class = ' .swiper-static-slide-nav li, .energe-hover-inner li, .energe-static-box-style-1';
		jQuery(this)
			.find(energe_Class).first()
			.addClass('energe-active');
		jQuery(this)
			.find(energe_Class)
			.on('mouseover', function() {
				jQuery(this).addClass('energe-active').siblings().removeClass('energe-active');
			});
	});
}

function energe_team_move() {
	const energe_elm = gsap.utils.toArray('.energe-team-style-2:nth-child(even),.energe-team-style-2:nth-child(odd)');
	if (energe_elm.length == 0) return
	ScrollTrigger.matchMedia({
		"(min-width: 1025px)": function() {
			gsap.set(".energe-team-style-2:nth-child(even)", { yPercent: 60, })
			gsap.set(".energe-team-style-2:nth-child(odd)", { yPercent: -60, })
			gsap.to(".energe-team-style-2:nth-child(even)", {
				yPercent: -50,
				scrollTrigger: {
					scrub: true,
					start: () => "top top", 
					end:() =>  "bottom top",
					scrub:1
				}
			});
			gsap.to(".energe-team-style-2:nth-child(odd)", {
				yPercent: 50,
				scrollTrigger: {
					scrub: true,
					start:() =>  "top top",
					end: () => "bottom top",
					scrub:1
				}
			});
		},
		"(max-width:1024px)": function() {
			ScrollTrigger.getAll().forEach(pin => pin.kill(true));
		}
	});
}

// function energe_sticky_special() {
// 	if (jQuery('.energe-sticky-col2-special').hasClass('.elementor-element-edit-mode')) {
// 		return;
// 	}
// 	ScrollTrigger.matchMedia({
// 		"(min-width: 1025px)": function() { 
// 			let energe_sticky_2 = jQuery(".energe-sticky-col2-special");
// 			let section = jQuery('.energe-sticky-special'); 
// 			let section_height = energe_sticky_2.height();
// 			const tweenOne = gsap.to(energe_sticky_2, {
// 				y: - (section_height - 700),
// 				scrollTrigger: {
// 				  trigger: section,
// 				  pin: section,
// 				  scrub: true,
// 				  start: "top top+=140px",
// 				  end: () => '+=' + (section_height - 700),
// 				}
// 			}); 
// 		},
// 		"(max-width:1024px)": function() {
// 			ScrollTrigger.getAll().forEach(section => section.kill(true));
// 		}
// 	}); 
// }

ScrollTrigger.matchMedia({
    "(max-width: 1200px)": function() {
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
});


// on ready
jQuery(document).ready(function() {
	energe_title_animation();
	energe_extend_section();
	energe_staticbox_hover();
	energe_thia_sticky();
	energe_testimonial_review();
});

// on resize
jQuery(window).resize(function() {
	energe_title_animation();
	energe_img_animation();
	setTimeout(function() { energe_thia_sticky(); }, 500);
});

// on load
jQuery(window).on('load', function(){
	energe_img_animation();
	energe_tween_effect();
	energe_team_move();
	// energe_sticky_special();
	
	
	jQuery('[data-magnetic]').each(function() { new Magnetic(this); });
	gsap.delayedCall(1, () =>
		ScrollTrigger.getAll().forEach((t) => {
			t.refresh();
		})
	);	
	
	setTimeout(cleaning, 500);
	function cleaning(){
		ScrollTrigger.refresh(); 
	}
});