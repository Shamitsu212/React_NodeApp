import { Route, Routes } from 'react-router-dom'
import { routes } from './routes/routes'

function App() {

  return (
    <Routes>
      
      {routes.map((r) => (
        <Route key={r.path} path={r.path} element={<r.Component/>} />
      ))}

    </Routes>
  )
}

export default App