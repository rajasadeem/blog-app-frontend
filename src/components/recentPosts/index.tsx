import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";

const blogdata = [
  {
    category: "Development",
    data: "16 March 2023",
    title:
      "How to make a Game look more attractive with New VR & AI Technology",
    description:
      "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
    imgSrc: "/ManWithVR.png",
  },
  {
    category: "Travel",
    data: "03 April 2022",
    title: "8 Rules of Travelling In Sea You Need To Know",
    description:
      "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
    imgSrc: "/ManWithVR.png",
  },
  {
    category: "Development",
    data: "15 September 2023",
    title: "How to build strong portfolio and get a Job in UI/UX",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from ",
    imgSrc: "/ManWithVR.png",
  },
  {
    category: "Sports ",
    data: "22 July 2022",
    title: "How to Be a Professional Footballer in 2023",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    imgSrc: "/ManWithVR.png",
  },
];

const RecentPosts = () => {
  const mostrecentBlog = blogdata[0];

  return (
    <div className="w-full flex justify-center">
      <div className="w-5/6 flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="text-[44px] text-black font-bold">
            Our Recent Post
          </div>
          <Button variant={"default"} className="w-[150px]">
            View All
          </Button>
        </div>
        <div className="flex items-center gap-8">
          <div className="w-full md:w-1/2 h-auto">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={"/ManWithVR.png"}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </AspectRatio>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="flex gap-3">
              <div className="text-black text-[12px] font-bold">
                DEVELOPMENT
              </div>
              <div className="text-[#999999] text-[12px] font-medium">
                16 March 2023
              </div>
            </div>
            <div className="font-bold text-black text-[16px] md:text-[22px]">
              How to make a Game look more attractive with New VR & AI
              Technology
            </div>
            <div className="text-[#666666] font-normal text-[12px]">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research, building helpful products or
              developing tools and resources that enable others, we’re committed
              to making AI accessible to everyone.
            </div>
            <Button
              variant={"outline"}
              className="w-[150px] border-[2px] border-purple text-purple hover:text-purple"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;

const BlogCard = () => {
  return <div className="w-full flex flex-col gap-4"></div>;
};
