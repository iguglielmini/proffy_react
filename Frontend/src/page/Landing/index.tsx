import React from 'react';

import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import StudyIcons from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

//css
import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img
                    src={LandingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">

                    <a href="/" className="study">
                        <img src={StudyIcons} alt="Estudar" />
                        Estudar
                    </a>

                    <a href="/" className="give-classes">
                        <img src={GiveClassesIcon} alt="Estudar" />
                        Dar aulas
                    </a>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizada
                    <img
                        src={PurpleHeartIcon}
                        alt="Coração Roxo" 
                    />
                </span>
            </div>
        </div>
    )
}

export default Landing;