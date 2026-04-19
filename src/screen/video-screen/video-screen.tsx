'use client';

import React from 'react';

interface VideoScreenProps {
  videoId: string;
}

export const VideoScreen: React.FC<VideoScreenProps> = ({ videoId }) => {

  return (
    <iframe
      key={videoId}
      width="1060"
      height="550"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title="YouTube video player"
      style={{ border: 0 }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
};
