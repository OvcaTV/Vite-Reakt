import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter.tsx';

const App: React.FC = () => {
    return (
        <div>
            <h1>Moje aplikace</h1>
            <Counter />
        </div>
    );
};

export default App;


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
);

