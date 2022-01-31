import React, { Component } from 'react';
import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
        <div>
          <h3 className='headerAboutPage'>About</h3>
        </div>
        <div className='startOfAboutPage'>
          <h5>It is place which allows user to upload different setups using various setup apps some of the links are as listed below:</h5>
          <ul>
            <li className='listAboutPage'>
              <a className='linksSetupAppsAboutPage' href="https://play.google.com/store/apps/details?id=com.teslacoilsw.launcher&hl=en_IN">Nova Launcher <ion-icon name="logo-google-playstore"></ion-icon></a>
            </li>
            <li className='listAboutPage'>
              <a className='linksSetupAppsAboutPage' href="https://play.google.com/store/apps/details?id=org.kustom.widget&hl=en_IN&gl=US">KWGT Kustom Widget Maker <ion-icon name="logo-google-playstore"></ion-icon></a>
            </li>
            <li className='listAboutPage'>
              <a className='linksSetupAppsAboutPage' href="https://play.google.com/store/search?q=Icon%20Packs&c=apps&hl=en_IN&gl=US">Icon Packs <ion-icon name="logo-google-playstore"></ion-icon></a>
            </li>
            <li className='listAboutPage'>
              <a className='linksSetupAppsAboutPage' href="https://apps.apple.com/us/app/shortcuts/id915249334">Shortcuts <ion-icon name="logo-apple-appstore"></ion-icon></a>
            </li>
            <li className='listAboutPage'>
              <a className='linksSetupAppsAboutPage' href="https://apps.apple.com/us/app/color-widgets/id1531594277">Color widgets <ion-icon name="logo-apple-appstore"></ion-icon></a>
            </li>
            <li className='listAboutPage'>
              <a className='linksSetupAppsAboutPage' href="https://apps.apple.com/us/app/themify-icon-themes-widgets/id1534126062">Themify <ion-icon name="logo-apple-appstore"></ion-icon></a>
            </li>
          </ul>
        </div>
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

export default About;