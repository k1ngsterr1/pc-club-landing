import React from 'react'
import Image from 'next/image'

import bg from "@/assets/PC/ElevatingScreen/Background.svg"

export const ElevatingTab = () => {
    return (
        <div className="bg-inheritGray rounded-2xl mt-10">
            <div className="flex flex-col items-center">
                <p className='pl-6 pt-6 text-white text-[20px] mr-auto'>Shell customization: background, covers, screensaver (image or video)</p>
            </div>
            <div className="mr-auto p-6">
                <Image src={bg} alt='bg' width={1320} />
            </div>
        </div>
    )
}
