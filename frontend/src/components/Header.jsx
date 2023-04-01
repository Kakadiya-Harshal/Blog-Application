import React from "react";
import { AppBar, Typography, Toolbar ,Box , Button} from "@mui/material";

const Header = () => {
  return (
    <AppBar sx={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(38,73,136,1) 38%, rgba(0,212,255,1) 93%)"}} >
      <Toolbar>
        <Typography variant ="h4">BlogApp</Typography>
        <Box display ="flex" marginLeft="auto">
            <Button variant = "contained" sx= {{margin :1 ,borderRadius: 10}} color ="warning"> SignUp</Button>
            
            <Button variant = "contained" sx= {{margin :1,borderRadius : 10}} color ="warning"> Login</Button> 
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
