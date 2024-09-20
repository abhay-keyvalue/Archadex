import ArchitectureDiagram from "../../components/ArchitectureDiagram";

const HomeScreen = () => {
  return (
    <div className="flex-1 h-full p-20">
      <ArchitectureDiagram
        monitorAndLogging={["Tool1", "Tool2"]}
        externalServices={["Service1", "Service2"]}
        storage={["Storage1", "Storage2"]}
        frontEnd={["React Native", "React"]}
        backEndServices={["Microservice1", "Microservice2"]}
        additionalInfo={[]}
      />
    </div>
  );
};

export default HomeScreen;
