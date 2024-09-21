import { useNavigate } from "react-router-dom";
import { routesPath } from "../../constants/common";

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
  return (
    <div className="flex-1 h-full p-20">
      <div className="flex justify-between w-full"> 
        <div className="flex mr-56">Home</div>
        <div className="flex" onClick={onPressCreateProject}>CreateProject</div>
      </div>

      <div onClick={onPressProjectDetails}>Projects</div>
      <div className="flex row">
        {listOfProjects.map((project) => (
          <div
            className="p-2 border-cyan-700 border-2 m-3"
            onClick={onPressProjectDetails}
            key={project.id}
          >
            <div>{project.name}</div>
            <div>{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
