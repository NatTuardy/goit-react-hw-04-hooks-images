import { useState, useEffect } from "react";
import LoaderComponent from "./components/loader/Loader.jsx";
import SearchBar from "./components/searchBar/SearchBar.jsx";
import ImageGallery from "./components/imageGallery/ImageGallery.jsx";
import Modal from "./components/modal/Modal.jsx";
import Button from './components/button/Button.jsx'
import { fetchImages } from "./services";
import "./Styles.css";

const initialState = {
  images: [],
    isLoading: false,
    error: null,
    query: "",
    page: 1,
    largeImg: "",
    isModal: false,
}
const App = () => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const { query, page, isLoading } = state;
    if (isLoading) {
      getFetchImages(query, page);
    }
  }, [state.isLoading])

  const  handleSubmit = (inputValue) => {
    setState(prevState=> ({ ...prevState, isLoading: true, query: inputValue, page: 1, images: [] }));
  };

  const getFetchImages = async (query, page) => {
    try {
      const { data } = await fetchImages(query, page);
      const imagesDataArr = data.hits.map(
        ({ id, webformatURL, largeImageURL }) => {
          return { id, webformatURL, largeImageURL };
        }
      );
      setState((prevState) => {
        return {
          ...prevState,
          images: [...prevState.images, ...imagesDataArr],
          page: prevState.page + 1,
          isLoading: false,
        };
      });
      if(!state.isModal) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
      
    } catch (error) {
      setState(prevState=>({ ...prevState, error, isLoading: false }));
    }
  };

  const  onShowModal = (img) => {
    setState(prevState=> ({ ...prevState, largeImg: img, isModal: true }));
  };

  const  onCloseModal = () => {
    setState(prevState=> ({...prevState,isModal: false}))
 }

 const  handleLoadMore = () => {
  setState(prevState=> ({...prevState, isLoading: true}))
}

const { images, largeImg, isModal, isLoading } = state;

  return ( 
    <div className="App">
        <SearchBar onSubmit={handleSubmit}  />
        <ImageGallery images={images} onShow={onShowModal} />
        {isModal && (
          <Modal onClose={onCloseModal}>
            <img src={largeImg} />
          </Modal>
        )}
        {isLoading && <LoaderComponent/>}
        {images.length > 0 && <Button onLoadMore={handleLoadMore}/>}
      </div>
   );
}
 
export default App;

