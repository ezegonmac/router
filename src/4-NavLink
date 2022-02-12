import { Route, Routes, NavLink, useMatch } from 'react-router-dom'

const Proyecto = () => {
  const match = useMatch('/portafolio/:proyecto_id')
  const { proyecto_id } = match.params
  return(
    <h2>Proyecto ... { proyecto_id }</h2>
  )
}

const Portafolio = () => {
  return(
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <NavLink 
            end 
            to='/portafolio/proyecto-1'
            className={({ isActive }) => "nav-link" + (isActive ? " activado" : "")}>Proyecto 1</NavLink>
        </li>
        <li>
          <NavLink 
            end 
            to={'/portafolio/proyecto-2'}>Proyecto 2</NavLink>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path=":proyecto_id" element={ <Proyecto/> }/>
        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/portafolio">Portafolio</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={ <h1>Inicio</h1> } />
          <Route path="/portafolio/*" element={ <Portafolio /> }/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
