import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import BookApp from './components/BookApp'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/book" element={<BookApp />} />
    {/* <Route path="/admin" element={<AdminHome />} /> */}
  </Route>
)
