let loadMoreToggler = document.querySelector('.load-more');

loadMoreToggler.addEventListener('click', function (event) {
	document.querySelector('.card:nth-child(1n + 11)').style.display = 'grid';
	document.querySelector('.card:nth-child(1n + 12)').style.display = 'grid';
	event.preventDefault();
	loadMoreToggler.classList.toggle('hide-load-more');
});
