import React from 'react'

const Etapa3 = () => {
    return (
        <div>
            <h1>Etapa 3 - Informações de Ensino</h1>

            <p>5. Por que você não terminou um curso de graduação?</p>
            <input
            placeholder='Motivo'
            />

            <p>6. Você fez algum curso complementar?</p>
            <select>
                <option>Nenhum</option>
                <option>Curso Técnico</option>
                <option>Curso de Idiomas</option>
            </select>

            <p>6. Se você fez curso complementar, qual o curso?</p>
            <input
            placeholder='Curso Complementar'
            />

            <div>
            <button>Próxima Etapa</button>
            </div>
        
        </div>
    )
}
export default Etapa3;