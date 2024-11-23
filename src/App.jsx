import { useState } from 'react'
import './App.css'
import Button from './component/Button'

function App() {
  const [tokens, setToken] = useState(null);
  const handleHelper = (access_token) => {
    setToken(access_token);
  };
  
  console.log("Tokenss", tokens);
  return (
    <>
        <Button handler={handleHelper} authOrigin={import.meta.env.VITE_APP_AUTHIFY_IP} text="Sign In with Microsoft" textStyle={{fontSize : "15px"}} id={"45dae2fc-3fab-445d-994d-d80abfd15174"} buttonStyle={{backgroundColor : "black" , height : "50px" , width : "200px"}} />
      
    </>
  )
}

export default App
