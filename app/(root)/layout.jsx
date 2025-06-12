import Navbar from '@/components/shared/navbar'

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
