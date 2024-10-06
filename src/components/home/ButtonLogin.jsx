const ButtonLogin = ({ text, onClick }) => {
    return (
      <button
      className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition"
      onClick={onClick} // Ajoute l'événement onClick ici
    >
      {text}
    </button>
    );
  };
  
  export default ButtonLogin;
  