const listElement = document.querySelector('.posts');
const postElement = document.getElementById('single-post');



const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.responseType = 'json';
xhr.onload = () => {
    // const listOfPosts = JSON.parse(xhr.response);
    const listOfPosts = xhr.response;

    for (const post of listOfPosts) {
        const postNode = document.importNode(postElement.content, true);
        postNode.querySelector('h2').textContent = post.title.toUpperCase();
        postNode.querySelector('p').textContent = post.body;
        listElement.append(postNode);
    }
};
xhr.send();