import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGeolocated } from 'react-geolocated';

const CityName = () => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    const fetchCityName = async ({latitude, longitude}) => {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );

        if (response.data && response.data.address) {
          const { city, town, village } = response.data.address;
          setCity(city || town || village || 'Unknown');
        } else {
          setCity('Unknown');
        }
      } catch (error) {
        console.error('Error fetching city name:', error);
        setCity('Error');
      } finally {
        setLoading(false);
      }
    };

    if (coords) {
      fetchCityName(coords.latitude, coords.longitude);
    }
  }, [coords]);

  return {city,loading}
};

export default CityName;
