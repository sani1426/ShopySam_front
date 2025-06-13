// import Navigationbar from "@/components/shared/navbar";
import Navigation from "@/components/shared/navigation";



export default function RootLayout({ children }) {
  return (
    <>
      {/* <Navigationbar /> */}
      <Navigation />
 
      <main>{children}</main>
    </>
  )
}
