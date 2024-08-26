import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer saludo="¡Bienvenido a nuestra tienda!" />
        </div>
    );
}

export default App;