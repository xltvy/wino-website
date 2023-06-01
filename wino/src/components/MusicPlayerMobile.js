import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import './component_styles.css';
import './responsive_styles.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import PlayerPreviousIcon from '../icons/PlayerPreviousIcon.js';
import PlayerNextIcon from '../icons/PlayerNextIcon.js';
import PlayerPlayIcon from '../icons/PlayerPlayIcon.js';
import PlayerPauseIcon from '../icons/PlayerPauseIcon.js';

const MusicPlayerMobile = () => {
  const [playing, setPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);

  const urlList = [
    'https://www.youtube.com/watch?v=BhYKN21olBw',
    'https://www.youtube.com/watch?v=h90j3lOXNvU'
    // add more URLs here
  ];

  const imgList = [
    'https://i.ytimg.com/vi/BhYKN21olBw/maxresdefault.jpg',
    'https://i.ytimg.com/vi/h90j3lOXNvU/maxresdefault.jpg'
    // add more URLs here
    ];

    const titleList = [
        'Brain Damage',
        'Us and Them'
    ];

    const artistList = [
        'Pink Floyd',
        'Pink Floyd'
    ];

  const handlePlayPause = () => {
    setPlaying(!playing);
    console.log("clicked");
  };

  const handleNextTrack = () => {
    if (currentTrackIndex < urlList.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0);
    }
    setPlaying(true);
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
      <div className='music-player-container-m'>
        <div className='music-player-wrapper'>
          <div>
            <ReactPlayer
              ref={playerRef}
              url={urlList[currentTrackIndex]}
              width="0px"
              height="0px"
              playing={playing}
              onProgress={handleProgress}
              onDuration={handleDuration}
              onEnded={handleNextTrack}
            />
          </div>
          <div className='player-wrapper'>
            <div className='yt-thumbnail-container'>
                <img src={imgList[currentTrackIndex]} alt='thumbnail' />
            </div>
            <div className='player-info-container'>
              <div className='music-player-meta-container'>
                  <p className='player-primary-text'>{titleList[currentTrackIndex]}</p>
                  <p className='player-secondary-text'>{artistList[currentTrackIndex]}</p>
              </div>
              <div className='player-progress-bar-container'>
                <div className='player-secondary-text'>{formatTime(playedSeconds)}</div>
                <Slider
                  value={played * 100}
                  onChange={value => setPlayed(value / 100)}
                  disabled={true}
                />
                <div className='player-secondary-text'>{formatTime(duration - playedSeconds)}</div>
              </div>
              <div className='music-player-buttons-container'>
                <div className='music-player-button' onClick={handlePrevTrack}>{<PlayerPreviousIcon/>}</div>
                <div className='music-player-button' onClick={handlePlayPause}>
                  {playing ? <PlayerPauseIcon /> : <PlayerPlayIcon />}
                </div>
                <div className='music-player-button-alt' onClick={handleNextTrack}>{<PlayerNextIcon/>}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MusicPlayerMobile;
