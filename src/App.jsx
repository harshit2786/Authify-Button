import { useEffect, useState } from 'react'
import './App.css'
import Button from './component/Button'

function App() {
  const [tokens, setToken] = useState(null);
  const handleHelper = async(access_token) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        setToken(access_token);
        resolve("5 seconds have passed");
      }, 5000);
    });
    return;
  };
  useEffect(() => {
    console.log("Token",tokens)
  },[tokens])
  return (
    <>
        <Button completeLoad={true} handler={handleHelper} authOrigin={import.meta.env.VITE_APP_AUTHIFY_IP} text="Sign In with Microsoft" textStyle={{fontSize : "15px"}} id={"45dae2fc-3fab-445d-994d-d80abfd15174"} buttonStyle={{backgroundColor : "black" , height : "50px" , width : "200px"}} />
      
    </>
  )
}

export default App
