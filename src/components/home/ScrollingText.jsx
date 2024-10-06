const ScrollingText = () => {
    return (
      <div className="relative overflow-hidden py-4 mt-10 w-full">
        {/* Conteneur qui va contenir les deux blocs de texte */}
        <div className="flex space-x-4 animate-marquee will-change-transform min-w-[100vw]">
          {/* Texte défilant 1 */}
          <h1 className="text-5xl text-white font-bold uppercase tracking-wide whitespace-nowrap">
            Best Marketing Agency &nbsp; Best Marketing Agency &nbsp; Best Marketing Agency &nbsp; Best Marketing Agency
          </h1>
        </div>
      </div>
    );
  };
  
  export default ScrollingText;
  