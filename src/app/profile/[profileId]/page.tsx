import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile: ...",
};

interface ProfilePageProps {
  params: Promise<{ profileId: string }>;
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { profileId } = await params;

  console.log("ProfileId", profileId);

  return (
    <div>
      Profile Page: {profileId}
    </div>
  );
}
