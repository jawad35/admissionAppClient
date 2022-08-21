import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import {
    Card, CardHeader, CardTitle, CardBody,
    FormGroup, Row, Col, Modal, ModalBody, ModalFooter,
    ModalHeader, Input, Form, Button, Label,
    Nav, NavItem, NavLink, TabContent, TabPane, CustomInput
} from 'reactstrap'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import Header from "../components/Header";
import LeftNavbar from "../components/LeftNavbar";
// own css files here
const studentSideBAr = [
    {
        Name:"Create Static Form",
        url:'/superadmin/createsf'
    },
    {
        Name:"Create Board Admin",
        url:'/superadmin/boardadmin'
    },
    {
        Name:"Create Admin",
        url:'/superadmin/createadmin'
    },
    {
        Name:"Manage Universties",
        url:'/superadmin/manageu'
    }
]
function StudentForm() {
    const [textValue, setTextValue] = useState("");
    const onTextChange = (e) => setTextValue(e.target.value);
    const handleSubmit = () => console.log(textValue);
    const handleReset = () => setTextValue("");
    return (
        <div className={styles.container}>
            <Head>
                <title>Student</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href="/pro.ico" />
            </Head>
            <div className={styles.container}>
                <LeftNavbar SideBarList={studentSideBAr} />
                <Header studentSideBAr={studentSideBAr} />
                <div className={styles.contentcontainer}>
                    <div>
                        <form >

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1 ">FIRST NAME</label>
                                    <input type="TEXT" className="form-control" id="exampleInputNAME1" placeholder="ENTER YOUR  FIRST NAME " />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>

                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1">MIDDLE NAME</label>
                                    <input type="text" className="form-control" id="exampleInputname1" placeholder="ENTER YOUR MIDDLE  NAME " />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>
                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1 ">LAST NAME </label>
                                    <input type="text" className="form-control" id="exampleInputTHIRDNAME3" placeholder="ENTER YOUR LAST NAME" />
                                </div>
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                </div>
                            </div><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div className="form-group col-lg-4 m-2">
                                    <label for="exampleInputPassword1 ">FATHER NAME</label>
                                    <input type="text" className="form-control" id="exampleInputFathername4" placeholder="ENTER YOUR FATHER NAME" />
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
                                    <label for="exampleInputPassword1 ">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Board  Name
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Gujranwala</a>
                                        <a className="dropdown-item" href="#">Lahore</a>
                                        <a className="dropdown-item" href="#">Islamabad</a>
                                    </div>
                                </div>
                                
                                <div className="form-group form-check mt-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
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
                                    <label for="exampleInputPassword1">Entermediate</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter your intermediate marks" />
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

                            </div>
                            
                            <button type="button" className="btn btn-success ml-2">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default StudentForm;
