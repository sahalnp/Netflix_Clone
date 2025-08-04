import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

export const Movies = ({ title, url }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // Clear previous movies when URL changes
                setMovies([]);
                
                const response = await axiosInstance.get(url);
                console.log(`Response for ${url}:`, response.data);
                
                // The API returns data directly as an array, not in a 'results' property
                const movieData = response.data;
                
                if (movieData && movieData.length > 0) {
                    setMovies(movieData);
                    console.log(`Fetched ${movieData.length} movies for ${url}`);
                } else {
                    console.log(`No movies found for ${url}`);
                }
            } catch (error) {
                console.error(`Failed to fetch movies from ${url}:`, error);
                setMovies([]); // Set empty array on error
            }
        };

        if (url) {
            fetchMovies();
        }
    }, [url]);

    return (
        <section className="content-section" id="trending">
            <h2 className="section-title">{title}</h2>
            <div className="movie-row" id="trending-row">
                {movies.map((movie, index) => (
                    <div className="movie-card" data-id={movie.id} key={movie.id || index}>
                        <img
                            src={movie.posterURL !== "N/A" ? movie.posterURL : "/placeholder-image.jpg"}
                            alt={movie.title}
                            className="movie-poster"
                            onError={(e) => {
                                e.target.src = "/placeholder-image.jpg"; // Fallback for broken images
                            }}
                        />
                        <div className="movie-info">
                            <div className="movie-title">
                                {movie.title}
                            </div>
                            <div className="movie-genre">
                                {/* You can add genre information here if available in your API */}
                                Movie ID: {movie.id}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};