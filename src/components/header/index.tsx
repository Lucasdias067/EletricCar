'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import MobileMenu from '../utils/mobile-menu'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)
  const [pathname, setPathname] = useState<boolean>(false)

  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true)
  }

  const path = usePathname()

  useEffect(() => {
    return path === '/' ? setPathname(true) : setPathname(false)
  }, [path])

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Link href='/' className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 transition duration-150 ease-in-out">INÍCIO</Link>
            <Link href={pathname ? '#about' : '/'} className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 transition duration-150 ease-in-out">NOSSA EMPRESA</Link>
            <Link href={pathname ? '#products' : '/'} className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 transition duration-150 ease-in-out">PRODUTOS</Link>
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Entrar</Link>
              </li>
              <li>
                <Link href="/signup" className="px-4 py-2 shadow font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sair</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
