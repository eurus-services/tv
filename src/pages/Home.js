import React from 'react';
import LiveStream from '../components/LiveStream';

const Home = () => {
  return (
    <div className="home">
      <LiveStream 
        title="Latina" 
        src="https://rudo.video/live/latina" 
        type="iframe" 
      />
      <LiveStream 
        title="América TV" 
        src="https://tvgo.americatv.com.pe/" 
        type="america" 
      />
      <LiveStream 
        title="Panamericana TV" 
        src="https://player.twitch.tv/?channel=panamericanatvpe&parent=localhost&muted=false" 
        type="twitch" 
      />
      <LiveStream 
        title="ATV" 
        src="https://d19e55ehz2il4i.cloudfront.net/index.m3u8" 
        type="hls" 
      />
    </div>
  );
};

export default Home;