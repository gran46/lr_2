import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import Education from "./components/Education"
import Experience from "./components/Experience"

function App() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4">Олег Рубай</h1>

      <AboutMe />
      <Contacts />
      <Experience />
      <Education />
    </div>
  )
}

export default App