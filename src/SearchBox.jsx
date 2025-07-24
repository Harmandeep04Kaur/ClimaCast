import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import './SearchBox.css'; 

export default function SearchBox({Updateinfo}) {
let [city, setCity] = useState("");
let [error,setError]=useState(false);
const API_URL="https://api.openweathermap.org/data/2.5/weather";
const API_KEY="8af3a1ed78b3461f9f4dcd3ac765ecbf";

let getweatherinfo=async()=>{
try{
let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
let jsonresponse=await response.json();
console.log(jsonresponse);
let result={
  Name:jsonresponse.name,
    temp:jsonresponse.main.temp,
    tempMin:jsonresponse.main.temp_min,
    tempMax:jsonresponse.main.temp_max,
    Humidity:jsonresponse.main.humidity,
    Feelslike:jsonresponse.main.feels_like,
    Description:jsonresponse.weather[0].description
  
   
}
console.log(result);
return result
}catch(err){
  throw err;
}
};

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit =async (evt) => {
    try{
    evt.preventDefault();
    console.log("City:", city);
    setCity("");
   let info= await getweatherinfo();
   Updateinfo(info)
  }catch (err){
    setError(true);

  }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <TextField
          id="city"
          label="Enter city name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ fontWeight: "bold", textTransform: "capitalize" }}
        >
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exist </p> }
      </form>
    </div>
  );
}

