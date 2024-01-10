// Using Promises
function getButter() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Husband got butter.');
            resolve('Butter');
        }, 2000);
    });
}

function getColdDrinks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Husband got cold drinks.');
            resolve('Cold Drinks');
        }, 1000);
    });
}

getButter()
    .then((butter) => {
        return getColdDrinks();
    })
    .then((coldDrinks) => {
        console.log(`Husband got ${coldDrinks}`);
    })
    .catch((error) => {
        console.error(error);
    });

// Using Async/Await
async function getButterAndColdDrinks() {
    try {
        const butter = await getButter();
        const coldDrinks = await getColdDrinks();
        console.log(`Husband got ${coldDrinks}`);
    } catch (error) {
        console.error(error);
    }
}

getButterAndColdDrinks();


const posts = [];

function createPost(title) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const post = { title };
            posts.push(post);
            console.log(`${title} created`);
            resolve(post);
        }, 2000);
    });
}

function deletePost(index) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts[index]) {
                const deletedPost = posts.splice(index, 1)[0];
                console.log(`${deletedPost.title} deleted`);
                resolve(deletedPost);
            } else {
                reject('Post not found');
            }
        }, 1000);
    });
}

// Using Async/Await
async function managePosts() {
    try {
        const post1 = await createPost('Post One');
        console.log(posts);

        const post2 = await createPost('Post Two');
        console.log(posts);

        const deletedPost = await deletePost(0);
        console.log(posts);

        console.log(`Deleted post: ${deletedPost.title}`);
    } catch (error) {
        console.error(error);
    }
}

managePosts();
