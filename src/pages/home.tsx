
import React, { useState } from 'react'
import Tabs from '../components/Tabs'
type Props = {}


const accordionData = [
  {
    id: 0,
    step: "Step 1:",
    title: " Resume Screening",
    content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."
  },
  {
    id: 1,
    step: "Step 2:",
    title: "Video Interview",
    content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."
  },
  {
    id: 2,
    step: "Step 3:",
    title: "Technical Evaluation",
    content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."
  },
  {
    id: 3,
    step: "Step 4:",
    title: "Application Review",
    content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."
  },
  {
    id: 4,
    step: "Step 5:",
    title: "Lets get to work",
    content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."
  },
];

function Home({}: Props) {

  const [accordionContent, setAccordionContent] = useState<any[]>([]);

  const handleAccordionClick = (index: any) => {
    const tempAccordion = [...accordionContent];
    const idexofA = tempAccordion.indexOf(index);
    if(idexofA === -1) {
      tempAccordion.push(index)
    } else {
      tempAccordion.splice(idexofA, 1)
    }
    setAccordionContent(tempAccordion)
  }
  return (
    <>
    {/* Hero section */}
    <section className='mt-10 md:mt-[144px] px-5'>
    <h2 className='flex text-center items-center text-[#202229] tracking-tight leading-[1] font-bold text-4xl md:text-[54px] max-w-[671px] mx-auto'>
        <span className='inline-block'> Finding the right fit 
          <span className='inline-flex justify-center items-center w-[68px] h-[68px]'>
            <img src="/assets/user-2.png" alt="user image" />
          </span>
          has never been easier
        </span>
      </h2>
        <p className="mt-5 text-gray-600 md:leading-7 text-center tracking-tight max-w-[582px] text-base md:text-[22px] mx-auto ">
          With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.
        </p>

        <form className='relative flex items-center h-[74px] w-full max-w-[570px] mx-auto mt-[30px] '>
          <input id='search' type="text" placeholder='Looking for design' autoComplete='off' className='text-gray-500 h-[74px] flex-1 py-5 px-3 pr-[78px]  focus:outline-none border-2 focus:border-transparent focus:ring-2 focus:ring-yellow-500 rounded-xl duration-100  ' />
          <button type='button' className='flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0 h-[74px] w-[74px] rounded-xl bg-yellow-600'>
            <img src="/assets/arrow-right-black.png" alt="arrow-icon" />
          </button>
        </form>

        <Tabs />
    </section>

    <section className='-mb-16'>
    <div className="-skew-y-2 flex flex-col gap-1.5 ">
          <div className="h-[10px] w-full bg-gradient-to-r from-white via-blue-800 to-white  " />
          <div className="h-[8px] w-full bg-gradient-to-r from-white via-blue-800 to-white  " />
          <div className="h-[5px] w-full bg-gradient-to-r from-white via-blue-800 to-white  " />
          <div className="h-[3px] w-full bg-gradient-to-r from-white via-blue-800 to-white  " />
          <div className="h-[2px] w-full bg-gradient-to-r from-white via-blue-800 to-white  " />
        </div>
    </section>

    <section>
      <div className='relative'>
        <div className="footer-slant before:bg-[#EDEFFF] " />
        <div className="bg-[#EDEFFF] py-20 ">
          <div className="mb-20 px-5 ">
            <h2 className='text-center text-4xl md:text-[54px] md:leading-[1] font-bold max-w-[977px] w-full mx-auto '>Your one-stop marketplace for finding the talent your business needs.</h2>
          </div>

          <div className="py-10 grid grid-cols-1 lg:grid-cols-[400px,1fr] gap-5 justify-between max-w-[1300px] mx-auto">
            
            <div className="px-5 flex flex-col gap-3 py-10 ">
            <div className=" flex flex-col gap-5">
                <h4 className='text-[24px] font-semibold leading-[1] '>Find Dev and IT professionals to scale your business.</h4>
                <div className="flex items-center flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <img src="/assets/skill.png" alt="skill-icon" />
                      989 Skills
                  </div>
                  <div className="flex items-center gap-2">
                  <img src="/assets/categories.png" alt="categories-icon" />
                    45 Sub-Categories
                  </div>
                  <div className="flex items-center gap-2">
                  <img src="/assets/profile.png" alt="profile-icon" />
                    1011 Profiles
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 px-5">
              
              <div className="self-end flex flex-col gap-y-5 w-full lg:max-w-[730px] bg-white rounded-xl p-5">
                <h2 className='font-semibold ml-3 py-3'>IT & Development</h2>
                <div className="flex flex-wrap justify-evenly gap-5">
                  <div className="flex flex-col items-center gap-y-2">
                    <div className="h-[96px] w-[96px] rounded-full bg-gray-200 flex items-center justify-center">
                      <img src="/assets/shopify.png" alt="shopify-icon" />
                    </div>
                    <p className='text-center font-semibold text-sm max-w-[81px] inline-block' >Shopify Developer</p>
                  </div>
                  <div className="flex flex-col items-center gap-y-2">
                    <div className="h-[96px] w-[96px] rounded-full bg-gray-200 flex items-center justify-center">
                      <img src="/assets/magento.png" alt="magento-icon" />
                    </div>
                    <p className='text-center font-semibold text-sm max-w-[81px] inline-block' >Magento Developer</p>
                  </div>
                  <div className="flex flex-col items-center gap-y-2">
                    <div className="h-[96px] w-[96px] rounded-full bg-gray-200 flex items-center justify-center">
                    <img src="/assets/data-science.png" alt="data-science-icon" />
                    </div>
                    <p className='text-center font-semibold text-sm max-w-[81px] inline-block' >Data Scientist</p>
                  </div>
                  <div className="flex flex-col items-center gap-y-2">
                    <div className="h-[96px] w-[96px] rounded-full bg-gray-200 flex items-center justify-center">
                    <img src="/assets/webflow.png" alt="webflow-icon" />
                    </div>
                    <p className='text-center font-semibold text-sm max-w-[81px] inline-block' >Webflow Developer</p>
                  </div>
                  <div className="flex flex-col items-center gap-y-2">
                    <div className="h-[96px] w-[96px] rounded-full bg-gray-200 flex items-center justify-center">
                    <img src="/assets/dotnet.png" alt="dotnet-icon" />
                    </div>
                    <p className='text-center font-semibold text-sm max-w-[81px] inline-block' >Dot Net Developer</p>
                  </div>
                  <div className="flex flex-col  gap-y-2">
                    <div className="h-[96px] w-[96px] rounded-[30px] bg-gray-200 flex items-center justify-center">
                    <img src="/assets/arrow-right-black.png" alt="arrow-right-black-icon" />
                    </div>
                    <p className='text-center font-semibold text-sm max-w-[81px] inline-block' > </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="py-10 grid grid-cols-1 lg:grid-cols-[400px,1fr] gap-5 justify-between max-w-[1300px] mx-auto">
            
          <div className="px-5 flex flex-col gap-3 py-10 ">
              <div className=" flex flex-col gap-5">
                <h4 className='text-[24px] font-semibold leading-[1] '>Find Dev and IT professionals to scale your business.</h4>
                <div className="flex items-center flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <img src="/assets/skill.png" alt="skill-icon" />
                      989 Skills
                  </div>
                  <div className="flex items-center gap-2">
                  <img src="/assets/categories.png" alt="categories-icon" />
                    45 Sub-Categories
                  </div>
                  <div className="flex items-center gap-2">
                  <img src="/assets/profile.png" alt="profile-icon" />
                    1011 Profiles
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-auto">
                <button className="flex items-center justify-center  h-[73.73px] w-[73.73px] bg-black/80  rounded-[29.89px] ">
                  <img src={"/assets/arrow-right-white.png"} alt="logo" />
                </button>
                <span className='text-[22px] font-semibold'>Explore More</span>
              </div>

            </div>

            <div className="flex flex-col gap-5 px-5">
              
              <div className="self-end flex flex-col gap-y-5  w-full lg:max-w-[730px] bg-white rounded-xl p-5">
                <h2 className='font-semibold ml-3 py-3'>Design & Creative</h2>
                <div className="flex flex-wrap justify-evenly gap-5">
                
                <div className="flex flex-col  gap-y-2">
                    <div className="h-[96px] w-[96px] rounded-[30px] bg-gray-200 flex items-center justify-center">
                      <img src="/assets/arrow-right-black.png" alt="arrow-right-black-icon" className='rotate-180' />
                    </div>
                    <p className='text-center font-semibold text-sm max-w-[81px] inline-block' > </p>
                  </div>

                  <div className="flex flex-col items-center gap-y-2">
                    <div className="h-[96px] w-[96px] rounded-full bg-gray-200 flex items-center justify-center">
                      <img src="/assets/figma.png" alt="figma-icon" />
                    </div>
                    <p className='text-center font-semibold text-sm max-w-[81px] inline-block' >UX Designer</p>
                  </div>
                  <div className="flex flex-col items-center gap-y-2">
                    <div className="h-[96px] w-[96px] rounded-full bg-gray-200 flex items-center justify-center">
                      <img src="/assets/photoshop.png" alt="photoshop-icon" />
                    </div>
                    <p className='text-center font-semibold text-sm max-w-[81px] inline-block' >Graphics Designer</p>
                  </div>
                  <div className="flex flex-col items-center gap-y-2">
                    <div className="h-[96px] w-[96px] rounded-full bg-gray-200 flex items-center justify-center">
                      <img src="/assets/illustrator.png" alt="illustrator-icon" />
                    </div>
                    <p className='text-center font-semibold text-sm max-w-[81px] inline-block' >Illustration Artist</p>
                  </div>
                  <div className="flex flex-col items-center gap-y-2">
                    <div className="h-[96px] w-[96px] rounded-full bg-gray-200 flex items-center justify-center">
                      <img src="/assets/unreal-engine.png" alt="unreal-engine-icon" />
                    </div>
                    <p className='text-center font-semibold text-sm max-w-[81px] inline-block' >Unreal Engine</p>
                  </div>
                  <div className="flex flex-col items-center gap-y-2">
                    <div className="h-[96px] w-[96px] rounded-full bg-gray-200 flex items-center justify-center">
                      <img src="/assets/cinema-4d.png" alt="cinema-4d-icon" />
                    </div>
                    <p className='text-center font-semibold text-sm max-w-[81px] inline-block' >Dot Net Developer</p>
                  </div>

                </div>
               
              </div>

                <a href='#' className="text-base lg:ml-28 text-gray-800"><strong>30 more</strong>  to explore</a>
              
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* How it work */}
    <section className='-mt-10'>
      <div className="w-full -skew-y-2 py-28 bg-gradient-to-b from-[#0C0C0C] from-5% to-[#202229] text-white">
        <div className="skew-y-2 grid grid-cols-1 md:grid-cols-2 gap-10  px-5 max-w-[1300px] mx-auto">
       
            <div className="flex flex-col gap-6 ">
              <h2 className='inline-block items-center justify-center text-4xl md:text-[54px] font-bold w-full md:max-w-[379px] md:leading-[1]'>How it worked for Jason {" "} 
              <span className='inline-flex justify-center items-center w-[50px] h-[50px] rounded-full overflow-hidden bg-red-500'>
                <img src="/assets/user-3.png" alt="user image" className='self-center' />
              </span>
               {" "}at <img src="/assets/groovehq.png" alt="groovehq-icon" className='py-2' />
               </h2>
              <p className='text-lg max-w-[450.79px] md:text-[22px] tracking-wide text-white/90'>Zwilt enabled us to deliver on time and they{"'"}ve been heavy hitters in our corner since.</p>
              
              <div className="flex items-center gap-2 mt-auto">
                <button className="flex items-center justify-center h-[49.79px] w-[49.79px] bg-white  rounded-[20.19px] ">
                  <img src={"/assets/arrow-right-black.png"} alt="logo" className='h-5 w-5' />
                </button>
                <button className="flex items-center justify-center h-[49.79px] w-[49.79px] bg-white  rounded-[20.19px] ">
                  <img src={"/assets/arrow-right-black.png"} alt="logo" className='h-5 w-5' />
                </button>
              </div>

            </div>
            <div className="flex flex-col gap-10 ">
              <div className="flex items-center gap-5">
                <div className="bg-[#AF7CFF] h-[96.54px] w-[96.54px] rounded-[40.05px] flex items-center justify-center ">
                  <img src={"/assets/groovehq-white.png"} alt="logo" className='groovehq-white' />
                </div>
              <div className="flex flex-col ">
                <h2 className='text-white text-[34px] font-semibold '>Jason Makki</h2>
                <p className='text-white/30'>Engineer at GROOVE</p>
                <p className='text-white/30'>San Francisco</p>
              </div>
              </div>
              <p className='w-full p-3 max-w-[487.6px] text-white/90 '>Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they{"'"}ve been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they’ve been heavy hitters.</p>
            </div>
          
        </div>
      </div>
    </section>
   
    {/* Accordion section */}
    <section>
      <div className="w-full px-5  py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1300px] mx-auto">
       
            <div className="flex flex-col gap-3">

              <h2 className='font-bold text-4xl lg:text-[54px] lg:leading-[1] max-w-[570px] '>How we ensure you{"'"}re in good hands.</h2>
              <p className="text-base max-w-[646px] lg:text-[22px] text-black/70 my-5 ">With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.</p> 
            
              {/* <div className="flex flex-col gap-y-2 hover:cursor-pointer">
                <div className="flex flex-col border p-2 gap-5">
                  <div className="flex items-center gap-x-3">
                    <div className="w-[57px] h-[57px] bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="w-[15.83px] h-[15.83px] bg-black "></span>
                    </div>
                    <p className='text-sm text-gray-600'> <span className='font-semibold text-black'>Step 1:</span> Resume Screening</p>
                  </div>
                  <p className='text-sm text-gray-600 '>Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.</p>
                </div>
              </div> */}
            
              <div className="flex flex-col gap-y-2 hover:cursor-pointer">
                <div className="flex flex-col border p-2 gap-5 shadow-xl ">
                  <div className="flex items-center gap-x-3">
                    <div className="w-[57px] h-[57px] bg-indigo-400 rounded-full flex items-center justify-center">
                      <span className="w-[15.83px] h-[15.83px] bg-black "></span>
                    </div>
                    <p className='text-sm text-gray-600'> <span className='font-semibold text-black'>Step 2:</span> Resume Screening</p>
                  </div>
                  <p className='text-sm text-gray-600 '>Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.</p>
                </div>
              </div>

              {
                accordionData.map((item, index) => (

                      <div  onClick={() => handleAccordionClick(index)} key={item.id} className="flex flex-col gap-y-2 hover:cursor-pointer">
                      <div className="flex flex-col border p-2 gap-5">
                        <div className="flex items-center gap-x-3">
                          <div className={`w-[57px] h-[57px] rounded-full flex items-center justify-center ${item.id === index ? "bg-indigo-400" : "bg-gray-300"} `}>
                            <span className="w-[15.83px] h-[15.83px] bg-black "></span>
                          </div>
                          <p className='text-sm text-gray-600'> <span className='font-semibold text-black'>{item.step}</span> {item.title}</p>
                        </div>
                        {
                          accordionContent.includes(index) && (
                          <p className='text-sm text-gray-600 '>{item.content}</p>
                          )

                        }
                      </div>
                      </div>

                ))
              }
           
            </div>

            <div className="flex flex-col gap-10" />
          
        </div>
      </div>
    </section>
   
    {/* Start your journey */}
    <section>
      <div className="w-full px-3 md:px-0 py-28 bg-white">
        

        
        <div className="max-w-[1300px] mx-auto">
        <div className="bg-purple-100 -skew-y-2 ">          
          <div className="flex flex-col gap-5 mb-10 ">
            <div className="items-center justify-between  grid grid-cols-1 lg:grid-cols-2 ">
              <div className="flex gap-x-3 skew-y-2 p-5 py-10 flex-1">
                <h1 className='font-bold text-7xl inline-block bg-gradient-to-b from-purple-300 via-purple-50 to-transparent text-transparent bg-clip-text'>1</h1>
                  <div className="flex flex-col gap-y-5">              
                    <h2 className='text-2xl lg:text-[34px] font-semibold w-full lg:max-w-[445px] lg:leading-[1]'>Find your next star performer.</h2>
                    <p className='w-full lg:max-w-[407px] '>Explore the vast Zwilt marketplace to find the candidate that meets your needs.</p>
                    <div className="flex items-center gap-2 mt-auto">
                      <button className="flex items-center justify-center  h-[49.79px] w-[49.79px] bg-black/80  rounded-[20.19px] ">
                        <img src={"/Vector.png"} alt="logo" className='h-5 w-5' />
                      </button>
                      <span className='text-[22px] font-semibold '>Join now</span>
                    </div>
                  </div>
              </div>
              <div className="overflow-hidden relative w-full flex justify-end ">
                <img src="/assets/group-2_2.png" alt="" className='pointer-events-none object-contain ' />
              </div>
            </div>
          </div>          
        </div>
        </div>
        
        <div className="max-w-[1300px] mx-auto">
        <div className="bg-red-50 -skew-y-2 ">          
          <div className="flex flex-col gap-5 mb-10 ">
            <div className="items-center justify-between  grid grid-cols-1 lg:grid-cols-2 ">
              <div className="flex gap-x-3 skew-y-2 p-5 py-10 flex-1">
                <h1 className='font-bold text-7xl inline-block bg-gradient-to-b from-purple-300 via-purple-50 to-transparent text-transparent bg-clip-text'>2</h1>
                  <div className="flex flex-col gap-y-5">              
                    <h2 className='text-2xl lg:text-[34px] font-semibold w-full lg:max-w-[445px] lg:leading-[1]'>Find your next star performer.</h2>
                    <p className='w-full lg:max-w-[407px] '>Explore the vast Zwilt marketplace to find the candidate that meets your needs.</p>
                    <div className="flex items-center gap-2 mt-auto">
                      <button className="flex items-center justify-center  h-[49.79px] w-[49.79px] bg-black/80  rounded-[20.19px] ">
                        <img src={"/Vector.png"} alt="logo" className='h-5 w-5' />
                      </button>
                      <span className='text-[22px] font-semibold '>Join now</span>
                    </div>
                  </div>
              </div>
              <div className="overflow-hidden relative w-full flex justify-end ">
                <img src="/assets/group-2_3.png" alt="" className='pointer-events-none object-cover ' />
              </div>
            </div>
          </div>          
        </div>
        </div>
        
        <div className="max-w-[1300px] mx-auto">
        <div className="bg-purple-50 -skew-y-2 ">          
          <div className="flex flex-col gap-5 mb-10 ">
            <div className="items-center justify-between  grid grid-cols-1 lg:grid-cols-2 ">
              <div className="flex gap-x-3 skew-y-2 p-5 py-10 flex-1">
                <h1 className='font-bold text-7xl inline-block bg-gradient-to-b from-purple-300 via-purple-50 to-transparent text-transparent bg-clip-text'>3</h1>
                  <div className="flex flex-col gap-y-5">              
                    <h2 className='text-2xl lg:text-[34px] font-semibold w-full lg:max-w-[445px] lg:leading-[1]'>Find your next star performer.</h2>
                    <p className='w-full lg:max-w-[407px] '>Explore the vast Zwilt marketplace to find the candidate that meets your needs.</p>
                    <div className="flex items-center gap-2 mt-auto">
                      <button className="flex items-center justify-center  h-[49.79px] w-[49.79px] bg-black/80  rounded-[20.19px] ">
                        <img src={"/Vector.png"} alt="logo" className='h-5 w-5' />
                      </button>
                      <span className='text-[22px] font-semibold '>Join now</span>
                    </div>
                  </div>
              </div>
              <div className="overflow-hidden relative w-full flex justify-end ">
                <img src="/assets/group-2_1.png" alt="" className='pointer-events-none object-cover ' />
              </div>
            </div>
          </div>          
        </div>
        </div>

      </div>
    </section>

    {/* Why choose us */}
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-5 px-2 md:px-5 pb-20 ">
        <div className="flex flex-col gap-y-5 p-3">
          <h2 className='text-4xl md:leading-[1] font-bold md:font-[54px]'>Why choose Zwilt?</h2>
          <p className='max-w-[326px] text-[22px] text-gray-700 leading-[1.4]'>We take complex hiring processes - and simplify them. Connecting you to the world{"'"}s highly qualified talent pool.</p>
        </div>
        
        <div className="shadow-xl flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-3 p-4 rounded-xl">
          <div className="flex flex-col gap-y-5">
            <h2 className='text-4xl md:leading-[1] max-w-[464px]: font-bold md:text-[54px]'>Onboard without the risk.</h2>
            <div className="">
              <ul className='text-gray-600 flex flex-col gap-y-1.5'>
                <li className='text-sm md:text-base text-nowrap'> <div className='h-2 w-5 rounded-full inline-block bg-gray-500 mr-2' /> We pick the best for you to select.</li>
                <li className='text-sm md:text-base text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-gray-500 mr-2' /> Thousands of vetted candidates in dozens of categories.</li>
                <li className='text-sm md:text-base text-nowrap'> <div className='h-2 w-5 rounded-full inline-block bg-gray-500 mr-2' /> Risk-free resource swapping for the best fit.</li>
              </ul>
            </div>

              <a href='#' className="flex items-center gap-2 mt-auto">
                <button className="flex items-center justify-center  h-[74px] w-[74px] bg-black/80  rounded-[30px] ">
                  <img src={"/assets/arrow-right-white.png"} alt="logo" />
                </button>
                <span className='text-[22px] font-semibold'>Learn More</span>
              </a>
          </div>
          <div className="">
            <img src="/assets/group-2_4.png" alt="image" className='pointer-events-none' />
          </div>
        </div>
        
        {/* <div className="shadow-xl flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-3 p-4 rounded-xl">
          <div className="flex flex-col gap-y-5">
            <h2 className='text-4xl md:leading-[1] max-w-[239px] font-bold md:text-[54px]'>An open book.</h2>
            <div className="">
              <ul className='text-gray-600 flex flex-col gap-y-1.5'>
                <li className='text-sm md:text-base text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-yellow-500 mr-2' /> Easy and transparent one-to-one chat with candidates.</li>
                <li className='text-sm md:text-base text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-yellow-500 mr-2' />Simple and convenient payment methods.</li>
                <li className='text-sm md:text-base text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-yellow-500 mr-2' />Review past ratings.</li>
              </ul>
            </div>

              <a href='#' className="flex items-center gap-2 mt-auto">
                <button className="flex items-center justify-center  h-[74px] w-[74px] bg-black/80  rounded-[30px] ">
                  <img src={"/assets/arrow-right-white.png"} alt="logo" />
                </button>
                <span className='text-[22px] font-semibold'>Learn More</span>
              </a>
          </div>
          <div className="">
            <img src="/assets/group-2_4.png" alt="image" className='pointer-events-none' />
          </div>
        </div> */}
        
        {/* <div className="shadow-xl flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-3 p-4 rounded-xl">
          <div className="flex flex-col gap-y-5">
            <h2 className='text-4xl md:leading-[1] max-w-[239px] font-bold md:text-[54px]'>An open book.</h2>
            <div className="">
              <ul className='text-gray-600 flex flex-col gap-y-1.5'>
                <li className='text-sm md:text-base text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-green-200 mr-2' />Track your staff activity down to every minute with screenshots.</li>
                <li className='text-sm md:text-base text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-green-200 mr-2' />Comprehensive timesheet data to process payments.</li>
                <li className='text-sm md:text-base text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-green-200 mr-2' />Create projects to organize and assign tasks more effectively.</li>
              </ul>
            </div>

              <a href='#' className="flex items-center gap-2 mt-auto">
                <button className="flex items-center justify-center  h-[74px] w-[74px] bg-black/80  rounded-[30px] ">
                  <img src={"/assets/arrow-right-white.png"} alt="logo" />
                </button>
                <span className='text-[22px] font-semibold'>Learn More</span>
              </a>
          </div>
          <div className="">
            <img src="/assets/group-2_4.png" alt="image" className='pointer-events-none' />
          </div>
        </div> */}


      </div>
    </section>

    {/* FAQ */}
    <section className='bg-gray-50 py-20 -skew-y-2 '>
      <div className="max-w-[1300px] mx-auto skew-y-2 px-5 ">
        <h2 className="text-4xl font-bold md:text-center py-10 ">Frequently asked questions</h2>
        
        <div className="grid grid-cols-1 w-full divide-y">
            
        <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
              <div className='border-b md:border-b-0'>
                <a href="#" className='border-r inline-block font-semibold py-5 px-8'>General</a>
              </div>
              <div className='flex-1 py-5 px-5 group-hover:text-black group-hover:font-semibold transition-all duration-150 text-gray-500'>I want to work part-time, is that possible</div>
            </div>

          <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
              <span className='h-1'></span>
              <span className='flex-1  py-5 px-5 text-gray-500'>How long are the average projects?</span>
            </div>

            <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
              <span className='h-1'></span>
              <span className='flex-1  py-5 px-5 text-gray-500'>How much can I earn?</span>
            </div>

            <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
              <span className='h-1'></span>
              <div className='flex1 flex items-center justify-between group'>
                <span className='flex-1  py-5 px-5 text-gray-500'>How does the payment works?</span>
                <img src="/assets/arrow-right-black.png" alt="arrow icon" className='inline-block mr-6 opacity-0 duration-300 group-hover:opacity-100' />
              </div>
            </div>
          
        </div>
        
        <div className="grid grid-cols-1 w-full divide-y">
            
        <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
              <div className='border-b md:border-b-0'>
                <a href="#" className='border-r inline-block font-semibold py-5 px-8 bg-gray-200'>General</a>
                <a href="#" className='border-r inline-block font-semibold py-5 px-5'>Joining Process</a>
              </div>
              <div className='flex-1 py-5 px-5 group-hover:text-black group-hover:font-semibold transition-all duration-150 text-gray-500'>I want to work part-time, is that possible</div>
            </div>

            <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
              <span className='h-1'></span>
              <span className='flex-1  py-5 px-5 text-gray-500'>How long are the average projects?</span>
            </div>

            <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
              <span className='h-1'></span>
              <span className='flex-1  py-5 px-5 text-gray-500'>How much can I earn?</span>
            </div>
          
        </div>
        
      </div>
    </section>

    {/* footer section */}     
      <section>
        <div className="footer-slant" />
          <div className="w-full mx-auto px-3 md:px-0  py-20 bg-gradient-to-b from-[#0C0C0C] from-5% to-[#202229]">
            
            <div className="max-w-[1300px] mx-auto -skew-y-3 bg-blue-500 flex flex-col gap-8  items-center justify-center  h-[481px]">
              <h2 className='text-center skew-y-3 text-4xl md:text-[54px] leading-[1] font-bold max-w-[683px] text-white'>Need a job done, and done well? Get started</h2>
              <button className="self-center skew-y-3 flex items-center justify-center  h-[73.73px] w-[73.73px] bg-black/80  rounded-[29.89px] ">
                <img src={"/assets/arrow-right-white.png"} alt="logo" className='rotate-90' />
              </button>
            </div>

            <div className='mt-32 text-white px-5 '>
              
              <div className="max-w-[1300px] mx-auto gap-x-32 gap-y-5 grid grid-cols-1 lg:grid-cols-[20rem,1fr]">
                <div className="">
                  <a href='#' className='flex items-center '>
                    <span className='font-bold text-3xl'>Zilt</span> <img src={"/Vector.png"} alt="logo" />
                  </a>

                  <p className='text-slate-300 mt-[28.69px] leading-6 max-w-[700px]'>We take complex hiring processes - and simplify them. Connecting you to the world{"'"}s highly qualified talent pool.</p>
                
                <div className="flex flex-col gap-y-5 mt-[20px]">
                  <h2 className='text-white/40 text-sm font-semibold '>LINKS AND REDIRECTS</h2>
                  <div className="flex items-center gap-x-3">
                    <button className='bg-gray-800 rounded-[20.27px] px-8 py-3 hover:bg-gray-700 transition-colors duration-300 '>Hire now</button>
                    <button className='bg-gray-800 rounded-[20.27px] px-8 py-3 hover:bg-gray-700 transition-colors duration-300 '>Apply now</button>
                  </div>
                </div>

                </div>

                <div className="max-w-[876px] w-full">
                  <h2 className='text-3xl md:text-5xl font-semibold text-left tracking-wide max-w-[779px] '>Connecting the right people to the right businesses.</h2>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 mt-[64px] gap-6 ">
                  <ul className="">
                    <h2 className='text-white/40 text-sm font-semibold mb-4'>PLATFORM</h2>
                    <li className='mb-2'> <a href="#" className='text-[18px]'>Find Work</a> </li>
                    <li className='mb-2'> <a href="#" className='text-[18px]'>Find Talent</a> </li>
                    <li className='mb-2'> <a href="#" className='text-[18px]'>Categories</a> </li>
                    <li className='mb-2'> <a href="#" className='text-[18px]'>About Us</a> </li>
                  </ul>
                  <ul className="">
                    <h2 className='text-white/40 text-sm font-semibold mb-4'>CATEGORIES</h2>
                    <li className='mb-2'> <a href="#" className='text-[18px]'>Data Science</a> </li>
                    <li className='mb-2'> <a href="#" className='text-[18px]'>Find Talent</a> </li>
                    <li className='mb-2'> <a href="#" className='text-[18px]'>IT & Networking</a> </li>
                    <li className='mb-2'> <a href="#" className='text-[18px]'>Web & Mobile</a> </li>
                  </ul>
                  <ul className="">
                    <h2 className='text-white/40 text-sm font-semibold mb-4'>HELP</h2>
                    <li className='mb-2'> <a href="#" className='text-[18px]'>FAQ{"'"}s</a> </li>
                    <li className='mb-2'> <a href="#" className='text-[18px]'>Contact Us</a> </li>
                  </ul>
                  <ul className="">
                    <h2 className='text-white/40 text-sm font-semibold mb-4'>GET IN TOUCH @</h2>
                    <li className='mb-2'> <a href="#" className='text-[18px]'>Instagram</a> </li>
                    <li className='mb-2'> <a href="#" className='text-[18px]'>LinkedIn</a> </li>
                    <li className='mb-2'> <a href="#" className='text-[18px]'>Twitter</a> </li>
                  </ul>
                </div>
                
                </div>
              </div>
              
            </div>
            
          </div>
      </section>

    </>

    
  )
}

export default Home