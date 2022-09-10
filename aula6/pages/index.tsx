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
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
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