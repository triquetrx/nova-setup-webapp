import React, { Component } from 'react';
import { getDownloadURL, uploadBytesResumable, ref } from 'firebase/storage';
import {storage} from './fire';
import Add from './Add';
import Search from './Search';

const SetupImageUpload = () =>{
    let x = 0;
    let imgURL ='';
    

    let uid= "imageID"+Math.random().toString(16).slice(2);

    const formatHandler = (e) =>{
        e.preventDefault();
        const file = e.target[0].files[0];
        console.log(file);
        uploadFiles(file);
        x=1;
    };

    const uploadFiles = (file)  =>{
        if(!file) return;
        const storageRef = ref(storage,'/files/'+uid);
        const uploadTask = uploadBytesResumable(storageRef,file);
        
        uploadTask.on("state_changed",(snapshot) => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log(prog);
            if(prog===100){
            alert("Upload Complete");
            }
        }, (err) => alert(err),
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
            .then(url => console.log(url))
        }
        );
    
    };


    return (
        <div>
            <h3 className='uploadHeader'>Upload your setup</h3>
        <form className="UploadImageForm" onSubmit={formatHandler}>
            <input className='UploadFiles col-6' type="file"/>
            <button className="SubmitToUploadButton col-auto" type="submit">Upload</button>
        </form>
        <Add 
            uid={uid}
            x={x}
        />
        </div>
    );
    
}
export default SetupImageUpload;
