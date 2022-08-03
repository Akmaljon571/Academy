import { Routes, Route } from "react-router-dom";
import Home from "../components/home/home";
    


function Routess() {
    return ( 
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} /> */}
            </Routes>
     );
}

export default Routess;