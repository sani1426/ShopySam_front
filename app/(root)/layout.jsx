// import Navigationbar from "@/components/shared/navbar";
import Topbar from "@/components/shared/topbar";


export default function RootLayout({ children }) {
  return (
    <>
      {/* <Navigationbar /> */}
      <Topbar />
      <main>{children}</main>
    </>
  )
}
