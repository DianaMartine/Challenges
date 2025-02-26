import React from 'react';
import TableCell from './TableCell';

const TableRow = ({ rowData }) => {
    return (
        <tr>
            <TableCell>
                <img src={rowData.image} alt={rowData.name} className="employee-photo" />
            </TableCell>
            <TableCell>{rowData.name}</TableCell>
        </tr>
    );
};

export default TableRow;