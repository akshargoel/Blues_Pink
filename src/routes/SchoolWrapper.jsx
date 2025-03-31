import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import ScrollToTop from '../components/ScrollTop'
const SchoolWrapper = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <ScrollToTop />
    <Footer />
    </>
  )
}

export default SchoolWrapper