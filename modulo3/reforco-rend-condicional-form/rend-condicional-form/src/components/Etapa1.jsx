import React from 'react'


const Etapa1 = () => {
    
    return (
        <div>
            <h1>Etapa 1 - Dados Gerais</h1>

            <p>1. Qual o seu nome?</p>
            <input
             placeholder='Nome'
             value={''}
            />

            <p>2. Qual sua idade?</p>
            <input
             placeholder='Idade'
             value={''}
            />

            <p>3. Qual seu e-mail?</p>
            <input
             placeholder='E-mail'
             value={''}
            />

            <p>4. Qual a sua escolaridade?</p>
            <select>
                <option value={""}>Ensino Médio Completo</option>
                <option value={""}>Ensino Médio Incompleto</option>
                <option value={""}>Ensino Superior Completo</option>
                <option value={""}>Ensino Superior Incompleto</option>
            </select>
            
            <div>
            <button>Próxima Etapa</button>
            </div>

        </div>
    )
}
export default Etapa1;