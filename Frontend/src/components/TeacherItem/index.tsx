import React from 'react'

import './styles.css';
//icons 
import Whastapp from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQGQXlT1zcFkWQ/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=XHLe67Y7MNxRXIAs-YUUR19LxYvCz4aVEddgGZsoJCo"
                    alt="Italo Guglielmini"
                />
                <div>
                    <strong>
                        Italo Guglielmini
                </strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologia de matemática avançada.
            <br /><br />
            Apaixonado por fazer calculos dificeis e por mudar a vida das pessoas através de experiências.
        </p>
            <footer>
                <p>
                    Preço/hora
                <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={Whastapp} alt="whatsapp" />
                Entrar em Contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem;