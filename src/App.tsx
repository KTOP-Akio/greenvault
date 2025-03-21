import React, { ReactElement, useState } from 'react'
import logo from './logo.svg'
import viteLogo from './vite.svg'
import tailwindLogo from './tailwind.svg'
import { Link } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'

function App(): ReactElement {
  const { isDark } = useTheme()
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white dark:bg-[#070D0A] transition-colors duration-200">
      <div className="p-20 border shadow-xl border-gray-50 rounded-xl">
        <header>
          <div className="flex justify-center">
            <img src={viteLogo} className="w-32 h-32" alt="vite logo" />
            <img src={logo} className="w-32 h-32" alt="React logo" />
            <img
              src={tailwindLogo}
              className="w-32 h-32"
              alt="Tailwind CSS logo"
            />
          </div>
          <p className="pb-3 text-2xl">Hello Vite + React + Tailwind CSS!</p>
          <p>
            <button
              className="pt-1 pb-1 pl-2 pr-2 text-sm text-purple-100 bg-purple-400 rounded"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
          <p className="pt-3 pb-3">
            Edit{' '}
            <code className="border border-1 pl-1 pr-1 pb-0.5 pt-0.5 rounded border-purple-400 font-mono text-sm bg-purple-100 text-purple-900">
              src/App.tsx
            </code>{' '}
            and save to test HMR updates.
          </p>
          <p>
            {' | '}
            <Link to="/dashboard" className="text-purple-400 underline">
              dashboard
            </Link>
            {' | '}
          </p>
        </header>
      </div>
    </div>
  )
}

export default App
