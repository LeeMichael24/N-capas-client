import React from 'react';
import Menu from '../../../components/menu/menu';
import Navbar from '../../../components/navbar/navbar';
import DataGridDemo from '../../../components/table/table';
import './adminAgregarEliminar.css';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import IconButton from '../../../components/buttons/IconButton/IconButton';
import { useState } from 'react';
import { BasicCard, SingleTextFieldCard } from '../../../components/cardCasas/cardCasas'
import { toast } from 'react-toastify';



function AgregarEliminar() {

    const columns = [
        {
            field: 'Contador',
            headerName: '',
            type: 'number',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            editable: false,
        },
        {
            field: 'Casa',
            headerName: 'Casa',
            type: 'string',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            editable: false,
        },
        {
            field: 'Capacidad',
            headerName: 'Capacidad',
            type: 'number',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            editable: false,
        },
    ];


    const [rows, setRows] = useState([
        { id: 1, Contador: 1, Casa: '#1', Capacidad: 3, },
        { id: 2, Contador: 2, Casa: '-', Capacidad: '-', },
        { id: 3, Contador: 3, Casa: '#3', Capacidad: 3, },
        { id: 4, Contador: 4, Casa: '#4', Capacidad: 4, },
        { id: 5, Contador: 5, Casa: '-', Capacidad: '-', },
        { id: 6, Contador: 6, Casa: '#6', Capacidad: 3, },
        { id: 7, Contador: 7, Casa: '#7', Capacidad: 3, },
        { id: 8, Contador: 8, Casa: '#8', Capacidad: 3, },
        { id: 9, Contador: 9, Casa: '#9', Capacidad: 3, },
        { id: 10, Contador: 10, Casa: '#10', Capacidad: 3, },
    ]);


    const buttons = [
        { icon: <ShowChartIcon />, name: 'Panel de Control', path: '/admin' },
        { icon: <HolidayVillageIcon />, name: 'Administrar Casa', path: '/admin/administrar-casa' },
        { icon: <LogoutIcon />, name: 'Cerrar sesión', path: '/login' },
      ];



    return (
        <div className="parent">

            <div className="navbar">
                <Navbar />
            </div>

            <div className="content">

                <h1 className='title'>Gestionar Colonia</h1>

                <h1 className="title-r">Resgitro de Casas</h1>

                <div className="table-card-container">
                    <DataGridDemo columns={columns} rows={rows} />
                </div>

                <div className="opciones-casa-container">
                    <div className='agregar'>
                        <BasicCard rows={rows} setRows={setRows} />
                    </div>

                    <div className='eliminar'>
                        <SingleTextFieldCard rows={rows} setRows={setRows} />
                    </div>
                </div>
            </div>

            <div className="menu-content">
                <Menu buttons={buttons} />
            </div>

        </div>
    )
} export default AgregarEliminar;