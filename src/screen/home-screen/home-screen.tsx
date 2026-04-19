'use client';

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";

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
    <div>
      {videoList && videoList.length > 0 ? (
        videoList.map((videoId) => (
          <Link href={`/video/${videoId}`} key={videoId}>
            <Image
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={`Thumbnail for video ${videoId}`}
              width={360}
              height={215}
            />
          </Link>
        ))
      ) : (
        <div>Videos not found</div>
      )}
    </div>
  );
};
