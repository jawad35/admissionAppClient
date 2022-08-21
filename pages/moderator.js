import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import LeftNavbar from './components/LeftNavbar'
import Header from './components/Header'
import Head from "next/head";
import { Grid, Avatar, TextField, Typography, Link,Box } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Modal from '@mui/material/Modal';
import styles from '../styles/Home.module.css'
import { Book, Delete, Edit } from '@material-ui/icons';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {toast} from 'react-toastify'
import axios from 'axios';
const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'Phone no', minWidth: 100 },
    {
        id: 'Address',
        label: 'Address',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Email',
        label: 'Email',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Actions',
        label: 'Actions',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },

];

function createData(name, code, Address, Email, Actions) {
    return { name, code, Address, Email, Actions };
}

const rows = [
    createData('Hassan Ali', 1324171354, 'test', 'test@gmail.com', <><Delete onClick={() => alert('delete')} /><Edit /></>),
    createData('China', 1403500365, 'test', 'test@gmail.com', <><Delete /><Edit /></>),
    createData('Italy', 60483973, 'test', 'test@gmail.com', <><Delete /><Edit /></>),
    createData('United States', 327167434, 'test', 'test@gmail.com', <><Delete /><Edit /></>),
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const adminSideBAr =[
  {
    Name:"Create Criteria",
    url:'/moderator/criteria'
},
{
    Name:"Create Merit List",
    url:'/moderator/createml'
},
{
    Name:"Students",
    url:'/moderator/students'
}
]

export default function Admin() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [admin, setAdmin] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [role, setRole] = React.useState('admin');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const paperStyle = { padding: 20, height: '80vh', width: 400, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const hadnleCreateAdmin = () => {
        alert("created")
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

   //
    return (
        <div className={styles.container}>
            <Head>
                <title>Admin</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href="/pro.ico" />
            </Head>
            <div className={styles.container}>
                <LeftNavbar SideBarList={adminSideBAr} />
                <Header />
            </div>
        </div>
    );
}
