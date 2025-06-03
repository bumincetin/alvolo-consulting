// pages/video-test.tsx
import React from 'react';

export default function VideoTest() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      <video
        controls
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source
          src="arkaplan.mp4"
          type="video/mp4"
        />
        {/* Fallback for very old browsers */}
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}
