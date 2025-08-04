import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

export const HeroSection = ({ title, url }) => {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      if (!url) return;
      
      try {
        setLoading(true);
        setError(null);
        
        const response = await axiosInstance.get(url);
        console.log("Hero banner response:", response.data);
        
        // The API returns data directly as an array, not in a 'results' property
        const movieData = response.data;
        
        if (movieData && movieData.length > 0) {
          const randomBanner = movieData[Math.floor(Math.random() * movieData.length)];
          setBanner(randomBanner);
          console.log("Selected banner:", randomBanner);
        } else {
          console.log("No banner data found");
        }
      } catch (error) {
        console.error("Failed to fetch banner:", error);
        setError("Failed to load banner");
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, [url]);

  if (loading) {
    return (
      <section className="hero" id="home" style={{ backgroundColor: '#000', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'white', fontSize: '18px' }}>Loading banner...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="hero" id="home" style={{ backgroundColor: '#000', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'red', fontSize: '18px' }}>{error}</div>
      </section>
    );
  }

  if (!banner) {
    return (
      <section className="hero" id="home" style={{ backgroundColor: '#000', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'white', fontSize: '18px' }}>No banner available</div>
      </section>
    );
  }

  // Use posterURL as background since the sampleapis doesn't have backdrop_path
  const sectionStyle = {
    backgroundImage: banner.posterURL && banner.posterURL !== "N/A" 
      ? `url(${banner.posterURL})` 
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Fallback gradient
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '500px',
    position: 'relative',
  };

  // Add overlay for better text readability
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  const onPlayClick = () => {
    alert(`Play ${banner.title}`);
  };

  const onInfoClick = () => {
    alert(`Info about ${banner.title}`);
  };

  return (
    <section className="hero" id="home" style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div className="hero-content" style={contentStyle}>
        <h1 className="hero-title">{banner.title}</h1>
        <p className="hero-description">
          {/* Since sampleapis doesn't have overview, create a simple description */}
          {banner.overview || `Watch ${banner.title} - A great movie experience awaits!`}
        </p>
        <div className="hero-buttons">
          <button className="btn btn-play" onClick={onPlayClick}>▶ Play</button>
          <button className="btn btn-info" onClick={onInfoClick}>ℹ More Info</button>
        </div>
      </div>
    </section>
  );
};