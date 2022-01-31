import React from "react";
import { BrowserRouter as Router,Switch, Route, Link,useLocation  } from "react-router-dom";
import Add from "./Add";
import "./BottomBar.css";
import HomePage from "./HomePage";
import About from "./About";

import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Search from "./Search";
import LikedContent from "./LikedContent";
import { render } from "@testing-library/react";
import { useState } from "react/cjs/react.development";
import SetupImageUpload from "./SetupImageUpload";


const BottomBar =(props)=>{
    const {
        isOnHome,
        resetHome,
        authListener
    } = props

    const [isHomeActive,setHomeActive]=useState(true);
    const [isSearchActive,setSearchActive]=useState(false);
    const [isPlusActive,setPlusActive]=useState(false);
    const [isLikedActive,setLikedActive]=useState(false);
    const [isInfoActive,setInfoActive]=useState(false);
    let currentWindow = window.location.href; 
    console.log(currentWindow.split('/')[3]);

    let currentPage = currentWindow.split('/')[3];
     
    
    
    const toggleHome = () => {
        
        setHomeActive(!isHomeActive);
        if (isSearchActive){
            setSearchActive(!isSearchActive);
        }
        if(isPlusActive){
            setPlusActive(!isPlusActive)
        }
        if(isLikedActive){
            setLikedActive(!isLikedActive);
        } 
        if(isInfoActive){
            setInfoActive(!isInfoActive);
        }
        if(!isHomeActive && !isSearchActive && !isPlusActive && !isLikedActive && !isInfoActive){
            isHomeActive=true;
        }
      };

    const toggleSearch = () => {
        
        setSearchActive(!isSearchActive);
        if (isHomeActive){
            setHomeActive(!isHomeActive);
        }
        if(isPlusActive){
            setPlusActive(!isPlusActive)
        }
        if(isLikedActive){
            setLikedActive(!isLikedActive);
        } 
        if(isInfoActive){
            setInfoActive(!isInfoActive);
        }
        if(!isHomeActive && !isSearchActive && !isPlusActive && !isLikedActive && !isInfoActive){
            isSearchActive=true;
        }
    };

    const togglePlus = () => {
        setPlusActive(!isPlusActive);
        
        if (isSearchActive){
            setSearchActive(!isSearchActive);
        }
        if(isHomeActive){
            setHomeActive(!isHomeActive)
        }
        if(isLikedActive){
            setLikedActive(!isLikedActive);
        } 
        if(isInfoActive){
            setInfoActive(!isInfoActive);
        }
        if(!isHomeActive && !isSearchActive && !isPlusActive && !isLikedActive && !isInfoActive){
            isPlusActive=true;
        }
    };

    const toggleLiked = () => {
        setLikedActive(!isLikedActive);
        if (isSearchActive){
            setSearchActive(!isSearchActive);
        }
        if(isHomeActive){
            setHomeActive(!isHomeActive)
        }
        if(isPlusActive){
            setPlusActive(!isPlusActive);
        } 
        if(isInfoActive){
            setInfoActive(!isInfoActive);
        }
        if(!isHomeActive && !isSearchActive && !isPlusActive && !isLikedActive && !isInfoActive){
            isLikedActive=true;
        }

    };

    const toggleInfo = () => {
        setInfoActive(!isInfoActive)

        if (isSearchActive){
            setSearchActive(!isSearchActive);
        }
        if(isHomeActive){
            setHomeActive(!isHomeActive)
        }
        if(isLikedActive){
            setLikedActive(!isLikedActive);
        } 
        if(isPlusActive){
            setPlusActive(!isPlusActive);
        }
        if(!isHomeActive && !isSearchActive && !isPlusActive && !isLikedActive && !isInfoActive){
            isInfoActive=true;
        }
    };
    let cleft=2;
    if (isHomeActive){
        cleft=2;
    }
    if(isSearchActive){
        cleft=75;
    }
    if(isPlusActive){
        cleft=150;
    }
    if(isLikedActive){
        cleft=223;
    }
    if(isInfoActive){
        cleft=296;
    }
    
    if (currentPage === '' || currentPage === 'HomePage'){
        cleft=39;
    }
    if(currentPage === 'Search'){
        cleft=112;
    }
    if(currentPage === 'Upload'){
        cleft=187;
    }
    if(currentPage === 'About'){
        cleft=260;
    }

   

    

    let xTrans= 'translate('+cleft+'px, 0px)';
    
    return(
        
        <Router>
            <section className="BottomBar" id="bottomBar">
                <div id="navigation">
                    <ul >
                        <div className="d-flex justify-content-center">
                        <li id="bottomList">
                        <Link to="/HomePage">
                            <a className={(currentPage==='' || currentPage=== 'HomePage')?'active':null} onClick={toggleHome} id="bottomContent">
                                <span id="icon"><ion-icon name="home-outline"></ion-icon></span>
                                <span id="text">Home</span>
                            </a>
                        </Link>
                        </li>
                        <li id="bottomList">
                        <Link to="/Search">
                            <a className={(currentPage === 'Search')?'active':null} onClick={toggleSearch} id="bottomContent">
                                <span id="icon"><ion-icon name="search-outline"></ion-icon></span>
                                <span id="text">Search</span>
                            </a>
                        </Link>
                        </li>
                        <li id="bottomList">
                        <Link to="/Upload">
                            <a className={(currentPage === 'Upload')?'active':null} onClick={togglePlus} id="bottomContent">
                                <span id="icon"><ion-icon name="add-circle-outline"></ion-icon></span>
                                <span id="text">Upload</span>
                            </a>
                        </Link>
                        </li>
                        
                        <li id="bottomList">
                        <Link to="/About">
                            <a className={(currentPage === 'About')?'active':null} onClick={toggleInfo} id="bottomContent">
                                <span id="icon"><ion-icon name="information-circle-outline"></ion-icon></span>
                                <span id="text">Info</span>
                            </a>
                        </Link>
                        </li>
                        </div>
                        <div className="indicator" style={{transform: xTrans,}} id="indicator"></div>
                    </ul>
                    
                </div>
                
            </section>
            <Switch>
                <Route exact path="/" render={()=>{
                    return (<Redirect to="/HomePage" />)
                    }}>
                    <HomePage/>
                </Route>
                <Route exact path="/HomePage">
                    <HomePage/>
                </Route>
                <Route path="/Search">
                    <Search/>
                </Route>
                <Route path="/Upload">
                    <SetupImageUpload/>
                </Route>
                <Route path="/About">
                    <About/>
                </Route>
                <Route path="/LikedContent">
                    <LikedContent/>
                </Route>
            </Switch>
        </Router>
    );
}

export default BottomBar
