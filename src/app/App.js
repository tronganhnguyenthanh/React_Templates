import React from "react"
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
class App extends React.Component {
  render(){
   return(
    <>
       <Header/>
       <Home/>
       <Footer/>
    </>
   )
  }
}

export default App;
