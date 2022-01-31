import { getDatabase, ref ,set, get, child } from "firebase/database";
import React, {Component} from 'react';
import './Add.css';
import { getAuth, onAuthStateChanged} from "firebase/auth";

const Add = (props) =>{

  const {uid} = props
  const auth = getAuth();
  const x=1;

  function writeData(setupID, setUpName, zipFileURL, iconPackURL, tagsUpload, imageID, userName, date){
    const db = getDatabase();
    set(ref(db, 'setups/'+setupID), {
      setUpName:setUpName,
      zipFileURL: zipFileURL,
      iconPackURL: iconPackURL,
      imageID: imageID,
      userName: userName,
      tagsUpload: tagsUpload,
      date: date,
    });
  }

  function writeTags(setUpName, zipFileURL, iconPackURL, userName, tagsUpload, imageID, date){
    const db = getDatabase();
    tagsUpload = tagsUpload.toLowerCase();
    set(ref(db, ((tagsUpload.split(" ")[0]))+' '+((imageID).toString())), {
      setUpName:setUpName,
      zipFileURL: zipFileURL,
      iconPackURL: iconPackURL,
      imageID: imageID,
      userName: userName,
      date: date,
    });

    if ((tagsUpload.split(" ")).length >= 2) {
      set(ref(db, ((tagsUpload.split(" ")[1]))+' '+((imageID).toString())), {
        setUpName:setUpName,
        zipFileURL: zipFileURL,
        iconPackURL: iconPackURL,
        imageID: imageID,
        userName: userName,
        date: date,
      });
    }
    
    if ((tagsUpload.split(" ")).length === 3) {
      set(ref(db, (tagsUpload.split(" ")[2])+' '+((imageID).toString())), {
        setUpName:setUpName,
        zipFileURL: zipFileURL,
        iconPackURL: iconPackURL,
        imageID: imageID,
        userName: userName,
        date: date,
      });
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    
    if(x){
      let setUpName = document.querySelector('#setUpName').value;
      let zipFileURL = document.querySelector('#zipFileURL').value;
      let iconPackURL = document.querySelector('#iconPackURL').value;
      let tagsUpload = document.querySelector('#tagsUpload').value;
      if((tagsUpload.split(' ')).length < 4){
        let imageID = uid;
        var currentdate = new Date(); 
        let setUpID = uid;
        var date = currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear();
        onAuthStateChanged(auth, (user) => {
          if (user){
            const uid = user.uid;
            var userName = '';
            console.log(uid);
            if ((user.displayName)) {
              
              userName=user.displayName;
              console.log("Upload: "+userName);
            }
            else{
              userName='anonymous';
              console.log("Upload: "+userName);
            }
          writeData(setUpID, setUpName,zipFileURL,iconPackURL, tagsUpload, imageID, userName, date);
          writeTags(setUpName, zipFileURL, iconPackURL, userName, tagsUpload, imageID, date);
          alert("Submission Done")
          document.querySelector('#setUpName').value="";
          document.querySelector('#zipFileURL').value="";
          document.querySelector('#iconPackURL').value="";
          document.querySelector('#tagsUpload').value="";
          }
        });
      }
      else{
        alert("Tags should not be more than 3");
      }
      
      
    }
    else{
      alert("Upload the Set Up Image please");
    }
  }

  return (
    <div>
      <form className='AddForm' onSubmit={handleSubmit}>
      <label className='labelAdd'>
          <input className='AddInput' type="text" id="setUpName" placeholder="Set Up Name" required/>
        </label>
        <label className='labelAdd'>
          <input className='AddInput' type="url" id="zipFileURL" placeholder="Zip File Link" required/>
        </label>
        <label className='labelAdd'>
          <input className='AddInput' type="url" id="iconPackURL" placeholder="Icon Pack Link" required/>
        </label>
        <label className='labelAdd'>
          <input className='AddInput' type="text" id="tagsUpload" placeholder="Tags for search" required/>
        </label>
        <button className="SubmitToAddButton" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Add;