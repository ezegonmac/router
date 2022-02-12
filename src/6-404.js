import { Route, Routes, NavLink } from 'react-router-dom'



function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/perfil">Perfil</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={ <h1>Inicio</h1> } />
          <Route path="/perfil" element={ <h1>Perfil</h1> } />
          <Route path="*" element={ "404: Ruta no encontrada" }/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
