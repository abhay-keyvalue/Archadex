import React from "react";

interface ArchitectureDiagramProps {
  monitorAndLogging: Item[];
  externalServices: Item[];
  storage: Item[];
  frontEnd: Item[];
  backEndServices: Item[];
}

type  Item = {
  id: number,
  imageUrl: string,
  label: string,
}

const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  monitorAndLogging,
  externalServices,
  storage,
  frontEnd,
  backEndServices,
}) => {
  const renderMonitoringAndLogging = () => {
    return (
      <div className="row-span-3 col-span-1 border-2 border-dotted border-gray-400 p-4 w-full h-full items-center">
        <h3 className="font-bold mb-6">Monitor and Logging</h3>
        {monitorAndLogging.map((tool, index) => (
          <div
            key={index}
            className="bg-blue-300 m-1 p-2 h-16 mb-6"
          >
            {tool?.label}
          </div>
        ))}
      </div>
    );
  };

  const renderExternalServices = () => {
    return (
      <div className=" border-2 border-dashed border-gray-400 row-span-1 col-span-3 items-center p-5 w-full">
          <h3 className="font-bold mb-6">External Services</h3>
          <div className="flex flex-wrap justify-around align-middle">
          {externalServices.map((service, index) => (
            <div
              key={index}
              className="bg-red-300 m-1 p-2 w-36"
            >
              {service?.label}
            </div>
          ))}
          </div>
      </div>
    );
  };

  const renderStorage = () => {
    return (
      <div className="row-span-1 col-span-2 border-2 border-dashed border-gray-400 w-full h-full p-4 items-center">
        <h3 className="font-bold mb-4">Storage</h3>
        <div className="flex flex-row">
        {storage.map((storageItem, index) => (
          <div
            key={index}
            className="bg-gray-400 m-1 p-2 h-24 w-32 mb-6 mr-10 justify-center text-center content-center"
          >
            {storageItem?.label}
          </div>
        ))}
        </div>
      </div>
    );
  };
  const renderFrondEnd = () => {
    return (
      <div className="row-span-1 col-span-1 border-2 border-dashed border-gray-400 w-full h-full p-4 items-center">
        <h3 className="font-bold mb-4">Front-end</h3>
        {frontEnd.map((tech, index) => (
          <div
            key={index}
            className="bg-purple-300 m-1 p-2 h-16 mb-6"
          >
            {tech?.label}
          </div>
        ))}
      </div>
    );
  };

  const renderBackendServices = () => {
    return (
      <div className="row-span-2 col-span-1 border-2 border-dashed border-gray-400 w-full h-full p-4 items-center justify-center">
        <h3 className="font-bold mb-6">Back-end Services</h3>
        <div className="flex flex-wrap justify-around align-middle h-ful">
        {backEndServices.map((service, index) => (
          <div
            key={index}
            className="bg-emerald-300 m-10 mt-0 p-2 h-24"
          >
            {service?.label}
          </div>
        ))}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-[15%_50%_15%_20%] grid-rows-[25%_50%_25%] gap-1 h-full">
      <div className="flex items-center justify-center h-full p-4">
      </div>
      <div className="flex justify-center h-full p-4 items-end">
        {externalServices?.length> 0 && renderExternalServices()}
      </div>
      <div className="flex items-center justify-center h-full  p-4 col-span-2 ">
      </div>
      <div className="flex items-center justify-center h-full  p-4 row-span-2">
        {monitorAndLogging?.length>0 && renderMonitoringAndLogging()}
      </div>
      <div className="flex items-center justify-center h-full p-4">
        {frontEnd?.length>0 && renderBackendServices()}
      </div>
      <div className="flex items-center justify-center h-full p-4">
        {frontEnd?.length>0 && renderFrondEnd()}
      </div>
      <div className="flex items-center justify-center h-full p-4">
      </div>

      <div className="flex items-center justify-center h-full p-4">
        {storage?.length>0 && renderStorage()}
      </div>
      <div className="flex items-center justify-center h-full p-4 col-span-2">
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
