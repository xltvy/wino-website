import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import './component_styles.css';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);

  const urlList = [
    'https://www.youtube.com/watch?v=wMSUZhsmttA',
    'https://www.youtube.com/watch?v=uoT2Ut8WoG4'
    // add more URLs here
  ];

  const imgList = [
    'https://i.ytimg.com/vi/wMSUZhsmttA/maxresdefault.jpg',
    'https://i.ytimg.com/vi/uoT2Ut8WoG4/maxresdefault.jpg'
    // add more URLs here
    ];

    const titleList = [
        'Palace',
        'Hun43rd'
    ];

    const artistList = [
        'A$AP Rocky',
        'A$AP Rocky'
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

  const handleProgress = (progress) => {
    setPlayed(progress.played);
    setPlayedSeconds(progress.playedSeconds);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600),
          m = Math.floor(seconds % 3600 / 60),
          s = Math.floor(seconds % 60);
    return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s].filter(Boolean).join(':');
  };

  return (
    <div className='music-player-container'>
      <div className='music-player-wrapper'>
        <div className='yt-thumbnail-container'>
            <img src={imgList[currentTrackIndex]} alt='thumbnail' />
        </div>
        <div>
            <h2>{titleList[currentTrackIndex]}</h2>
            <h3>{artistList[currentTrackIndex]}</h3>
        </div>
        <div>
          <ReactPlayer
            ref={playerRef}
            url={urlList[currentTrackIndex]}
            width="0px"
            height="0px"
            playing={playing}
            onProgress={handleProgress}
            onDuration={handleDuration}
          />
        </div>
        <div>Time elapsed: {formatTime(playedSeconds)}</div>
        <div>Time remaining: {formatTime(duration - playedSeconds)}</div>
        <input 
          type="range" 
          min={0} 
          max={1} 
          step='any' 
          value={played} 
          onChange={e => setPlayed(+e.target.value)}
        />
        <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={handlePrevTrack}>Previous</button>
        <button onClick={handleNextTrack}>Next</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
