/**
 * @copyright 2024 Sandun Dissanayake
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'E commerse website for Shoe Shop',
      tags: ['E commerse', 'Development'],
      projectLink: 'https://github.com/SandunDissanayake/E-Commerse-Website-for-Shoe-Shop'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Movie website Design',
      tags: ['Web', 'Development','Frontend'],
      projectLink: 'https://github.com/SandunDissanayake/Movie-Website'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'E commerse website for Vens Cart',
      tags: ['E commerse', 'Development'],
      projectLink: 'https://github.com/SandunDissanayake/E-Commerse-Website-for-Ven-s-Cart-Company'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Restaurant Frontend Website',
      tags: ['Web', 'Development','Frontend'],
      projectLink: 'https://github.com/SandunDissanayake/Restaurant---Frontend---Design'
    }
    
    
    
  ];

const Work = () => {
  return (
    <section 
        id="work"
        className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio Highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink},
                key) => (
                    <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                    />

                    
                ))}
            </div>
        </div>

    </section>
  )
}

export default Work