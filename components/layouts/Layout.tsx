import Header from '@/components/modules/Header/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <div>footer</div>
    </>
  )
}
