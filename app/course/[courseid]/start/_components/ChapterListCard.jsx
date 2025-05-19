import React from 'react'
import { GoClock } from "react-icons/go";

const ChapterListCard = ({chapter,index}) => {
  return (
    <div className='grid grid-cols-5 p-4 items-center'>
        <div className="">
            <h2 className='p-1 bg-[#25D366] text-text1 rounded-full w-8 h-8 text-center'>{index+1}</h2>
        </div>
        <div className="col-span-4">
            <h2 className='font-medium ml-2  text-[#25D366]'>{chapter.chapterName}</h2>
            <h2 className='flex items-center gap-2 text-text1'><GoClock/>{chapter.duration}</h2>
        </div>
    </div>
  )
}

export default ChapterListCard