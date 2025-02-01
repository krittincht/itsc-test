import React, { useState, useEffect,Component } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {
    BrowserRouter as Router,
    Link,
    Outlet
  } from "react-router-dom";

export function LayoutBottomNav() {
    const [value, setValue] = React.useState(0);
    return (
        <Box sx={{backgroundColor:'#F6F6F6',paddingBottom:'84px'}}>
            <Outlet />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 ,maxWidth: {
                        xs: '100%',     // 0px and up
                        sm: '567px',    // 600px and up
                        md: '768px',    // 900px and up
                        lg: '1024px',   // 1200px and up
                        xl: '1536px'    // 1536px and up
                    },m:'0 auto', zIndex: 100 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    sx={{
                        height: '84px'
                    }}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction  component={Link} to="/home"   label="หน้าหลัก" icon={<HomeSharpIcon />} />
                    <BottomNavigationAction  component={Link} to="/history" label="ประวัติ" icon={<HistorySharpIcon />} />
                    <BottomNavigationAction  component={Link} to="/account"  label="บัญชี" icon={<PersonOutlineOutlinedIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
