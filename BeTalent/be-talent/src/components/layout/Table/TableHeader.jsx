import React from 'react';

const TableHeader = ({ children }) => {
  return (
    <thead className="table-header">
      <tr>
        {React.Children.map(children, (child, index) => (
          <th key={index}>{child}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;