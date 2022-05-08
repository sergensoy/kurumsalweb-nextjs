import style from './firstblock.module.css'

const Firstblock = (props) => {
    return(
        <div className={style.content}>
            <div className={style.leftSide}>
                <h1 className={style.heading}>{props.title}</h1>

            </div>
            <div className={style.rightSide}>
                <img src={props.Img.src} alt={props.Img.alt} />
            </div>
        </div>
    )
}

export default Firstblock;