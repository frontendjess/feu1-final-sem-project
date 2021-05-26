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
                ${recipeInfo.content.rendered}
    		`;
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
