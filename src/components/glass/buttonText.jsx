import * as React from 'react';
import { styled } from '@mui/material/styles';


import Button from '@mui/material/Button';



const CustButton = styled(Button)(({ theme }) => ({
  width:'100%',
  height:'8vh',
  borderRadius:'30px',
  fontSize:'30px',
  textTransform:'none',
  color: theme.palette.text.primary,
  background: theme.palette.neuShadow1.primary,
  boxShadow: ('0 4px 30px ' + theme.palette.neuShadow2.primary),
  border: ('1px solid ' + theme.palette.neuShadow1.secondary),
  //backdropFilter: 'blur(1.2px)',
  '&:hover': {

    background: theme.palette.neuShadow1.secondary,
    //boxShadow: ('7px 7px 10px ' + theme.palette.neuShadow1.primary + ',-7px -7px 10px ' + theme.palette.neuShadow2.primary + ',inset 7px 7px 10px ' + theme.palette.neuShadow1.primary + ', inset -7px -7px 10px ' + theme.palette.neuShadow2.primary),
  },
  '&:active': {
    background: theme.palette.neuShadow1.secondary,
  }, 
}));



export default function NeuButton(props) {

  
  return (
      <CustButton 
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