import React from 'react'
import './App.css'
import App from './App'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Dashboard from './dashboard/Dashboard'
import Overview from './dashboard/Overview'
import Deposit from './dashboard/Deposit'
import Withdrawal from './dashboard/Withdrawal'
import Notifications from './dashboard/Notifications'
import Documents from './dashboard/Documents'
import ContactUs from './dashboard/ContactUs'


createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdrawal" element={<Withdrawal />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="documents" element={<Documents />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
