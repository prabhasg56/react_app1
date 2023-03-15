import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

const Fields = ({name,email,index}) => {
    return (
        <div className='show_data'>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <Stack>
            <Button variant="contained" color='error'><DeleteIcon/></Button>
            </Stack>
        </div>
    )
}

export default Fields