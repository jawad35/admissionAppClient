import React from "react";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function LeftNavbar({ SideBarList }) {
	// const studentSideBAr =[
	// 	{
	// 		Name:"Merit List",
	// 		url:'student/meritlist'
	// 	},
	// 	{
	// 		Name:"Form Fill",
	// 		url:'form'
	// 	},
	// 	{
	// 		Name:"Form List",
	// 		url:'formlist',
	// 	}
	// ]
	return (
		<div className={styles.navcontainer}>
			<div className={styles.logo}>
				<img src="https://logowik.com/content/uploads/images/uog-university-of-gujrat1154.jpg" width={150}/>
			</div>
			<div className={styles.wrapper}>
				<ul>
					{
						SideBarList.map(item => (
							<li key={item.url}>
								{/* <FontAwesomeIcon
									icon={item.icon.iconname}
									style={{ width: "18px", cursor: "pointer" }}
								/> */}
								<a href={item.url}>{item.Name}</a>
							</li>
						))
					}

				</ul>
			</div>
		</div>
	);
}

export default LeftNavbar;
