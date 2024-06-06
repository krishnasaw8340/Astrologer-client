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
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/course" element={<Courses/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/services/:slug" component={ServiceDetails} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
