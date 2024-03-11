
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

export function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("123456@egat.co.th");
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
      const pattern = /^(1|2|3|4|5)[0-9]{5}@egat.co.th$/
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
        className='bg-login'
        onSubmit={handleSubmit}
      >
        <Box
          component="img"
          sx={{
            width: '45%',
            mt:'30%',
            mb:'10%',
            mx: 'auto'
          }}
          src="/images/logo3.png"
        />
        <Stack sx={{mx:3}} spacing={5}>
          
            <TextField
              required 
              id="outlined-controlled"
              label="กรุณาระบุอีเมลองค์กร"
              value={email}
              placeholder='กรอกอีเมล'
              sx={{mb:3}}
              inputProps={{style: {fontSize: 18} ,type: "email"}}
              onChange={handleChange}
              error={error}
 
            />
            {
              error?
              <div style={{fontSize: '12px', color: 'red'}}>อีเมลไม่ถูกต้อง
              เงื่อนไขการใช้บริการ<br/>
              - ต้องใช้ Email @egat.co.th เท่านั้น<br/>
              - ต้องใช้รหัสผู้ใช้งานเป็นตัวเลข 6 หลักเท่านั้น ห้ามมีตัวอักษรในรหัสผู้ใช้งาน เช่น 1XXXXX@egat.co.th<br/>
              - รหัสผู้ใช้งานต้องขึ้นต้นด้วยตัวเลข 1-5 เท่านั้น เช่น 1XXXXX@egat.co.th, 2XXXXX@egat.co.th
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