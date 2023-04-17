import axios from "axios";
import React, {useState} from "react";

const GetHistory = () => {
    const [packageName, setPackage] = useState('');
    const [packageHistory, setPackageHistory] = useState('');
    const [recieveData, setRecieveData] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add code to submit the form to your backend
        console.log('Package:', packageName);
        axios.get(`http://localhost:8080/package/byName/${packageName}`,{
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('token')
            }
        })
        .then(response => {
            setPackageHistory(response.data);
            setRecieveData(true);
            
        })
        .catch(error => {
            console.log(error);
          });
        };
    return(
        <div>
        <div>
            <h1>Here, you can retrieve the history of package by searching for it by name</h1>
            <h3>Enter Name of Package Below</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Package Name: </label>
                <input
                type="text"
                placeholder="Package Name"
                value={packageName}
                onChange={(event) => setPackage(event.target.value)}
                required
                />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        {recieveData &&
            <div>
                <p>Package History:{" "}{packageHistory.packageHistory}</p>
                </div>}
        </div>
    );
}

export default GetHistory;