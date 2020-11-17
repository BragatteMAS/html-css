//Exemplo Felipe Deschamps

<CapsLock texto="Me deixe em Caps Lock por favor"/>

function CapsLock(props) {
    const textoInserido = props.texto;
    const textoEmCpasLock = textoInserido.toUpperCase();
return <div>{textoEmCpasLock}</div>
}

function Pagina() {
    return <div>Contador Massinha</div>
}

import {useState} from 'react';

function Contador() {
    const [contador,setContador] = useState(1);
    
    function adicionarContador() {
        setContador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
