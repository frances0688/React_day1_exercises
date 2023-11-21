import Person from './components/Person/Person'
import PersonClass from './components/PersonClass/PersonClass'
import './App.css'

function App() {

  return (
    <div>
      <Person name="Frances" surname="Morales" age="35"/>
      <Person name="Adrian" surname="Cardenas" age="40"/>
      <PersonClass name="Tito" surname="CarMor" age="9"/>
    </div>
  )
}

export default App
