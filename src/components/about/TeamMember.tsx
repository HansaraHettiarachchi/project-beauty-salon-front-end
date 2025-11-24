import React from "react";

// Import team images
import member1 from "../../assets/images/member1.jpg";
import member2 from "../../assets/images/member2.jpg";
import member3 from "../../assets/images/member3.jpg";
import member4 from "../../assets/images/member4.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  { name: "Catherine", role: "Founder", image: member1 },
  { name: "Emma Alice", role: "CEO", image: member2 },
  { name: "Mary Elizabeth", role: "Managing Director", image: member3 },
  { name: "Margaret", role: "Co-Founder", image: member4 },
];

const TeamSection: React.FC = () => {
  return (
    <section className="w-full pt-10 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID - no gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {team.map((item, idx) => (
            <div key={idx} className="text-center m-2"> {/* small margin around each image */}

              {/* IMAGE - slightly smaller height */}
              <div className="w-full overflow-hidden rounded-md shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[300px] sm:h-80 md:h-[340px] object-cover rounded-md"
                />
              </div>

              {/* ROLE */}
              <p className="text-[#e08b82] font-semibold text-sm mt-3 tracking-wide uppercase">
                {item.role}
              </p>

              {/* NAME */}
              <h3 className="mt-1 text-2xl font-serif text-gray-900">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TeamSection;
