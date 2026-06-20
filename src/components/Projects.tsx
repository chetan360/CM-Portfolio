export default function Projects() {
  const projects = [
    {
      title: "Wonderlust: Airbnb-Inspired Property Platform",
      description:
        "Wonderlust is a clone of the Arbnb Your Home website, focusing on property listings with user accounts and reviews. This project uses EJS templating for server-side rendering.",
      tech: ["MongoDB", "express.js", "Render", "node.js"],
      gradient: "from-blue-500 to-indigo-600",
      icon: "🏚️",
      liveLink: "https://wonderlust-kzbk.onrender.com",
      projectUrl: "https://github.com/chetan360/Wonderlust",
    },
    {
      title: "Platformer-Game",
      description:
        "A Platformer Game is Codded in Java Language using Java AWT and Swing GUI Libraries.",
      tech: ["Java", "JDK", "Eclipse", "Gimp"],
      gradient: "from-purple-500 to-pink-600",
      icon: "👾",
      liveLink: "https://github.com/chetan360/Platformer-Game",
      projectUrl: "https://github.com/chetan360/Platformer-Game",
    },
    {
      title: "Help Center API",
      description: `Create a RESTful API that allows users to manage "Help Center" cards. These cards represent different sections of a help center, such as "Branches," "Manage Your Account," "Manage Billing," etc. The API should allow users to create, retrieve these cards.`,
      tech: [
        "react.js",
        "node.js",
        "html",
        "css",
        "tailwind css",
        "express.js",
        "MongoDB",
      ],
      gradient: "from-green-500 to-emerald-600",
      icon: "💁‍♂️",
      liveLink:
        "https://github.com/chetan360/MERN-Projects/tree/main/React/Help-Center-API/Frontend",
      projectUrl:
        "https://github.com/chetan360/MERN-Projects/tree/main/React/Help-Center-API/Frontend",
    },
    {
      title: "E-Commerse Website",
      description:
        "This is a my second mini project of learning MERN-Stack. This is the next step me to learn the some advance of my html, css and js. This a fully responsive ecommerce wesite.",
      tech: ["html", "css", "javascript", "vscode"],
      gradient: "from-orange-500 to-red-600",
      icon: "🥻",
      liveLink:
        "https://github.com/chetan360/MERN-Projects/tree/main/Front-End%20Projects/E-Commerce%20Website",
      projectUrl:
        "https://github.com/chetan360/MERN-Projects/tree/main/Front-End%20Projects/E-Commerce%20Website",
    },
    {
      title: "Library-Management-System",
      description:
        "A Library Management System coded in C to improve understanding on the concepts on File management, record entry, modification, deletion.",
      tech: ["C", "CLI", "VS Code", "Dev C++"],
      gradient: "from-cyan-500 to-blue-600",
      icon: "📚",
      liveLink:
        "https://github.com/chetan360/Library-Management-System-Using-C/tree/main/Library-Management-System-main",
      projectUrl:
        "https://github.com/chetan360/Library-Management-System-Using-C/tree/main/Library-Management-System-main",
    },
    {
      title: "Instument Buying website",
      description:
        "This is a simple Instument Buying website built with React.js using Material UI for styling.",
      tech: ["react.js", "node.js", "express.js", "MongoDB"],
      gradient: "from-violet-500 to-purple-600",
      icon: "🎻",
      liveLink:
        "https://66d031a1deb676c6bab736c1--keen-malabi-d6cd61.netlify.app",
      projectUrl:
        "https://github.com/chetan360/Musical-Instruments/tree/main/musical_instrument_website#instument-buying-website",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6">Showcase of my best work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8">
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <a href={`${project.liveLink}`}>
                    <button
                      className={`flex-1 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium hover:opacity-90 transition-opacity`}
                    >
                      Live Link
                    </button>
                  </a>
                  <a href={`${project.projectUrl}`}>
                    {" "}
                    <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
