const custumers = ['Max', 'Manuel', 'Anna'];
const activeCustumers = ['Max', 'Manuel'];

// Lodash
const inactiveCustumers = _.difference(custumers, activeCustumers);

// Axios
async function fetchPosts() {
    try {
        const response =  await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );
        if (response.status === 200) {
            return response.data;
        } else {
            throw response;
        }
    } catch(e) {
        alert(e.message);
    }
    
}

fetchPosts().then(data => {
    console.log(data);
});