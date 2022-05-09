import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import style from './sidebar.module.css'

function Sidebar({showSidebar, sidebarStatus}) {

    const isActive = sidebarStatus ? "activeSidebar": "";

  return (
    <div id={style.sidebar} className={isActive}>
        <div className={style.background}></div>
        <div className={style.content}>
            <div id="close-btn" onClick={showSidebar}>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
            <div className={style.header}>
                <a href="/">
                    <img className={style.headerImg} src="https://www.eyupsabrituncer.com/Uploads/Images/est.png"
                        alt="Eyüp Sabri Tuncer"/>
                </a>
            </div>
            <div className={style.menu}>
                <div className={style.menu_item}>
                    <Link href="/hakkimizda">
                        <a className={`${style.subBtn} ${style.menu_item_link}`}>
                            Hakkımızda
                            <FontAwesomeIcon icon={faAngleRight} className={style.dropdownIcon} />
                        </a>
                    </Link>
                    <div className={style.subMenu}>
                        <Link href="/hakkimizda/tarihcemiz">
                            <a className={style.menu_item_link} target="_self">Tarihçemiz</a>
                        </Link>
                        <Link href="/hakkimizda/politikalar">
                            <a className={style.menu_item_link} target="_self">Politikalar</a>
                        </Link>
                        <Link href="/hakkimizda/degerler">
                            <a className={style.menu_item_link} target="_self">Değerlerimiz</a>
                        </Link>
                        <Link href="/hakkimizda/sertifikalar">
                            <a className={style.menu_item_link} target="_self">Sertifikalarımız</a>
                        </Link>
                        <Link href="/hakkimizda/raporlar">
                            <a className={style.menu_item_link} target="_self">Raporlar</a>
                        </Link>
                        <Link href="/hakkimizda/haberler">
                            <a className={style.menu_item_link} target="_self">Haberler</a>
                        </Link>
                    </div>
                </div>
                <div className={style.menu_item}>
                    <Link href="/markalar">
                        <a className={style.menu_item_link} target="_self">Markalarımız</a>
                    </Link>
                </div>
                <div className={style.menu_item}>
                    <Link href="/insankaynaklari">
                        <a className={style.menu_item_link} target="_self">İnsan Kaynakları</a>
                    </Link>
                </div>
                <div className={style.menu_item}>
                    <Link href="/sosyalsorumlulukprojeleri">
                        <a className={style.menu_item_link} target="_self">Sosyal Sorumluluk Projeleri</a>
                    </Link>
                </div>
                <div className={style.menu_item}>
                    <Link href="/iletisim">
                        <a className={style.menu_item_link} target="_self">İletişim</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar