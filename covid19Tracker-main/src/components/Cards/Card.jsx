import { Grid,Card ,CardContent ,Typography} from "@mui/material";
import styles from './Cards.module.css'
import CountUp from "react-countup";
import cx from 'classnames'

function Cards({data}){
    
    

 
     console.log(data)
 
    if(Object.keys(data).length===0){ 
        return (
        <h1>Loading..</h1>
    )}
    else{
        return(
            <div className={styles.container}>
            <Grid container spacing={3}>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                <CardContent>
                    <Typography variant="h5" color='textSecondary'>Infected</Typography>
                    <Typography variant='h5'><CountUp start={0} end={parseInt(data.confirmed.split(",").join(""))} duration={2.4} separator=','/></Typography>
                    <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of active cases of Covid-19.</Typography>
                </CardContent>
                

            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography variant="h5" color='textSecondary'>Recovered</Typography>
                    <Typography variant='h5'><CountUp start={0} end={parseInt(data.recovered.split(",").join(""))} duration={2.4} separator=','/></Typography>
                    <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of active cases of Covid-19.</Typography>
                </CardContent>
                

            </Grid>

            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                <CardContent>
                    <Typography variant="h5" color='textSecondary'>Deaths</Typography>
                    <Typography variant='h5'><CountUp start={0} end={parseInt(data.deaths.split(",").join(""))} duration={2.4} separator=','/></Typography>
                    <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of active cases of Covid-19.</Typography>
                </CardContent>
                

            </Grid>


        </Grid>
        </div>
        )
    }
    
}
export default Cards