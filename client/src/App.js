import './App.css';
import { useState } from "react";


function App() {

  const [showMessage,setMessage] = useState({})
  const [showErrorMessage, setErrorMessage] = useState({})
  
  const sendRequest = async ()=>{
    
    const data = await fetch('https://mernappbackend-yli5.onrender.com/hitme',{
      method: 'GET',
      headers: {
        'USER-ID': "23423"
      }
    })

    const res = await data.json()

    setMessage(res)
    setErrorMessage({})

    if(!data.ok){

      setErrorMessage(res)
    }

  }
  return (
    <div className="App">
      <h1> API Rate Limiter </h1>
          <button onClick={sendRequest}> Hit Me </button>
        {showMessage.message && <p className='access'> {showMessage.message} and API hit count is <strong>{showMessage.count}</strong>  </p>}
        {showErrorMessage.errorMessage && <p className='error'>{showErrorMessage.errorMessage},Your API hit count is <strong>{showErrorMessage.count}</strong> wait for 60 sec to reset. Current time {showErrorMessage.timeDiff} sec </p>}
        

    </div>
  );
}

export default App;
