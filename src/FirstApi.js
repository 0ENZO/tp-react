import {useEffect, useState} from "react";

function Photos() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [photos, setPhotos] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://jsonplaceholder.typicode.com/albums/1/photos'
        );

        const photos = await data.json();
        setPhotos(photos)
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
       /*
       <div>

       <h1>Gallery</h1>
       <hr className="mt-2 mb-5" />

       <div className="row text-center text-lg-left">
           {photos.slice(0, 20).map(photo => (
               <div className="col-lg-3 col-md-4 col-6">
                   <span className="d-block mb-4 h-100">
                       <img className="img-fluid img-thumbnail" alt={`gallery${photo.id}`} src={`${photo.url}`} />
                   </span>
               </div>
           ))}
       </div>

   </div>
   */
    );
}

export default Photos;
