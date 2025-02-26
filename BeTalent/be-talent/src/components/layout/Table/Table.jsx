import React from 'react';
import './Table.css';
import Accordion from '../Accordion/Accordion';
import TableHeader from './TableHeader';
import formatDate from '../../../utils/formatDate';
import formatPhoneNumber from '../../../utils/formatPhoneNumber';

const Table = ({ children, headers, content }) => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="table-container">
            <table>
                {
                    headers && (
                        <thead>
                            <tr>
                                {
                                    headers.map((item, index) => (
                                        <th
                                            scope='col'
                                            key={index}
                                            {
                                            ...isMobile && {
                                                className: index === headers.length - 1
                                                    ? 'last'
                                                    : ''
                                            }}
                                        >
                                            {item}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                    )
                }
                {
                    content && (
                        <tbody>
                            {
                                content.map((item, index) => (
                                    isMobile
                                        ? (
                                            <Accordion
                                                key={index}
                                                avatar={item.image || ""}
                                                title={item.name || ""}
                                                data={[{
                                                    "Cargo": item.job || "",
                                                    "Data de admissão": formatDate(item.admission_date) || "",
                                                    "Telefone": formatPhoneNumber(item.phone) || "",
                                                }]}
                                            />
                                        )
                                        : (
                                            <tr
                                                className="table-row"
                                                key={index}>
                                                <th className="avatar">
                                                    <img
                                                        src={item.image}
                                                        alt="avatar"
                                                        width={34}
                                                        height={34} />
                                                </th>
                                                <td>
                                                    {item.name}
                                                </td>
                                                <td>
                                                    {item.job}
                                                </td>
                                                <td>
                                                    {formatDate(item.admission_date)}
                                                </td>
                                                <td>
                                                    {formatPhoneNumber(item.phone)}
                                                </td>
                                            </tr>
                                        )
                                ))
                            }
                        </tbody>
                    )
                }
            </table>
        </div>
    );
};

Table.Header = TableHeader;
Table.Header.defaultProps = {
    className: 'TableHeader',
};

export default Table;