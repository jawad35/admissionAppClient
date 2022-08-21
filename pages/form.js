import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

export default function SuperAdmin() {
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return (
        <div className={styles.container}>
            <Head>
                <title>Create dashboard</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href="/pro.ico" />
            </Head>
            <div className={styles.container}>
                <LeftNavbar />
                <Header />
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                            <h2>Form</h2>
                        </Grid>
                        <TextField label='Student Name' placeholder='Enter student name' fullWidth required />
                        <TextField label='Roll no' placeholder='Enter Roll no' fullWidth required />
                        <TextField  type='date' fullWidth required />
                        <TextField label='Father Name' placeholder='Enter Father Name' type='text' fullWidth required />
                        <Button variant="contained" style={{ margin: '10px' }}>add</Button>

                    </Paper>
                </Grid>
            </div>
        </div>
    );
}
