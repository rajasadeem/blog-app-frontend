import Image from "next/image";
import BackgroundVector from "@/assets/svgs/backgroundVector";
import BackgroundVectorReverse from "@/assets/svgs/backgroundVectorReverse";
import { Button } from "../ui/button";

const FeaturedPost = () => {
  return (
    <div className="w-full bg-purple pt-[40px] lg:pt-[80px] flex justify-center relative overflow-hidden">
      <div className="hidden lg:block absolute top-0 left-0">
        <BackgroundVector />
      </div>
      <div className="hidden lg:block absolute bottom-[-150] right-0">
        <BackgroundVectorReverse />
      </div>
      <div className="w-5/6 flex flex-col lg:flex-row gap-8 lg:gap-0 pt-8 pb-16 lg:py-36">
        <div className=" w-full lg:w-1/2 flex flex-col gap-5 md:gap-8">
          <div className=" text-white text-[12px] md:text-[16px] font-bold">
            Featured Post
          </div>
          <div className="text-[36px] md:text-[48px] lg:text-[64px] text-white font-bold">
            How AI will change the future
          </div>
          <div className="text-white text-[11px] md:text-[16px] font-medium w-full lg:w-[70%]">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction
          </div>
          <Button
            variant={"outline"}
            className="w-[150px] md:w-[200px] lg:w-[250px]"
          >
            Read More
          </Button>
        </div>
        <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-auto">
          <Image
            src={"/ImagePlaceholder.png"}
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
