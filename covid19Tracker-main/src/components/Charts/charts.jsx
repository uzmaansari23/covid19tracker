import React,{useState,useEffect} from 'react'
import { fetchDailyData } from '../../api';
import styles from './Chart.module.css'
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarController,
    BarElement 

}from 'chart.js'
 ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarController,
    BarElement 

 )


const Chart = ({data,country}) =>{

    const [dailyData,setDailyData] = useState([]);
    


    useEffect(()=>{
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData())
        }
        fetchAPI()
        
    },[])
    
    const lineChart = (
        dailyData.length
        ?
        (<Line
        data ={{
            labels:dailyData.map(({date}) =>date),
            datasets:[{
                data:dailyData.map(({confirmed}) => confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:'true'
            },{
                data:dailyData.map(({deaths}) => deaths),
                label:'deaths',
                borderColor:'rgb(255,0,0,0.5)',
                fill:'true'
            }]
            
        }}
        
        />):null
    )

    const barChart = (
        

        data?.confirmed
        ?
        <Bar
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label:'Peoples',
                backgroundColor:[
                    'rgb(0,0,255,0.5)','rgb(0,255,0,0.5)','rgb(255,0,0,0.5)'
                ],
                data:[parseInt(data.confirmed.split(",").join("")),parseInt(data.recovered.split(",").join("")),parseInt(data.deaths.split(",").join(""))]
            }],
            
        }}
        />
        :
        null


        
    )
    

    
    return (
        <div className={styles.container}>
            {country?barChart:lineChart}
            
        </div>
    )
}

export default Chart