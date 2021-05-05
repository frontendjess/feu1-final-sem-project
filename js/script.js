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
			document.querySelector('.blog-posts-container').innerHTML += `
        		<div class="card">
            		<div class="card__body">
                        <img src="${res[i]['featured_media_src_url']}">
                        <h2 class="">${res[i]['title'].rendered}</h2>
               
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
		// It is optional

		document.querySelector('#loadingGif').innerHTML = '';
	}
}

getRecipes(baseUrl);
