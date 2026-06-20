export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I’m <b>Chetan Mankar</b>, a passionate{" "}
              <b>Full-Stack Developer (MERN)</b>
              and an incoming <b>Master of Computer Applications (MCA)</b>{" "}
              student.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey into technology is driven by pure curiosity and a love
              for logic. After graduating with my Bachelor's degree in 2024, I
              chose to take a non-traditional path. Instead of rushing into a
              low-value role, I dedicated myself to an intense two-year phase of
              independent upskilling and academic grit. During this time, I
              taught myself modern web architectures and simultaneously prepared
              for competitive national-level entrance exams.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              That calculated bet on myself completely paid off. I secured a{" "}
              <b>99.50 percentile in the MAH-MCA-CET</b> and a score of{" "}
              <b>192/300 in CUET PG (Computer Science)</b> , paving my way into
              a premier tier-1 engineering institute in Maharashtra.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-700 font-medium">
                Projects Completed
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
              <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
              <div className="text-gray-700 font-medium">Technologies</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-orange-100">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <div className="text-gray-700 font-medium">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
