export const getFriendsById = async (id) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    return  res.json();
}

export const getPostById = async (id) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    return  res.json();
}
