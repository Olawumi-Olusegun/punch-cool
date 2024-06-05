import React, { useState } from 'react'

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

function Accordion() {
    const [accordionContent, setAccordionContent] = useState<number[]>([]);

    const handleAccordionClick = (index: number) => {
  
      const tempAccordion = accordionContent.includes(index) ? [] : [index];
  
      setAccordionContent(tempAccordion);
  
    }
  return (
    <div className="w-full px-5 py-12 md:py-20 ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1300px] mx-auto">
   
        <div className="flex flex-col gap-3">

          <h2 className='font-bold text-4xl lg:text-[54px] lg:leading-[1] max-w-[570px] '>How we ensure you{"'"}re in good hands.</h2>
          <p className="text-base max-w-[646px] lg:text-[22px] text-black/70 my-5 ">With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.</p> 
        
          {
            accordionData.map((item, index) => (

                  <div  onClick={() => handleAccordionClick(index)} key={item.id} className="flex flex-col gap-y-2 hover:cursor-pointer">
                  <div className="flex flex-col border p-2 gap-5">
                    <div className="flex items-center gap-x-3">
                      <div className={`w-[57px] h-[57px] rounded-full flex items-center justify-center bg-gray-300 ${accordionContent.includes(index) && "bg-indigo-400"} `}>
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
  )
}

export default Accordion