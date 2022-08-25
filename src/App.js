import logo from './logo.svg';
import './App.css';
import Profile from './profil/Profile';

function App() {
 const bio =  `Mariama Bâ, née le 17 avril 1929 à Dakar, et morte dans la même ville le 17 août 1981, est une femme de lettres sénégalaise. Elle est issue d'une famille Lébou musulmane. Dans son œuvre, elle critique les inégalités entre hommes et femmes dues à la tradition africaine.`
const fullName= " Mariama BA" ;
 ;

  return (
    <div className="App">
      <Profile 
      fullName={fullName} 
      bio={bio} 
      profession= "Auteur, Romancière"
      
      >
        https://scontent.fdkr6-1.fna.fbcdn.net/v/t1.6435-9/175544870_1371108506601113_3247053831292137130_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Mk2W0UQVD0MAX8ZOCYC&_nc_ht=scontent.fdkr6-1.fna&oh=00_AT_fBs8wuvF5UDd_8TRtVJBP8CfohzSN9HnoJL52LXB5rg&oe=632B5197
        
      
      </Profile>
      
    </div>

  );
}

export default App;
