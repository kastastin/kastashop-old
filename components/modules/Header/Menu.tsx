import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useUnit } from 'effector-react'
import { CircleX } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { setLanguage } from '@/context/lang'
import { $isMenuOpen, closeMenu } from '@/context/modals'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'
import { AllowedLanguages } from '@/constants/lang'

import Logo from '@/components/elements/Logo'
import Accordion from '@/components/modules/Accordion'
import MenuLinkItem from '@/components/modules/Header/MenuLinkItem'

export default function Menu() {
  const pathname = usePathname()
  const isMenuOpen = useUnit($isMenuOpen)
  const { language, translations } = useLang()
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyerList, setShowBuyerList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)
  const isMedia800 = useMediaQuery(800)

  function handleRedirectToCatalog(path: string) {
    if (pathname.includes('/catalog')) {
      window.history.pushState({ path }, '', path)
      window.location.reload()
    }

    handleCloseMenu()
  }

  function handleCloseMenu() {
    removeOverflowHiddenFromBody()
    closeMenu()
  }

  function handleSwitchLanguage(language: string) {
    setLanguage(language as AllowedLanguages)
    localStorage.setItem('language', JSON.stringify(language))
  }

  const handleSwitchLanguageToUa = () => handleSwitchLanguage('ua')
  const handleSwitchLanguageToEn = () => handleSwitchLanguage('en')

  function handleShowCatalogList() {
    setShowCatalogList(true)
    setShowBuyerList(false)
    setShowBuyerList(false)
  }

  const clothLinks = [
    {
      id: 1,
      text: translations[language].comparison['t-shirts'],
      href: '/catalog/cloth?offset=0&type=t-shirts',
    },
    {
      id: 2,
      text: translations[language].comparison['long-sleeves'],
      href: '/catalog/cloth?offset=0&type=long-sleeves',
    },
    {
      id: 3,
      text: translations[language].comparison.hoodie,
      href: '/catalog/cloth?offset=0&type=hoodie',
    },
    {
      id: 4,
      text: translations[language].comparison.outerwear,
      href: '/catalog/cloth?offset=0&type=outerwear',
    },
  ]

  const accessoriesLinks = [
    {
      id: 1,
      text: translations[language].comparison.bags,
      href: '/catalog/accessories?offset=0&type=bags',
    },
    {
      id: 2,
      text: translations[language].comparison.headdress,
      href: '/catalog/accessories?offset=0&type=headdress',
    },
    {
      id: 3,
      text: translations[language].comparison.umbrella,
      href: '/catalog/accessories?offset=0&type=umbrella',
    },
  ]

  const souvenirsLinks = [
    {
      id: 1,
      text: translations[language].comparison['business-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=business-souvenirs',
    },
    {
      id: 2,
      text: translations[language].comparison['promotional-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=promotional-souvenirs',
    },
  ]

  const officeLinks = [
    {
      id: 1,
      text: translations[language].comparison.notebook,
      href: '/catalog/office?offset=0&type=notebook',
    },
    {
      id: 2,
      text: translations[language].comparison.pen,
      href: '/catalog/office?offset=0&type=pen',
    },
  ]

  return (
    <nav className={`nav-menu ${isMenuOpen ? 'open' : 'close'}`}>
      <div className='container'>
        <div className={`nav-menu__logo ${isMenuOpen ? 'open' : ''}`}>
          <Logo />
        </div>

        <Image
          className={`nav-menu__bg ${isMenuOpen ? 'open' : ''}`}
          src='/img/menu-bg.svg'
          alt='Menu background'
          fill
        />

        <button
          className={`nav-menu__close ${isMenuOpen ? 'open' : ''}`}
          onClick={handleCloseMenu}
        >
          <CircleX />
        </button>

        <div className={`nav-menu__lang ${isMenuOpen ? 'open' : ''}`}>
          <button
            className={`nav-menu__lang__btn ${language === 'ua' ? 'lang-active' : ''}`}
            onClick={handleSwitchLanguageToUa}
          >
            UA
          </button>

          <button
            className={`nav-menu__lang__btn ${language === 'en' ? 'lang-active' : ''}`}
            onClick={handleSwitchLanguageToEn}
          >
            EN
          </button>
        </div>

        <ul className={`nav-menu__list ${isMenuOpen ? 'open' : ''}`}>
          <li className='nav-menu__list__item'>
            <button
              className='nav-menu__list__item__btn'
              onMouseEnter={handleShowCatalogList}
            >
              {translations[language].main_menu.catalog}
              <AnimatePresence>
                {showCatalogList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='nav-menu__accordion'
                  >
                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        titleClass='nav-menu__accordion__item__title'
                        title={translations[language].main_menu.cloth}
                      >
                        <ul className='nav-menu__accordion__item__list'>
                          {clothLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToCatalog={handleRedirectToCatalog}
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>

                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        titleClass='nav-menu__accordion__item__title'
                        title={translations[language].main_menu.accessories}
                      >
                        <ul className='nav-menu__accordion__item__list'>
                          {accessoriesLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToCatalog={handleRedirectToCatalog}
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>

                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        titleClass='nav-menu__accordion__item__title'
                        title={translations[language].main_menu.souvenirs}
                      >
                        <ul className='nav-menu__accordion__item__list'>
                          {souvenirsLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToCatalog={handleRedirectToCatalog}
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>

                    <li className='nav-menu__accordion__item'>
                      <Accordion
                        titleClass='nav-menu__accordion__item__title'
                        title={translations[language].main_menu.office}
                      >
                        <ul className='nav-menu__accordion__item__list'>
                          {officeLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToCatalog={handleRedirectToCatalog}
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
