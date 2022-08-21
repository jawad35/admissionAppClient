import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LeftNavbar from '../components/LeftNavbar'
import Header from '../components/Header'
import Head from "next/head";
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
})

let id = 0;
function createData(name, phone, Idno, address, email, Reject, Accept) {
  id += 1;
  return { id, name, phone, Idno, address, email, Reject, Accept };
}

const rows = [
  createData('Hassan', 64647, 77, 'gujrat', 'hassan@gmail.com'),
  createData('Ahsan', 779797, 88, 'islamabad', 'Ahsan@gmail.com'),
  createData('Qayoom', 777262, 44, 'karachi', 'qayoom@gmail.com'),
  createData('Nabeel', 79897305, 45, 'lahore', 'nabeel@gmail.com'),
  createData('Ali', 72837399, 100, 'gujranwala', 'ali@gmail.com'),
];

const studentSideBA1r = [
  {
    Name: "Create Dynamic Form",
    url: '/admin/form'
  },
  {
    Name: "Create Moderators",
    url: '/admin/createmoderator'
  },
  {
    Name: "Merit List",
    url: '/admin/meritlist'
  },
  {
    Name: "Student Data",
    url: '/admin/student'
  }
]

function SimpleTable(props) {
  const { classes } = props;


  return (
    <div className={styles.container}>
      <LeftNavbar SideBarList={studentSideBA1r} />
      <Header />
      <div style={{marginLeft:'200px'}}>
        <Paper className={classes.root}>
          <h1 style={{ textAlign: 'center' }}>Student</h1>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
              <TableCell align="right">Id No</TableCell>
                <TableCell align='right'>Name</TableCell>
                <TableCell align="right">Phone no</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Reject</TableCell>
                <TableCell align="right">Accept</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="right">{row.Idno}</TableCell>

                  <TableCell align='right' component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right"><button style={{border:'none', padding:'10px', backgroundColor:'#FF0000', color:'white'}}>Reject</button></TableCell>
                  <TableCell align="right"><button style={{border:'none', padding:'10px', color:'white'}}>Accept</button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p style={{ textAlign: 'center' }}>
            <a style={{ color: 'red', textAlign: 'center', padding: '50px' }} href='/'>Back</a>
          </p>
        </Paper>
      </div>
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
