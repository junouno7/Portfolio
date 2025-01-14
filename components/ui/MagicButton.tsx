import React from 'react'

const MagicButton = ({
  title, icon, position, handleClick, otherClasses, titleClass
}: {
  title: string; icon: React.ReactNode, position: string; handleClick?: () => void;
  otherClasses?: string; titleClass?: string;
}) => {
  return (
    <button className="p-[2px] relative w-full md:w-50 md:mt-7">
    <div className="absolute inset-0 bg-gradient-to-r 
    from-indigo-600 to-blue-500 
    rounded-lg" />
    <div className={`inline-flex items-center justify-center
      px-6 py-2 pb-2.5 bg-black-100 rounded-[6px] relative group 
      transition duration-200 text-white 
      hover:bg-transparent gap-1.5 ${otherClasses}`}>
      {position === 'left' && icon}
      <span className={titleClass}>{title}</span>  {/* Apply titleClass here */}
      {position === 'right' && icon}
    </div>
</button>
  )
}

export default MagicButton


