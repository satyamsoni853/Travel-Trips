import React from 'react'

type TitleProps = {
    title: string;
    subtitle: string;
    // New optional props for theme-aware styling
    titleColor?: string;
    subtitleColor?: string;
}

const Title = ({ 
    title, 
    subtitle, 
    // Set defaults that look good in both themes if not overridden
    titleColor = "text-pink-600 dark:text-purple-400", 
    subtitleColor = "text-gray-900 dark:text-white" 
}: TitleProps) => {
    
    // Use the provided class names or the default fallback class names
    const finalTitleClass = `${titleColor} uppercase text-lg font-bold tracking-widest`;
    const finalSubtitleClass = `${subtitleColor} lg:text-5xl xs:text-4xl font-bold leading-[60px]`;

    return (
        <div className='flex flex-col gap-1'>
            {/* Title (e.g., "Sunspots Services") */}
            <p className={finalTitleClass}>{title}</p>
            
            {/* Subtitle (e.g., "Our top value categories for you") */}
            <p className={finalSubtitleClass}>{subtitle}</p>
        </div>
    )
}

export default Title