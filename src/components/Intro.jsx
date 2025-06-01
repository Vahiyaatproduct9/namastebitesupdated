import logo from "../images/logo.jpg"

export default function Intro() {
    return (
        <>
            <div className="Intro">

                <img src={logo} alt="Logo.png" />

            </div>
            <div className="Heading">
                <h1>Namaste Bites</h1>
                <br />
                <p>"The taste of Home"</p>
            </div>
        </>
    )
}