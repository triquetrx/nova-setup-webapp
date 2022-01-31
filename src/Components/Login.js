import React from "react";
import './Login.css'

const Login = (props)=>{
    
    const {email, 
        setEmail, 
        password, 
        setPassword, 
        confirmPassword,
        signInWithGoogle,
        handleLogin, 
        handleSignUp, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        setConfirmPassword,
        passwordError,
        signInWithFaceBook} = props;
    

     function handleSubmit(event){
        event.preventDefault();
        if (setPassword.current.value !== setConfirmPassword.current.value){
            alert("Password Not Matching")
        }
        console.log("formSubmissionInProcess");
    }

    return(
        <section className="Login">
            <div className="sidenav">
         <div className="login-main-text">
            <div className="sideBarContainer">
                {hasAccount?(
                <>
                    <h2>Register</h2>
                    <br/>
                    <p>Register to submit and explore cool setups!!</p>
                </>):
                <>
                    <h2>Login</h2>
                    <br/>
                    <p>Login to submit and explore cool setups!!</p>
                </>}
            </div>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form onSubmit={handleSubmit}>
               <div className="formContainer">
                   {hasAccount?(
                    <>
                    <div className="form-group">
                     <label>Email</label>
                     <input type="text" 
                        className="form-control" 
                        placeholder="Enter your Email Id" 
                        autoFocus 
                        required 
                        value={email} 
                        onChange={e=>setEmail(e.target.value)}/>
                        <p className="errorMessage">{emailError}</p>
                  </div>
                  <div className="form-group">
                     <label>Create Password</label>
                     <input type="password" 
                        className="form-control" 
                        placeholder="Create Password"
                        required
                        value={password}
                        onChange={e=>setPassword(e.target.value)}/>
                        <p className="errorMessage">{passwordError}</p>
                  </div>
                  <div className="form-group">
                     <label>Confirm Password</label>
                     <input type="password" 
                        className="form-control" 
                        placeholder="Create Password"
                        required
                        value={confirmPassword}
                        onChange={e=>setConfirmPassword(e.target.value)}/>
                  </div>
                    </>
                   ):<>
                   <div className="form-group">
                     <label>Email</label>
                     <input type="text" 
                        className="form-control" 
                        placeholder="Email Id" 
                        autoFocus 
                        required 
                        value={email} 
                        onChange={e=>setEmail(e.target.value)}/>
                        <p className="errorMessage">{emailError}</p>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" 
                        className="form-control" 
                        placeholder="Password"
                        required
                        value={password}
                        onChange={e=>setPassword(e.target.value)}/>
                        <p className="errorMessage">{passwordError}</p>
                  </div>
                   </>}
                  
                  
                </div>
                  <div className="btnContainer">
                      {!hasAccount ? (
                          <>
                            <div className="AllButtons row">
                                <button onClick={handleLogin} className="btn btn-primary col-md-auto" id="loginButton">Login</button>
                                <button onClick={signInWithGoogle} className="btn btn-dark col-md-auto" id="signInWithGoogle">Sign In With Google</button>
                                <button onClick={signInWithFaceBook} className="btn btn-dark col-md-auto" id="signInWithFaceBook">Sign With FaceBook</button>
                                <br/>
                                <p id="linkAccount" onClick={()=>setHasAccount(!hasAccount)}>
                                    Register the old way
                                </p>
                            </div>
                          </>
                      ):(
                            <>
                                <div className="AllButtons row">
                                    <button onClick={handleSignUp} className="btn btn-primary col-xs-4 col-md-auto" id="registerButton">Register</button>
                                    <button id="linkAccount" className="btn btn-dark col-md-auto col-md-auto" id="signInWithGoogle" onClick={()=>setHasAccount(!hasAccount)}>
                                    Have an account
                                    </button>
                                </div>
                            </>
                    )}
                    </div>
               </form>
            </div>
         </div>
      </div>

        </section>
    );
};

export default Login;