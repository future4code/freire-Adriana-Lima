import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../Header/Header'
import HomePage from '../Pages/HomePage/HomePage'
import AdminHome from '../Pages/AdminHome/AdminHome'
import ListTrips from '../Pages/ListTrips/ListTrips'
import Login from '../Pages/Login/Login'
import ApplicationForm from '../Pages/ApplicationForm/ApplicationForm'
import TripDetails from '../Pages/Tripdetails/TripDetails'
import CreateTrip from '../Pages/CreateTrip/CreateTrip'
import Footer from '../Footer/Footer'

export const Router = () => {
    return (
        <div>
            <BrowserRouter>
             <Header/>
             <Routes>
                <Route index element = {<HomePage/>}/>
                <Route path ="/Admin" element = {<AdminHome/>}/>
                <Route path ="/Login" element = {<Login/>}/>
                <Route path ="/ListTrip" element = {<ListTrips/>}/>
                <Route path ="/Form" element = {<ApplicationForm/>}/>
                <Route path ="/Details" element = {<TripDetails/>}/>
                <Route path ="/CreateTrip" element = {<CreateTrip/>}/>
             </Routes>
             <Footer/>
            </BrowserRouter>
        </div>
    )
}
