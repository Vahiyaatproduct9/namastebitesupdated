import logo from "../images/logo.png"
export default function Navbar() {
    return (
        <>    <nav class="head-nav">
            <a href="https://vahiyaatproduct9.github.io/namastebites/">
                <div class="brand">
                    <img src={logo} alt="Bites Logo Image" />
                    <h3>Namaste Bites</h3>
                </div>
            </a>
            <ul id="bar" class="bar">
                <li id="home">Home</li>
                <li id="aboutus">About Us
                    <ul>
                        <li>Owner's Words</li>
                    </ul>
                </li>
                <li class="menu">Menu
                    <ul>
                        <li>Momo</li>
                        <li>Chowmien</li>
                        <li>Pakoda</li>
                        <li>Rolls</li>
                        <li>Main Course</li>
                        <li>Dessert</li>
                    </ul>
                </li>
                <li>Gallery</li>
                <li>Hiring</li>
                <li>Contact</li>
                <li className="bookaseat">Book a Seat</li>
            </ul>
        </nav>
        </>
    )

}