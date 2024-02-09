import React from "react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="mx-auto max-w-5xl flex flex-col items-center justify-center p-6 space-y-6 h-screen">
      <header className="absolute top-0 right-0 p-4">
        <Link className="mr-4" href="/doctor">
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Doctor Portol</button>
        </Link>
        <Link href="/sms">
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">SMS subscription</button>
        </Link>
      </header>
      <div className="text-center space-y-2">
        <p className="text-sm font-semibold tracking-wide text-cyan-600 dark:text-cyan-400">DOCLINK</p>
        <h1 className="text-5xl font-bold">We are here to help</h1>
      </div>
      <div className="text-center space-y-2">
        <p className="text-lg text-gray-500 dark:text-gray-400">Do not reveal any personal information!</p>
      </div>
      <div className="flex flex-col gap-2">
        <Link className="w-full" href="/connect">
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Connect to Doctors</button>
        </Link>
      </div>
    </div>
  )
}
