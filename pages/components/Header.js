import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "../../images/watermark.png";

function Header() {
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						{/* Hello, <span>User</span> */}
					</h2>
					{/* <p>welcome to the Online admission portal with automatic verification of student's credentials system.</p> */}
				</div>
				<div className={styles.profile}>
					<button onClick={() => window.location.href = "/"} style={{padding:'10px', backgroundColor:'#24a0ed',color:'white', border:'none'}}>Log Out</button>
					{/* <img src={Image} alt="profile" className={styles.image} /> */}
				</div>
			</div>
		</div>
	);
}

export default Header;
