import React, { useState } from 'react';

const Sidebar = () => {
      const [showOptions, setShowOptions] = useState(false);
    
      const toggleOptions = () => {
        setShowOptions(!showOptions);
      };
    
      return (
        <div>
          <button onClick={toggleOptions}>
            RECOMMENDED
            <span className="arrow">
              {showOptions ? '▲' : '▼'}
            </span>
          </button>
          {showOptions && (
            <ul>
              <li>NEWEST FIRST</li>
              <li>POPULAR</li>
              <li>PRICE: HIGH TO LOW</li>
              <li>PRICE: LOW TO HIGH</li>
            </ul>
          )}
           <style jsx>{`
          div{
             display: flex;
             flex-direction:column;
            justify-content: space-between;
            }
            ul{
            list-style-type:none;
            border:none;
            background:none;
            }
            button{
            border:none;
            background:none;
            }

        `}</style>
        </div>
      );
    }
    

export default Sidebar;