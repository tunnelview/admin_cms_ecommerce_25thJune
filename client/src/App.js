import "./App.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>

      <Login />
      <Registration />
    </div>
  );
};

export default App;
