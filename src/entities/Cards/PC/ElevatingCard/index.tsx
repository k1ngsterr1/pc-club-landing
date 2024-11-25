import React, { ReactNode } from 'react'

interface IFeatureCardProps {
    title: string;
    icon: ReactNode
}

export default function FeatureCard({
    title,
    icon,
}: IFeatureCardProps) {
    return (
        <div className="relative bg-inheritGray h-[470px] p-6 rounded-2xl">
            <div className="flex flex-col items-center justify-center">
                <p className='absolute top-10 left-10 text-white text-[20px] w-[80%]'>{title}</p>
                <div className="mt-24 ml-2">
                    {icon}
                </div>
            </div>
        </div>
    )
}
