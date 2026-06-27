'use client';

import React from 'react';
import Link from "next/link";

import s from './video-screen.module.css';

interface VideoScreenProps {
  videoId: string;
}

export const VideoScreen: React.FC<VideoScreenProps> = ({ videoId }) => {

  return (
    <div className={s.container}>
      <iframe
        className={s.iframe}
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

      <b className={s.videoTitle}>Video Name</b>

      <div className={s.videoInfoContainer}>
        <Link href="/2" className={s.channelImage}>
          <span className={s.hidden}>Channel Name</span>
        </Link>

        <Link href={'/3'} className={s.channelNameLink}>
          Channel Name
        </Link>
      </div>
    </div>
  );
};
