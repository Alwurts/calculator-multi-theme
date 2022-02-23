import * as React from 'react';
import { styled } from '@mui/material/styles';


import Button from '@mui/material/Button';



const CustButton = styled(Button)(({ theme }) => ({
  width:'100%',
  height:'8vh',
  borderRadius:'50px',
  fontSize:'30px',
  textTransform:'none',
  color: theme.palette.text.primary,
  background: theme.palette.primary.main,
  borderColor: theme.palette.text.primary,
  
  '&:hover': {
    color: theme.palette.text.secondary,
 },
  '&:active': {
  }, 
}));



export default function NeuButton(props) {

  
  return (
      <CustButton 
        sx={[
          // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),

          props.outline && {
           
            borderWidth:'2px',
            borderStyle:'solid',
          }
  
        ]}
        onClick={props.handleClick}
      >
        {props.children}
      </CustButton>
  );
}