import { useEffect, useState } from 'react';
import './countryPicker.css'
import { NativeSelect, FormControl } from "@material-ui/core";
import axios from 'axios'




const CountryPicker = () => {
    const url = "https://covid19.mathdro.id/api/countries";

    const fetchCountries = async () => {
     
        const res = await axios.get(`${url}`)
        .then((res)=>{
            const countriesData = res.data.countries.name;
            console.log(countriesData)
            setCountries(countriesData)
            
            
        })
        .catch(error => console.error('error'))
    }
    fetchCountries()
    const [countries,setCountries]=useState(null)
    // useEffect(()=>{
    //     fetchCountries()
    // },[])
    return(
        <>
    <FormControl >
      <NativeSelect
        defaultValue=""
        // onChange={(e) => {
        //     e.target.value

        // }}
      >
        <option value="">Global</option>
        {/* {countries.map((country, key) => (
          <option key={key} value={country}>
            {country}
          </option>
        ))} */}
      </NativeSelect>
    </FormControl>
        </>
    )
}
export default CountryPicker