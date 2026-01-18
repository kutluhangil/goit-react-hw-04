// src/services/unsplash-api.js
import axios from "axios";

// 🔐 Unsplash temel ayarları
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common.Authorization =
  "Client-ID oC2LIAuRbR4lD4zmxA1pK5cdCP1Bzdw7fb-tNfveLkc";

// 🔍 Görsel arama fonksiyonu
export const fetchImages = async (query, page = 1) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
  });

  return response.data;
};
