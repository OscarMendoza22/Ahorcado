import React from "react";
import { imagenes } from "../Helpers/letras"
interface Props {
    imagennumber: number;
}
export function HanImage({ imagennumber }: Props) {
    if (imagennumber >= 10) {
        imagennumber = 10;
    }
    return (
        <>
            {imagennumber == 0 ? "" : <img
                src={imagenes[imagennumber - 1]}
                alt="ERROR......"
                style={{ width: 250 }}
            />}
            <div className='App2'>
                {imagennumber == 9 ? <strong><h2 >ULTIMA OPORTUNIDAD</h2></strong> : ''}
            </div>
        </>
    )
}