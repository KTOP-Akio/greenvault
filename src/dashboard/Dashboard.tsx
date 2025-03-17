import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'

const Dashboard = () => {
  return (
    <div className="flex bg-[#ECFFF5] w-full h-full">
      <Sidebar />
      <main className="bg-[#ECFFF5] dark:bg-[#14241B] text-[#070D0A] dark:text-[#ECFFF5] ml-72 w-full h-full">
        <Navbar />
        <div className="pt-[20px] px-[60px] bg-[#ECFFF5] dark:bg-[#14241B]">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Dashboard;
