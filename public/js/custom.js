$(window).scroll(function(){$(window).scrollTop()>600?$(".navbar-default").fadeIn(300):$(".navbar-default").fadeOut(300),$(window).width()>767&&($(this).scrollTop()>600?$(".scroll-up").fadeIn(300):$(".scroll-up").fadeOut(300))}),$(document).ready(function(){$("a.scroll[href^='#']").on("click",function(e){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(this.hash).offset().top},1e3,function(){window.location.hash=t})}),$("#skills-toggle").click(function(){$("#skills").slideToggle(500),$(".chart").easyPieChart({barColor:"#1ABC9C",trackColor:"#2F4254",scaleColor:!1,lineCap:"butt",lineWidth:12,size:110,animate:2e3})}),$("#overlay-hide").click(function(){$("#reference .reference-overlay").animate({opacity:0},1e3),$("#reference-text").animate({opacity:0},1e3)}),$(".overlay-wrapper").mouseenter(function(){$(this).find(".overlay a:first-child").addClass("animated slideInLeft"),$(this).find(".overlay a:last-child").addClass("animated slideInRight")}),$(".overlay-wrapper").mouseleave(function(){$(this).find(".overlay a:first-child").removeClass("animated slideInLeft"),$(this).find(".overlay a:last-child").removeClass("animated slideInRight")}),$(".carousel").mouseenter(function(){$(".carousel-control").fadeIn(300)}),$(".carousel").mouseleave(function(){$(".carousel-control").fadeOut(300)}),$("#separator").waypoint(function(){$("#separator .number").countTo()},{offset:"85%"}),$(window).width()>767&&($(".service").mouseenter(function(e){$(this).find("img").animate({paddingBottom:"15px"},500)}),$(".service").mouseleave(function(e){$(this).find("img").stop().animate({paddingBottom:"0px"},500)})),$(window).width()>767&&($(".scrollpoint.sp-effect1").waypoint(function(){$(this).toggleClass("active"),$(this).toggleClass("animated fadeInLeft")},{offset:"90%"}),$(".scrollpoint.sp-effect2").waypoint(function(){$(this).toggleClass("active"),$(this).toggleClass("animated fadeInRight")},{offset:"90%"}),$(".scrollpoint.sp-effect3").waypoint(function(){$(this).toggleClass("active"),$(this).toggleClass("animated fadeInDown")},{offset:"90%"}),$(".scrollpoint.sp-effect4").waypoint(function(){$(this).toggleClass("active"),$(this).toggleClass("animated fadeIn")},{offset:"70%"}),$(".macbook-inner").waypoint(function(){$(this).toggleClass("active"),$(this).toggleClass("black")},{offset:"70%"}))});