import React, { useEffect, useState } from 'react';
import {auth,provider} from "./config";
import Todo from './Todo';

const Dashobard = () => {
    const handleSignOut=()=>{
        auth.signOut();
        localStorage.clear()
        window.location.reload()
    }
    const [user, setUser] = useState(null);
useEffect(() => {
 const unsubscribe = auth.onAuthStateChanged((currentUser) => {
  setUser(currentUser);
 });

 return () => unsubscribe();
}, []);
// console.log("user",user)
  return (
    <>{user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleSignOut}>Sign Out</button>
         
        </div>
      ) : ''}


<br/>
{user? <Todo  />:''}
    </>
  )
}

export default Dashobard