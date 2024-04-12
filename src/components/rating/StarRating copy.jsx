// StarRating.jsx
const StarRating = ({ note }) => {
    return (
      <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className={`h-4 w-4 ${index < Math.round(note) ? "text-yellow-500" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 001.95-.001L14.961 3c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.37 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.118 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.97 8.792c-.782-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{note}/5</span>
                </div>
    );
  };
  
  export default StarRating;
  