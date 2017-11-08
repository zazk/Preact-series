import axios from 'axios'
export const getAllPeople = () =>
    axios.get(
        "https://jsonplaceholder.typicode.com/users")
        .then(r => r.data)
        .catch(e => console.error(e) )