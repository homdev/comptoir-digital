import DashboardCard from './DashboardCard';

const DashboardMain = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-4">
      <DashboardCard title="Projects">
        <p>Your ongoing projects...</p>
      </DashboardCard>

      <DashboardCard title="Connections">
        <p>New connections this month...</p>
      </DashboardCard>

      <DashboardCard title="Notifications">
        <p>You have new notifications...</p>
      </DashboardCard>
    </div>
  );
};

export default DashboardMain;
