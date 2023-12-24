import React from 'react';
import { useEffect, useState } from 'react';
const Table = () => {
    const [todayDate, setTodayDate] = useState('');
  useEffect(() => {
    const date = new Date();
    // const nextDate = new Date(date.setDate(date.getDate() + 1));
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      setTodayDate(formattedDate);

  },[]);
  const [nextDate, setNextDate] = useState(todayDate);
  useEffect(() => {
    const date = new Date();
    const nexDate = new Date(date.setDate(date.getDate() + 1));
    // const nextDate = new Date(date.setDate(date.getDate() + 1));
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      setNextDate(formattedDate);
      
  },[]);
  const [nexDate, setNexDate] = useState(todayDate);
  useEffect(() => {
    const date = new Date();
    const nexDate = new Date(date.setDate(date.getDate() + 2));
    // const nextDate = new Date(date.setDate(date.getDate() + 1));
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      setNexDate(formattedDate);
      
  },[]);
  const [showTable, setShowTable] = useState(false); // State to manage table visibility

  const handleButtonClick = () => {
    setShowTable(true); // Set showTable state to true when the button is clicked
  };

  return (
    <div >
        <table>
  <tr>
    <td><button onClick={handleButtonClick} class="custom-button">{todayDate}</button></td>
    <td><button onClick={handleButtonClick} class="custom-button">{nextDate}</button></td>
    <td><button onClick={handleButtonClick} class="custom-button">{nexDate}</button></td>
    {/* <td><button onClick={handleButtonClick}>Show Table</button></td> */}
  </tr>
  </table>
      {/* <button onClick={handleButtonClick}>Show Table</button> */}
      {showTable && ( /* Render the table only if showTable is true */
        <table className="custom-table">
            <tr>
              <td><button>9:00 AM</button></td>
              <td><button>9:30 AM</button></td>
              <td><button>10:00 AM</button></td>
              <td><button>10:30 AM</button></td>
              <td><button>11:00 AM</button></td>
              </tr>
              <tr>
              <td><button>11:30 AM</button></td>
              <td><button>12:00 PM</button></td>
              <td><button>1:00 PM</button></td>
              <td><button>1:30 PM</button></td>
              <td><button>2:00 PM</button></td>
              </tr>
              <tr>
              <td><button>2:30 PM</button></td>
              <td><button>3:00 PM</button></td>
              <td><button>3:30 PM</button></td>
              <td><button>4:00 PM</button></td>
              <td><button>4:30 PM</button></td>
              </tr>
              <tr>
              <td><button>5:00 PM</button></td>
              <td><button>6:30 PM</button></td>
              <td><button>7:00 PM</button></td>
            
              {/* <td>Data 2</td> */}
              {/* Add more table data rows as needed */}
            </tr>
        </table>
      )}
    </div>
  );
};

export default Table;
