import { Routes, Route} from 'react-router-dom';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation/main';
import GalleryView from './components/GalleryView/main';

function App() {

  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records}/>

      {/* set up some routes */}
      <Routes>
        <Route path='/' element={
          <>
            <h1>Harvard Art Museum</h1>
            <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
          </>
        } />
        <Route path='/galleries/:galleryId/*' element={<GalleryView galleries={harvardArt.records} />} />
        <Route path='*' element={<h2>Page Not Found</h2>} />
      </Routes>
    </div>
  )
}

export default App
