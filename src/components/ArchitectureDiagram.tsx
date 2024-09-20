import React from "react";

interface ArchitectureDiagramProps {
  monitorAndLogging: string[];
  externalServices: string[];
  storage: string[];
  frontEnd: string[];
  backEndServices: string[];
  additionalInfo: string[]; // New prop for additional info
}

const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  monitorAndLogging,
  externalServices,
  storage,
  frontEnd,
  backEndServices,
  additionalInfo, // Destructure the new prop
}) => {
  const renderMonitoringAndLogging = () => {
    return (
      <div className="row-span-3 col-span-1 border-2 border-dotted border-gray-400 items-center">
        <h3 className="font-bold">Monitor and Logging</h3>
        {monitorAndLogging.map((tool, index) => (
          <div
            key={index}
            className="border-2 border-dotted border-gray-400 m-1 p-2"
          >
            {tool}
          </div>
        ))}
      </div>
    );
  };

  const renderExternalServices = () => {
    return (
      <div className=" border-2 border-dotted border-gray-400 row-span-1 col-span-3 items-center p-5">
        <div className=" flex p-5">
          <h3 className="font-bold">External Services</h3>
          {externalServices.map((service, index) => (
            <div
              key={index}
              className="border-2 border-dotted border-gray-400 m-1 p-2 w-36"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStorage = () => {
    return (
      <div className="row-span-1 col-span-2 border-2 border-dotted border-gray-400  items-center">
        <h3 className="font-bold">Storage</h3>
        {storage.map((storageItem, index) => (
          <div
            key={index}
            className="border-2 border-dotted border-gray-400 m-1 p-2"
          >
            {storageItem}
          </div>
        ))}
      </div>
    );
  };
  const renderFrondEnd = () => {
    return (
      <div className="row-span-1 col-span-1 border-2 border-dotted border-gray-400  items-center">
        <h3 className="font-bold">Front-end</h3>
        {frontEnd.map((tech, index) => (
          <div
            key={index}
            className="border-2 border-dotted border-gray-400 m-1 p-2"
          >
            {tech}
          </div>
        ))}
      </div>
    );
  };

  const renderBackendServices = () => {
    return (
      <div className="row-span-2 col-span-1 border-2 border-dotted border-gray-400 items-center justify-center">
        <h3 className="font-bold">Back-end Services</h3>
        {backEndServices.map((service, index) => (
          <div
            key={index}
            className="border-2 border-dotted border-gray-400 m-1 p-2"
          >
            {service}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-[15%_50%_20%_15%] grid-rows-[25%_50%_25%] gap-1 h-full bg-red-600">
      <div className="bg-blue-500 flex items-center justify-center h-full">
        1
      </div>
      <div className="bg-blue-500 flex items-center justify-center h-full">
        {renderExternalServices()}
      </div>
      <div className="bg-blue-500 flex items-center justify-center h-full col-span-2">
        3
      </div>
      <div className="bg-blue-500 flex items-center justify-center h-full row-span-2">
        {renderMonitoringAndLogging()}
      </div>
      <div className="bg-blue-500 flex items-center justify-center h-full">
        {renderBackendServices()}
      </div>
      <div className="bg-blue-500 flex items-center justify-center h-full">
        {renderFrondEnd()}
      </div>
      <div className="bg-blue-500 flex items-center justify-center h-full">
        8
      </div>

      <div className="bg-blue-500 flex items-center justify-center h-full">
        {renderStorage()}
      </div>
      <div className="bg-blue-500 flex items-center justify-center h-full col-span-2">
        11
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
