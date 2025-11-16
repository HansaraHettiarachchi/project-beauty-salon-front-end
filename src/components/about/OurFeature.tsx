

import tree from "../../assets/images/3.png";

// A simple responsive 3-column layout matching the provided design
// TailwindCSS assumed

export default function OurFeatures() {
  const items = [
    {
      title: "1985",
      text: `In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew.`,
    },
    {
      title: "Today",
      text: `In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew.`,
    },
    {
      title: "Feature",
      text: `In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew.`,
    },
  ];

  return (
    <div className="w-full flex justify-center bg-white py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-start text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{item.title}</h2>
            <div className="w-10 h-10 opacity-20 mb-4">
              <img
                src={tree}
                alt="leaf"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-500 leading-relaxed text-[15px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
