import './cards.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from "@material-ui/core";





const Cards = () => {
    const url = "https://covid19.mathdro.id/api";

    const fetchData = async () => {
        let changeableUrl = url;
        if (country) {
          changeableUrl = `${url}/countries/${country}`;
        }
        const res = await axios.get(`${changeableUrl}`)
        .then((res)=>{
            const infectedData = res.data.confirmed.value;
            const recoveredData = res.data.recovered.value;
            const deathData = res.data.deaths.value;
            const lastUpdate = res.data.lastUpdate;

            console.log(infectedData)
            setInfected(infectedData)
            setRecovered(recoveredData)
            setDeaths(deathData)
            setLast(lastUpdate)
        })
        .catch(error => console.error('error'))
    }
  
   const [infected,setInfected]=useState(null)
   const [recovered,setRecovered]=useState(null)
   const [deaths,setDeaths]=useState(null)
   const [last,setLast]=useState(null)
   const [country,setCountry]=useState(null)
   const handleChange = (e) =>{
let val= e.target.value

setCountry(val)
   }
   useEffect(()=>{
    fetchData()
},[country])

// const fetchCountries = async () => {
//     const url = "https://covid19.mathdro.id/api/countries";
//     const { data :{countries}}  = await axios.get(`${url}`)
//     .then((res)=>{
//         const countriesData = res.name;
//         console.log(countriesData)
//         setCountries(countriesData)
        
        
//     })
//     .catch(error => console.error('error'))
// }
// fetchCountries()
// const [countries,setCountries]=useState(null)

 const fetchCountries = async () => {
    try {
      const {
        data: { countries },
      } = await axios.get(`${url}/countries`);
      return countries.map((country) => country.name);
    } catch (error) {
      console.log(error);
    }
  };
  const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
      const fetchAPI = async () => {
        setFetchedCountries(await fetchCountries());
      };
      fetchAPI();
    }, [setFetchedCountries]);
  
    return (
      <FormControl
    //    className={styles.formControl}
       >
        <NativeSelect
          defaultValue=""
          onChange={handleChange}
        >
          <option value="">Global</option>
          {fetchedCountries.map((country, key) => (
            <option key={key} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    );
  };
    return(
        <>
          <div className='row' style={{marginLeft:'0%'}}>



<div className='columnFacts' style={{ justifyContent: 'center' }}

>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginBottom:'5%' ,marginTop:'5%' }}>

        <br></br>
        <h4 style={{ fontSize: '16px', color: '#f5f5f5' }}>{infected}</h4>
        <span className='spanNum'>{new Date(last).toDateString()}</span>
        <span className='spanNum'>{new Date(last).toLocaleTimeString()}</span>

    </div>



</div>



<div className='columnFacts' style={{ justifyContent: 'center' }}

    >
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginBottom:'5%' ,marginTop:'5%' }}>
       <br></br>
        <h4 style={{ fontSize: '16px', color: '#f5f5f5' }}>{recovered}</h4>
        <span className='spanNum'>4708</span>


    </div>

       </div>
<div className='columnFacts' style={{ justifyContent: 'center' }}

    >
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginBottom:'5%' ,marginTop:'5%'}}>
        <br></br>
        <h4 style={{ fontSize: '16px', color: '#f5f5f5' }}>{deaths}</h4>
        <span className='spanNum'>15</span>
    </div>


</div>



<div className='columnFacts' style={{ justifyContent: 'center' }}

    >
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginBottom:'5%' ,marginTop:'5%' }}>


        <br></br>
        <h4 style={{ fontSize: '16px', color: '#f5f5f5' }}></h4>
        <span className='spanNum'>1286</span>

    </div>


</div>

</div>
<div>
    {/* <input type='text' onChange={handleChange}/> */}
    <CountryPicker/>
    </div>

        </>
    )
}


export default Cards