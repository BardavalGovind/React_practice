import React from "react";
import ThemeProvider from "./ThemeContext";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App1(){
    return(
        <ThemeProvider>
            <Header/>
            <Content/>
            <Footer/>
        </ThemeProvider>
    );
}

export default App1;