import Link from "next/link"
import { useState } from "react"

export default function Navbar({ page }) {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  const links = [
    { href: "/", name: "Characters" },
    { href: "/weapons", name: "Weapons" },
    { href: "/artifacts", name: "Artifacts" },
    { href: "/abyss", name: "Spiral Abyss" },
  ]

  return (
    <div className="bg-gray-900 bg-opacity-90">
      <nav className="w-11/12 mx-auto flex items-center flex-wrap py-3 mb-4">
        <Link href="/">
          <a className="inline-flex items-center ">
            <span className="text-xl text-gray-50 font-semibold tracking-wide mr-8">
              Genshin Database
            </span>
          </a>
        </Link>
        <button
          className="inline-flex p-3 hover:text-gray-400 rounded md:hidden text-gray-50 ml-auto hover:text-gray-400 focus:outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          } w-full md:inline-flex md:flex-grow md:w-auto`}
        >
          <div className="md:inline-flex md:flex-row md:w-auto w-full md:items-center flex flex-col text-xl">
            {links.map((link) => {
              return (
                <Link href={link.href} key={link.name}>
                  <a
                    className={`px-4 py-2 hover:text-gray-50 ${
                      link.name === page ? "text-gray-50" : "text-gray-400"
                    }`}
                  >
                    {link.name}
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}
