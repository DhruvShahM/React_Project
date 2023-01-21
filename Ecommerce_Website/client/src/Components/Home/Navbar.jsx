import {Box,styled, Typography} from '@mui/material';
import { navData } from '../../Constants/data';

const Component=styled(Box)(({theme})=>({
    display:'flex',
    margin:'55px 130px 0 130px',
    justifyContent:'space-between',
    overflow:'hidden',
    [theme.breakpoints.down('lg')]:{
        margin:0
    }
}))

const Container=styled(Box)`
    padding:12px 8px;
`

const Text=styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family:inherit;
    text-align:center;
`

const NavBar=()=>{
    return (
        <Component>
            {
              navData.map(data=>{
                   return <Container key={data.text}>
                        <img src={data.url} alt="nav" />
                         <Text>{data.text}</Text>
                    </Container>
                })
            }
        </Component>
    )
}

export default NavBar;