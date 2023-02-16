import { IconButton } from '@mui/material'
import React from 'react'
import { Link, useNavigation } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';

function Footer() {
    const navigation = useNavigation();
    console.log(navigation);



    return (
        <div className='bottom container_full blurred_container bottom'>
            <div className="container jcsb">
                <Link to={'/'}>
                    <IconButton aria-label="delete">
                        <HomeIcon fontSize='large' />
                    </IconButton>
                </Link>
                <Link to={'/shop'}>
                    <IconButton aria-label="delete">
                        <PaymentIcon fontSize='large' />
                    </IconButton>
                </Link>
                <Link to={'/about'}>
                    <IconButton aria-label="delete">
                        <InfoIcon fontSize='large' />
                    </IconButton>
                </Link>
                <Link to={'/events'}>
                    <IconButton aria-label="delete">
                        <EventIcon fontSize='large' />
                    </IconButton>
                </Link>
            </div>
        </div>
    )
}

export default Footer