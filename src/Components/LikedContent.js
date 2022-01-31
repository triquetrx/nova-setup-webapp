import React, { Component } from 'react';

class LikedContent extends Component {
    render() {
        return (
            <div className='LikedContentContainer'>
                <br/>
                <br/>
                <h3 style={{color: '#8c8d8e'}}>Firstly, you are not <br/>supposed to be here.</h3>
                <br/>
                <h5 style={{color: '#8c8d8e'}}>And Second</h5>
                <br/>
                <h3 style={{color: '#8c8d8e',}}>This Page is Under Construction</h3>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='footer'>
                    <a className='socialLinks' href='https://github.com/triquetrx'><span className='icon'><ion-icon name="logo-github"></ion-icon></span></a>
                    <a className='socialLinks' href='https://instagram.com/triquetrx'><span className='icon'><ion-icon name="logo-instagram"></ion-icon></span></a>
                    <a className='socialLinks' href='“https://discordapp.com/users/514500757136080906/'><span className='icon'><ion-icon name="logo-discord"></ion-icon></span></a>
                    <a className='socialLinks' href='https://twitter.com/zik__here'><span className='icon'><ion-icon name="logo-twitter"></ion-icon></span></a>
                    <a className='socialLinks' href='https://www.linkedin.com/in/zikhere'><span className='icon'><ion-icon name="logo-linkedin"></ion-icon></span></a>
                    <h5>Created By Triquetrx</h5>
                </div>
            </div>

        );
    }
}

export default LikedContent;