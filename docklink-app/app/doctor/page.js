import React from "react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="mx-auto max-w-5xl flex flex-col items-center justify-center p-6 space-y-6 h-screen">
      <header className="absolute top-0 right-0 p-4">
        <Link href="/">
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Patient Portol</button>
        </Link>
      </header>
      <div className="text-center space-y-2">
        
        <p className="text-xl font-semibold tracking-wide text-cyan-600 dark:text-cyan-400">DOCLINK</p>
        <h1 className="text-3xl font-bold">You are saving lives</h1>

        <form className="flex flex-col space-y-4"> {/* Added flex and space-y-4 to make the form vertical and spaced */}
          <input type="text" placeholder="Username" className="text-lg px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
          <input type="password" placeholder="Password" className="text-lg px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
          <button type="submit" href="/" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Connect to Patients</button>
        </form>
      </div>
    </div>
  )
}
