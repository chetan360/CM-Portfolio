interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Portfolio
          </button>
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-all duration-300 hover:scale-105 font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
