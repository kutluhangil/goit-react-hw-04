import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import { fetchImages } from "./services/unsplash-api";

function App() {
  // DATA
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // UI STATES
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // MODAL
  const [selectedImage, setSelectedImage] = useState(null);

  // SEARCH HANDLER
  const handleSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term");
      return;
    }

    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  // FETCH IMAGES
  useEffect(() => {
    if (!query) return;

    async function loadImages() {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchImages(query, page);

        if (data.results.length === 0) {
          toast("No images found 🤷‍♂️");
        }

        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [query, page]);

  // AUTO SCROLL (Load More sonrası)
  useEffect(() => {
    if (page > 1) {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  }, [page]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />

      {error && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={setSelectedImage} />
      )}

      {loading && <Loader />}

      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}

      {selectedImage && (
        <ImageModal
          isOpen={true}
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}

export default App;
