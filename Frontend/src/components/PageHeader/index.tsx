import React from 'react'
import { Link } from 'react-router-dom';

//css
import './styles.css'
//icons
import logoImg from '../../assets/images/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <FiArrowLeft />
                </Link>
                <img src={logoImg} alt="proffy" />
            </div>

            <div className="header-content">
                <strong>
                    {props.title}
                </strong>
                {props.children}
            </div>
        </header>
    )
}
export default PageHeader;