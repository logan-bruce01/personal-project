import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './CheckAuthenticated'

function Header() {
  const { user, logout, loginWithRedirect } = useAuth0()

  function navbar() {
    // e.preventDefault() // Prevent the default behavior of the button click

    document.getElementById('myDropdown').classList.toggle('show')

    window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content')
        let i
        for (i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i]
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show')
          }
        }
      }
    }
  }

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <header>
        <div className="homeLink">
          <div className="dropdown">
            <button onClick={navbar} className="dropbtn">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </button>

            <div id="myDropdown" className="dropdown-content">
              <a className="active" href="../index.html">
                <i className="fa fa-fw fa-home"></i> Home
              </a>
              <a href="../blogs.html">
                <i className="fa fa-fw fa-search"></i> Book Appointment
              </a>
            </div>
          </div>
        </div>

        <div className="appointmentLink">
          {/* <a className="nav"> */}
          <IfNotAuthenticated>
            <button className="nav" onClick={handleSignIn}>
              Sign In
            </button>
          </IfNotAuthenticated>
          <IfAuthenticated>
            <button className="nav" onClick={handleSignOut}>
              <i className="fa fa-user">{' ' + user?.name || ''}</i>
            </button>
          </IfAuthenticated>
          {/* </a> */}
        </div>

        <h2>Book A Appointment</h2>
      </header>
    </>
  )
}

export default Header
