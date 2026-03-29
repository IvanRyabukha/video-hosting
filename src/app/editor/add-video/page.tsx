import type { Metadata } from "next";
import { AddVideoScreen } from "@/screen/add-video-screen";

export const metadata: Metadata = {
  title: "Add Video",
};

export default function AddVideoPage() {
  return (
    <AddVideoScreen />
  );
}
