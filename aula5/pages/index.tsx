import { Box, Grid, IconButton, Paper, TextField, Typography } from '@mui/material'
import type { NextPage } from 'next'
import dayjs, { Dayjs } from 'dayjs';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import React from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { DataGrid, GridActionsCellItem, GridColDef, GridColumns, GridRowParams, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckIcon from '@mui/icons-material/Check';
import {ITask} from '../src/type/task';


const Home: NextPage = () => {

  const [taskTime, setTaskTime] = React.useState<Dayjs | null>(dayjs('2014-08-18T21:11:54'));
  const [taskName, setTaskName] = React.useState<string>("");
  const [taskList, setTaskList] = React.useState<ITask[]>([]);
  const [taskFinish, setTaskFinish] = React.useState<ITask[]>([]);

  const handleChange = (newValue: Dayjs | null) => {
    setTaskTime(newValue);
  };

  const handleDelete = (id: string) => {
    let _taskList : ITask[] = taskList.slice();
    
    let _task : ITask = _taskList.find(x => x.id == id)!;
    _taskList.splice(taskList.indexOf(_task),1); //removendo da lista principal

    setTaskList(_taskList);
  };

  const handleCheck = (id: string) => {
    let _taskList : ITask[] = taskList.slice();
    let _taskFinish : ITask[] = taskFinish.slice();

    let _task : ITask = _taskList.find(x => x.id == id)!;

    _taskList.splice(taskList.indexOf(_task),1); //removendo da lista principal
    _taskFinish.push(_task); //incluindo na nova lista

    setTaskList(_taskList);
    setTaskFinish(_taskFinish);
  };

  const columns: GridColumns = [
    {field: 'id', headerName: 'ID', flex: 1 },
    {field: 'descricao', headerName: 'Descrição', width: 150, flex: 5},
    {field: 'schedule', headerName: 'Data', width: 150, flex: 4},
    {field: 'actions',
      type: 'actions',
      headerName: '#',
      flex: 1.5,
      cellClassName: 'actions',
      getActions: (params: GridRowParams) => {                
        return [                    
          <GridActionsCellItem key={1} icon={<CheckIcon />} label="Confirmar" onClick={()=> {handleCheck(params.row.id)}} />, 
          <GridActionsCellItem key={2} icon={<DeleteOutlineIcon />} label="Deletar" onClick={()=> {handleDelete(params.row.id)}} />,          
        ];
      },
    }

  ];

  const columnsFinish: GridColumns = [
    {field: 'id', headerName: 'ID', flex: 1 },
    {field: 'descricao', headerName: 'Descrição', width: 150, flex: 5},

  ];

  const inputData = () => {
    return(
        <Grid  container direction="row" alignItems="center" paddingBottom={3}>

        <Grid item xs={6}>
          <TextField id="txt_taskname" label="Tarefa" variant="outlined" value={taskName} onChange={e => setTaskName(e.target.value)}/>
        </Grid>

        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Data"
              value={taskTime}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
              />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={2}>
          <Grid container justifyContent="center">
            <IconButton aria-label="Adicionar" onClick={() => {
              console.log(`Tarefa : ${taskName}, Data : ${taskTime}`);

            let _taskList : ITask[] = taskList.slice();
            _taskList.push({
                id : (_taskList.length + 1).toString(), 
                created_at : new Date(), 
                schedule : taskTime?.toDate() ?? new Date(), 
                descricao : taskName, 
                finished : null, 
                deleted_at : null});
            setTaskList(_taskList);                
            }}>
            <AddCircleOutlineOutlinedIcon fontSize='large' />
            </IconButton>
          </Grid>
        </Grid>

      </Grid> 
    );
  };

  const taskOpen = () => {
    return(
      <Grid  container direction="column" xs={5} paddingTop={5} paddingRight={1}>

        {inputData()}

        <Grid paddingBottom={1}>
          Tarefas a Fazer
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
    );
  };

  const taskClose = () => {
    return(
      <Grid  container direction="column" xs={5} paddingTop={5} paddingRight={1}>

        

        <Grid paddingBottom={1}>
          Tarefa Concluida
        </Grid>

        <Grid>
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={taskFinish}
              getRowId={(data) => data.id}
              rowCount={taskFinish.length}
              columns={columnsFinish}
              pageSize={25}
              rowsPerPageOptions={[5,10,25]}
            />
          </Box>
        </Grid>

      </Grid> 
    );
  };

  return (   
    <Grid  container direction="row" justifyContent="center" alignItems="center" sx={{height: "100vh" , width : '100%' , padding : 10}}>
      <Paper sx={{width : '100%', height : '80vh'}} elevation={3}>

        <Grid  container direction="row" justifyContent="center" alignItems="center" xs={12}>

          {taskOpen()}
          {taskClose()}

        </Grid>  

      </Paper>
    </Grid>  
  );
}

export default Home