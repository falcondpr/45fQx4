import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Root from '../pages/Root';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
