import Image from 'next/image';
import Link from 'next/link';


const membersData = [
    {
      id: 1,
      name: 'Karim Zéribi',
      role: 'Visual Designer',
      imageUrl: '/assets/img/logo.png', 
    }, 
    {
        id: 2,
        name: 'Karim Zéribi',
        role: 'Visual Designer',
        imageUrl: '/assets/img/logo.png', 
      },  

];


const Members = ({ membersData }) => {

    return (
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:gap-8">
            {membersData.map((member, index) => (
                <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 p-4">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                            <span className="relative p-2 bg-blue-100 rounded-xl">
                                {/* Insert icon or image here */}
                            </span>
                            <div className="flex flex-col ml-2">
                                <span className="font-bold text-black dark:text-white">
                                    {member.name}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-white">
                                    {member.position}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className="p-1 border border-gray-200 rounded-full">
                                {/* Insert favorite icon here */}
                            </button>
                            <button className="ml-2 text-gray-200">
                                {/* Insert more icon here */}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-4 space-x-12">
                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 bg-green-50 rounded-md">
                            COMPLETED
                        </span>
                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-600 bg-white border border-green-600 rounded-md">
                            MEDIUM PRIORITY
                        </span>
                    </div>
                    <div className="block m-auto">
                        <div>
                            <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                                Task done :
                                <span className="font-bold text-gray-700 dark:text-white">
                                    50
                                </span>
                                /50
                            </span>
                        </div>
                        <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                            <div className="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full">
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start my-4 space-x-4">
                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 bg-green-50 rounded-md">
                            IOS APP
                        </span>
                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-yellow-600 bg-yellow-200 rounded-md">
                            ANDROID
                        </span>
                    </div>
                    <div className="flex -space-x-2">
                        {member.images.map((img, i) => (
                            <a href="#" key={i} className="">
                                <Image className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src={img.url} alt={img.alt} width={40} height={40} />
                            </a>
                        ))}
                    </div>
                    <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                        DUE DATE : 18 JUN
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Members;
