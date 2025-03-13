import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div className="flex bg-[#ECFFF5] w-full h-screen">
      <Sidebar />
      <main className="bg-[#ECFFF5] dark:bg-[#14241B] text-[#070D0A] dark:text-[#ECFFF5] ml-72 w-full h-screen p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard;
