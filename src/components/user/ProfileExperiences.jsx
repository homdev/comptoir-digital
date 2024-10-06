"use client";

const ProfileExperiences = ({ member }) => {
  const { experiences } = member;

  if (!experiences || experiences.length === 0) {
    return <div>Aucune expérience trouvée.</div>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Expériences professionnelles</h3>
      <ul className="space-y-4">
        {experiences.map((experience) => (
          <li key={experience.id} className="bg-white dark:bg-nightBlack p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold">{experience.title}</h4>
            <p className="text-sm text-gray-500">
              {experience.company_name} - {experience.location}
            </p>
            <p className="text-sm">
              {new Date(experience.start_date).toLocaleDateString()} -{' '}
              {experience.current ? 'Présent' : new Date(experience.end_date).toLocaleDateString()}
            </p>
            <p className="mt-2">{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileExperiences;
