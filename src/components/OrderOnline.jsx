import swiggy from '../images/swiggy.png'
import zomato from '../images/zomato.png'
import blinkit from '../images/blinkit.png'
import './OrderOnline.css'



export default function OrderOnline() {
    return(
        <>
            <div className="orderonline-body">
                <div className="orderonline-text">
                    <text>Order Online On →</text>
                </div>
                <div className="orderonline-button-container">
                    <button className="swiggy">Swiggy
                        <img src={swiggy} alt=""/>
                    </button>
                    <button className="zomato">Zomato
                        <img src={zomato} alt=""/></button>
                    <button className="blinkit">Blinkit
                        <img src={blinkit} alt=""/></button>
                </div>
            </div>
        </>
    )
}