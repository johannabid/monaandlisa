import { 
    apiBase,
    postsEndpoint,
    urlAllPostsBase,
    urlPostBase,
    allPostsEndpoint,
   
  } from "/js/source.js"

  function toggleShowing() {
    var lastPosts = document.getElementById("more_posts");
    if (lastPosts.style.display === "none") {
      lastPosts.style.display = "block";
    } else {
      lastPosts.style.display = "none";
    }
  }

  toggleShowing();

  
  const morePostsContainer = document.querySelector(".blog_post_container_more_posts");

  async function fetchPosts11 () { 

    const response = await fetch (urlAllPostsBase);

    const results = await response.json();

    const posts = results;

    for (let i = 0; i < posts.length; i++) {

        if (i === 1)
        break
                morePostsContainer.innerHTML += 
                `<a href="blogpostspecific.html?id=${posts[10].id}"class="blog_post_container">
                    <div> 
                     <h1>${posts[10].title.rendered}</h1>
                    </div>
               
                    <div>
                     <div>${posts[10].content.rendered}</div>
                   
                    </div>  <p class="post_date">${posts[10].date}</p> 
                    <p>${posts[10].excerpt.rendered}<p> </div>
                </a>`;
                
}
}

fetchPosts11();

async function fetchPost12 () { 

    const response = await fetch (urlAllPostsBase);

    const results = await response.json();

    const posts = results;

    for (let i = 0; i < posts.length; i++) {

        if (i === 1)
        break
                morePostsContainer.innerHTML += 
                `<a href="blogpostspecific.html?id=${posts[11].id}"class="blog_post_container">
                    <div> 
                     <h1>${posts[11].title.rendered}</h1>
                    </div>
               
                    <div>
                     <div>${posts[11].content.rendered}</div>
                   
                    </div>  <p class="post_date">${posts[11].date}</p> 
                    <p>${posts[11].excerpt.rendered}<p> </div>
                </a>`;
                
}
}

fetchPost12();

toggleShowing();
