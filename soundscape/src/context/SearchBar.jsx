import React, { useState, useRef, useEffect, useContext } from 'react';
import { songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  // Access PlayerContext
  const { playWithId } = useContext(PlayerContext);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    filterSongs(value);
  };

  const filterSongs = (value) => {
    const results = songsData.filter(song =>
      song.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSongs(results);
    setIsDropdownVisible(results.length > 0);
  };

  const handleSongSelect = (song) => {
    setInput(song.name);
    setFilteredSongs([]);
    setIsDropdownVisible(false);

    // Play the selected song in the Player
    playWithId(song.id);  // This uses PlayerContext to play the song
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setFilteredSongs([]);
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative w-full ml-72 mt-3'>
      <input
        type='text'
        placeholder='Search Your Favourite Song'
        value={input}
        onChange={handleInputChange}
        onFocus={() => {
          filterSongs(input);
          setIsDropdownVisible(true);
        }}
        className='bg-white text-purple-950 w-[48rem] h-11 pl-6 rounded-3xl px-3 placeholder:text-slate-600 font-bold outline-none'
      />

      {isDropdownVisible && filteredSongs.length > 0 && (
        <div ref={dropdownRef} className='absolute bg-purple-950 border text-white rounded-b-2xl mt-1 w-[48rem] max-h-40 overflow-y-auto'>
          {filteredSongs.map((song, index) => (
            <div
              key={index}
              onClick={() => handleSongSelect(song)}
              className='px-4 py-2 hover:bg-purple-800 cursor-pointer'
            >
              {song.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;