// Importation des composants nécessaires
import DashboardMain from './components/DashboardMain'; // Contenu principal du dashboard
import DashboardLayout from './layout';  // Le layout avec sidebar et structure principale

// La page principale du dashboard
const DashboardPage = () => {
  return (
    <DashboardLayout>
      {/* Composant qui affiche le contenu principal du dashboard */}
      <DashboardMain />
    </DashboardLayout>
  );
};

export default DashboardPage;
