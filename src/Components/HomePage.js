import React, { Component } from 'react';
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu'
import { getStorage,ref, listAll } from 'firebase/storage';
import './HomePage.css';
import FastAverageColor from 'fast-average-color';

const HomePage = () => {

  const storage = getStorage();
  const listRef = ref(storage,'files');
  
  listAll(listRef)
  .then((res)=>{res.prefixes.forEach((folderRes) => {
    console.log(folderRes)});
    res.items.forEach((itemRef)=>{
      console.log(itemRef);
    });
  }).catch((err)=>{
    console.log(err)
  });

  const fac = new FastAverageColor();
  fac.getColorAsync('./Component/logo.png')
  .then(color => {console.log(color.rgba)})
  .catch(e=>{console.log(e);});
  

  const uploads = [
    {id:'1', setUpName: 'Dark Amoled', imageID:'https://i.pinimg.com/564x/0b/86/7b/0b867b4d2b1352743bdef781a8c87a2c.jpg', zipFileURL: 'zipFileURL', iconPackURL:'iconPackURL', publishedBy:'anonymous'},
    {id:'2', setUpName: 'Black', imageID:'https://i.pinimg.com/564x/e3/8d/c6/e38dc6f0d79fa73ac79c179c7c5547b5.jpg',zipFileURL: 'zipFileURL', iconPackURL:'iconPackURL', publishedBy:'anonymous'},
    {id:'3', setUpName: 'Minimal', imageID:'https://i.pinimg.com/564x/8f/ff/66/8fff66bd329165bd5f5358a6bebcec4e.jpg',zipFileURL: 'zipFileURL', iconPackURL:'iconPackURL', colorAccent:'orange', publishedBy:'anonymous'},
    {id:'3', setUpName: 'ColorFul', imageID:'https://i.pinimg.com/564x/22/29/38/222938245052959e7fc4c335a84017a0.jpg',zipFileURL: 'zipFileURL', iconPackURL:'iconPackURL', colorAccent:'orange', publishedBy:'anonymous'},
  ];

  

  return (
    <div className='HomePageContent'>
      <div className='blockEmpty'><br/></div>
      <div className='scrollMenu'>
        {uploads.map((uploads,index)=>(
          <div className="container">
            <div className="card">
              <div className="imgBx">
                <img className='imageHomePage' src={uploads.imageID} height="280px" width="157px"/>
              </div>
              <div className="contentBx">
                <h2>{uploads.setUpName}</h2>
                <h6 style={{color: '#FFF'}}>{uploads.publishedBy}</h6>
                <div className="size">
                  <span href="{uploads.iconPackURL}" ><ion-icon name="logo-google-playstore"></ion-icon></span>
                  <span href="{uploads.zipFileURL}"><ion-icon name="cloud-download-outline"></ion-icon></span>
                </div>
                <br/>
                <button className='likeButton'>Like</button>
              </div>
            </div>
          </div>
        )
        )}
      
      </div>
    </div>
  );
}

export default HomePage;