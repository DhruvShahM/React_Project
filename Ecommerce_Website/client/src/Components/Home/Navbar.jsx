import {Box,styled, Typography} from '@mui/material';
import { navData } from '../../Constants/data';

const Component=styled(Box)`
    display:flex;
    margin:55px 130px 0 130px;
    justify-content:space-between
`

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
                   return <Container>
                        <img src={data.url} alt="nav" />
                         <Text>{data.text}</Text>
                    </Container>
                })
            }
        </Component>
    )
}

export default NavBar;