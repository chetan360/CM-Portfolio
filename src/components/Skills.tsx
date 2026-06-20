export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "html", "css", "Java", "C++", "SQL", "SQL Server"],
      color: "blue",
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Redux"],
      color: "indigo",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Spring Boot", "PostgreSQL", "MongoDB"],
      color: "purple",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes"],
      color: "pink",
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "Linux",
        "Agile",
        "System Design",
        "Microservices",
        "REST APIs",
      ],
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      indigo:
        "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
      purple:
        "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      pink: "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
      green:
        "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    };
    return colors[color];
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className={`px-4 py-2 bg-gradient-to-r ${getColorClasses(category.color)} text-white rounded-lg font-medium text-sm transition-all duration-300 hover:scale-110 cursor-default shadow-md`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
