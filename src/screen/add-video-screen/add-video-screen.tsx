'use client';

import { useForm } from "react-hook-form"
import React, { useState } from 'react';
import { parseYoutubeUrl, isAllowedHost, YOUTUBE_DOMAINS } from '@/shared/libs';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // or 'zod/v4'

// https://www.youtube.com/watch?v=xl8zdCY-abw

const schema = z.object({
  videoUrl: z
    .string()
    .min(1, { message: 'Field is not be empty' })
    .superRefine((url, ctx) => {
      let parsedUrl: URL;

      try {
        parsedUrl = new URL(url);
      } catch {
        ctx.addIssue({
          code: 'custom',
          message: 'Invalid URL',
          input: url,
        });
        return;
      }

      if (!isAllowedHost(parsedUrl?.host || '', YOUTUBE_DOMAINS)) {
        ctx.addIssue({
          code: 'custom',
          message: 'Must be a YouTube URL',
          input: url,
        });
      }
    })
});

type Inputs = {
  videoUrl: string;
}

export const AddVideoScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    reValidateMode: 'onSubmit',
  })

  const [videoId, setVideoId] = useState('');

  const onSubmit = async (data: Inputs) => {
    const url = new URL(data.videoUrl);

    const videoId = parseYoutubeUrl(url);

    if (!videoId) return;

    setVideoId(videoId);

    await fetch('/api/videos', {
      method: 'POST',
      body: JSON.stringify({ videoId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await fetch('/api/videos', {
      method: "GET"
    });
  };

  console.log('errors', errors);

  const hasVideoUrlError = !!errors.videoUrl?.message;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="videoUrl">
          YouTube Video URL:
          <input
            id="videoUrl"
            type="text"
            placeholder={'Please enter YouTube video link'}
            {...register("videoUrl")}
          />

          {hasVideoUrlError && (
            <p style={{
              color: 'red',
            }}>{errors.videoUrl?.message}</p>
          )}
        </label>
        <button type="submit">Upload</button>
      </form>

      {videoId && (
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player" style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
      )}
    </div>
  );
};
