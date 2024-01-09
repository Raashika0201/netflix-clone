import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-cnfig";

export default function Login(){

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
   
   
   const navigate = useNavigate();


   const handleLogIn = async() => {
    try{
        await signInWithEmailAndPassword(firebaseAuth,email,password);
    }catch(err){
        console.log(err.code);
    }
   };

   onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/");
   });

    return (<Container>
    <BackgroundImage />
    <div className="content">
        <Header/>
         <div className="form-container flex column a-center j-center">
            <div className="form flex column a-center j-center">
                <div className="title">
                    <h3>Login</h3>
                </div>
                <div className="container flex cloumn">
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                />
                
                <input type="password" placeholder="Password" name ="password" 
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                
                
                
                <button onClick={handleLogIn}>Log In</button>
                
                </div>
            </div>
         </div>
    </div>

    </Container>);
}

const Container = styled.div`
position:absolute;

.content {
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-column: 15vh 85vh;

    .form-container{
        gap:2rem;
        height:85vh;
        .form{
            padding: 2rem;
            background-color: #000000b0;
            color:white;
            gap:2rem;
            width:50vw;
            .container{
                gap: 2rem;
                input{
                    padding:0.5rem 1rem;
                    width:15rem;
                }
                button{
                    padding:0.5rem 1rem;
                    background-color: #e50914;
                    border: none;
                    cursor:pointer;
                    color:white;
                    border-radius: 0.2rem;
                    font-weight:bolder;
                    font-size:1.05rem;
                }
            }


        }
    }
    
}

`;