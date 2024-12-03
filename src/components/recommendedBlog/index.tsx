import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";

const BlogContent = ({ isCompact }: { isCompact: boolean }) => (
  <div
    className={`${
      isCompact
        ? "flex flex-col gap-3"
        : "hidden md:flex w-[70%] bg-white px-5 py-5 lg:py-10 absolute right-0 bottom-[-90] rounded-2xl flex-col gap-3"
    }`}
  >
    <div className="flex gap-3">
      <div className="text-black text-[12px] font-bold">DEVELOPMENT</div>
      <div className="text-[#999999] text-[12px] font-medium">
        16 March 2023
      </div>
    </div>
    <div className="font-bold text-black text-[16px] md:text-[22px]">
      How to make a Game look more attractive with New VR & AI Technology
    </div>
    <div className="text-[#666666] font-normal text-[12px]">
      Google has been investing in AI for many years and bringing its benefits
      to individuals, businesses and communities. Whether it’s publishing
      state-of-the-art research, building helpful products or developing tools
      and resources that enable others, we’re committed to making AI accessible
      to everyone.
    </div>
    <Button
      variant={"outline"}
      className="w-[150px] border-[2px] border-purple text-purple hover:text-purple"
    >
      Read More
    </Button>
  </div>
);

const RecommendedBlog = () => {
  return (
    <div className="w-full flex justify-center py-10 mb-32">
      {/* Desktop and larger screens */}
      <div className="w-5/6 relative hidden md:block">
        <div className="w-full h-auto">
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
        <BlogContent isCompact={false} />
      </div>
      {/* Small screens */}
      <div className="w-5/6 flex flex-col gap-7 p-5 border-[1px] border-[#cbcbcb] rounded-lg md:hidden">
        <div className="w-full h-auto">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={"/ManWithVR.png"}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </AspectRatio>
        </div>
        <BlogContent isCompact={true} />
      </div>
    </div>
  );
};

export default RecommendedBlog;
