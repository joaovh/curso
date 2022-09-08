import { Box, Grid, IconButton, Paper, TextField } from '@mui/material'
import type { NextPage } from 'next'
import dayjs, { Dayjs } from 'dayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { ITask } from '../src/type/task';

const Home: NextPage = () => {
  const [taskTime, setTaskTime] = React.useState<Dayjs>(dayjs(new Date().toUTCString()));
  const [taskName, setTaskName] = React.useState<string>('');
  const [taskList, setTaskList] = React.useState<ITask[]>([]);

  const handleChange = (newValue: Dayjs | null) => {
    setTaskTime(newValue ?? dayjs(new Date().toUTCString()));
  };

  const columns: GridColDef[] = [
    { 
      field: 'id', 
      headerName: 'ID', 
      flex: 1 },
    {
      field: 'descricao',
      headerName: 'Tarefa',
      flex: 11,
    }
  ];
  
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{width: "100%", height: "100vh", padding: 10}}>
      <Paper elevation={3} sx={{width: '100%', height: '80vh' }}>
        <Grid container direction="row" justifyContent="center" alignItems="center" xs={12}>
          <Grid container direction="column" justifyContent="center" alignItems="center" xs={5}> 
            <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{padding: 3}}>
              <Grid xs={5}>
                <TextField id="txt_taskname" label="Tarefa" variant="outlined"
                  value={taskName}
                  onChange={e => setTaskName(e.target.value)}
                />  
              </Grid>
              <Grid xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Data"
                    value={taskTime}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />                                            
                </LocalizationProvider>                  
              </Grid>
              <Grid xs={1}>
                <IconButton color="primary" aria-label="upload picture" component="label" size="large" onClick={()=>{
                  console.log(`Tarefa: ${taskName}, Data Hora: ${taskTime}`)

                  let _taskList: ITask[] = taskList.slice();

                  _taskList.push({id: (_taskList.length + 1).toString(), created_at: new Date(), descricao: taskName, schedule: taskTime.toDate(), finished: null, deleted_at: null});
                  setTaskList(_taskList); 
                }}>
                  <AddCircleOutlineIcon />
                </IconButton> 
              </Grid>
            </Grid>

            <Grid> 
              <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={taskList}
                  getRowId={(data) => data.id}
                  rowCount={taskList.length}
                  columns={columns}
                  pageSize={25}
                  rowsPerPageOptions={[5,10,25]}                                  
                />
              </Box>
            </Grid>     

          </Grid>
          <Grid xs={1}>
            
          </Grid>
          <Grid container direction="column" justifyContent="center" alignItems="center" xs={4}> 
      
          </Grid> 
        </Grid>  
      </Paper>
    </Grid>         
  )
}

export default Home
