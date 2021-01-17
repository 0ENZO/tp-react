import {useEffect, useState} from "react";

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
        </div>
    );
}

export default SecondApi;

