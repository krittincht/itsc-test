
import React, { useState, useEffect,Component } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import {
  BrowserRouter as Router,
  useNavigate 
} from "react-router-dom";
import { ReactSession } from 'react-client-session';
import Alert from '@mui/material/Alert';
export function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
      const user = ReactSession.get("user");
      if(user) {
        navigate('/home')
      }
    }, []);

    const handleChange = e => {
      setEmail(e.target.value);
      validate(e.target.value)
    };

    /**
     * Validates the given email value using a specific pattern.
     *
     * @param {string} email_value - The email value to be validated
     * @return {boolean} true if the email value is valid, false otherwise
     */
    const validate = (email_value) => {
      // create email verify regular expression
      const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      if (pattern.test(email_value)) {
        setError(false);
        return true
      } else {
        setError(true);
        
        return false
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const userEmail = email
      localStorage.setItem('email', userEmail);
      if (validate(userEmail)) {
        navigate('/otp', { state: { userEmail } });
      }
    };

    return (
      <Box
        component="form"
        sx={{
          height:'100vh',
          textAlign:'center',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <img
          style={{
            width: '45%',
            marginTop:'30%',
            marginBottom:'10%',
            marginLeft:'auto',
            marginRight:'auto'
          }}
          alt="ITSC-logo"
          src="/images/ITSC-logo.jpg"
        />
        <Stack sx={{mx:3, px:3}} spacing={5}>
          
            <TextField
              required 
              id="outlined-controlled"
              label="กรุณาระบุอีเมลองค์กร"
              value={email}
              placeholder='กรอกอีเมล'
              sx={{mb:3}}
              type="email"
              inputProps={{style: {fontSize: 18} ,type: "email"}}
              onChange={handleChange}
              error={error}
 
            />
            {
              error?
              <div style={{fontSize: '12px', textAlign: 'left'}}>
                <Alert severity="warning">
                <b>อีเมลไม่ถูกต้อง เงื่อนไขในการใช้บริการ</b><br/>
                ต้องใช้ Email ที่ออกโดยองค์กรที่ทำงานอยู่เท่านั้น<br/>
                </Alert>
              </div>
              :null
            }
          
            <Button 
              variant="contained"  
              type="submit"
              fullWidth
              className='NotoSansThai'
              sx={{ 
                borderRadius: 50 ,
                backgroundColor:'#461E99',
                padding:'16px 32px',
                fontSize:'16px',
              }}
            >ถัดไป <ArrowForwardOutlinedIcon sx={{ml:2}} />  </Button>
          
            <div style={{fontSize: '12px'}}>&copy; Copyright @ 2024 by NSD Neuron Co.,Ltd.</div>
        </Stack>
      </Box>
    );
}