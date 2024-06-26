import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import IconButton from '../buttons/IconButton/IconButton';
import './cardCasas.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { toast } from 'react-toastify';





export function BasicCard({ setRows, rows }) {

  const [houseNumber, setHouseNumber] = useState('');
  const [houseCapacity, setHouseCapacity] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const buttonClass = isUpdated ? 'button-update-enabled' : 'button-update-disabled';


  const handleHouseNumberChange = (event) => {
    setHouseNumber(event.target.value);
    checkIfUpdated(event.target.value, houseCapacity);
  };

  const handleHouseCapacityChange = (event) => {
    setHouseCapacity(event.target.value);
    checkIfUpdated(houseNumber, event.target.value);
  };

  const checkIfUpdated = (houseNumber, houseCapacity) => {
    if (houseNumber && houseCapacity) {
      setIsUpdated(true);
    } else {
      setIsUpdated(false);
    }
  };

  const handleAdd = () => {

    const existingRowIndex = rows.findIndex(row => row.id === parseInt(houseNumber));

    if (existingRowIndex !== -1) {
      // Si la casa ya existe pero los campos están vacíos, se actualizanlos campos
      const existingRow = rows[existingRowIndex];
      if (existingRow.Casa === '-' || existingRow.Capacidad === '-') {
        const newRows = [...rows];
        newRows[existingRowIndex].Casa = `#${houseNumber}`;
        newRows[existingRowIndex].Capacidad = houseCapacity;
        setRows(newRows);
        toast.success('La casa se creo correctamente');
      } else {
        toast.error('La casa ya existe');
      }
    } else {
      // Si la casa no existe, crea una nueva fila
      const newRow = {
        id: parseInt(houseNumber), // Usa el número de casa como ID
        Contador: rows.length + 1,
        Casa: `#${houseNumber}`,
        Capacidad: houseCapacity,
      };

      // Agrega la nueva fila existentes
      const newRows = [...rows, newRow];

      setRows(newRows);

      toast.success('La casa se agregó correctamente');
    }

    setIsUpdated(false);
  };



  return (
    <Card className="card">
      <CardContent>
        <Box className="container">
          <h1>Agregar Casa</h1>

          <TextField
            type='number'
            variant='outlined'
            label='Numero de casa'
            className='input longText'
            inputProps={{ style: { textAlign: 'center' } }}
            value={houseNumber}
            onChange={handleHouseNumberChange}
          />

          <TextField
            type='number'
            variant='outlined'
            label='Capacidad de la casa'
            className='text-field longText'
            inputProps={{ style: { textAlign: 'center' } }}
            value={houseCapacity}
            onChange={handleHouseCapacityChange}
          />

          <IconButton
            className={buttonClass}
            icon=''
            text='Agregar'
            disabled={!houseNumber || !houseCapacity}
            onClick={handleAdd}
          />

        </Box>
      </CardContent>
    </Card>
  );
}

export function SingleTextFieldCard({ rows, setRows }) {

  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const buttonClass = isUpdated ? 'button-delete-enabled' : 'button-delete-disabled';


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    checkIfUpdated(event.target.value, isChecked);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    checkIfUpdated(inputValue, event.target.checked);
  };

  const checkIfUpdated = (inputValue, isChecked) => {
    if (inputValue && isChecked) {
      setIsUpdated(true);
    } else {
      setIsUpdated(false);
    }
  };


  const handleDelete = () => {
    // Busca la fila que contiene la casa con el número ingresado
    const rowIndex = rows.findIndex(row => row.Casa === `#${inputValue}`);

    if (rowIndex === -1) {
      toast.error('No se encontró la casa con el número ingresado');
      return;
    }

    // Actualiza la información de la fila
    const newRows = [...rows];
    newRows[rowIndex] = {
      ...newRows[rowIndex],
      Casa: '-',
      Capacidad: '-',
    };

    setRows(newRows);

    toast.success('La casa se eliminó correctamente');
    setIsUpdated(false);

  };



  return (
    <Card className='card'>
      <CardContent>
        <Box className="container">
          <h1>Eliminar Casa</h1>

          <TextField
            type='number'
            variant='outlined'
            label='Numero de casa'
            className='input longText'
            inputProps={{ style: { textAlign: 'center' } }}
            value={inputValue}
            onChange={handleInputChange}
          />

          <FormControlLabel
            control={<Checkbox sx={{ mr: 0 }} checked={isChecked} onChange={handleCheckboxChange} />}
            label={
              <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                Estoy seguro de eliminar esta casa
              </Typography>
            }
            sx={{ maxWidth: '75%', mt: 0, mb: 2 }}
          />

          <IconButton
            className={buttonClass}
            icon=''
            text='Eliminar'
            disabled={!inputValue || !isChecked}
            onClick={handleDelete}
          />


        </Box>
      </CardContent>
    </Card>
  );
}