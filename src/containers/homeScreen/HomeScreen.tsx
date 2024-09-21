import { useNavigate } from "react-router-dom";
import { routesPath } from "../../constants/common";
import SideBar from "../../components/SideBar";

type Project = {
  id: number;
  name: string;
  description: string;
};

const listOfProjects = [
  {
    id: 1,
    name: "Project 1",
    description: "Description 1",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Description 2",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Description 3",
  },
];

const HomeScreen = () => {
  const navigate = useNavigate();

  const onPressCreateProject = () => {
    navigate(`/${routesPath.CREATE_PROJECT}`);
  };

  const onPressProjectDetails = () => {
    navigate(`/${routesPath.PROJECT_DETAILS}`);
  };

  const renderProjectCard = (project: Project) => {
    return (
      <div
        className="p-2 border-cyan-700 border-2 m-3"
        onClick={onPressProjectDetails}
        key={project.id}
      >
        <div>{project.name}</div>
        <div>{project.description}</div>
      </div>
    );
  };

  return (
    <div className="flex h-full bg-gray-100 p-8">
      {/* Sidebar */}
      <SideBar />

      {/* Right Container */}
      <div className="flex-grow p-10">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Home</h1>
          <button
            className="bg-blue-950	 text-white py-2 px-6 rounded hover:bg-blue-900 transition-colors duration-200 shadow-md"
            onClick={onPressCreateProject}
          >
            + New Project
          </button>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listOfProjects.map((project) => renderProjectCard(project))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
