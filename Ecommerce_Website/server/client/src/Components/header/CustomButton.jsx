import { Box, Button, Typography, styled,Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';
import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import { useNavigate,Link } from 'react-router-dom';
// components
import Profile from './Profile';
import { useSelector } from 'react-redux';


const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *': {
        marginRight: '40px !important',
        fontSize: 16,
        alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

// const Wrapper=styled(Box)`
// display:flex;
// margin:0 3% 0 auto;
// & > button, & > p, & > div {
//     margin-right:40px;
//     font-size:16px;
//     align-items:center;
// }
// `


const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)`
    color:#2874f0;
    background:#FFFFFF;
    text-transform:none;
    padding:5px 40px;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px;
`

const CustomButtons = () => {

    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext);

    const {cartItems}=useSelector(state=>state.cart);

    const openDialog = () => {
        setOpen(true);
    }

    const navigate = useNavigate();

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }
            <Typography style={{ marginTop: 3, width: 135 }}>
                Become a seller
            </Typography>
            <Typography style={{ marginTop: 3 }}>
                More
            </Typography>
            <Container to="/cart">
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart badgeContent={cartItems?.length} />
                    </Badge>
                    <Typography style={{marginLeft:10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;