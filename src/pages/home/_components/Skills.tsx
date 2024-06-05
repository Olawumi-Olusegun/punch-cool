import React from 'react'

type Props = {}

function Skills({}: Props) {
  return (
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
  )
}

export default Skills