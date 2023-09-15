"use client";
const DashboardHeader = () => {
  return (
    <div>
      <div className="w-1/4 h-screen p-4 text-white bg-blue-950">
        {/* Sidebar content */}
        <ul>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-white">
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-white">
              Modules
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-300">
              Profile
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-300">
              Create Work Space
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-300">
              Create Views
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-300">
              Form
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-300">
              Notifications
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-300">
              Upgrade Pan
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHeader;
