import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"
import Header from "./header/Header"

function Root() {

  return (
    <>
      <header>
        <div className="container mx-auto px-6">
          <Header></Header>
        </div>
      </header>
      <main>
        <div className="container mx-auto px-6">
          <Outlet></Outlet>
        </div>
      </main>
      <footer className="bg-black">
        <div className="container mx-auto px-6">
          <Footer></Footer>
        </div>
      </footer>
    </>
  )
}

export default Root
