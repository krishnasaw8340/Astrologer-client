import Home from "./component/Home/Home";
import Services from "./component/Services/Services";
import Header from "./component/Header/Header";
import Courses from "./component/Courses/Courses";
import About  from "./component/About/About";
import Footer from "./component/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Header/Layout";
import Product from "./component/Product/Product";
import ServiceDetails from "./component/Home/Service/DynamicService/ServiceDetails";
import Kundali from "./component/Services/kundali/Kundali";
import Pooja from "./component/Services/Pooja/Pooja";
import CoupleMatch from "./component/Services/CoupleMatch/CoupleMatch";
import GhareluVivad from "./component/Services/GhareluVivad/GhareluVivad";
import BlackMagic from "./component/Services/BlackMagic/BlackMagic";
import BookaCall from "./component/Services/Calls/BookaCall";
import Contact from "./component/contact/Contact";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>}/>
          {/* <Route path="/services" element={<Services/>}/> */}
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/course" element={<Courses/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/services/:slug" element={<ServiceDetails/>} />
          <Route path="/service/kundali" element={<Kundali/>}/>
          <Route path="/service/couple-matching" element={<CoupleMatch/>}/>
          <Route path="/service/book-consultancy-call" element={<BookaCall/>}/>
          <Route path="/service/black-magic-solution" element={<BlackMagic/>}/>
          <Route path="/service/gharelu-vivad" element={<GhareluVivad/>}/>
          <Route path="/service/products" element={<Product/>}/>
          <Route path="/service/online-courses" element={<Courses/>}/>
          <Route path="/service/pooja" element={<Pooja/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
