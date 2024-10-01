import Header from './components/header'
import FixedSpeedDial from './components/socialfixed'
import About from './sections/aboutme/about'
import Main from './sections/main/main'
import Projects from './sections/projects/projects'

export function App() {
  return (
    <>
      <FixedSpeedDial />
      <Header />
      <Main />
      <About />
      <Projects />
    </>
  )
}

export default App
