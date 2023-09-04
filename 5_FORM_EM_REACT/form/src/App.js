import './App.css';
import MyForms from './components/MyForms';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForms user={{
        name: "Cleidson Fias",
        email: "fias@gmail.com",
        bio: "Sou Dev Fullstack",
        role: "admin",
      }} />
    </div>
  );
}

export default App;
