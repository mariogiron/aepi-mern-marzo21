import { useEffect, useState } from 'react';

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // fetch('https://reqres.in/api/users')
        //     .then(response => response.json())
        //     .then(json => console.log(json.data))
        //     .catch(error => console.log(error));
        async function getUsers() {
            const response = await fetch('https://reqres.in/api/users');
            const json = await response.json();
            setUsers(json.data);
        }
        getUsers();
    }, []);

    let content = <h3>No hay usuarios</h3>;
    if (users.length > 0) {
        content = <div className="users">
            {users.map(user => (
                <div className="user">
                    <p>{user.first_name} {user.last_name}</p>
                    <img src={user.avatar} alt="" />
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    }

    return content;

}

export default Users;