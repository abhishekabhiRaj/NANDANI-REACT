import React from 'react'
import { Redirect, Route, Switch } from "react-router-dom"
import AboutPage from '../../View/AboutPage/AboutPage'
import CollectionPage from '../../View/CollectionPage/CollectionPage'
import HomePage from "../../View/HomePage/HomePage"
import NavBar from '../NavBar/NavBar'
import LatestMagazine from '../../View/LatestMagazine/LatestMagazine'
import ContactPage from '../../View/ContactPage/ContactPage'
import News from '../../View/News/News'
import Footer from '../Footer/Footer'

function App() {
    return (
        <div  >
        <NavBar />
           <div className="col-12 " style={{position:"relative",marginTop:'4.5rem'}} >
           <Switch>
           <Route exact path="/" component={HomePage} ></Route>
           <Route exact path="/collection" component={CollectionPage} ></Route>
            <Route exact path="/about" component={AboutPage} ></Route>
            <Route exact path="/latestmagazine" component={LatestMagazine} ></Route>
            <Route exact path="/contact" component={ContactPage}></Route>
            <Route exact path="/news" component={News}></Route>           
            <Redirect to='/' ></Redirect>
           </Switch>
           </div>
           <Footer createrName="Ultron pvt." contact="897677833" email="abcd123@gmail.com" />
        </div>
    )
}

export default App
