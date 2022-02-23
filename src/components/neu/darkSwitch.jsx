import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';


const NeuSwitch = styled(Switch)(({ theme }) => ({
  width: 70,
  height: 38,
  padding: 0,
  overflow: 'unset',
  '& .MuiSwitch-switchBase': {
    margin: 0,
    padding: 3,
    transform: 'translateX(0px)',
    
    '&.Mui-checked': {
      color: '#fff', // Color of wave when clicked
      transform: 'translateX(32px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#d6b027',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#122069', // track color when active
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.primary.main, // Color of thumb in any case
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#d6b027',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#d6b027', //Track color when not active
    borderRadius: 30,
    //border: '4px solid #333';
    
    borderWidth:0,
    boxShadow: ('7px 7px 7px ' + theme.palette.neuShadow1.primary + ',-7px -7px 7px ' + theme.palette.neuShadow2.primary),
    //boxShadow: theme.palette.mode === 'dark' ? '7px 7px 7px #242424, -7px -7px 7px #323232' : '7px 7px 7px #cccccc, -7px -7px 7px #f4f4f4',

     
  },
}));

export default function DarkSwitch(props) {
 
  const handleChange = (event) => {
    props.setDarkState(event.target.checked);
  };

  return (

    <NeuSwitch 
      checked={props.darkState}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    
  );
}