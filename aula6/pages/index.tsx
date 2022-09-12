import { Box, Button, Divider, FormControl, IconButton, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import type { NextPage } from 'next';
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DataGrid, GridActionsCellItem, GridColumns, GridRenderCellParams, GridRowParams } from '@mui/x-data-grid';
import React from 'react';
import { ICepSearchResult } from '../src/types/cep';
import { BuscaCep } from '../src/api/cep';
import Lottie from "lottie-react";
import lottieLoading from "../src/lottie/searching.json";

const Home: NextPage = () => {
  const [ addressList, setAddressList] = React.useState<ICepSearchResult[]>([]);
  const [ cep, setCep] = React.useState<string>('');
  const [ awaiting, setAwaiting] = React.useState<boolean>(false);


  const searchCep = async (cep: string) => {
    setAwaiting (true);
    let _buscaCepApi = new BuscaCep();
    _buscaCepApi.getEnderecoCep(cep).then((value: ICepSearchResult) =>{
      setAwaiting(false);
    });

  }
  
  const Loading = () => {    
    const options = {
      animationData: lottieLoading,
      loop: true,
      autoplay: true,
    };    
    return <div style={{position: 'absolute', top: '50%', left: '50%', marginRight: '-50%', transform: 'translate(-50%, -50%)'}}> <Lottie {...options}/> </div>;
};

  const addressInput = () => {
    return (
      <FormControl variant="outlined" component="form" onSubmit={() => alert('a')} fullWidth>
        <Grid container spacing={2}>
          {cepInput()}    
          <Grid container item spacing={2}>
            <Grid item md={2} xs={12}>
              <TextField id='input-uf' name='input-uf' placeholder='UF' fullWidth></TextField>
            </Grid>
            <Grid item md={10} xs={12}>
              <TextField id='input-cidade' name='input-cidade' placeholder='Cidade' fullWidth></TextField>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item md={12} xs={12}>
              <TextField id='input-bairro' name='input-bairro' placeholder='Bairro' fullWidth></TextField>
            </Grid>
          </Grid>
          <Grid container item spacing={2} xs={12}>
            <Grid item md={10} xs={12}>
              <TextField id='input-logradouro' name='input-logradouro' placeholder='Logradouro' fullWidth></TextField>
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField id='input-numero' name='input-numero' placeholder='Número' fullWidth></TextField>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item md={12} xs={12}>
              <TextField id='input-complemento' name='input-complemento' placeholder='Complemento' fullWidth></TextField>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} md={12} xs={12}>
              <Grid md={6} xs={12}>
                <Button type='submit' variant='contained' style={{backgroundColor: '#1C5B76'}} fullWidth>INCLUIR</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FormControl>
    );
  }

  const cepInput = () => {
    return (
      <Grid item xs={12}>
        <TextField
            id='input-cep' name='input-cep'
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            fullWidth
            placeholder='CEP'
            InputProps={{
            endAdornment: 
              <IconButton sx={{bgcolor: '#1C5B75', borderRadius: '5px'}} onClick={() => {searchCep(cep)}}>
                <SearchIcon sx={{color: 'white'}}/>
              </IconButton>
            }}
          />
      </Grid>
    );
  }

  const columns: GridColumns = [
    { 
      field: 'cep', 
      headerName: 'Cep', 
      flex: 3 
    },
    {
      field: 'uf',
      headerName: 'UF',
      flex: 1,
      editable: false,
    },
    {
      field: 'cidade',
      headerName: 'Cidade',
      flex: 3,
      editable: false,
    },
    {
      field: 'endereco',
      headerName: 'Endereço',
      flex: 4,
      editable: false,
      renderCell: (params: GridRenderCellParams<ICepSearchResult>) => {
        return (
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Typography sx={{color: '#2430441', fontSize: '13px'}}>
              {
                `${params.row.logradouro} - ${params.row.complemento}`
              }
            </Typography>
          </Box>
        )
      }
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '#',
      flex: 1,
      cellClassName: 'actions',
      getActions: (params: GridRowParams) => {                
        return [                    
          <GridActionsCellItem icon={<DeleteOutlineIcon sx={{color: '#900000'}}/>} label="Deletar" onClick={()=> {/*handleDelete(params.row.id)*/}} />          
        ];
      },
    }
  ];

  const addressGrid = () => {
    return (
      <>
      <Typography fontSize={'24px'} color={'#4B4B4B'}>Endereços</Typography>
      <DataGrid
        rows={addressList}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[5, 10, 25]}
        getRowId={(data) => data.id}
        rowCount={addressList.length}
      />
      </>
    );
  }

  const layout = (
    <Grid container justifyContent={'space-around'} spacing={12}>
      <Grid item xs={12}/>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography fontSize={'24px'} color={'#4B4B4B'}>Endereço</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent={'space-around'}>
              <Grid item xs={11}>
                {addressInput()}
                {addressGrid()}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    awaiting ? Loading(): layout    
  )
}

export default Home
