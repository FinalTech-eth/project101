import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Index';
import About from './Pages/About'
import Error from './Pages/Error';
import ClientSharedLayout from './Layers/SharedLayouts/ClientSharedLayout';

function App() {
  return <>
    <Router>
      <Routes>
        <Route path='/' element={<ClientSharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </>
}

export default App;
