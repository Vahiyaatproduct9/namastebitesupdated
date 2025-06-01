import './WhereCanYouFindUs.css';
import directions from '../images/directions.png';
import location from '../images/location.png';

export default function WhereCanYouFindUs() {

    return (
        <>
            <div className='wherecanyoufindus-container'>
                <div className='wherecanyoufindus-header'>
                    <text>Where Can You Find Us?</text>
                </div>
                <section className="where-can-you-find-us">
                    <div className="map-embed">
                        <iframe
                            title='Google Map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14297.108584227675!2d88.313396!3d26.3822324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4f91827683fdb%3A0xf2dfe603c6ed803c!2z4Kao4Kau4Ka44KeN4Kak4KeHIOCmrOCmvuCmh-Cmn-CmuA!5e0!3m2!1sbn!2sin!4v1748694214401!5m2!1sbn!2sin"
                            style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="address">
                        <div className="get-directions">
                            <a className="getdirections-button" href='https://www.google.com/maps/place/%E0%A6%A8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A7%87+%E0%A6%AC%E0%A6%BE%E0%A6%87%E0%A6%9F%E0%A6%B8/@26.3822324,88.313396,15z/data=!4m6!3m5!1s0x39e4f91827683fdb:0xf2dfe603c6ed803c!8m2!3d26.3822051!4d88.3135545!16s%2Fg%2F11vhj0w5gg!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D'>
                                Get Directions
                                <img src={directions} alt="Get Directions" />

                            </a>
                        </div>
                        <div className="location">
                            <div className="location-heading">
                                <div>
                                    <img src={location} alt="Location" />
                                    <h2>Location</h2>
                                </div>
                            </div>
                            <div className='location-text'>
                                <p>Kalagachh bus stand,<br /> Chopra, Bhagabati<br /> West Bengal<br />733207</p></div>
                        </div>

                    </div>
                </section>
            </div>

        </>
    )
}