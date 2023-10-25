import './ComicResults.css';
import Navmenu from '../menu/Navmenu';
import Footerpage from '../footer/Footerpage';

export default function ComicResults({ comics } ) {
    
    async function fetchdata  () {

        const apiComics = await fetch('https://gateway.marvel.com:443/v1/public/comics?format=digital%20comic&formatType=comic&noVariants=true&hasDigitalIssue=true&limit=20&orderBy=-onsaleDate&apikey=ce5e35bd1877a12f428c86ef6cb4c39e&ts=1&hash=083897e2f6ed21de6b319359948daff6');
        
        const apiComicResult = await apiComics.json();

        const {data} = apiComicResult

        document.getElementById("cardsContainer").innerHTML = "";

        const results = data.results; 

        let card = "";

        results.map((comic, index) => {
            
            card = `<div class="comic-container" key=${index}>
            <div>
                <img src="${comic.thumbnail.path+"."+comic.thumbnail.extension}" alt =""/> 
            </div>
            <div>
                <h3>${comic.title}</h3>
            </div>
            </div>`
            document.getElementById("cardsContainer").insertAdjacentHTML('beforeend', card);
        }
        )
        
    }

    fetchdata()

    return (
        <>
        <div className='App'>
            <div><Navmenu /></div>
            <div className="comics">
                <h1> COMICS </h1>
                <div className="container-comics" id="cardsContainer"></div>
            </div>
            <div className='footerpage'><Footerpage /></div>
            </div>
        </>
    )
  }