
export const apiBase = "http://projectexam.local/wp-json/wp/v2";

export const postsEndpoint = "/posts";

export const allPostsEndpoint = "/?per_page=12";

export const eightPoststEndpoint = "/?per_page=8";

export const mediaEndpoint = "/media";


// -----------------------------------------------------------

export const urlPostBase = apiBase + postsEndpoint;

export const urlAllPostsBase = urlPostBase + allPostsEndpoint;

export const eightPostsBase = urlPostBase + eightPoststEndpoint;


// -----------------------------------------------------------

export const fullPostURLExample = "https://projectexam.local/wp-json/wp/v2/posts"

export const allPostsURLExample = "http://projectexam.local/wp-json/wp/v2/posts/?per_page=12";

export const mediaURLExample = "http://projectexam.local/wp-json/wp/v2/media";

export const eightPoststURLExample = "http://projectexam.local/wp-json/wp/v2/posts/?per_page=8"