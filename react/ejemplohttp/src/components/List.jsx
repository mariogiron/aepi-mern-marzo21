import { useState, useEffect } from 'react';
import axios from 'axios';

import { FlexDiv, Card, PaginationWrapper } from './UI/basic';

function List() {

    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(0);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?format=json&page=${page}`)
            .then(response => {
                setPeople(response.data.results);
                setNumPages(Math.ceil(response.data.count / 10));
            });
    }, [page]);

    const cambiarPagina = (siguiente) => {
        if (siguiente) setPage(page + 1)
        else setPage(page - 1);
    }

    let listPeople = <h3>No hay personajes</h3>;
    if (people.length > 0) {
        listPeople = people.map(person => (
            <Card width="200">
                <h5>{person.name}</h5>
                <p>Fecha Nac: {person.birth_year}</p>
                <p>Films: {person.films.length}</p>
            </Card>
        ));
    }

    let currentPage = 'medio';
    if (page === 1) currentPage = 'primera';
    else if (page === numPages) currentPage = 'ultima';

    return (
        <>
            <h3>Lista de personajes ({page}/{numPages})</h3>
            <FlexDiv>
                {listPeople}
            </FlexDiv>
            <PaginationWrapper page={currentPage}>
                {(page !== 1) &&
                    <button onClick={() => cambiarPagina(false)}>Anterior</button>
                }
                {(page < numPages) &&
                    <button onClick={() => cambiarPagina(true)}>Siguiente</button>
                }
            </PaginationWrapper>
        </>
    );

}

export default List;