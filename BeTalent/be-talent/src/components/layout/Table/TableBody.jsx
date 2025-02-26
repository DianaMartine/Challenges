import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ data }) => {
    return (
        <tbody>
            {data.map((row, index) => (
                <TableRow key={index} rowData={row} />
            ))}
        </tbody>
    );
};

export default TableBody;