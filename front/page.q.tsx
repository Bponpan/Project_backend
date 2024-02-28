import React from 'react';

const App: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'gray', // สีเทาด้านหลัง
        width: '100vw', // ความกว้างเต็มหน้าจอ
        height: '100vh', // ความสูงเต็มหน้าจอ
        position: 'relative',
      }}
    >
      <div
        style={{
          backgroundColor: '#70C174 ',
          width: 814,
          height: 713,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: '20px',
          }}
        >
          <div style={{ marginRight: '20px' }}>
            <label htmlFor="roomNumber">Room Number:</label> 
            <input type="text" id="roomNumber" />  {/* Input Roomnumber */}
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" /> {/* Input Name */}
          </div>
        </div>
        <div
          
        >
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"  /* Input รายละเอียด */
            style={{ 
              width: '810px', 
              height: '376px',
              marginTop:'20px',
              fontSize:'1.5rem'
          }}
          ></textarea>
        </div>
        
        <button
          style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
            marginTop: '48px',
            alignItems:'center',
            width:'115px',
            height:'51px'
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
