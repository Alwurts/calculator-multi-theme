import * as React from 'react';
import { styled } from '@mui/material/styles';


import Box from '@mui/material/Box';



const CustBox = styled(Box)(({ theme }) => ({
  borderRadius:'20px',
  fontSize:'30px',
  color: theme.palette.text.primary,
  background: theme.palette.neuShadow1.primary,
  boxShadow: ('0 4px 30px ' + theme.palette.neuShadow2.primary),
  border: ('1px solid ' + theme.palette.neuShadow1.secondary),
  //backdropFilter: 'blur(1.2px)',
  '&:hover': {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
    //boxShadow: ('7px 7px 10px ' + theme.palette.neuShadow1.primary + ',-7px -7px 10px ' + theme.palette.neuShadow2.primary + ',inset 7px 7px 10px ' + theme.palette.neuShadow1.primary + ', inset -7px -7px 10px ' + theme.palette.neuShadow2.primary),
  },
  '&:active': {
    background: theme.palette.primary.main,
    boxShadow: ('7px 7px 10px ' + theme.palette.neuShadow1.primary + ',-7px -7px 10px ' + theme.palette.neuShadow2.primary + ',inset 7px 7px 10px ' + theme.palette.neuShadow1.primary + ', inset -7px -7px 10px ' + theme.palette.neuShadow2.primary),
  }, 
}));



export default function Display(props) {

  
  return (
      <CustBox 
        sx={[
          // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      >
        {props.children}
      </CustBox>
  );
}