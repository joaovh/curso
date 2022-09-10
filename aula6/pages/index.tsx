import { Box, Button, Divider, Grid, IconButton, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


const Home: NextPage = () => {

  const rows = [
    { id: 1, CEP: 'cep', UF: 'uf', CIDADE: 'cidade', ENDEREÇO: 'endereco'},
    { id: 2, CEP: '14781-115', UF: 'SP', CIDADE: 'Barretos', ENDEREÇO: 'endereco+numero+complemento'},
    { id: 3, CEP: '14781-115', UF: 'SP', CIDADE: 'Barretos', ENDEREÇO: 'endereco+numero+complemento'},
    { id: 4, CEP: '14781-115', UF: 'SP', CIDADE: 'Barretos', ENDEREÇO: 'endereco+numero+complemento'},
    { id: 5, CEP: '14781-115', UF: 'SP', CIDADE: 'Barretos', ENDEREÇO: 'endereco+numero+complemento'},
    { id: 6, CEP: '14781-115', UF: 'SP', CIDADE: 'Barretos', ENDEREÇO: 'endereco+numero+complemento'},
    { id: 7, CEP: '14781-115', UF: 'SP', CIDADE: 'Barretos', ENDEREÇO: 'endereco+numero+complemento'},
    { id: 8, CEP: '14781-115', UF: 'SP', CIDADE: 'Barretos', ENDEREÇO: 'endereco+numero+complemento'},
  ];

  const columns: GridColDef[] = [
    { field: 'cep',
      headerName: 'CEP',
      type: 'string',
      width: 150,
      editable: true,
     },
      
    {
      field: 'uf',
      headerName: 'UF',
      type: 'string',
      width: 90,
      editable: true,
    },
    {
      field: 'cidade',
      headerName: 'CIDADE',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'endereco',
      headerName: 'ENDERECO',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: '',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.cep || ''} ${params.row.uf || ''}`,
    },
  ];

  const addresInput = () => {
    return(
      <Grid container direction="column" justifyContent="flex-start" alignItems="stretch"> 
        <Grid item paddingBottom={1} paddingTop={1}>
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
          <Grid container direction="row" paddingBottom={1} columnSpacing={1}> 
            <Grid item xs={2}> 
              <TextField id="uf" label="UF" variant="outlined"/>  
            </Grid>
            <Grid item xs={10}>
              <TextField id="cidade" label="CIDADE" variant="outlined" fullWidth/>
            </Grid>
          </Grid>          

            <Grid paddingBottom={1}>
              <TextField id="bairro" label="BAIRRO" variant="outlined" fullWidth/>
            </Grid>

          <Grid container direction="row" paddingBottom={1} columnSpacing={1}> 
            <Grid item xs={9}>
              <TextField id="logradouro" label="LOGRADOURO" variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={3}>
              <TextField id="numero" label="NUMERO" variant="outlined" fullWidth/>
            </Grid>
          </Grid>            
            
            <Grid paddingBottom={1}>
              <TextField id="complemento" label="COMPLEMENTO" variant="outlined" fullWidth/>
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

    <Grid>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Grid>


    </Grid>
  );
}

export default Home