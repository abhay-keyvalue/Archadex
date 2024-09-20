import { useNavigate } from "react-router-dom";
import { routesPath } from "../../constants/common";

const ProjectDetailsScreen = () => {
  const navigate = useNavigate();

  const onPressCreateRecommendations = () => {
    navigate(`/${routesPath.CREATE_RECOMMENDATION}`);
  };

  return (
    <div className="flex-1 h-full p-20">
      ProjectDetailsScreen
      <div onClick={onPressCreateRecommendations}>Create Recommendations</div>
    </div>
  );
};

export default ProjectDetailsScreen;
