import React from 'react';
import formatDate from '../../../utils/formatDate';
import formatPhoneNumber from '../../../utils/formatPhoneNumber';
import Accordion from '../Accordion/Accordion';
import './Table.css';

const Table = ({ headers, content, isMobile }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headers.map((item, index) => (
              <th
                scope="col"
                key={index}
                className={isMobile && index === headers.length - 1 ? 'last' : ''}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {content.length > 0 ? (
            content.map((item, index) =>
              isMobile ? (
                <Accordion
                  key={index}
                  avatar={item.image || ''}
                  title={item.name || ''}
                  data={[
                    {
                      Cargo: item.job || '',
                      'Data de admissão': formatDate(item.admission_date) || '',
                      Telefone: formatPhoneNumber(item.phone) || '',
                    },
                  ]}
                />
              ) : (
                <tr className="table-row" key={index}>
                  <th className="avatar">
                    <img src={item.image} alt="avatar" width={34} height={34} />
                  </th>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td>{formatDate(item.admission_date)}</td>
                  <td>{formatPhoneNumber(item.phone)}</td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan="100%">Nenhum funcionário encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;