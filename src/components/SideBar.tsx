import DashboardIcon from "../assets/svg/dashboard.svg";
import InsightIcon from "../assets/svg/insights.svg";
import ProjectIcon from "../assets/svg/project.svg";
import LogoutIcon from "../assets/svg/logout.svg";
import UpgradeRocket from "../assets/svg/upgrade.svg";

const SideBar = () => {

    return (
        <div className="w-64 h-full bg-white text-black shadow-lg p-4 flex flex-col justify-between">
            <div className="w-64 h-full text-black flex flex-col">
                {/* Logo and Product Name */}
                <div className="flex items-center p-4">
                    <img src="/path-to-logo.png" alt="Logo" className="h-8 w-8 mr-3" />
                    <span className="text-xl text-[#373B5C] font-bold">ArchAI</span>
                </div>

                <nav className="flex flex-col mt-8 flex-grow space-y-2">
                    <a href="#" className="flex items-center py-2 px-4 text-[#373B5C] hover:bg-blue-300">
                        <img src={DashboardIcon} className="mr-4" alt="Dashboard Icon" />
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center py-2 px-4 text-[#373B5C] hover:bg-red-700">
                        <img src={ProjectIcon} className="mr-4" alt="Project Icon" />
                        <span>Projects</span>
                    </a>
                    <a href="#" className="flex items-center py-2 px-4 text-[#373B5C] hover:bg-red-700">
                        <img src={InsightIcon} className="mr-4" alt="Insight Icon" />
                        <span>Insights</span>
                    </a>
                </nav>
            </div>

            <div>
                <div className="bg-[#F2F6FA] rounded-t-lg p-4 relative flex justify-between h-72">
                    <div>
                        <h3 className="text-sm font-semibold">Upgrade to</h3>
                        <span className="block text-lg font-bold">PRO Account</span>
                        <p className="text-xs">Start your PRO subscription
                            today for only
                            $35/month</p>
                    </div>
                    <img src={UpgradeRocket} className="h-52 w-44 contain-content absolute bottom-0 right-0" alt="Upgarde icon" />
                </div>
                {/* Logout at Bottom */}
                <div className="p-4">
                    <a href="#" className="flex items-center py-2 px-4 hover:bg-red-700 p-4">
                        <img src={LogoutIcon} className="mr-4" alt="Logout Icon" />
                        {/* <span className="mr-4"></span> */}
                        <span>Logout</span>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default SideBar;
