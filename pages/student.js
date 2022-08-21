import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Content from "./components/Content";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";
import {
	faBookOpen,
	faCog,
	faHeart,
	faRocket,
	faSignOutAlt,
	faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
export default function Student() {
	const studentSideBAr =[
		{
			Name:"Merit List",
			url:'student/meritlist'
		},
		{
			Name:"Form Fill",
			url:'form'
		},
		{
			Name:"Form List",
			url:'formlist',
		}
	]
	return (
		<div className={styles.container}>
			<Head>
				<title>Student</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<div className={styles.container}>
				<LeftNavbar SideBarList={studentSideBAr} />
				<Header studentSideBAr={studentSideBAr}/>
				<div className={styles.contentcontainer}>
					<h1>I am Student</h1>
				</div>
			</div>
		</div>
	);
}
