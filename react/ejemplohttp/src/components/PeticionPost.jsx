import axios from 'axios';

function PeticionPost() {

    const handleClick = () => {
        const body = {
            title: 'Título del post',
            body: 'Este es el cuerpo del post',
            author: 'Mario Girón'
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', body)
            .then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <button onClick={handleClick}>Petición POST</button>
    )
}

export default PeticionPost;