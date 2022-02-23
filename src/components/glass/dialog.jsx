import * as React from 'react';
import { styled } from '@mui/material/styles';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import NeuButton from './buttonText';

const CustDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    color: theme.palette.text.primary,
    background:'linear-gradient(15deg, rgba(153,0,255,1) 1%, rgba(21,42,114,1) 50%, rgba(17,138,135,1) 100%)',
    boxShadow: ('0 4px 30px ' + theme.palette.neuShadow2.primary),
    border: ('1px solid ' + theme.palette.neuShadow1.secondary),
  }

}));

export default function NeuDialog(props) {
  return (
    <CustDialog 
      open={props.themeDialog} 
      //PaperProps={{sx:{background:'#f00'}}} 
      sx={[
        // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      {props.children}
      
    </CustDialog>
  );
}