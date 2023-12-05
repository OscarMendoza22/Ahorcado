import { useEffect, useState } from 'react';
import './App.css';
import { HanImage } from './components/Hanglmage'
import { letras } from './Helpers/letras'
import { Palabraramdom } from './Helpers/workRamdoms';
import React from "react";
function App() {
    const [palabra] = useState(Palabraramdom());
    const [raya_piso, setraya_piso] = useState('_ '.repeat(palabra.length));
    const [Errores, setErrores] = useState(0);
    const [perdio, setperdio] = useState(false);
    const [gano, setgano] = useState(false);
    useEffect(() => {
        if (Errores >= 10) {
            setperdio(true);
        }
    }, [Errores]);
    useEffect(() => {
        const unir_palabra = raya_piso.split(' ').join('');
        if (unir_palabra == palabra) {
            setgano(true);
        }
    }, [raya_piso]);
    const Verificacion = (letras) => {
        if(perdio)return;
        if(gano)return;
        if (!palabra.includes(letras)) {
            setErrores(Math.min(Errores + 1, 10));
            return;
        }
        const arreglo_palabra = raya_piso.split(' ');
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] == letras) {
                arreglo_palabra[i] = letras;
            }
        }
        setraya_piso(arreglo_palabra.join(' '));
    }
    return (
        <div className='App2'>
            <strong><h1>Juego del ahorcado</h1></strong>
            <HanImage className=" " imagennumber={Errores} />   
            <h2 className='App'>Errores: {Errores}</h2>
            <h3 className='App'>{raya_piso}</h3>
            {perdio == true ? <h1>Perdiste. Lo siento</h1> : ''}
            {perdio == true ? <h3 className="App">LA PABALA CORRECTA ES: <strong><h3>{palabra}</h3></strong></h3> : ''}
            {gano == true ? <h1>Ganaste, Muy Bien</h1> : ''}
            {
                letras.map((letras) => (
                    <button
                        onClick={() => Verificacion(letras)}
                        key={letras}>
                        <strong>{letras}</strong>
                    </button>
                ))
            }
            {Errores >= 10 ? < button onClick={() => window.location.reload()}> <strong>Jugar de nuevo</strong></button> : ''}
            {gano == true ? < button onClick={() => window.location.reload()}> <strong>Jugar de nuevo</strong></button> : ''}
        </div>
    );
}
export default App;