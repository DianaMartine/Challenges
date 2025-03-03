import React, { useState } from "react";
import './Accordion.css';
import { ReactComponent as ChevronUp } from '../../../assets/icons/charm_chevron-up.svg';
import { ReactComponent as ChevronDown } from '../../../assets/icons/charm_chevron-down.svg';

const Accordion = ({ avatar, title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr
        className={`accordion-container ${isOpen ? 'open' : 'close'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <th className="avatar">
          <img src={avatar} alt="avatar" width={34} height={34} />
        </th>
        <td>{title}</td>
        <td className="accordion-icon">
          {isOpen ? (
            <ChevronUp width={32} height={32} />
          ) : (
            <ChevronDown width={32} height={32} />
          )}
        </td>
      </tr>
      {isOpen && (
        <tr className="accordion-content">
          <td colSpan={3}>
            {data.map((item, index) => (
              <div key={index} className="accordion-item">
                {Object.keys(item).map((key, index) => (
                  <div key={index} className="accordion-item-content">
                    <strong>{key}</strong>
                    <span>{item[key]}</span>
                  </div>
                ))}
              </div>
            ))}
          </td>
        </tr>
      )}
    </>
  );
};

export default Accordion;