import React from 'react'
import { BentoGrid, BentoGridItem } from './bentogrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section className="pt-8 pb-32" id='about'>
        <BentoGrid>
            {gridItems.map
            (({id, title, description, className, img, imgClassName,
                titleClassName, spareImg, content
            }) => (
                <BentoGridItem 
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                content={content}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid