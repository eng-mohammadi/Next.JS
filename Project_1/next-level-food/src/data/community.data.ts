import { CommunityProps } from "../data-types/types/community";

export const communityData: CommunityProps[] = [
  {
    id: 1,
    src: "/images/icons/meal.png",
    alt: "A delicious meal",
    liStyle: "flex flex-col items-center gap-8",
    imageStyle: "w-32 h-32 object-contain",
    pStyle: "text-2xl font-bold m-0 text-[#ddd6cb]",
    description: "Share & discover recipes",
  },
  {
    id: 2,
    src: "/images/icons/community.png",
    alt: "A crowd of people, cooking",
    liStyle: "flex flex-col items-center gap-8",
    imageStyle: "w-32 h-32 object-contain",
    pStyle: "text-2xl font-bold m-0 text-[#ddd6cb]",
    description: "Find new friends & like-minded people",
  },
  {
    id: 3,
    src: "/images/icons/events.png",
    alt: "A crowd of people at a cooking event",
    liStyle: "flex flex-col items-center gap-8",
    imageStyle: "w-32 h-32 object-contain",
    pStyle: "text-2xl font-bold m-0 text-[#ddd6cb]",
    description: "Participate in exclusive events",
  },
];
