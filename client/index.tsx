import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

const router = createBrowserRouter(routes)
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="pohutukawa-2023-logan.au.auth0.com"
      clientId="EtynoQ4HllyBE4T5PKlwbe0fos9CQnTY"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://api/v1/gp/',
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  )
})
