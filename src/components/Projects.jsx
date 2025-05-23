const project = [
  {
    id: 1,
    title: "Social Learning Web Platform",
    description:
      "Developed a dynamic Learning Web Platform which encourages the Social Learning method. ",
    technologies:
      "Next.js, Tailwind CSS, ReactRouterDOM, Express.js, Node.js, MySQL with Prisma ORM ",
    url: "https://eduxpert-lake.vercel.app/",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description:
      "A comprehensive web-based dashboard designed to help administrators visualize, manage, and analyze key business data in real-time.",
    technologies:
      "React.js + Tailwind CSS (Frontend), Node.js (Backend), MySQL – Aiven cloud (Database), Syncfusion (Charts & UI Components).",
    url: "https://dashboard-eta-lemon-75.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "Project 3",
  //   description: "new project.",
  // },
];
const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {project.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 h-100 w-100 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-xl text-right font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 mb-4">
                {project.id}
              </div>
              <h3 className="text-2xl font-bold  text-green-400 mb-4">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-300">{project.description}</p>

              <p className="text-l font-bold text-purple-300 mb-4">
                Technologies: {project.technologies}
              </p>
              <iframe
                src={project.url}
                className="w-full h-96"
                title={project.title}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
