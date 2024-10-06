const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-4 shadow-md">
      <div className="flex items-start space-x-4">
        {/* Icône */}
        <div className="flex-shrink-0">
          <div className="bg-green-500 dark:bg-green-500 p-2 rounded-md">
            <img src={icon} alt={title} className="w-6 h-6" />
          </div>
        </div>

        {/* Contenu de la carte */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
