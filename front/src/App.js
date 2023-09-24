import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/tundra.github.io/" element={<MainPage />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
