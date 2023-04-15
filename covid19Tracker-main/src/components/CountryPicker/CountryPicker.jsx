import { FormControl, NativeSelect } from '@mui/material'
import Styles from './CountryPicker.module.css'
function CountryPicker({countries,onCountryChange}){
    
        if(countries.length===0){
            return (null)
        }
        else{
            return(
        <FormControl>
            <NativeSelect className={Styles.formControl} onChange={e=>onCountryChange(e.target.value)}>
                        <option value="">Global</option>
                {countries.map(
                    (country,idx) => (
                        <option key={idx} value={country.name}>{country.name}</option>
                       
                    )
                )}
                
            </NativeSelect>
  
</FormControl>

    )}
}
export default CountryPicker
