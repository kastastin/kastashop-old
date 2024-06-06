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
import { openMenu } from '@/context/modals'
import { addOverflowHiddenToBody } from '@/lib/utils/common'

import Logo from '@/components/elements/Logo'
import Menu from '@/components/modules/Header/Menu'

export default function Header() {
  const { language, translations } = useLang()

  function handleOpenMenu() {
    addOverflowHiddenToBody()
    openMenu()
  }

  return (
    <header>
      <div className='container flex justify-between h-[70px] md:h-[90px] border-b items-center shadow-md'>
        {/* Menu */}
        <div className='flex items-center space-x-1.5 primary-hover'>
          <button
            className='flex items-center space-x-1.5 font-bold text-xl translate-y-[0.06rem]'
            onClick={handleOpenMenu}
          >
            <AlignJustify />
            <span className='hidden sm:block'>
              {translations[language].header.menu_btn}
            </span>
          </button>
          <Menu />
        </div>

        <div className='w-[175px] sm:w-[200px] -translate-y-1 md:translate-x-[9%] lg:translate-x-[12%] md:w-[300px]'>
          <Logo />
        </div>

        {/* Icons */}
        <ul className='flex space-x-4 md:space-x-2 lg:space-x-4'>
          <li className='flex items-center justify-center primary-hover'>
            <button>
              <Search />
            </button>
          </li>

          <li className='hidden items-center justify-center primary-hover md:flex'>
            <Link href='/favorites'>
              <Heart />
            </Link>
          </li>

          <li className='hidden items-center justify-center primary-hover md:flex'>
            <Link href='/comparison'>
              <GitCompareArrows />
            </Link>
          </li>

          <li className='hidden items-center justify-center primary-hover md:flex'>
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
