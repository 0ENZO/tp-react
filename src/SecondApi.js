import {useEffect, useState} from "react";
import Pokedex from './Pokedex'
import PokemonPicture from './PokemonPicture';
import PokemonInput from './PokemonNameInput';

function SecondApi() {

    /*
    useEffect(() => {
        fetchItems();
    }, []);

    const [animes, setAnimes] = useState([]);
    const url = 'https://api.jikan.moe/v3/search/anime?limit=1&q='
    const search = input;

    const fetchItems = async () => {
        const data = await fetch(`${url}/${search}`);

        const animes = await data.json();
        setAnimes(animes)
    }

    return (
        <div>
            <h1 className="mb-4">Placeholder</h1>
            <div className="d-flex row col-md-10 mx-auto align-items-center text-center">
                {photos.map(photo => (
                    <div className="d-flex col-md-3">
                        <span className="">
                            <img className="img-fluid img-thumbnail" href={photo.url} src={photo.thumbnailUrl} />
                            <p>{photo.title}</p>
                        </span>
                    </div>                    
                ))}
            </div>
            
        </div>
    );
    */
   return (
    <div className="">
        <Pokedex>
          <PokemonPicture />
          <PokemonInput />
        </Pokedex>
    </div>
  );
}

export default SecondApi;

