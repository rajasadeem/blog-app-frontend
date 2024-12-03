import Image from "next/image";
import BackgroundVector from "@/assets/svgs/backgroundVector";
import BackgroundVectorReverse from "@/assets/svgs/backgroundVectorReverse";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";

const FeaturedPost = () => {
  return (
    <div className="w-full bg-purple py-nav flex justify-center relative overflow-hidden">
      <div className="hidden md:block absolute top-0 left-0">
        <BackgroundVector />
      </div>
      <div className="hidden md:block absolute bottom-[-150] right-0">
        <BackgroundVectorReverse />
      </div>
      <div className="w-5/6 flex flex-col md:flex-row gap-8 md:gap-3 pt-8 pb-16 md:py-20 lg:py-36">
        <div className=" w-full md:w-1/2 flex flex-col gap-4 lg:gap-7">
          <div className=" text-white text-[12px] md:text-[16px] font-bold">
            Featured Post
          </div>
          <div className="text-[28px] md:text-[40px] lg:text-[60px] text-white font-bold">
            How AI will change the future
          </div>
          <div className="text-white text-[11px] md:text-[13px] lg:text-[16px] font-medium w-full lg:w-[70%]">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction
          </div>
          <Button variant={"outline"} className="w-[150px] md:w-[200px]">
            Read More
          </Button>
        </div>
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] lg:h-auto">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={"/ImagePlaceholder.png"}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
