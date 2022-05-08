import Head from "next/head";
import Image from "next/image";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Root from "../Root/Root";
import style from "./layout.module.css";



export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Hello World</title>
            </Head>
            <Header />
            <main className={style.mainContainer}>
                <div className={style.mainContainer_cornerSide}>
                    <img className={style.leftSide_image} src="/images/EST_Politikalarimiz_sl.png" alt="cornersideImage" />
                </div>
                <div className={`${style.mainContainer_centerSide} container`}>
                    {/* <Root /> */}
                    <Navbar />
                    <main id="mainContent">
                        {children}
                    </main>
                </div>
                <div className={style.mainContainer_cornerSide}>
                    <img className={style.rightSide_image} src="/images/EST_Politikalarimiz_sg.png" alt="cornersideImage" />
                </div>
            </main>
        </div>
    )
}