import Header from "./Components/Header";
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/Home.scss"
import "./styles/footer.scss"
import "./styles/Contact.scss"
import "./styles/Services.scss"
import "./styles/mediaquery.scss"

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"
import Services from "./Components/Services"


function App (){
  return(
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Services" element={<Services/>}/>
      </Routes>
      <Footer />
    </Router>
   
    </>
  );
}
export default App;