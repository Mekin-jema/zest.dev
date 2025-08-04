import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const reviews = [
  {
    name: "Hana Getachew",
    username: "CEO and Co-founder of Ambalay Maps",
    body: "Mekin's dedication and technical insight blew us away. He’s truly one of the best collaborators I’ve worked with.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Samuel Kebede",
    username: "President of Addis Ababa University",
    body: "Professional, innovative, and reliable — Mekin brings real value to every project he touches.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lily Tesfaye",
    username: "Lead UX Engineer at ZalaTech",
    body: "Whether it’s backend logic or front-end flair, Mekin delivers quality work with unmatched consistency.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Biniam Teshome",
    username: "Senior Software Architect at Iceaddis",
    body: "What impressed me most is Mekin’s creativity in solving complex problems efficiently. Highly recommend working with him!",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Saron Ayele",
    username: "Head of Design at EthioTech",
    body: "Always impressed by his UI work. Mekin has a great sense for clean design and usability.",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Yonas Hailu",
    username: "CTO at SmartEthi Solutions",
    body: "Mekin’s ability to think ahead and integrate smart features sets him apart from most developers.",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Eden Mulugeta",
    username: "Digital Innovation Advisor, Ministry of Innovation and Technology",
    body: "Mekin combines innovation and practicality. His IoT work in smart cities is inspiring.",
    img: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    name: "Nathan Fikru",
    username: "Founder of Code4Africa Ethiopia",
    body: "I've seen Mekin mentor younger coders with patience and clarity. He’s a future tech leader.",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Helen Tilahun",
    username: "Product Manager at Gebeya",
    body: "Reliable, forward-thinking, and solutions-driven. Working with Mekin is always a win.",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Abel Teklu",
    username: "AI Researcher at Addis AI Lab",
    body: "Mekin's integration of machine learning in real-time IoT systems was genuinely impressive.",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Tsehay Asfaw",
    username: "Director of Technology at e-SHE Initiative",
    body: "He brings clarity and direction to even the most complex tech problems. A real asset.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Robel Amare",
    username: "Senior Developer Advocate, ALX Ethiopia",
    body: "Mekin’s growth journey is inspiring. He’s gone from a learner to a leader in record time.",
    img: "https://randomuser.me/api/portraits/men/39.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "w-full max-w-xs sm:w-64"
      )}
    >
      <div className="flex items-center gap-2">
        <img
          className="rounded-full object-cover"
          width="32"
          height="32"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-600 dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-800 dark:text-white/80">
        {body}
      </blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-0">
      <motion.h2
        className="text-3xl sm:text-4xl text-gray-800 dark:text-white font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        Testimonials
      </motion.h2>

      {/* Marquee visible on sm and up */}
      <div className="hidden sm:block w-full">
        <Marquee pauseOnHover className="[--duration:20s] mb-6">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Vertical stack fallback on mobile */}
      <div className="sm:hidden flex flex-col gap-6 w-full max-w-md">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
