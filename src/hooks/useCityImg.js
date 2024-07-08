import axios from 'axios';
import { useState, useEffect } from 'react';

const useCityImage = (cityName) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query: cityName, per_page: 1 },
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_API_KEY_CITY}`, 
          },
        });
        const image = res.data.results[0];
        setImageUrl(image.urls.regular);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [cityName]);

  return { imageUrl, loading };
};

export default useCityImage;
