import React from 'react'
import Hello from '../../components/Hello'
import ProjectCard from '../../components/ProjectCard'

const Portfolio = () => {
   const impProjects = [
      {
         _id: "0",
         heading: "Food donation app - donors & volunteer side",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna at justo rutrum mollis Integer pharetra do.",
         keyword: "ux research / app design",
         category: "imp",
         image: {
            name: "random.jpg",
            url: "https://picsum.photos/550/400"
         },
         link: "https://google.com/"
      },
      {
         _id: "1",
         heading: "Food donation app - donors & volunteer side",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna at justo rutrum mollis Integer pharetra do.",
         keyword: "ux research / app design",
         category: "imp",
         image: {
            name: "random.jpg",
            url: "https://picsum.photos/550/400"
         },
         link: "https://google.com/"
      },
      {
         _id: "2",
         heading: "Food donation app - donors & volunteer side",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna at justo rutrum mollis Integer pharetra do.",
         keyword: "ux research / app design",
         category: "imp",
         image: {
            name: "random.jpg",
            url: "https://picsum.photos/550/400"
         },
         link: "https://google.com/"
      },
      {
         _id: "3",
         heading: "Food donation app - donors & volunteer side",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna at justo rutrum mollis Integer pharetra do.",
         keyword: "ux research / app design",
         category: "imp",
         image: {
            name: "random.jpg",
            url: "https://picsum.photos/550/400"
         },
         link: "https://google.com/"
      },
      {
         _id: "4",
         heading: "Food donation app - donors & volunteer side",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna at justo rutrum mollis Integer pharetra do.",
         keyword: "ux research / app design",
         category: "imp",
         image: {
            name: "random.jpg",
            url: "https://picsum.photos/550/400"
         },
         link: "https://google.com/"
      },
      {
         _id: "5",
         heading: "Food donation app - donors & volunteer side",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna at justo rutrum mollis Integer pharetra do.",
         keyword: "ux research / app design",
         category: "imp",
         image: {
            name: "random.jpg",
            url: "https://picsum.photos/550/400"
         },
         link: "https://google.com/"
      },
   ]
   // eslint-disable-next-line
   const otherProjects = [
      {
         _id: "0",
         heading: "Food donation app - donors & volunteer side",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna at justo rutrum mollis Integer pharetra do.",
         keyword: "ux research / app design",
         category: "imp",
         image: {
            name: "random.jpg",
            url: "https://picsum.photos/550/400"
         },
         link: "https://google.com/"
      },
      {
         _id: "1",
         heading: "Food donation app - donors & volunteer side",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna at justo rutrum mollis Integer pharetra do.",
         keyword: "ux research / app design",
         category: "imp",
         image: {
            name: "random.jpg",
            url: "https://picsum.photos/550/400"
         },
         link: "https://google.com/"
      },
      {
         _id: "2",
         heading: "Food donation app - donors & volunteer side",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna at justo rutrum mollis Integer pharetra do.",
         keyword: "ux research / app design",
         category: "imp",
         image: {
            name: "random.jpg",
            url: "https://picsum.photos/550/400"
         },
         link: "https://google.com/"
      },
      {
         _id: "3",
         heading: "Food donation app - donors & volunteer side",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna at justo rutrum mollis Integer pharetra do.",
         keyword: "ux research / app design",
         category: "imp",
         image: {
            name: "random.jpg",
            url: "https://picsum.photos/550/400"
         },
         link: "https://google.com/"
      },
      {
         _id: "4",
         heading: "Food donation app - donors & volunteer side",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna at justo rutrum mollis Integer pharetra do.",
         keyword: "ux research / app design",
         category: "imp",
         image: {
            name: "random.jpg",
            url: "https://picsum.photos/550/400"
         },
         link: "https://google.com/"
      },
      {
         _id: "5",
         heading: "Food donation app - donors & volunteer side",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna at justo rutrum mollis Integer pharetra do.",
         keyword: "ux research / app design",
         category: "imp",
         image: {
            name: "random.jpg",
            url: "https://picsum.photos/550/400"
         },
         link: "https://google.com/"
      },
   ]

   return (
      <div className='md:px-16 px-5 mb-10'>
         <Hello line={true} />
         <div className='px-5'>
            {
               impProjects.map((project, index) => <ProjectCard key={index} flexPos={index + 1} data={project} />)
            }
         </div>
         <div className='my-5'>
            <span className={`text-priCol text-4xl font-cybg`}>Other</span>
            <span className={`text-3xl`}> Work</span>
            <span className={`text-7xl leading-6 text-priCol`}>.</span>
         </div>
         <div className='columns-2 gap-10 px-5'>
            {
               otherProjects.map((project, index) => <ProjectCard key={index} orientation={"por"} data={project} />)
            }
         </div>
      </div>
   )
}

export default Portfolio