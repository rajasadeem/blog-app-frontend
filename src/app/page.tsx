import FeaturedPost from "@/components/featuredPost";
import RecentPosts from "@/components/recentPosts";
import RecommendedBlog from "@/components/recommendedBlog";

export default function Home() {
  return (
    <div className="w-full">
      <FeaturedPost />
      <RecommendedBlog />
      <RecentPosts />
    </div>
  );
}
