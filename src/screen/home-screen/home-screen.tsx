'use client';

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";

import s from './home-screen.module.css';

export const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoList, setVideoList] = useState<string[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const dataFromServer = await fetch('/api/videos', {
          method: "GET",
        });

        const response = await dataFromServer.json();

        setVideoList(response.data);
      } catch {
        console.error('Failed to fetch data from server');
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.container}>
      {videoList && videoList.length > 0 ? (
        videoList.map((videoId) => (
          <div key={videoId} className={s.videoBlock}>
            <Link href={`/video/${videoId}`} className={s.videoPreview}>
              <Image
                className={s.videoImg}
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={`Thumbnail for video ${videoId}`}
                width={351}
                height={197}
              />
            </Link>

            <div className={s.videoInfoContainer}>
              <Link href="/2" className={s.channelImage}>
                <span className={s.hidden}>Channel name</span>
              </Link>

              <div className={s.videoInfo}>
                <Link href={`/video/${videoId}`} className={s.videoTitleLink}>
                  <b>Video name</b>
                </Link>
                <Link href="/4" className={s.channelNameLink}>
                  Channel name
                </Link>
              </div>
            </div>

            <Link href={`/video/${videoId}`} className={s.link}/>
          </div>
        ))
      ) : (
        <div>Videos not found</div>
      )}
    </div>
  );
};
