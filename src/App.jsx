import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

const LandingPage = lazy(() => import("./pages/LandingPage"))
const BlogPage = lazy(() => import("./pages/BlogPage"))
const ResumePage = lazy(() => import("./pages/ResumePage"))


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
          <ResumePage />
        </Suspense>
      } path="/resume" />

      <Route element={
        <Suspense fallback={<p>Loading...</p>}>
          <BlogPage />
        </Suspense>
      } path="/blog" />
    </Routes>
  )
}

export default App
