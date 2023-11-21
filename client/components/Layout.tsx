import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
        <video
          id="background-video"
          autoPlay
          loop
          muted
          poster="/images/doctorthumbnail.png"
        >
          <source src="/videos/doctor-patient.mp4" type="video/mp4" />
        </video>
      </main>
    </>
  )
}
