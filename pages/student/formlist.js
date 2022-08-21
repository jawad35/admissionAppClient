import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import LeftNavbar from '../components/LeftNavbar'
import Header from '../components/Header'
import Head from "next/head";
import { Grid, Avatar, TextField, Typography, Link,Box } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Modal from '@mui/material/Modal';
import styles from '../../styles/Home.module.css'
import { Book, Delete, Edit } from '@material-ui/icons';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {toast} from 'react-toastify'
import axios from 'axios';
const columns = [
    { id: 'id', label: 'ID no', minWidth: 170 },
    { id: 'form_no', label: 'Form no', minWidth: 170 },
    { id: 'stu_name', label: 'Student Name', minWidth: 100 },
    {
        id: 'fat_name',
        label: 'Father Name',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'marks',
        label: 'Marks',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'percentage',
        label: 'Percentage',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
   

];

function createData(id,form_no, stu_name, fat_name, marks,percentage) {
    return { id,form_no, stu_name, fat_name, marks, percentage };
}

const rows = [
    createData('1',2636,"ALi","Muhammad Bashir",80.4,'80%'),
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

const studentSideBAr =[
    {
        Name:"Merit List",
        url:'/student/meritlist'
    },
    {
        Name:"Form Fill",
        url:'/student/form'
    },
    {
        Name:"Form List",
        url:'/student/formlist',
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
                <title>merit list</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href="/pro.ico" />
            </Head>
            <div className={styles.container}>
                <LeftNavbar SideBarList={studentSideBAr} />
                <Header />

                <div className={styles.contentcontainer}>
                    <h1 variant="contained" style={{ margin: '10px', textAlign:'center' }}>Form List</h1>
                    <Button  variant="contained" style={{ margin: '10px' }}>Edit Form</Button>
                    <Button  variant="contained" style={{ margin: '10px' }}>Delete Form</Button>
                    <div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Grid>
                                <Paper elevation={10} style={paperStyle}>
                                    <Grid align='center'>
                                        <Avatar style={avatarStyle}><Book /></Avatar>
                                        <h2>Merit List</h2>
                                    </Grid>
                                    <TextField label='Username' placeholder='Enter username' fullWidth required />
                                    <TextField label='Phone' placeholder='Enter phone number' fullWidth required />
                                    <TextField label='Address' placeholder='Enter Address' fullWidth required />
                                    <TextField label='Email' placeholder='Enter Email' type='Email' fullWidth required />
                                    <Grid align='center'>
                                        <Button onClick={hadnleCreateAdmin} variant="contained" style={{ margin: '10px' }}>Create</Button>
                                        <Button onClick={handleClose} variant="contained" style={{ margin: '10px' }}>Cancel</Button>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Modal>
                    </div>
                    <Paper sx={{ width: '100%' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" colSpan={2}>
                                            Merit
                                        </TableCell>
                                        <TableCell align="center" colSpan={3}>
                                            List
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ top: 57, minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            </div>
        </div>
    );
}
