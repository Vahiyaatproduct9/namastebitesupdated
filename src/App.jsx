import Navbar from "./components/Navbar"
import Intro from './components/Intro'
import BookaSeat from './components/BookaSeat'
import OrderOnline from './components/OrderOnline'
import MenuOverview from './components/MenuOverview.jsx'
import WhereCanYouFindUs from './components/WhereCanYouFindUs'
import OurPromise from './components/OurPromise'
export default function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <BookaSeat />
      <OrderOnline />
      <MenuOverview />
      <OurPromise />
      <WhereCanYouFindUs />

    </>
  )
}
