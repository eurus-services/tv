import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const LiveStream = ({ title, src, type }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (type === 'hls' && videoRef.current) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
    }
  }, [src, type]);

  if (type === 'hls') {
    return (
      <div className="live-stream">
        <h2>{title}</h2>
        <video 
          ref={videoRef}
          controls 
          autoPlay
          className="video-player"
        />
      </div>
    );
  }

  if (type === 'twitch') {
    return (
      <div className="live-stream">
        <h2>{title}</h2>
        <iframe
          src={src}
          width="100%"
          height="300"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
          allow="autoplay; fullscreen"
        />
      </div>
    );
  }

  if (type === 'america') {
    return (
      <div className="live-stream">
        <h2>{title}</h2>
        <iframe
          src={src}
          width="100%"
          height="300"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; encrypted-media; fullscreen"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </div>
    );
  }

  return (
    <div className="live-stream">
      <h2>{title}</h2>
      <iframe
        src={src}
        width="100%"
        height="300"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default LiveStream;