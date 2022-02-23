import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline'

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import DarkSwitch from '../components/mat/darkSwitch';

import NeuButton from '../components/mat/buttonText';
import NeuDialog from '../components/mat/dialog';

const CustContainer = styled(Container)(({ theme }) => ({
  background:theme.palette.secondary.main,
}));

const CustContainerInner = styled(Box)(({ theme }) => ({
  background:theme.palette.primary.main,
  padding:0,
  margin:0,
}));

export default function Material(props) {
 
  
  const [display, setDisplay] = React.useState('');
  const [operationStep, setOperationStep] = React.useState(0);
  const [memoryNum, setMemoryNum] = React.useState();
  const [memoryOper, setMemoryOper] = React.useState();
  const [themeDialog, setThemeDialog] = React.useState(false);

  React.useEffect(() => {
    //getCrypto(setCryptos, props.setLoading); // Pass in the state to update
  },[])
  
  const theme = createTheme({
    palette: {
      ...(props.darkState && {
        mode: 'dark',
        primary: {
          main: '#3c3c3c',
        },
        secondary: {
          main: '#3c3c3c',
        },
        background: {
          default: '#3c3c3c',
        },
        
        
        text: {
          primary: '#fff',
          secondary: '#bbb',
        },

      }),
        
      ...(!props.darkState && {
        mode: 'light',
        primary: {
          main: '#fff',
        },
        secondary: {
          main: '#fff',
        },
        background: {
          default: '#ddd',
        },
 
        text: {
          primary: '#214166',
          secondary:'#000',
        },

      }),
        
    },
   
    
  });

  let navigate = useNavigate();

  const navigateClose = (theme) => {
    navigate(theme);
    setThemeDialog(false);
  }

  const clearDisplay = ()=>{
    //console.log(value.target.innerText)
    setDisplay('');
    setMemoryNum();
    setMemoryOper();
    setOperationStep(0);
  }

  const appendDisplay = (value)=>{
    //console.log(value.target.innerText)
    var valueText = value.target.innerText;

    switch(operationStep){
      case 0:
      case 1:
        setDisplay(display + valueText)
        setOperationStep(1);
        break;
      case 2:
        setDisplay(valueText)
        setOperationStep(3);
        break;
      case 3:
        setDisplay(display + valueText)
        break;
      case 4:
        setDisplay(valueText)
        setOperationStep(1);
        break;
    }
  }

  const deleteDisplaychar = ()=>{
    //console.log(value.target.innerText)
    switch(operationStep){
      case 1:
        var displaySlice = display.slice(0,-1)
        setDisplay(displaySlice)
        //console.log(displaySlice.type)
        if (displaySlice == ''){
          setOperationStep(0);
        }
        break;
      case 3:
        var displaySlice = display.slice(0,-1)
        setDisplay(displaySlice)
        //console.log(displaySlice.type)
        if (displaySlice == ''){
          setDisplay(memoryNum + memoryOper);
          setOperationStep(2);
        }
        break;
      case 2:
        setDisplay(display.slice(0,-1))
        setMemoryNum();
        setMemoryOper();
        setOperationStep(1);
        break;
      case 4:
        clearDisplay();
        break;
    }
  }

  const evaluateMemory = ()=>{
    //console.log(value.target.innerText)
    var result;
    if (operationStep === 3){
      switch(memoryOper){
    
        case '/':
          result = (memoryNum / parseFloat(display))
          break;
        case 'x':
          result = (memoryNum * parseFloat(display))
          break;
        case '-':
          result = (memoryNum - parseFloat(display))
          break;
        case '+':
          result = (memoryNum + parseFloat(display))
          break;
        case '%':
          result = (parseFloat(display) * (memoryNum/100) )
          break;
      }
      setDisplay(result);
      //console.log(result)
      setOperationStep(4);
      setMemoryNum();
      setMemoryOper();
      return result;
    }
    
  }

  const operationDisplay = (value)=>{
    var valueText = value.target.innerText;
    switch(operationStep){
      case 1:
        setMemoryNum(parseFloat(display));
        setDisplay(display + valueText);
        setMemoryOper(valueText);
        setOperationStep(2);
        break;
      case 2:
        setDisplay(display.slice(0,-1) + valueText)
        setMemoryOper(valueText);
        break;
      case 3:
        var result = evaluateMemory();
        setMemoryNum(parseFloat(result));
        setMemoryOper(valueText);
        setDisplay(result + valueText);
        setOperationStep(2);
        break;
      case 4:
        setMemoryNum(parseFloat(display));
        setMemoryOper(valueText);
        setDisplay(display + valueText);
        setOperationStep(2);
        break;
    }
 
  }



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustContainer 
        maxWidth="sm" 
        sx={{overflow:'hidden', height:'100vh', px:0}}
      >
        <NeuDialog themeDialog={themeDialog} open={themeDialog} >
          <DialogTitle sx={{fontSize:'40px', mx:'2vw', textAlign:'center'}} >Change Theme</DialogTitle>
            <List >
              <ListItem>
                <NeuButton sx={{mx:'20px', my:'6px'}} handleClick={()=>navigateClose('/neumorphism')}>
                  Neuphormism
                </NeuButton>
            </ListItem>
            <ListItem>
                <NeuButton sx={{mx:'20px', my:'6px'}} handleClick={()=>navigateClose('/minimalism')}>
                  Minimalism
                </NeuButton>
            </ListItem>
            <ListItem>
                <NeuButton sx={{mx:'20px', my:'6px'}} handleClick={()=>navigateClose('/material')}>
                  Material
                </NeuButton>
            </ListItem>
  
            </List>
          
        </NeuDialog>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'end',px:'20px', my:'3vh'}}>
          <Button 
            variant='outlined' 
            //color='primary' 
            endIcon={<KeyboardArrowDownIcon  />}
            sx={{
              color:'text.primary',
              borderColor:'text.primary',
              borderWidth:'3px',
              fontSize:'32px',
              fontWeight:'600',
              marginRight: 'auto', 
              mt:.8,
              textTransform:'none',
            }}
            onClick={()=> setThemeDialog(true)}
          >
              Material
          </Button>
          
          <DarkSwitch sx={{marginRight: 10}} darkState={props.darkState} setDarkState={props.setDarkState}/>
        </Box>
        <Box sx={{py:'8vh', px:'40px', overflow:'auto'}}>
          <Typography variant="h1" sx={{ fontSize: '50px', fontWeight: 600, textAlign:'end' }}>
            {(display === '' ? '0' : display)}
          </Typography>
        
        </Box>
        <CustContainerInner
          //maxWidth="100%" 
          sx={{height:'100%', width:'100%', m:0}}
        >
          <Grid 
            container
            justifyContent='center'
            //spacing={4}
            rowSpacing={'0px'}
            columnSpacing={'0px'}
            sx={{mb:'11px'}}
          >
            <Grid item xs={3} sx={{}}>  
              <NeuButton 
                handleClick={clearDisplay} 
                //sx={{backgroundColor:'#f00', '&:active':{backgroundColor:'#f00'},'&:focus':{backgroundColor:'#f00'}}} 
              >
                AC
              </NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}}>  
              <NeuButton handleClick={deleteDisplaychar} >Del</NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={operationDisplay} >%</NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={operationDisplay} outline >/</NeuButton>
            </Grid>

            <Grid item xs={3} sx={{}}>  
              <NeuButton handleClick={appendDisplay} >7</NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={appendDisplay} >8</NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={appendDisplay} >9</NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={operationDisplay} outline >x</NeuButton>
            </Grid>

            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={appendDisplay} >4</NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={appendDisplay} >5</NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={appendDisplay} >6</NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={operationDisplay} outline >-</NeuButton>
            </Grid>

            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={appendDisplay} >1</NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={appendDisplay} >2</NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={appendDisplay} >3</NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={operationDisplay} outline >+</NeuButton>
            </Grid>

            <Grid item xs={6} sx={{}} >  
              <NeuButton handleClick={appendDisplay} >0</NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={appendDisplay} >.</NeuButton>
            </Grid>
            <Grid item xs={3} sx={{}} >  
              <NeuButton handleClick={evaluateMemory} outline >=</NeuButton>
            </Grid>
        
          </Grid>
        </CustContainerInner>
        
      
      </CustContainer>   

    </ThemeProvider>
    

    
  );
}