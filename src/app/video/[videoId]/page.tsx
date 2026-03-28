import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video: ...",
};

interface VideoPageProps {
  params: Promise<{videoId: string}>;
}

export default async function VideoPage({ params }: VideoPageProps){
  const { videoId } = await params;

  console.log("videId", videoId);
  return (
    <div>
      Video page: {videoId}
    </div>
  );
}
