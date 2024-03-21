import getAllPosts from "@/lib/getAllPosts";

export const metadata = {
  title: "Updates",
  description: "Updates Page",
};

import PageHeader from "@/components/page-header";
// import Cta from "@/components/cta";
import Posts from "@/app/(default)/updates/posts";

export default async function Updates() {
  const postsData: Promise<Post[]> = getAllPosts();
  const posts = await postsData;

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              title="News & Updates"
              description="See the latest changes with Warnify!"
            >
              What's New
            </PageHeader>
          </div>
        </div>
      </section>

      <Posts posts={posts} />
      
    </>
  );
}
