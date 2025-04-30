const TeamMember = ({
  name,
  prn,
  description,
}: {
  name: string;
  prn: string;
  description: string;
}) => (
  <div className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer hover:shadow-2xl">
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
    <p className="text-gray-700 mb-2 font-semibold">PRN: {prn}</p>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Argya Singh",
      prn: "22070122027",
      description:
        "From Gurgaon, a passionate coder and a tech enthusiast. A proud SIT student who contributed significantly to building VitalEdge!",
    },
    {
      name: "Aiden Panvalkar",
      prn: "22070122013",
      description:
        "Based in Mumbai, a creative mind with a love for innovation. Played a crucial role in shaping the vision of VitalEdge!",
    },
    {
      name: "Anant Mishra",
      prn: "22070122014",
      description:
        "Hailing from Maharashtra, a dedicated developer and problem solver. His expertise was instrumental for VitalEdge's success!",
    },
    {
      name: "Aryan Bhoi",
      prn: "22070122033",
      description:
        "From Delhi, a future doctor at heart! With a father serving at AIIMS, he brought unique insights to the VitalEdge project!",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center py-20 px-6"
      style={{
        backgroundImage: "url('/assets/team.jpg')", // << your bg image path
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-16 drop-shadow-lg">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.prn}
              name={member.name}
              prn={member.prn}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
