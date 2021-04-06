import imageInSrc from './imageInSrc.jpg';
import './App.css';
import './style.css'

function App() {
  return (
    <>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Dream trip to Thailand</h1>
    <img src={imageInSrc}  alt="image" className="center"/>
    <p className="text">By the richness of its culture, its turquoise waters, its luxuriant flora and fauna, Thailand is one of the most popular tourist destinations. Tiga will go to the "land of smiles" in the lands of a Thailand full of contrasts and contradictions ...</p>
    <img src="/imageInPublic.jpg" className="center"/>
  </div>
  <h2 className="titleVideo">Enjoy watching..</h2>
  <div className="center"><video  controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
  </div>

</>
    
  );
}

export default App;
