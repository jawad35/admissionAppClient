import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import Header from "../components/Header";
import LeftNavbar from "../components/LeftNavbar";
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
// own css files here
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
const studentSideBAr = [

]
function StudentForm() {
    const [textValue, setTextValue] = useState("");
    const onTextChange = (e) => setTextValue(e.target.value);
    const handleSubmit = () => console.log(textValue);
    const handleReset = () => setTextValue("");
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Student</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href="/pro.ico" />
            </Head>
            <div className={styles.container}>
                <LeftNavbar SideBarList={studentSideBA1r} />
                <Header studentSideBAr={studentSideBAr} />
                <div className={styles.contentcontainer}>
                    
                    <div>
                    <div>
                        <h1>Create Form</h1>
                        <Button variant="contained" color="success">
                            Review
                        </Button>
                        <Button variant="contained" style={{marginLeft:'5px'}} color="primary">
                            Edit
                        </Button><Button style={{marginLeft:'5px'}} variant="contained" color="error">
                            Delete
                        </Button>
                    </div>
                        <form >

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1 ">Name</label>
                                    <input type="TEXT" className="form-control" id="exampleInputNAME1" placeholder="ENTER YOUR  FIRST NAME " />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>
                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1 ">Middle Name</label>
                                    <input type="TEXT" className="form-control" id="exampleInputNAME1" placeholder="ENTER YOUR  Middle NAME " />
                                </div>
                               
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>
                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1 ">Last Name</label>
                                    <input type="TEXT" className="form-control" id="exampleInputNAME1" placeholder="ENTER YOUR  Last NAME " />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>
                            </div><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1">DATE OF BIRTH</label>
                                    <input type="date" className="form-control" id="exampleInputname1" placeholder="ENTER YOUR DATE OF BIRTH" />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>
                               
                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1">RELIGION</label>
                                    <input type="text" className="form-control" id="exampleInputReligion4" placeholder="ENTER YOUR RELIGION" />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>
                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1 ">E-MAIL</label>
                                    <input type="email" className="form-control" id="exampleInputEmail5" placeholder="ENTER YOUR E-MAIL" />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>
                                
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1 ">Father Name</label>
                                    <input type="email" className="form-control" id="exampleInputEmail5" placeholder="ENTER YOUR Father Name" />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>

                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1">Roll No</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter your Roll No" />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>
                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1 ">ID CARD No</label>
                                    <input type="text" className="form-control" id="exampleInputTHIRDNAME3" placeholder="ENTER YOUR ID CARD NO" />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>

                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1">Father CNIC</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter your Father CNIC" />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>
                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1 ">TELEPHONE NO</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter your Telephone Number" />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>

                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1">MOBILE NO</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter your Mobile Number" />
                                </div>


                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>

                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1 ">Current Adress</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter your Current Address" />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>

                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1">Permanent Address</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter your PERMANENT Address" />
                                </div>


                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>
                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1">Address Valid</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter your Address Valid" />
                                </div>

                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1 ">Matric Marks</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter your matric marks" />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>

                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1">EnterMediate Marks</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter your Entermediat Marks" />
                                </div>


                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>
                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1">Matric From Year</label>
                                    <input type="date" className="form-control" id="exampleInputPassword1" placeholder="Enter your Address Valid" />
                                </div>

                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Nationality
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">BSCS</a>
                                        <a className="dropdown-item" href="#">BSIT</a>
                                        <a className="dropdown-item" href="#">BSSE</a>
                                    </div>
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>

                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Department Name
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">BSCS</a>
                                        <a className="dropdown-item" href="#">BSIT</a>
                                        <a className="dropdown-item" href="#">BSSE</a>
                                    </div>
                                </div>


                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Board Name
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">BSCS</a>
                                        <a className="dropdown-item" href="#">BSIT</a>
                                        <a className="dropdown-item" href="#">BSSE</a>
                                    </div>
                                </div>

                            </div>
                            <div style={{ width:'100%', textAlign:'center',margin:'10px' }} >
                            <button type="button" className="btn btn-success ml-2">Create</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default StudentForm;
