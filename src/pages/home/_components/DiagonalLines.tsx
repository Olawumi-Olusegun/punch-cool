import React from 'react'

type Props = {}

function DiagonalLines({}: Props) {
  return (
    <div className="-skew-y-2 flex flex-col gap-1.5 ">
    <div className="h-[10px] w-full bg-gradient-to-r from-white via-blue-800 to-white  " />
    <div className="h-[8px] w-full bg-gradient-to-r from-white via-blue-800 to-white  " />
    <div className="h-[5px] w-full bg-gradient-to-r from-white via-blue-800 to-white  " />
    <div className="h-[3px] w-full bg-gradient-to-r from-white via-blue-800 to-white  " />
    <div className="h-[2px] w-full bg-gradient-to-r from-white via-blue-800 to-white  " />
  </div>
  )
}

export default DiagonalLines