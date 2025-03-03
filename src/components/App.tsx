import item1img from "../assets/images/illustration-create-post.webp";
import item2img from "../assets/images/illustration-five-stars.webp";
import item3img from "../assets/images/illustration-schedule-posts.webp";
import item4img from "../assets/images/illustration-ai-content.webp";
import item5img from "../assets/images/illustration-multiple-platforms.webp";
import item6img from "../assets/images/illustration-consistent-schedule.webp";
import item7img from "../assets/images/illustration-audience-growth.webp";
import item8img from "../assets/images/illustration-grow-followers.webp";

import "../index.css";

export default function App() {
  return (
    <>
      <div className="grid-container grid place-items-center grid-cols-4 mx-auto min-h-screen bg-[#f5f5f5]">
        {/* For mobile, stack cards vertically */}
        <div
          className="item1 bg-[#faeee2] w-60 h-80 flex flex-col items-top 
        items-center justify-center rounded-2xl p-6 "
        >
          <h1 className="text-4xl font-medium font-[DMSans] text-left justify-center mt-2 m-5">
            Create and schedule content{" "}
            <span className="italic cpurple">quicker.</span>
          </h1>
          <img className="img1 w-40" src={item1img} />
        </div>

        <div
          className="item2 bg-[#7651dc] w-80 h-50 flex flex-col items-center 
        justify-center text-center rounded-2xl"
        >
          <h1 className="text-4xl font-medium font-[DMSans] text-white">
            Social Media <span className="cyellow">10x</span>{" "}
            <span className="italic">Faster</span> with AI
          </h1>
          <img className="img2 w-40 mt-4" src={item2img} />
          <h2 className="text-sm font-[DMSans] text-gray-300">
            Over 4,000 5-star reviews
          </h2>
        </div>

        <div
          className="item3 bg-[#dcd1fc] w-100 h-125 flex-col items-center 
        justify-center text-center rounded-2xl"
        >
          <h1 className="text-2xl font-medium font-[DMSans] text-black m-5">
            Schedule to social media.
          </h1>
          <img className="img3 w-90 m-5" src={item3img} />
          <h2 className="text-lg font-[DMSans] text-black m-5">
            Optimise post timings to publish content at the perfect time for
            your audience.
          </h2>
        </div>

        <div
          className="item4 bg-[#ffcc69] w-80 h-110 flex-col items-center
        justify-center text-left rounded-2xl"
        >
          <h1 className="text-3xl font-medium font-[DMSans] text-black m-5">
            Write your own content using AI.
          </h1>
          <img className="img4 w-70 m-7" src={item4img} />
        </div>

        <div
          className="item5 bg-white w-70 h-50 flex-col items-center
        justify-center text-left rounded-2xl overflow-hidden"
        >
          <img className="img5 w-200" src={item5img} />
          <h1
            className="text-3xl font-medium font-[DMSans]
          text-black m-5"
          >
            Manage multiple accounts and platforms.
          </h1>
        </div>

        <div
          className="item6 bg-[#ffcc69] w-80 h-80 flex-col
        items-center justify-center text-left rounded-2xl overflow-hidden"
        >
          <h1 className="text-4xl font-medium font-[DMSans] text-black m-5">
            Maintaing a consistent posting schedule.
          </h1>
          <img className="img6 w-70 mx-auto" src={item6img} />
        </div>

        <div
          className="item7 bg-white w-65 h-65 flex-col 
        items-center justify-center text-left rounded-2xl"
        >
          <h1 className="text-6xl font-bold font-[DMSans] text-black m-5">
            {">"}56%
          </h1>
          <h2 className="text-lg font-normal font-[DMSans] text-black m-5">
            faster audience growth
          </h2>
          <img className="img7 w-60 mx-auto" src={item7img} />
        </div>

        <div
          className="item8 bg-[#7651dc] w-140 h-60 flex flex-row
        items-center justify-center text-left rounded-2xl"
        >
          <img className="img8 w-60 m-5 mr-0" src={item8img} />
          <h1 className="text-4xl font-medium font-[DMSans] text-white m-2">
            Grow followers with non-stop content.
          </h1>
        </div>
      </div>
    </>
  );
}
