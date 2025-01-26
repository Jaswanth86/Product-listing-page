import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
const FilterSection = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="filter-section">
      <div className='first'>
      <h4>3542 ITEMS</h4>
      <button onClick={toggleFilters}>
        {showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}
      </button>
      {showFilters && (
        <div className='filters'>
          <div>
            <input type="checkbox" />
            <label>CUSTOMIZABLE</label>
          </div>
          <div>
            <h4>IDEAL FOR</h4>
            <div>
              <input type="checkbox" />
              <label>All</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Men</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Women</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Baby & Kids</label>
            </div>
          </div>
          <div>
            <h4>OCCASION</h4>
            <div>
              <input type="checkbox" />
              <label>All</label>
            </div>
          </div>
          <div>
            <h4>WORK</h4>
            <div>
              <input type="checkbox" />
              <label>All</label>
            </div>
          </div>
          <div>
            <h4>FABRIC</h4>
            <div>
              <input type="checkbox" />
              <label>All</label>
            </div>
          </div>
          <div>
            <h4>SEGMENT</h4>
            <div>
              <input type="checkbox" />
              <label>All</label>
            </div>
          </div>
          <div>
            <h4>SUITABLE FOR</h4>
            <div>
              <input type="checkbox" />
              <label>All</label>
            </div>
          </div>
          <div>
            <h4>RAW MATERIALS</h4>
            <div>
               <input type="checkbox" />
              <label>All</label>
            </div>
          </div>
        </div>
      )}
      </div>
      <Sidebar />
      <style jsx>{`
          .filter-section{
          display: flex;
          justify-content: space-between;
          align-items:center
          }
          .first{
           display: flex;
          justify-content: space-around;
          align-items:start
          }
          button {
            border:none;
            background:none;
            padding:20px
          }
            .filters{
             display: flex;
             flex-direction:column;
          justify-content: space-between;
            }
          .div{
             display: flex;
             flex-direction:column;
            justify-content: space-between;
            }

        `}</style>
    </div>
  );
}

export default FilterSection;