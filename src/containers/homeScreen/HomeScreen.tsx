import { useNavigate } from "react-router-dom";
import { routesPath } from "../../constants/common";

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
      Home
      <div onClick={onPressCreateProject}>CreateProject</div>
      <div onClick={onPressProjectDetails}>Project Details</div>
    </div>
  );
};

export default HomeScreen;
