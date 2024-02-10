/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/2v7k06Wujd3
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Doctorlogin() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header
        className="bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div
          className="container flex flex-col items-center py-4 px-4 sm:flex-row sm:justify-between sm:py-6 sm:gap-4 md:px-6">
          <Link className="flex items-center space-x-2" href="/">
            <CircleDotIcon className="w-8 h-8" />
            <span className="font-bold tracking-tighter text-gray-900 dark:text-gray-50">DocLink</span>
          </Link>
          <Link href="/"
            className="flex items-center gap-2 text-sm rounded-full border border-gray-200 border-gray-200 bg-white px-6 py-3 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900 dark:hover:text-gray-50">
            Patient's Portal
          </Link>
          <button className="sm:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 lg:py-24">
          <div
            className="container flex flex-col items-center justify-center gap-6 px-4 text-center md:gap-10 md:px-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Log in</h1>
              <div className="space-y-4 w-full max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" required type="password" />
                </div>
                <Link href="/doctor/triage">
                  <Button className="w-full" type="submit" >
                  Log in
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 lg:py-14">
          <div
            className="container flex flex-col items-center justify-center gap-6 px-4 text-center md:gap-10 md:px-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get Connected to Start Helping</h1>
              <div className="space-y-4 w-full max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" required type="tel" />
                </div>
                <Link href="/"><Button className="w-full" type="submit" >
                  Connect
                </Button></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function docLogin() {
  window.location.href = "/doctor";
}

function CircleDotIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="1" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}
