import React, {useState, useEffect} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const DropdownChecklist = (props) => {
    const [selItems, setSelItems] = useState([]);
    useEffect(()=>{
        props.setState(selItems)
    }, [selItems])

   
    return(
    <div>
        <FormControl sx={{ m: 1, width: 300 }}>
            {<InputLabel id="demo-multiple-checkbox-label">{props.tag}</InputLabel>}
            <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selItems}
            onChange={(e)=>{
                setSelItems(e.target.value)
                
            }}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
            >
            {props.items.map((item) => (
                <MenuItem key={item} value={item} name={item}>
                <Checkbox checked={selItems.indexOf(item) > -1} />
                <ListItemText primary={item} />
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        </div>
    )
    }
export default DropdownChecklist