const baseUrl = '';

async function getRecipes(url) {
	try {
		document.querySelector('#loadingGif').innerHTML += `
    		<img class="loadingGif" src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif">
 		 `;
		const response = await fetch(
			'https://foodie2flamesblog.lifewithhoney.com/wp-json/wp/v2/posts'
		);
		const jsonResult = await response.json();
		const res = jsonResult;

		for (let i = 0; i < res.length; i++) {
			document.querySelector('.all-recipes-container').innerHTML += `
        		<div class="card">
            		<div class="card__body">
                        <img class="card__image" src="${res[i]['featured_media_src_url']}">
                        	<div class="card__link">
								<a href="single-recipe.html?id=${res[i].id}">${res[i]['title'].rendered}</a>
							</div>
            		</div>
        		</div>
    		`;
		}

		// for (let j = 10; j > 10; j++) {
		// 	document.querySelector('.load-more-posts').innerHTML += `
		// 		<button>
		// 	`;
		// }
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
