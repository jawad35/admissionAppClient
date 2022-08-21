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
function createData(id, name, number, subject, percentage,accept) {
	return { id,name, number, subject, percentage,accept };
}

const rows = [
	createData(1,'Ali',64, 'Pak Study', '64%','yes'),
	createData(2,'Abdullah',70, 'Urdu', '70%', 'yes'),
	createData(3,'Haroon',89, 'English', '89%', 'yes'),
	createData(4,'Hassan',90, 'math', '90%', 'yes'),
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
				<h1 style={{ textAlign: 'center' }}>Merit List</h1>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell align="right">ID</TableCell>
							<TableCell align="right">Name</TableCell>
							<TableCell align="right">Marks</TableCell>
							<TableCell align="right">Subject</TableCell>
							<TableCell align="right">Percentage</TableCell>
							<TableCell align="right">Accept</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow key={row.id}>
								<TableCell align="right">{row.id}</TableCell>
								<TableCell align="right">{row.name}</TableCell>
								<TableCell align="right">{row.number}</TableCell>
								<TableCell align="right">{row.subject}</TableCell>
								<TableCell align="right">{row.percentage}</TableCell>
								<TableCell align="right">{row.accept}</TableCell>
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
