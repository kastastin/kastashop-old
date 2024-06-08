import Link from 'next/link'

import { IMenuLinkItemProps } from '@/types/modules'

export default function MenuLinkItem({
  item,
  handleRedirectToCatalog,
}: IMenuLinkItemProps) {
  const onRedirect = () => handleRedirectToCatalog(item.href)

  return (
    <li key={item.id} className='nav-menu__accordion__item__list__item'>
      <Link
        className='nav-menu__accordion__item__list__item__link'
        href={item.href}
        onClick={onRedirect}
      >
        {item.text}
      </Link>
    </li>
  )
}
