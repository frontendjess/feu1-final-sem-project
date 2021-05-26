const baseUrl = '';

async function getRecipes(url) {
	try {
		document.querySelector('#loadingGif').innerHTML += `
    		<img class="loadingGif" src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif">
 		 `;
		const response = await fetch(
			'https://foodie2flamesblog.lifewithhoney.com/wp-json/wp/v2/posts/?per_page=100'
		);
		const jsonResult = await response.json();
		const res = jsonResult;

		for (let i = 0; i < res.length; i++) {
			document.querySelector('.all-recipes-container').innerHTML += `
        		<div class="card">
            		<div class="card__body">
                        <img class="card__image" alt="${res[i].title.rendered}" src="${res[i]['featured_media_src_url']}">
                        	<div class="card__link">
								<a href="single-recipe.html?id=${res[i].id}">${res[i]['title'].rendered}</a>
							</div>
            		</div>
        		</div>
    		`;
		}
	} catch (error) {
		// show the user some error
		document.querySelector('#alert').innerHTML = showAlertTouser(
			'An Error occured',
			'danger'
		);
	} finally {
		// you can finally do something here like hide the loading gif

		document.querySelector('#loadingGif').innerHTML = '';
	}
}

getRecipes(baseUrl);
