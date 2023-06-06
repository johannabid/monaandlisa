
import { 
    apiBase,
    postsEndpoint,
    urlAllPostsBase,
    urlPostBase,
    allPostsEndpoint,
   
  } from "/js/source.js"
 


// TRY TO SHOW PUBLISHING DATE
const event = new Date(Date.UTC(2023, 1, 20, 3, 0, 0));
console.log(event.toLocaleString("en-GB"), {timeZone: "UTC"});
// ------------------------------------------------------------




const resultsContainer = document.querySelector(".blog_post_container");

async function fetchPosts() {

    try {
        const response = await fetch(urlPostBase);
        const json = await response.json();

        console.log(json);

        resultsContainer.innerHTML = "";

        const posts = json;

        posts.forEach(function(post)  
        
        {
            resultsContainer.innerHTML += `<a href="blogpostspecific.html?id=${post.id}">
                                               <h1>${post.title.rendered}</h1>  
                                                <div>${post.content.rendered}</div>
                                                <div>${post.excerpt.rendered}</div>   
                                            </a>`;
        });
      
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = console.log("error has occured");
    }
    
}

fetchPosts();


