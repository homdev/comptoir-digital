// layout.jsx
import ProfileSidebar from '@/src/components/dashboard/ProfileSidebar';

const DashboardLayout = ({ children }) => {
  // Dummy user data (à remplacer par les données réelles de l'utilisateur)
  const user = {
    name: 'John Doe',
    profession: 'Web Developer',
  };

  return (
    <div className="lg:flex lg:space-x-6 container mx-auto py-10 px-4 lg:px-0">
      {/* Profile Sidebar */}
      <aside className="lg:w-1/4 w-full mb-8 lg:mb-0">
      <ProfileSidebar user={user} />
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/4 w-full">
        {children} {/* Contenu de la page spécifique */}
      </main>
    </div>
  );
};

export default DashboardLayout;
