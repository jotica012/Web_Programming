import { Routes, Route } from 'react-router-dom'
import { HomePage, PageNotFound, ProjectsPage } from './pages'
// import { ServicesRouter } from './routers/ServicesRouter'
import { ProjectDetail } from './pages/Pdetail/ProjectDetail'

export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/projects'
          element={<ProjectsPage />}
        />
        <Route
          path='/projects/project/:title'
          element={<ProjectDetail />}
        />
        <Route
          path='/*'
          element={<PageNotFound />}
        />
      </Routes>
    </main>
  )
}
