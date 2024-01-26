import miBanner from "../assets/images/Kusuriya.jpg"
import "../css/style.css"

const Banner = () => {
    return(
        <div>
            <img className="Banner img-fluid" src={miBanner} alt="miBanner" />
        </div>
    )
}

export default Banner