import { Box, Button, Divider, Grid, IconButton, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const Home: NextPage = () => {

  const addresInput = () => {
    return(
      <Grid  container direction="column" xs={15}>

        <Grid item paddingTop={1} paddingBottom={1}>
          <TextField
            fullWidth
            id="txt_cep"
            label="CEP"
            variant="outlined"

            InputProps={{
             endAdornment: 
              <IconButton sx={{bgcolor: '#1C5B75', borderRadius: '5px'}}
              onClick={()=>{

               }}>
               <SearchIcon sx={{color: 'white'}}/>
             </IconButton>
           }}
          />
        </Grid>      

          <Grid item xs={1.5} paddingBottom={1}> 
            <TextField id="txt_uf" label="UF" variant="outlined"/>  
          </Grid>

          <Grid item xs={8} paddingBottom={1}> 
            <TextField id="txt_cidade" label="CIDADE" variant="outlined"/>
          </Grid>          

          <Grid paddingBottom={1}>
            <TextField id="txt_bairro" label="BAIRRO" variant="outlined" fullWidth/>
          </Grid>

          <Grid paddingBottom={1}>
            <TextField id="txt_logradouro" label="LOGRADOURO" variant="outlined"/>
          </Grid>

          <Grid paddingBottom={1}>
            <TextField id="txt_numero" label="NUMERO" variant="outlined" fullWidth/>
          </Grid>
          
          <Grid paddingBottom={1}>
            <TextField id="txt_complemento" label="COMPLEMENTO" variant="outlined" fullWidth/>
          </Grid>
      </Grid>    
    );
  };

  const addresList = () => {
    return(
      <Grid >
        <Box>
          <Grid paddingBottom={1}>
            <TextField id="outlined-basic" label="ASASDA" variant="outlined" />
          </Grid>  
        </Box>
      </Grid>
    );
  };

  return (
    <Grid  container direction="column" xs = {12}  sx={{width : '100%' , padding : 10}}>

      <Grid paddingBottom={1}>
        Endereço
      </Grid>

      <Divider></Divider>

      {addresInput()}

      <Grid container direction="column" alignItems="center">
        <Button variant="contained" size ="small">
          INCLUIR
        </Button>
      </Grid>

      <Grid paddingTop={1} paddingBottom={1}>
        Endereços
      </Grid>
      
      {addresList()}


    </Grid>
  );
}

export default Home