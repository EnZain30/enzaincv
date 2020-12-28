
$(document).ready(()=>{
	$('.checkbox').click(()=>{
		$('body').toggleClass('dark');
		$('div.card-body, .card img, hr').toggleClass('dark-mode');
	});
});
