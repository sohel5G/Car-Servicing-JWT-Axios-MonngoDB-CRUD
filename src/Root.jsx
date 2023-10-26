import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"
import Header from "./header/Header"

function Root() {

  return (
    <>
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
      <footer className="bg-slate-900">
        <div className="container mx-auto px-4">
          <Footer></Footer>
        </div>
      </footer>
    </>
  )
}

export default Root
