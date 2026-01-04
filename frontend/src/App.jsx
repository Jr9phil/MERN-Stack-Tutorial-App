import { Route, Routes } from 'react-router';
import HomePage from './pages/Home';  
import CreatePage from './pages/Create';
import DetailPage from './pages/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/note/:id" element={<DetailPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  )
};
export default App
