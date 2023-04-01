import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [value, setValue] = useState();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(38,73,136,1) 38%, rgba(0,212,255,1) 93%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">BlogApp</Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft="auto" marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                LinkComponent={Link}
                to="/blogs"
                sx={{ color: "orange" }}
                label=" All Blogs"
              />
              <Tab
                LinkComponent={Link}
                to="/myblogs"
                sx={{ color: "orange" }}
                label=" My Blogs"
              />
            </Tabs>
          </Box>
        )}

        <Box display="flex" marginLeft="auto">
        { !isLoggedIn && <><Button
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            SignUp
          </Button>
          <Button
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            {" "}
            Login
          </Button> </> }

          {/* Show the 'Logout' button if userr is logged in  */}
          {isLoggedIn && (
            <Button
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
