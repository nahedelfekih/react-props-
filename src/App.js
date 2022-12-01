import './App.css';
import Profile from "./component/profil/Profile"

function App() {
  const handleName = (name) => alert(name);
  return (
    <div className="App">
      
    <Profile FullName="nahed" Bio="full stack js" Profession="financière" HandleName={handleName}>
      <img src='./WhatsApp Image 2022-07-12 at 19.47.29.jpeg' alt=''/>
    </Profile>

    </div>
  );
}

export default App;