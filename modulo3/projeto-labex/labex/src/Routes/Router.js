import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AdminHome from '../Pages/AdminHome'
import ListTrips from '../Pages/ListTrips'
import Login from '../Pages/Login'
import ApplicationForm from '../Pages/ApplicationForm'
import TripDetails from '../Pages/TripDetails'
import CreateTrip from '../Pages/CreateTrip'
import Header from '../Header/Header'


export const Router = () => {
    return (
        <div>
            <BrowserRouter>
             <Header/>
             <Routes>
                <Route index element = {<HomePage/>}/>
                <Route path ="Admin" element = {<AdminHome/>}/>
                <Route path ="Login" element = {<Login/>}/>
                <Route path ="ListTrip" element = {<ListTrips/>}/>
                <Route path ="Form" element = {<ApplicationForm/>}/>
                <Route path ="Details" element = {<TripDetails/>}/>
                <Route path ="CreateTrip" element = {<CreateTrip/>}/>
             </Routes>
            </BrowserRouter>
        </div>
    )
}
