import Head from "next/head";
import { useState } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar"
import Root from "../Root/Root";
import style from "./layout.module.css";
import SidebarButton from "../Sidebar/SidebarButton";



export default function Layout({ children }) {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Eyüp Sabri Tuncer</title>
            </Head>
            <Header />
            <main className={style.mainContainer}>
                <div className={style.mainContainer_cornerSide}>
                    <img className={style.leftSide_image} src="/images/EST_Politikalarimiz_sl.png" alt="cornersideImage" />
                </div>
                <div className={`${style.mainContainer_centerSide} container`}>
                    {/* <Root /> */}
                    <Navbar />
                    <SidebarButton showSidebar={()=>{showSidebar()}}/>
                    <main id="mainContent">
                        {children}
                    </main>
                </div>
                <div className={style.mainContainer_cornerSide}>
                    <img className={style.rightSide_image} src="/images/EST_Politikalarimiz_sg.png" alt="cornersideImage" />
                </div>
            </main>
            <Footer/>
            <Sidebar showSidebar={()=>{showSidebar()}} sidebarStatus={sidebar}/>
        </div>
    )
}