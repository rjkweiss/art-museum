import { Link } from "react-router-dom";
import './ArtImageTile.css';

function ArtImageTile({ art, galleryId }) {

    const firstImage = art.images && art.images.length > 0 ? art.images[0]: null;
    if (!firstImage) {
        return <h2>No images to render for this art gallery</h2>
    }


    return (
        <div className="art-image-tile">
            <Link to={`/galleries/${galleryId}/art/${art.id}`}>
                <img className="art-images" src={firstImage.baseimageurl} alt={art.title} />
            </Link>
        </div>
    );
}
export default ArtImageTile;
