const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-purple-400 mb-8 transition-colors">
          About Us
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6 dark:bg-zinc-900 dark:shadow-purple-800/30 transition-all">
          <p className="text-lg text-gray-700 dark:text-purple-200 leading-relaxed transition-colors">
            Welcome to <span className="font-semibold text-purple-600 dark:text-purple-400">VitalEdge</span> — your trusted companion in taking the first step toward better health. At VitalEdge, we have built a platform where you can easily input your symptoms and receive an intelligent, preliminary diagnosis designed to guide you toward the right care.
          </p>
          <p className="text-lg text-gray-700 dark:text-purple-200 leading-relaxed transition-colors">
            But we don't stop there. Based on your condition, we also help connect you with the nearest and most suitable doctor, ensuring that you receive timely, personalized medical attention when you need it most.
          </p>
          <p className="text-lg text-gray-700 dark:text-purple-200 leading-relaxed transition-colors">
            We are a passionate team of innovators from the <span className="font-medium text-purple-700 dark:text-purple-400">Symbiosis Institute of Technology</span>, driven by a vision to make healthcare more accessible, efficient, and user-friendly.
          </p>
          <p className="text-lg text-gray-700 dark:text-purple-200 leading-relaxed transition-colors">
            At VitalEdge, we believe that quick access to the right medical guidance can change lives. Our journey has just begun, and we are dedicated to evolving, learning, and building a healthier tomorrow — with <span className="italic text-purple-600 dark:text-purple-300">you</span> at the center of everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
