import React from "react";
import Navbar from "./Component/Navbar";
import Aboutme from "./Component/Aboutme";
import Section from "./Component/Section";
import Sectiondata from "./Data/Sectiondata";
import Footer from "./Component/Footer";


const App=()=>{

    return( 
        <div>
        <Navbar />
        <Aboutme />
        {
        Sectiondata.map((value)=>( 
            <Section title={value.title} desc={value.desc}/>
        ))
        }
        <Footer />
        </div>
    )
}
export default App;