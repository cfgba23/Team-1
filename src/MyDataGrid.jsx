import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import data from  './jasonData.json';  
import { darken, lighten, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {DialogContext} from "/Users/robertomolteni/myproject/src/App"

const getBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.7) : lighten(color, 0.7);

const getHoverBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

const getSelectedBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

const getSelectedHoverBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.4) : lighten(color, 0.4);

const columns = [
  {
    field: 'nombre',
    headerName: 'Inscripciones',
    width: 250,
    editable: false,
  },
  {
    field: 'tipo',
    headerName: 'Tipo',
    width: 80,
    editable: false,
  },
  {
    field: 'medio',
    headerName: 'Modalidad',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'lugar',
    headerName: 'Dirección',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'horario',
    headerName: 'Horario',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'estado',
    headerName: 'Estado',
    type: 'number',
    width: 110,
    editable: true,
  },
  { field: 'accion', headerName: 'Acción', width: 150, renderCell: ButtonCell },
];

function ButtonCell(params) {

    return (
      <Button variant="contained" color="primary" onClick={() => handleButtonClick(params)}>
        Descripción
      </Button>
    );
  }
  
  function handleButtonClick(params) {
    // Lógica para manejar el clic del botón, puedes acceder a la fila utilizando params.row
    console.log('ID de la fila:', params.row.id);
  }

const rows = data
const getRowStyle = (params) => ({
    backgroundColor: params.row.status === 'Aceptado' ? 'green' : 'white',
    color: params.row.status === 'Aceptado' ? 'white' : 'black',
  });
  
console.log("abcdf", rows)

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({

    '& .super-app-theme--Aceptado': {
      backgroundColor: getBackgroundColor(
        theme.palette.success.main,
        theme.palette.mode,
      ),
      '&:hover': {
        backgroundColor: getHoverBackgroundColor(
          theme.palette.success.main,
          theme.palette.mode,
        ),
      },
      '&.Mui-selected': {
        backgroundColor: getSelectedBackgroundColor(
          theme.palette.success.main,
          theme.palette.mode,
        ),
        '&:hover': {
          backgroundColor: getSelectedHoverBackgroundColor(
            theme.palette.success.main,
            theme.palette.mode,
          ),
        },
      },
    },
    '& .super-app-theme--Pendiente': {
      backgroundColor: getBackgroundColor(
        theme.palette.warning.main,
        theme.palette.mode,
      ),
      '&:hover': {
        backgroundColor: getHoverBackgroundColor(
          theme.palette.warning.main,
          theme.palette.mode,
        ),
      },
      '&.Mui-selected': {
        backgroundColor: getSelectedBackgroundColor(
          theme.palette.warning.main,
          theme.palette.mode,
        ),
        '&:hover': {
          backgroundColor: getSelectedHoverBackgroundColor(
            theme.palette.warning.main,
            theme.palette.mode,
          ),
        },
      },
    },
    '& .super-app-theme--Rechazado': {
      backgroundColor: getBackgroundColor(
        theme.palette.error.main,
        theme.palette.mode,
      ),
      '&:hover': {
        backgroundColor: getHoverBackgroundColor(
          theme.palette.error.main,
          theme.palette.mode,
        ),
      },
      '&.Mui-selected': {
        backgroundColor: getSelectedBackgroundColor(
          theme.palette.error.main,
          theme.palette.mode,
        ),
        '&:hover': {
          backgroundColor: getSelectedHoverBackgroundColor(
            theme.palette.error.main,
            theme.palette.mode,
          ),
        },
      },
    },
  }))
  
  export function StylingRowsGrid() {



    return (
      <Box sx={{ height: 400, width: '100%' }}>
        <StyledDataGrid
          {...data}
          rows={rows}
        getRowId={(row) => row.ID_curso}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        rowS={(params) => getRowStyle(params)}
          getRowClassName={(params) => `super-app-theme--${params.row.estado}`}
        />
      </Box>
    );
  };