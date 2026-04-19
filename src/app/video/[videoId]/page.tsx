import type { Metadata } from "next";
import { VideoScreen } from "@/screen/video-screen";

export const metadata: Metadata = {
  title: "Video: ...",
};

interface VideoPageProps {
  params: Promise<{videoId: string}>;
}

export default async function VideoPage({ params }: VideoPageProps){
  const { videoId } = await params;

  return (
    <VideoScreen videoId={videoId} />
  );
}
