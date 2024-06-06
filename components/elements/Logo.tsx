import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href='/'>
      <Image src='/img/logo.svg' alt='KastaShop' width={300} height={50} />
    </Link>
  )
}
