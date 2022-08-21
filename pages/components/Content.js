import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
function Content() {
	return (
		<div style={{width:'80%', display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}} className={`${styles.contentcontainer}`} >
			<div >
				<div style={{marginTop:'10px'}}>
					
					<a style={{marginLeft:'10px', textDecoration:'none',  borderRadius:'5px', color:'black', backgroundColor:'#ded3d3', padding:'0px 10px'}} href="/superadmin">Login as Super Admin</a>
				</div>
				<div style={{marginTop:'10px'}}>
					
					<a style={{marginLeft:'10px', textDecoration:'none',  borderRadius:'5px', color:'black', backgroundColor:'#ded3d3', padding:'0px 10px'}} href="/admin">Login as Admin</a>
				</div>
				<div style={{marginTop:'10px'}}>
					
					<a style={{marginLeft:'10px', textDecoration:'none',  borderRadius:'5px', color:'black', backgroundColor:'#ded3d3', padding:'0px 10px'}} href="/moderator">login as Moderator</a>
				</div>
				<div style={{marginTop:'10px'}}>
					
					<a style={{marginLeft:'10px', textDecoration:'none',  borderRadius:'5px', color:'black', backgroundColor:'#ded3d3', padding:'0px 10px'}} href="/student">Login as Student</a>
				</div>
			</div>

		</div>
	);
}

export default Content;
