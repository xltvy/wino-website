import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import './component_styles.css';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const playerRef = useRef(null);

  const urlList = [
    'https://www.youtube.com/watch?v=wMSUZhsmttA',
    'https://www.youtube.com/watch?v=uoT2Ut8WoG4'
    // add more URLs here
  ];

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleNextTrack = () => {
    if (currentTrackIndex < urlList.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setPlaying(true);
    }
  };

  const handlePrevTrack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
      setPlaying(true);
    }
  };

  return (
    <div className='music-player-container'>
      <div className='music-player-wrapper'>
        <div className='yt-player-container'>
          <ReactPlayer
            ref={playerRef}
            url={urlList[currentTrackIndex]}
            width="100%"
            height="100%"
            playing={playing}
          />
        </div>
        <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={handlePrevTrack}>Previous</button>
        <button onClick={handleNextTrack}>Next</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
