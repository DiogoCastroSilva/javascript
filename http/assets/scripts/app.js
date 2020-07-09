const listElement = document.querySelector('.posts');
const postElement = document.getElementById('single-post');


function sendHttpRequest(method, url, data = undefined) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.onload = () => {
            resolve(xhr.response);
            // const listOfPosts = JSON.parse(xhr.response);
        };
        xhr.send(JSON.stringify(data));
    });
    return promise;
}


async function fetchPosts() {
    const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');

    for (const post of responseData) {
        appendPost(post);
    }
}

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };

    await sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
    appendPost(post);
}

function appendPost(post) {
    const postNode = document.importNode(postElement.content, true);
    postNode.querySelector('h2').textContent = post.title.toUpperCase();
    postNode.querySelector('p').textContent = post.body;
    listElement.append(postNode);
}

fetchPosts();
createPost('title', 'new post');

