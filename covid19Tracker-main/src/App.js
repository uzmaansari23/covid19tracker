

import './App.css';
import Cards from './components/Cards/Card';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {useState,useEffect} from 'react'
import { fetchCountries, fetchData } from './api';
import coronaImg from './corona.png'
import Chart from './components/Charts/charts';
import axios from 'axios';

function App() {
  const [data,setData]= useState({})
  const [countries,setCountries]=useState([])
  const [country,setCountry]=useState('')
  const [barData,setBarData] = useState([])
    
   useEffect(()=>{
     function getData(){
      const options = {
        method: 'GET',
        url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
        headers: {
          'X-RapidAPI-Key': '434fb23327mshef01b55cda7c2d5p147d3fjsnf1a098af11d6',
          'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
       
        const modifiedData = {
          confirmed:response.data.world_total.total_cases,
          recovered:response.data.world_total.total_recovered,
          deaths:response.data.world_total.total_deaths,
          lastUpdate:response.data.world_total.statistic_taken_at,
        }
        console.log(response.data.countries_stat)
        const modifiedData1 = response.data.countries_stat.map((dailyData)=>({
          name:dailyData.country_name
        }))
        setBarData(response.data.countries_stat)
        setCountries(modifiedData1)
        setData(modifiedData)
       
      
      }).catch(function (error) {
        console.error(error);
      });
         
      }
      getData()
      
     } ,[])
    // useEffect(()=>{
    //   async function getCountry(){
    //     const res = await fetchCountries()
        
        
    //     setCountries(res.data.countries)
        
       
        
    //   }
    //   getCountry()
      
    // } ,[])

    function handleCountryChange(country){
     console.log(barData)
      barData.map((dailyData)=>{
      if(dailyData.country_name==country){
      const newData=  {
          confirmed:dailyData.cases,
          recovered:dailyData.total_recovered,
          deaths:dailyData.deaths,
          lastUpdate:"2022-04-24 11:18:01",
        }
        setData(newData)
      }
    })
      setCountry(country)

    }
 

  return (
    <div className="container">
      <img src={coronaImg} alt=""/>
      <Cards data={data} />
      <CountryPicker countries={countries} onCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/> 
      
    </div>
  );
}

export default App;
