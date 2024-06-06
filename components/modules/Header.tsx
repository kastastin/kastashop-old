'use client'

import Link from 'next/link'
import {
  AlignJustify,
  Search,
  Heart,
  GitCompareArrows,
  ShoppingBasket,
  CircleUserRound,
} from 'lucide-react'

import { useLang } from '@/hooks/useLang'
import Logo from '@/components/elements/Logo'

export default function Header() {
  const { language, translations } = useLang()

  return (
    <header>
      <div className='container flex justify-between h-[90px] border-b items-center'>
        {/* Menu */}
        <div className='flex items-center space-x-1.5 primary-hover'>
          <AlignJustify />
          <button className='font-bold text-xl translate-y-[0.06rem]'>
            {translations[language].header.menu_btn}
          </button>
        </div>

        <div className='-translate-y-1 translate-x-[9%] lg:translate-x-[12%]'>
          <Logo />
        </div>

        {/* Icons */}
        <ul className='flex space-x-3 lg:space-x-4'>
          <li className='flex items-center justify-center primary-hover'>
            <button>
              <Search />
            </button>
          </li>

          <li className='flex items-center justify-center primary-hover'>
            <Link href='/favorites'>
              <Heart />
            </Link>
          </li>

          <li className='flex items-center justify-center primary-hover'>
            <Link href='/comparison'>
              <GitCompareArrows />
            </Link>
          </li>

          <li className='flex items-center justify-center primary-hover'>
            <Link href='/cart'>
              <ShoppingBasket />
            </Link>
          </li>

          <li className='flex items-center justify-center primary-hover'>
            <Link href='/profile'>
              <CircleUserRound />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
