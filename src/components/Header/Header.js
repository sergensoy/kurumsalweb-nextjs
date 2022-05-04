import Image from "next/image";
import style from "./header.module.css"

const Header = () => {
    return(
        <header>
            <div className="container">
                <div className={style.content}>
                    <div className={style.logo}>
                        <Image src="/images/logoyeni.webp" width={385} height={52} className="img-fluid" alt="Eyüp Sabri Tuncer"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;