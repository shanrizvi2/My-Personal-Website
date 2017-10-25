function main() {
    $('.theHeader').hide();
	$('.desc').hide();
	$('.action').hide();
    setTimeout(function(){ $('.theHeader').fadeIn(2500); }, 1300);
	setTimeout(function(){ $('.desc').fadeIn(3500); }, 2000);
	setTimeout(function(){ $('.action').fadeIn(4000); }, 3000);
	window.sr = ScrollReveal();
	sr.reveal('.image', { duration: 3000 }, 600);
	sr.reveal('.hi', { duration: 6000 }, 1200);
	sr.reveal('.why', { duration: 6000 }, 1200);
	sr.reveal('.contact', { duration: 6000 }, 1200);

}
$(document).ready(main);
