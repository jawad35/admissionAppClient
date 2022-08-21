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
import { Input } from '@material-ui/core';
const adminSideBAr = [
  {
    Name: "Create Criteria",
    url: '/moderator/criteria'
  },
  {
    Name: "Create Merit List",
    url: '/moderator/createml'
  },
  {
    Name: "Students",
    url: '/moderator/students'
  }
]
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
function createData(subject, percentage) {
  id += 1;
  return { subject, percentage };
}

const rows = [
  createData('Computer Science', '64%'),
  createData('Information Technology', '70%'),
  createData('Software engineering', '75%'),
  createData('Medical', '90%'),
];

const moderatorSideBAr = [
  {
		Name: "Criteria",
		url: '/moderator/criteria'
	  },
	  {
		Name: "Check Criteria",
		url: '/moderator/checkcriteria'
	  },
	  {
		Name: "Create Moderator",
		url: '/moderator/createmoderator'
	  },
	  {
		Name: "Create Merit List",
		url: '/moderator/createml'
	  },
	  {
		Name: "Students",
		url: '/moderator/students'
	  }
]

function SimpleTable(props) {
  const { classes } = props;

  return (
    <div className={styles.container}>
      <LeftNavbar SideBarList={moderatorSideBAr} />
      <Header />

      <Paper className={classes.root}>
        <h1 style={{ textAlign: 'center' }}>Criteria</h1>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Subject</TableCell>
              <TableCell align="right">Percentage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.subject}</TableCell>
                <TableCell align="right">{row.percentage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
