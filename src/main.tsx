import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const Major = lazy(() => import('./pages/Major'))
import All from './pages/All'
import ProjectsPage from './pages/ProjectsPage'
import Loading from './components/Loading/Loading'

const routes=createBrowserRouter([
  {
    path:"/",
    element: <Suspense fallback={<Loading />}>
              <Major  />
            </Suspense>,
    children: [
      { path: "", element: <All /> },
      { path: "projects", element: <ProjectsPage /> }
    ]
  }
] ,{ basename:"/Portfolio"})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
