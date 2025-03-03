import React from 'react';
import getEmployees from '../../../services/api';
import Header from "../../layout/Header/Header";
import SearchBox from '../../layout/SearchBox/SearchBox';
import Table from '../../layout/Table/Table';
import '../../layout/Table/Table.css';
import './Home.css';

const Home = () => {
    const [employees, setEmployees] = React.useState([]);
    const [headers, setHeaders] = React.useState([]);
    const [query, setQuery] = React.useState('');
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const searchEmployees = async () => {
            const response = await getEmployees();
            const filteredEmployees = response.filter(employee => {
                return employee.name.toLowerCase().includes(query.toLowerCase());
            });

            setEmployees(filteredEmployees);
        };

        searchEmployees();
    }, [query]);

    React.useEffect(() => {
        const setHeadersByWidth = () => {
            if (window.innerWidth < 768) {
                setHeaders(['FOTO', 'NOME', '']);
            } else {
                setHeaders(['FOTO', 'NOME', 'CARGO', 'DATA DE ADMISSÃO', 'TELEFONE']);
            }
            setIsMobile(window.innerWidth < 768);
        };

        setHeadersByWidth();
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
                content={employees.length > 0 ? employees : []}
                isMobile={isMobile}
            />
        </div>
    )
}

export default Home;