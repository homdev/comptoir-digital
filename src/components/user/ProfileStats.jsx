const ProfileStats = ({ projects, friends, visits }) => {
    return (
      <div className="flex justify-around bg-white p-4 rounded-lg shadow-md mt-4">
        <div className="text-center">
          <p className="text-xl font-bold">{projects}</p>
          <p className="text-gray-500">Projects</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">{friends}</p>
          <p className="text-gray-500">Friends</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">{visits}K</p>
          <p className="text-gray-500">Visits</p>
        </div>
      </div>
    );
  };
  
  export default ProfileStats;
  