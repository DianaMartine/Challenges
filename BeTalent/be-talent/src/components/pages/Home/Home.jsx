import React from 'react';
import getEmployees from '../../../services/api';
import Header from "../../layout/Header/Header";
import SearchBox from '../../layout/SearchBox/SearchBox';
import Table from '../../layout/Table/Table';
import './Home.css';

const Home = () => {
    const [employees, setEmployees] = React.useState([]);
    const [headers, setHeaders] = React.useState([
        'FOTO',
        'NOME',
        'CARGO',
        'DATA DE ADMISSÃO',
        'TELEFONE'
    ]);
    const [query, setQuery] = React.useState('');

    React.useEffect(() => {
        const fetchEmployees = async () => {
            const response = await getEmployees();
            setEmployees(response);
        };

        fetchEmployees();
    }
    , []);

    React.useEffect(() => {
        let searchResult = query;

        if (searchResult) {
            searchResult = searchResult.toLowerCase();

            const filteredEmployees = employees.filter((employee) => {
                return (
                    employee.name.toLowerCase().includes(searchResult)
                );
            });
            setEmployees(filteredEmployees);
        }
    }
    , [query]);    

    const setHeadersByWidth = () => {
        if (
            window.innerWidth < 768 &&
            headers.length > 2
        ) {
            setHeaders([
                'FOTO',
                'NOME',
                ''
            ]);
        } else {
            setHeaders([
                'FOTO',
                'NOME',
                'CARGO',
                'DATA DE ADMISSÃO',
                'TELEFONE'
            ]);
        }
    };

    React.useEffect(() => {
        window.addEventListener('resize', setHeadersByWidth);
        return () => window.removeEventListener('resize', setHeadersByWidth);
    }, []);

    return (
        <div className='Home'>
            <Header />
            <h1>
                Funcionários
            </h1>

            <SearchBox
                placeholder="Pesquisar"
                handleSearch={(e) => setQuery(e.target.value)}
            />

            <Table
                headers={headers}
                content={employees}>
                    <Table.Header>
                        FOTO
                    </Table.Header>
                    <Table.Header>
                        NOME
                    </Table.Header>
                    <Table.Header>
                        CARGO
                    </Table.Header>
                    <Table.Header>
                        DATA DE ADMISSÃO
                    </Table.Header>
                    <Table.Header>
                        TELEFONE
                    </Table.Header>
                </Table>
        </div>
    )
}

export default Home;