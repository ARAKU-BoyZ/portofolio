import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

const LandingPage = lazy(() => import("./pages/LandingPage"))
const BlogPage = lazy(() => import("./pages/BlogPage"))
const ResumePage = lazy(() => import("./pages/ResumePage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const PageNotFound = lazy(() => import("./pages/layout/PageNotFound"))


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
      } path="/about" />

      <Route element={
        <Suspense fallback={<p>Loading...</p>}>
          <BlogPage />
        </Suspense>
      } path="/blog" />

      <Route element={
        <Suspense fallback={<p>Loading...</p>}>
          <PageNotFound />
        </Suspense>
      } path="/project" />

      <Route element={
        <Suspense fallback={<p>Loading...</p>}>
          <ContactPage />
        </Suspense>
      } path="/contact" />
    </Routes>
  )
}

export default App
