$('.checkbox').click(()=>{
	$('body').toggleClass('dark');
	$('div.card-body').toggleClass('dark-mode');
	$('.card img').toggleClass('dark-mode');
});