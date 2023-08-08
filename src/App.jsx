import './App.css';
import { MenuSteps } from './components/MenuSteps/MenuSteps';
import { Step } from './components/Step/Step';


function App() {

  return (
    <>
      <div className='App_container'>
        <MenuSteps/>
        <Step/>
      </div>
    </>
  )
}

export default App
