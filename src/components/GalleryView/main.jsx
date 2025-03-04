import { useParams, NavLink, Routes, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile/main";
import './GalleryView.css';

import ArtDescription from "../ArtDescription/main";

function GalleryView({ galleries }) {
    const { galleryId } = useParams();
    const gallery = galleries.find(gallery => gallery.galleryid === parseInt(galleryId));

    if (!gallery) {
        return <h2>Gallery not found</h2>;
    }

    return (
        <div className="gallery-view">
            <h2>{gallery.name}</h2>


            <Routes>
                <Route path="" element={
                    <div className="art-gallery">
                        {gallery.objects.map((art) => (
                            <ArtImageTile className='art-image-tile' key={art.id} art={art} galleryId={galleryId} />
                        ))}
                    </div>
                } />
                <Route path="art/:artId" element={<ArtDescription gallery={gallery}/>} />
            </Routes>
        </div>
    );
}

export default GalleryView;
