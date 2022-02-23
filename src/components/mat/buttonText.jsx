import * as React from 'react';
import { styled } from '@mui/material/styles';


import Button from '@mui/material/Button';



const CustButton = styled(Button)(({ theme }) => ({
  width:'100%',
  height:'11.5vh',
  fontSize:'30px',
  textTransform:'none',
  //borderRadius:'50px',
  //color: theme.palette.text.primary,
  //background: theme.palette.primary.main,
  borderColor: theme.palette.text.primary,
  borderWidth:'2px',
  borderStyle:'solid',
  
  '&:hover': {
    //color: theme.palette.text.secondary,
 },
  '&:active': {
  }, 
}));



export default function NeuButton(props) {

  
  return (
      <CustButton 
        variant='primary'
        sx={[
          // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),

  
        ]}
        onClick={props.handleClick}
      >
        {props.children}
      </CustButton>
  );
}