import Head from "next/head";
import Image from "next/image";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import style from "./layout.module.css";



export default function Layout({children}){
    return(
        <div>
            <Head>
                <title>Hello World</title>
            </Head>
            <Header/>
            <main className={style.mainContainer}>
                <div className="mainContainer_cornerSide">
                    <Image src="/images/EST_Politikalarimiz_sl.png" width={300} height={400}/>
                </div>
                <div className="mainContainer_centerSide">
                <Navbar/>
                { children }
                </div>
                <div className="mainContainer_cornerSide">
                    <Image src="/images/EST_Politikalarimiz_sg.png" width={250} height={400}/>
                </div>
            </main>
        </div>
    )
}