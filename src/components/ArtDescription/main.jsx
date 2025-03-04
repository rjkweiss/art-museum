import { Link, useParams } from "react-router-dom";
import './ArtDescription.css';
function ArtDescription({ gallery }) {
    // get params from the route
    const { galleryId, artId } = useParams();

    // get art using artId
    const artWork = gallery.objects.find(art => art.id === parseInt(artId));

    if (!artWork) {
        return <h2>No artwork was found!</h2>
    }


    return (
        <div className="art-description">
            <Link to={`/galleries/${galleryId}`}>Back to {gallery.name}</Link>
            <h2>
                <Link href={artWork.url}>{artWork.title}</Link>
            </h2>
            <div className="art-images">
                {artWork.images.map((image) => (
                    <img key={image.imageid} src={image.baseimageurl} alt={artWork.title} />
                ))}
            </div>
            <div className="art-info">
                <p><strong>Description: </strong> {artWork.description || 'No description available for this artwork'}</p>
                <p><strong>Credit:</strong> {artWork.creditline || "No credit info available."}</p>
                <p><strong>Technique:</strong> {artWork.technique || "No technique info available."}</p>
            </div>
        </div>
    );
}

export default ArtDescription;
