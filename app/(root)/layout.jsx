import Navigationbar from "@/components/shared/navbar";



export default function RootLayout({ children }) {
  return (
    <>
      <Navigationbar />
 
      <main>{children}</main>
    </>
  )
}
