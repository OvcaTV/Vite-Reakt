import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Aktuální hodnota: {count}</h1>
            <button
                style={{
                    padding: '10px 20px',
                    margin: '5px',
                    backgroundColor: 'lightgreen',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={() => setCount(count + 1)}
            >
                Přidat
            </button>
            <button
                style={{
                    padding: '10px 20px',
                    margin: '5px',
                    backgroundColor: 'lightcoral',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={() => setCount(count - 1)}
            >
                Odebrat
            </button>
        </div>
    );
};

export default Counter;
