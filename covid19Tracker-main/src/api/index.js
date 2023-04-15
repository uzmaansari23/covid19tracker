import axios from 'axios'
 const url ='https://covid19.mathdro.id/api'

 export const fetchData = async(country)=>{
    let changeableUrl = url
    if(country){
        changeableUrl= `${url}/countries/${country}`

    }
    try{
       const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl)
      
       return ({confirmed,recovered,deaths,lastUpdate} )
    }
    catch(error){
       console.error(error)
    }
 }

 export const fetchDailyData = async(country)=>{
    
    try{
       const {data} = await axios.get(`${url}/daily`)
 
       const modifiedData = data.map((dailyData)=>({
         confirmed:dailyData.confirmed.total,
         deaths:dailyData.deaths.total,
         date:dailyData.reportDate
       }))
       
       return modifiedData
    }
    catch(error){
       console.error(error)
    }
 }

 export const fetchCountries = async(country)=>{
    
    try{
       const res = await axios.get(`${url}/countries`)
       console.log(res)
       return res
    }
    catch(error){
       console.error(error)
    }
 }