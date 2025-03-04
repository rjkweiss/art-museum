import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

function GalleryNavigation({ galleries }) {
    return(
        <>
            <h1>Galleries</h1>
            <nav>
                <NavLink to={`/`}>Home</NavLink>
                {galleries.map(gallery => (
                    <NavLink key={gallery.galleryid} className={({isActive}) => isActive ? 'active navigation-links': 'navigation-links'} to={`/galleries/${gallery.galleryid}`}>
                        {gallery.name}
                    </NavLink>
                ))}
            </nav>
        </>
    );
}
export default GalleryNavigation;
