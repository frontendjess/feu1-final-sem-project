const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getRecipe(recipeId) {
	try {
		document.querySelector('#loadingGif').innerHTML += `
      		<img class="loadingGif" src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif">
    		`;

		console.log(recipeId);
		const response = await fetch(
			'https://foodie2flamesblog.lifewithhoney.com/wp-json/wp/v2/posts/' +
				recipeId
		);
		const jsonResult = await response.json();
		const recipeInfo = jsonResult;

		document.title = recipeInfo.title.rendered;

		document.querySelector('.single-recipe-container').innerHTML += `
        		<h1 class="single-recipe-heading">${recipeInfo.title.rendered}</h1>
                <img class="recipe__image" id="imageModal" alt="${recipeInfo.title.rendered}" src="${recipeInfo['featured_media_src_url']}">
					<div id="modalContainer" class="modal">
						<span class="close-modal"><i class="fas fa-times-circle"></i></span>
						<img class="modal-content" id="image1">
						<div id="imageCaption" class="image-caption"></div>
					</div>
                ${recipeInfo.content.rendered}
    		`;

		var modal = document.getElementById('modalContainer');
		var image = document.getElementById('imageModal');
		var modalImg = document.getElementById('image1');
		var captionText = document.getElementById('imageCaption');
		image.onclick = function () {
			modal.style.display = 'block';
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		};

		var span = document.getElementsByClassName('close-modal')[0];
		span.onclick = function () {
			modal.style.display = 'none';
		};
	} catch (error) {
		document.querySelector('#alert').innerHTML = showAlertTouser(
			'An Error occured',
			'danger'
		);
		console.log(error);
	} finally {
		document.querySelector('#loadingGif').innerHTML = '';
	}
}

getRecipe(id);
