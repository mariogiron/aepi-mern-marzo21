import { useState, useEffect } from 'react';
import axios from 'axios';

function ListaClientes() {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/clientes', {
            headers: {
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiI2MDgzZmViYmQyMWU0ZDYyZjQwOGRlMTciLCJjYWR1Y2EiOjE2MTkyNjU2MzIsImlhdCI6MTYxOTI2NTAzMn0.-Sr8BezZdM-cHss53JlsRlbNR4VXF4vAc6ZCO0DYYhU'
            }
        }).then(response => {
            console.log(response.data);
            setClientes(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <p>Clientes</p>
            <div className="clientes">
                {clientes.map(cliente => (
                    <div className="cliente">
                        <h5>{cliente.nombre} {cliente.apellidos}</h5>
                    </div>
                ))}
            </div>
        </div>);

}

export default ListaClientes;