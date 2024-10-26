

const Navbar = () => {

  return (
    <nav className="main_nav py-5 bg-[#AF1740] px-[50px]" >
        <div className="menu-row flex justify-between">
            <div className="logo">
                <h1 className="text-white">Logo</h1>
            </div>
            <div className="menu">
              <ul className="flex gap-5">
                <li><a href="/">HOME</a></li>
                <li><a href="/project">PROJECT</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/help">HELP</a></li>
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar