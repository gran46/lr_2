import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import Education from "./components/Education"
import Experience from "./components/Experience"
import HardSkills from "./components/HardSkills"
import SoftSkills from "./components/SoftSkills"

function App() {
  return (
    <>
      <header>
          <h1>Олег Рубай</h1>
      </header>
      <AboutMe/>
      <Contacts/>
      <Experience/>
      <Education/>
      <HardSkills/>
      <SoftSkills/>
    </>
  )
}

export default App
