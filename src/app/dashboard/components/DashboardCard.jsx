const DashboardCard = ({ title, children }) => {
    return (
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        {children}
      </div>
    );
  };
  
  export default DashboardCard;
  