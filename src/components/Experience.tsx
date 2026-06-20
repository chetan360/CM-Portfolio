export default function Experience() {
  const experiences = [
    {
      company: "TeacherON",
      role: "SQL Developer (Free Lancing) ",
      period: "06/2023 - 03/2024",
      description: [
        "Student Satisfaction: Achieved an average satisfaction rating of 4.8 out of 5, reflecting the effectiveness and quality of the instruction. ",
        "Skill Enhancement: Improved communication and instructional skills by delivering content to 30+ remote learners, ensuring clarity and engagement. ",
      ],
      color: "blue",
    },
    {
      company: "InternPe",
      role: "Full stack Web Developer Intern (Remote)",
      period: "“06/2024 - 07/2024",
      description: [
        "Front-End Development: Independently built a calculator, responsive e-commerce website, to do list and connect 4 game using HTML, CSS, and JavaScript,writing over 500 lines of code.",
        "Performance Enhancement: Improved page load speed by 20% and achieved a fully responsive design.",
        "COngoing Skill Development: Actively enhancing full-stack skills through hands-on projects, completing 1 new project each week.",
      ],
      color: "indigo",
    },
  ];

  const education = [
    {
      degree: "",
      school: "M. S. G. College, Malegaon Camp. (SPPU)",
      period: "2021 - 2024",
      details: "Graduated with Honors, GPA: 3.18/4.0",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                💼
              </span>
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {exp.role}
                      </h4>
                      <p className="text-blue-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-blue-600 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                🎓
              </span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {edu.degree}
                      </h4>
                      <p className="text-indigo-600 font-semibold">
                        {edu.school}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600">{edu.details}</p>
                </div>
              ))}

              {/* Certifications */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Certifications
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-purple-600">✓</span>
                    <span>Javascript Cutshort</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-purple-600">✓</span>
                    <span>Java Developer Samarth Educomp Pvt.Ltd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
