import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video in category ...",
};

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
}

export default async function CategoryId({ params }: CategoryPageProps) {
  const { categoryId } = await params;

  console.log("categoryId", categoryId);

  return (
    <div>
      Main + categoryId: {categoryId}
    </div>
  );
}
