import { urlPostBase, urlAllPostsBase, postsEndpoint } from "/js/source.js";

const specificBlogPostContainer = document.querySelector(".blog_post_specific");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const urlSpecific = urlPostBase + "/" + id;

console.log(urlSpecific);

async function fetchGame() {

    try {
        const response = await fetch(urlSpecific);
        const specificBlogPost = await response.json();

        console.log(specificBlogPost);

        createHtml(specificBlogPost);
      
    }
    catch(error) {
        console.log(error);
        specificBlogPostContainer.innerHTML = message("error", error);
    }
    
}

fetchGame();

function createHtml(specificBlogPost) {
    specificBlogPostContainer.innerHTML = `<h1>${specificBlogPost.title.rendered}</h1>
                                <div>${specificBlogPost.content.rendered}</div>
                                <div>${specificBlogPost.excerpt.rendered}</div>`;
}
