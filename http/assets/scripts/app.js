const listElement = document.querySelector('.posts');
const postElement = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchBtn = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');


function sendHttpRequest(url, method = 'GET', data = undefined) {
    // const promise = new Promise((resolve, reject) => {
        // const xhr = new XMLHttpRequest();
        // xhr.setRequestHeader('Content-Type', 'application/json');
        // xhr.open(method, url);
        // xhr.responseType = 'json';
        // xhr.onload = () => {
        //     if (xhr.status >= 200 && xhr.status < 300) {
        //         resolve(xhr.response);
        //     } else {
        //         reject(new Error('Something went wrong'));
        //     }
        //     // const listOfPosts = JSON.parse(xhr.response);
        // };
        // xhr.onerror = () => {
        //     reject('Failed to send request');
        // };
        // xhr.send(JSON.stringify(data));
    // });
    // return promise;

    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return response.json().then(json => {
                console.log(json);
                throw new Error('Something went wrong - Server side');
            });
            
        }
        
    })
    .catch(error => {
        console.log(error);
        throw new Error('Something went wrong');
    });
}


async function fetchPosts() {
    try {
        const responseData = await sendHttpRequest(
            'https://jsonplaceholder.typicode.com/posts',
            'GET'
        );
        for (const post of responseData) {
            appendPost(post);
        }
    } catch(e) {
        alert(e.message);
    }
}

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId,
    };

    try {
        const response = await sendHttpRequest(
            'https://jsonplaceholder.typicode.com/posts',
            'POST',
            post
        );
        post.id = response.id
        appendPost(post);
    } catch(e) {
        alert(e.message);
    }
    
}

function appendPost(post) {
    const postNode = document.importNode(postElement.content, true);
    postNode.querySelector('h2').textContent = post.title.toUpperCase();
    postNode.querySelector('p').textContent = post.body;
    postNode.querySelector('li').id = post.id;
    listElement.append(postNode);
}


fetchBtn.addEventListener('click', fetchPosts);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const enteredTitle = e.currentTarget.querySelector('#title').value;
    const enteredContent = e.currentTarget.querySelector('#content').value;

    createPost(enteredTitle, enteredContent);
});


postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        sendHttpRequest(
            `https://jsonplaceholder.typicode.com/posts/${postId}`,
            'DELETE'
        );
    }
});