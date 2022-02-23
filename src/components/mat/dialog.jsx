import * as React from 'react';
import { styled } from '@mui/material/styles';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import NeuButton from './buttonText';

const CustDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    background:theme.palette.primary.main,
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