import React, { useState } from 'react';

const Tabs = () => {

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: 'IT & Development'},
    { id: 1, title: 'Design and Creative' },
  ];

  return (
    <div className="w-full max-w-[920px] mx-auto mb-20 pt-3 rounded-xl  bg-gray-200 px-5 mt-10 ">
      <div className="flex bg-gray-300 rounded-xl md:w-[391px] mx-auto ">
        {tabs.map((tab) => (
          <button key={tab.id} className={`flex-1  py-2 text-center font-semibold ${ activeTab === tab.id
                ? 'bg-blue-500 rounded-xl text-black/90 text-sm md:text-base'
                : 'border-b-2 border-transparent text-gray-500 text-sm md:text-base'
            } focus:outline-none`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map((tab) => (
          <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`} >
            { tab.id == 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <ul className='flex flex-col gap-2'>
                    <li><a href="#">Python Developer</a></li>
                    <li><a href="#">Shopify Developer</a></li>
                    <li><a href="#">MernStack Developer</a></li>
                    <li><a href="#">FullStack Developer</a></li>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <li><a href="#">Python Developer</a></li>
                    <li><a href="#">Shopify Developer</a></li>
                    <li><a href="#">MernStack Developer</a></li>
                    <li><a href="#">FullStack Developer</a></li>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <li><a href="#">Python Developer</a></li>
                    <li><a href="#">Shopify Developer</a></li>
                    <li><a href="#">MernStack Developer</a></li>
                    <li><a href="#">FullStack Developer</a></li>
                </ul>
            </div>

            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <ul className='flex flex-col gap-2'>
                    <li><a href="#">Python Developer</a></li>
                    <li><a href="#">Shopify Developer</a></li>
                    <li><a href="#">MernStack Developer</a></li>
                    <li><a href="#">FullStack Developer</a></li>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <li><a href="#">Python Developer</a></li>
                    <li><a href="#">Shopify Developer</a></li>
                    <li><a href="#">MernStack Developer</a></li>
                    <li><a href="#">FullStack Developer</a></li>
                </ul>
            </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
