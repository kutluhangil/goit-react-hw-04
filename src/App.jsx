import SearchBar from "./components/SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";

export default function App() {
  // SearchBar’dan gelen kelimeyi burada yakalıyoruz
  const handleSearch = (searchValue) => {
    console.log("Search query:", searchValue);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />
    </div>
  );
}
