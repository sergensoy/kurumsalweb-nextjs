import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare,faTwitterSquare,faLinkedin,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'
import style from './footer.module.css'

export default function Footer() {
  
  function getCurrentYear() {
    let currentYear = new Date().getFullYear()
    return currentYear;
  }

  return (
    <footer>
      <style jsx>{`        
        ul li {
          margin-bottom: .5rem;
        }

        li a:hover{
          font-weight:bold;
        }

        .socialMedia {
          font-size: 2rem;
          margin: 1rem 0;
        }

        .socialMedia a:not(last-child){
          margin-right: 5px;
        }

        .socialMedia a:nth-child(1) {
            color: #345cbb;
        }

        .socialMedia a:nth-child(2) {
            color: #55acee;
        }

        .socialMedia a:nth-child(3) {
            color: #e4405f;
        }

        .socialMedia a:nth-child(4) {
            color: #e14d41;
        }

        .socialMedia a:nth-child(5) {
            color: #0a66c2;
        }

      `}
      </style>
        <div className='container'>
          <div className={style.layout}>
            <div className={`${style.row} ${style.firstRow}`}>
              <div className={style.column}>
                <h2>Hakkımızda</h2>
                <ul className={style.column_list}>
                  <li>
                    <Link href="/hakkimizda/tarihcemiz">
                      <a>Tarihçemiz</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/hakkimizda/politikalar">
                      <a>Politikalar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/hakkimizda/degerlerimiz">
                      <a>Değerlerimiz</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/hakkimizda/sertifikalarimiz">
                      <a>Sertifikalarımız</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/hakkimizda/raporlar">
                      <a>Raporlar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/hakkimizda/haberler">
                      <a>Haberler</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={style.column}>
                <h2>Markalarımız</h2>
                <ul className={style.column_list}>
                    <li>
                      <a href="https://www.eyupsabrituncer.com/eyup-sabri-tuncer" target="_blank">Eyüp Sabri Tuncer</a>
                    </li>
                    <li>
                      <a href="https://www.eyupsabrituncer.com/gizli-bahce" target="_blank">Gizli Bahçe</a>
                    </li>
                    <li>
                      <a href="https://www.eyupsabrituncer.com/-labs-est1923" target="_blank">Labs EST1923</a>
                    </li>
                    <li>
                      <a href="https://www.eyupsabrituncer.com/perfume-jewels" target="_blank">Perfume Jewels</a>
                    </li>
                    <li>
                      <a href="https://www.eyupsabrituncer.com/est-1923" target="_blank">EST 1923</a>
                    </li>
                </ul>
              </div>

              <div className={style.column}>
                <h2>İnsan Kaynakları</h2>
                <ul className={style.column_list}>
                  <li><a href="#">EST'ye İlk Adım</a></li>
                  <li><a href="#">EST'de Kariyer</a></li>
                  <li><a href="#">Eğitimler</a></li>
                </ul>
              </div>

              <div className={style.column}>
                <h2>İletişim</h2>
                <ul className={style.column_list}>
                  <li>
                      <p>Online Müşteri Hizmetleri:<br/><a href="tel:0850 577 41 01"> 0850 577 41 01</a></p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${style.row} ${style.secondRow}`}>
              <div className={style.column}>
                © <span className="currentYear">{getCurrentYear()}</span> EYÜP SABRİ TUNCER - All Rights Reserved
              </div>
              <div className="socialMedia">
                  <a href="https://www.facebook.com/eyupsabrituncer">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a href="https://twitter.com/eyupsabrituncer">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                  <a href="https://www.instagram.com/eyupsabrituncer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://www.youtube.com/user/ESTEyupSabriTuncer">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="https://www.linkedin.com/company/eyupsabrituncer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
              </div>
              <div className={style.column}>
                  <img className="img_responsive" src="/images/logoyeni.webp" alt="Eyüp Sabri Tuncer"/>
              </div>
              </div>
          </div>
        </div>
    </footer>
  )
}
