import React, { useRef } from 'react'
import { useState, useRef } from 'react';
import { DxcTextInput, DxcButton, DxcInset, DxcPasswordInput } from "@dxc-technology/halstack-react";
import {DXC_LOGO} from '../../utils/constants'
import { useNavigate } from 'react-router-dom';
import {checkValidData} from '../../utils/validInputs'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../utils/userSlice';

const linkedInLogo = (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width="438.536px"
      height="438.536px"
      viewBox="0 0 438.536 438.536"
      fill="currentColor"
    >
      <g>
        <path
          d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
        C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
        h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
        C438.532,59.576,430.49,40.204,414.41,24.123z M133.618,367.157H67.666V169.016h65.952V367.157z M127.626,132.332
        c-6.851,6.567-15.893,9.851-27.124,9.851h-0.288c-10.848,0-19.648-3.284-26.407-9.851c-6.76-6.567-10.138-14.703-10.138-24.41
        c0-9.897,3.476-18.083,10.421-24.556c6.95-6.471,15.942-9.708,26.98-9.708c11.039,0,19.89,3.237,26.553,9.708
        c6.661,6.473,10.088,14.659,10.277,24.556C137.899,117.625,134.477,125.761,127.626,132.332z M370.873,367.157h-65.952v-105.92
        c0-29.879-11.036-44.823-33.116-44.823c-8.374,0-15.42,2.331-21.128,6.995c-5.715,4.661-9.996,10.324-12.847,16.991
        c-1.335,3.422-1.999,8.75-1.999,15.981v110.775h-65.952c0.571-119.529,0.571-185.579,0-198.142h65.952v27.974
        c13.867-21.681,33.558-32.544,59.101-32.544c22.84,0,41.21,7.52,55.104,22.554c13.895,15.037,20.841,37.214,20.841,66.519v113.64
        H370.873z"
        />
      </g>
    </svg>
  );

const Login =() => {


    const [value, setValue] = useState("");
    const onChange = ({ value }) => {
      setValue(value);
    };
    const onBlur = ({ value }) => {
      setValue(value);
    };

    const dispatch = useDispatch()
    
    const [showPassword, setShowPassword] = useState(false)
    const usernameRef = useRef('')
    const passwordRef = useRef('')
    const handleusernameChange = (event)=>{
      usernameRef.current = event.value
    }
    const handlePasswordChange = (event)=>{
      passwordRef.current =event.value
    }
    
    
    const navigate = useNavigate()
    
   
    const handleSubmit = ()=>{
      
      
      const username = usernameRef.current
      const password = passwordRef.current
      console.log(username, password);

      const togglePassword = ()=>{
        setShowPassword(!showPassword)
      }
      //Write some authentication logic and valid username logic

      const message = checkValidData({username, password})
      console.log(message);
      
      if(message===null){
        dispatch(addUser(username, password))
        navigate('/browse')
      }
     
     
    }

    return (
        <div className='flex justify-centers' >
          <div className="m-5 p-2">
            <img src={DXC_LOGO} alt=''/>
          </div>
          <div className='m-5 ml-48'>
            <h1 className='text-3xl pt-3'>Secure System Login</h1>
            <p className=' max-w-xs'>
            
            Welcome, 

            You are about to log into a DXC Technology secure system. Once your ID and password have been accepted, this single login will eliminate the need for any further security code entry.

            If you have reached this page by mistake, or do not have access rights to this system, please click the Cancel button below.
        </p> 
          <div className=''>
            <DxcInset space="1rem">
                <DxcTextInput
                 label="email"
                 onChange={handleusernameChange}
                 ref={usernameRef}
                 
               
                />
        
              </DxcInset>
              <DxcInset space="1rem">
                <DxcPasswordInput
                  label="Password"
                  onChange={handlePasswordChange}
                  ref={passwordRef}
                 
        
                />
              </DxcInset>
              
              <DxcInset space="2rem">
                <DxcButton 
                label="Submit" 
                onClick={handleSubmit} 
                />
               
              </DxcInset>
            </div>
           
          </div>
       
      
        </div>
      
    );
  }

  export default Login