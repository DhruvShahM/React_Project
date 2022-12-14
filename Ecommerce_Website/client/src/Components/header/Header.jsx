import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButton';

const StyledHeader = styled(AppBar)`
  background:#2874f0;
  height:55px;
`;

const Component = styled(Box)`
margin-left:12%;
line-height:0;
`

const SubHeading = styled(Typography)`
    font-size:10px;
    font-style:italic
`

const PlusImg=styled('img')({
    width:10,
    height:10,
    marginLeft:4
})

const CustomButtonWrapper=styled(Box)`
    margin:0 5% 0 auto;
    display:flex;
`

const Header = () => {
    const logoUrl = `https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png`;
    const subURL=`https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png`;
    return (
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
            {/* style={{marginLeft:0}} */}
                <Component >
                    <img src={logoUrl} alt="logo" style={{ width: 75 }} />
                    <Box style={{display:'flex'}}>
                        <SubHeading>Explore 
                            <Box component="span" style={{color:'#FFE500'}}>&nbsp;Plus</Box></SubHeading>
                            <PlusImg src={subURL} alt="Sub-logo" />
                    </Box>
                </Component>
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}


export default Header;