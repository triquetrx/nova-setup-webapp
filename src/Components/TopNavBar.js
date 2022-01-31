import React from "react";
import "./TopBar.css";
import logo from './logo.png';

const TopNavBar = (props) =>{

    const {
        handleLogOut,
    } = props;


    
    function toggleArrowDown(){
        document.getElementById('dropIcon').style.display='none';
        document.getElementById('upIcon').style.display='block';
        
    }

    function toggleArrow(){
        document.getElementById('dropIcon').style.display='block';
        document.getElementById('upIcon').style.display='none';
        
    }


    async function darkMode(){
        document.getElementById('lightMode').style.display='none';
        document.getElementById('darkMode').style.display='block';
        document.querySelector('body').style.color='#0C090D';
        document.querySelector('body').style.backgroundColor='#EAEBED';
        document.getElementById('darkMode').style.margin='0px 0px px';
    }
    async function lightMode(){
        document.getElementById('lightMode').style.display='block';
        document.getElementById('darkMode').style.display='none';
        document.querySelector('body').style.color='#EAEBED';
        document.querySelector('body').style.backgroundColor='#0C090D';
        document.getElementById('lightMode').style.margin='0px 0px 0px';
    }

    return (
        <section className="TopNavBar">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="p-4 hidden">
                    <a id="navbarContent">Contact Support</a>
                    <br/>
                    <a id="lightMode" onClick={darkMode}>Light Mode</a>
                    <a id="darkMode" onClick={lightMode}>Dark Mode</a>
                    <div>
                        <a id="navbarContent" onClick={handleLogOut}>Logout</a>
                    </div>
                </div>
            </div>
            <nav className="navbar" id="navbar">
                <a className="navbar-brand logo"><img src={logo} width="36" height="25" /></a>
                <p className="navbar-toggler upDown" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" id="mainButton">
                    <p className="navbar-toggler-icon" id="toggleButton">
                        <i onClick={toggleArrowDown} id="dropIcon">
                            <ion-icon name="caret-down-circle-outline"></ion-icon>
                        </i>
                        <i onClick={toggleArrow} id="upIcon">
                            <ion-icon name="caret-up-circle-outline"></ion-icon>
                        </i>
                    </p>
                </p>            
            </nav>

            
        </section>
    );
};

export default TopNavBar