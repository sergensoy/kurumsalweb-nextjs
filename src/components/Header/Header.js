import Image from "next/image";
import Link from "next/link"
import style from "./header.module.css"

const Header = () => {
    return(
        <header>
            <div className={style.content}>
                <div className={style.logo}>
                    <Link href="/">
                        <a>
                            <Image src="/images/logoyeni.webp" width={385} height={52} className="img-fluid" alt="Eyüp Sabri Tuncer"/>
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;