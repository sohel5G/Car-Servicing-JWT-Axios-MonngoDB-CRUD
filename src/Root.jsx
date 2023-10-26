import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"
import Header from "./header/Header"

function Root() {

  return (
    <div className="dark:bg-gray-900">
      <header className="dark:bg-slate-800 shadow">
        <div className="container mx-auto px-4">
          <Header></Header>
        </div>
      </header>
      <main>
        <div className="container mx-auto px-4">
          <Outlet></Outlet>
        </div>
      </main>
      <footer className="bg-black">
        <div className="container mx-auto px-4 py-12">
          <Footer></Footer>
        </div>
      </footer>
    </div>
  )
}

export default Root
