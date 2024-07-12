import { useState } from 'react';
import MovieCard from './MovieCard';

type Props = {
    movies:any
}

const ImageSlider = ({movies}:Props) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? movies.length - 3 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentIndex === movies.length - 3 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden">
            <div className="flex gap-1 transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 196}px)` }}>
                {movies.map((movie:any, index:number) => (
                    <div key={index} className="min-w-48 min-h-48 border-2 border-color05" >
                        <MovieCard movie={movie}/>
                    </div>
                ))}
            </div>

            <button 
                onClick={goToPrevious} 
                className="absolute h-full top-0 left-0 bg-color05 text-white px-4 py-2 opacity-95 hover:opacity-80">
                &#10094;
            </button>

            <button 
                onClick={goToNext} 
                className="absolute h-full top-0 right-0 bg-color05 text-white px-4 py-2 opacity-95 hover:opacity-80">
                &#10095;
            </button>

        </div>
    );
};

export default ImageSlider;