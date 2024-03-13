import { useState } from "react";
import "./App.css";

function App() {
  const [success,setSuccess]=useState();
  const [error,setError]=useState();
  const [firstname,setFirstName]=useState();
  const [lastname,setLastName]=useState();
  const [email,setEmail]=useState();

  const handleForm=(e)=>{
    e.preventDefault();
    if(!firstname || !lastname || !email){
      setError("Invalid Credentials")
      setSuccess("")
    }
    else{
      setError("");
      setSuccess("Successfully Register")
    }
  }
  return (
    <div className="App">
      <div className="login">
        <form>
        <h1>React Form</h1>
          <label>firstname:</label>
          <input type="text" required onChange={(e)=>setFirstName(e.target.value)} value={firstname} />
          <label>lastname:</label>
          <input type="text" required onChange={(e)=>setLastName(e.target.value)} value={lastname}/>
          <label>email :</label>
          <input type="email" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
          <button onClick={handleForm}>submit </button>
          {
            error ? <div className="error">{error}</div> :   <div className="success">{success}</div>

          }
          
        </form>
      </div>
    </div>
  );
}

export default App;
