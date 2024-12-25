import { Route, Routes } from "react-router-dom"
// import LandingPage from "./pages/LandingPage"
// import Resume from "./pages/Resume"
import { lazy, Suspense } from "react"

const LandingPage = lazy(() => import("./pages/LandingPage"))
const Resume = lazy(() => import("./pages/Resume"))


function App() {
  return (
    <Routes>
      <Route element={
        <Suspense fallback={<p>Loading...</p>}>
          <LandingPage />
        </Suspense>
      } path="/" />

      <Route element={
        <Suspense fallback={<p>Loading...</p>}>
          <Resume />
        </Suspense>
      } path="/resume" />
    </Routes>
  )
}

export default App
