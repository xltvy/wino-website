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
import Draggable from 'react-draggable';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);

  const urlList = [
    'https://www.youtube.com/watch?v=c-MU_5VkjtE',
    'https://www.youtube.com/watch?v=x-xTttimcNk',
    'https://www.youtube.com/watch?v=wGAAo9s1ahg',
    'https://www.youtube.com/watch?v=rhVUgq8LrCk',
    'https://www.youtube.com/watch?v=gGdpMot_cSg',
    'https://www.youtube.com/watch?v=wpvXfLlcHwc',
    'https://www.youtube.com/watch?v=K3QDDlWmR9Q',
    'https://www.youtube.com/watch?v=MlZOFIRC9HA',
    'https://www.youtube.com/watch?v=47P6CI7V8gM',
    'https://www.youtube.com/watch?v=mAAqKx4aD_g'
    // add more URLs here
  ];

  const imgList = [
    'https://i.ytimg.com/vi/c-MU_5VkjtE/maxresdefault.jpg',
    'https://i.ytimg.com/vi/x-xTttimcNk/maxresdefault.jpg',
    'https://i.ytimg.com/vi/wGAAo9s1ahg/maxresdefault.jpg',
    'https://i.ytimg.com/vi/rhVUgq8LrCk/maxresdefault.jpg',
    'https://i.ytimg.com/vi/gGdpMot_cSg/maxresdefault.jpg',
    'https://i.ytimg.com/vi/wpvXfLlcHwc/maxresdefault.jpg',
    'https://i.ytimg.com/vi/K3QDDlWmR9Q/maxresdefault.jpg',
    'https://i.ytimg.com/vi/MlZOFIRC9HA/maxresdefault.jpg',
    'https://i.ytimg.com/vi/47P6CI7V8gM/maxresdefault.jpg',
    'https://i.ytimg.com/vi/mAAqKx4aD_g/maxresdefault.jpg'
    // add more URLs here
    ];

    const titleList = [
        'Hey You',
        'Comfortably Numb',
        'Pseudo Silk Kimono',
        'Kayleigh',
        'Such A Shame',
        'State Trooper',
        'Personal Jesus',
        'Champagne Supernova',
        'Undisclosed Desires',
        'Love Will Tear Us Apart'
    ];

    const artistList = [
        'Pink Floyd',
        'Pink Floyd',
        'Marillion',
        'Marillion',
        'Talk Talk',
        'Bruce Springsteen',
        'Johnny Cash',
        'Oasis',
        'Muse',
        'Joy Division'
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
    <Draggable>
      <div className='music-player-container-d'>
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
    </Draggable>
  );
};

export default MusicPlayer;
