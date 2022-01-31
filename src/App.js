import './App.css';
import BottomBar from './Components/BottomBar';
import React, {useState, useEffect} from 'react';
import { getAuth, onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth";
import {getDatabase,ref,set} from 'firebase/database';
import Login from './Components/Login';
import TopNavBar from './Components/TopNavBar';
import fireBaseApp from './Components/fire.js';

function App() {
  const auth = getAuth();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
    
  }


  const signInWithGoogle = ()=> {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider).then(res => {
      alert("Sign-In Successful");
    }).catch(err => {
      alert(err);
    });
  }

  const signInWithFaceBook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth,provider).then(res => {
      const user = res.user;

      const credential = FacebookAuthProvider.credentialFromResult(res);
      const accessToken = credential.accessToken;
    })
    .catch((err)=>{
      const errorCode = err.code;
      const errorMessage = err.message;
      const errorEmail = err.email;
      const credential = FacebookAuthProvider.credentialFromError(err);
      alert(errorCode.toString()+': '+errorMessage)
    })
  }

  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = async ()=>{
      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail("");
        setPassword("");
      })
      .catch(err => {
        alert(err.message);
      });
  };

  const handleSignUp = async () => {
      await createUserWithEmailAndPassword(auth, email, password)
      .catch(err => {
        alert(err.message);
      });
  };

  const handleLogOut = () => {
    signOut(auth).then(() => {
      console.log("Sign Out Successful")
    }).catch((err) => {
      alert(err.message)
    });
    
  };

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user){
        clearInputs();
        setUser(user);
        const uid = user.uid;
        const userName=user.displayName;
        console.log(uid);
        if (userName) {
          console.log(userName);
          
        }
        else{
          console.log("anonymous")
        }
      }
      else{
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  let isOnHome =1;

  function setHome(){
      isOnHome=1;
  }

  function resetHome(){
      isOnHome=0;
  }
  

  return (
    <div className="App">
      {user?(<>

        <TopNavBar
        handleLogOut={handleLogOut}
        setEmail = {setEmail}
        
      />
        <BottomBar
        isOnHome={isOnHome}
        resetHome={resetHome}
        authListener = {authListener}
        />
      </>):
      <>
        <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        signInWithGoogle = {signInWithGoogle}
        confirmPassword = {confirmPassword}
        setConfirmPassword = {setConfirmPassword}
        signInWithFaceBook={signInWithFaceBook}
      />
      </>}
      
      
    </div>
  );
}

export default App;
