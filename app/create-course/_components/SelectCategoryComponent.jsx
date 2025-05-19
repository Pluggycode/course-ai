import CategoryList from '@/app/_shared/CategoryList'
import React, { useContext } from 'react'
import Image from 'next/image'
import { UserInputContext } from '@/app/_context/UserInputContext'

const SelectCategoryComponent = () => {

  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  const handleCategoryChange = (category) =>{
    setUserCourseInput(prev=>({
      ...prev,
      category:category

    }))

  }
  
  return (
    <div className="px-10 md:px-20">
      <h2 className='my-5 text-text1'>Select the course Category</h2>
    <div className='grid grid-cols-3 gap-10'>
      {CategoryList.map((item,index)=>(
        <div className={`flex flex-col p-5 hover:border items-center rounded-xl hover:border-[#25D366] bg-[#1E2A33] hover:bg-[#0a2f18] text-text1
        cursor-pointer shadow-md  ${userCourseInput?.category==item.name&&'border-[#25D366] border bg-[#0a2f18] text-[#77ffa9]'}`} onClick={()=>handleCategoryChange(item.name)}>
          <Image src={item.icon} width={50} height={50}  className='rounded-lg'/>
          <h2 className='mt-2'>{item.name}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}

export default SelectCategoryComponent
