import ArchitectureDiagram from "../../components/ArchitectureDiagram";

const monitorAndLogging = [
  {
    id: 1,
    imageUrl: "image1",
    label: "Tool1",
  },
  {
    id: 2,
    imageUrl: "image2",
    label: "Tool2",
  },
];

const externalServices = [
  {
    id: 1,
    imageUrl: "image1",
    label: "Service1",
  },
  {
    id: 2,
    imageUrl: "image2",
    label: "Service2",
  },
];

const storage = [
  {
    id: 1,
    imageUrl: "image1",
    label: "Storage1",
  },
  {
    id: 2,
    imageUrl: "image2",
    label: "Storage2",
  },
];

const frontEnd = [
  {
    id: 1,
    imageUrl: "image1",
    label: "React Native",
  },
  {
    id: 2,
    imageUrl: "image2",
    label: "React",
  },
];

const backEndServices = [
  {
    id: 1,
    imageUrl: "image1",
    label: "Microservice1",
  },
  {
    id: 2,
    imageUrl: "image2",
    label: "Microservice2",
  },
  {
    id: 3,
    imageUrl: "image3",
    label: "Microservice3",
  },
  {
    id: 4,
    imageUrl: "image4",
    label: "Microservice4",
  },
  {
    id: 5,
    imageUrl: "image5",
    label: "Microservice5",
  },
  {
    id: 6,
    imageUrl: "image6",
    label: "Microservice6",
  },
];

const CreateRecommendationScreen = () => {
  return (
    <div className="flex-1 h-full p-20">
      <ArchitectureDiagram
        monitorAndLogging={monitorAndLogging}
        externalServices={externalServices}
        storage={storage}
        frontEnd={frontEnd}
        backEndServices={backEndServices}
      />
    </div>
  );
};

export default CreateRecommendationScreen;
