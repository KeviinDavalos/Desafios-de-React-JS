import React from 'react';
import { useState, useEffect } from 'react';

const ItemCount = ({initial, stock}) => {
    const [cont, setCont] = useState(initial);

    const suma = () => {
        if (cont < stock){
            setCont(cont + 1)
        }
    }
    const resta = () => {
        if (cont > initial){
            setCont(cont - 1)
        }
    }
    const agregarAlCarro = () => {
        setCont(cont)
    }

    useEffect(() => {
        console.log("ejecutandome ");
        return () => {

        };
    }, []);

    return (
        <>
            <button onClick={() => resta()}>-</button>
            <span>{cont}</span>
            <button onClick={() => suma()}>+</button>
            <button onClick={() => agregarAlCarro()}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount;
