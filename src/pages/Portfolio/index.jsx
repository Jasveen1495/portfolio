import React from 'react'
import Hello from '../../components/Hello'
import ProjectCard from '../../components/ProjectCard'

const Portfolio = ({ scroll }) => {
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
      <div className='px-16'>
         <Hello line={true} />
         <div className='px-8'>
            {
               impProjects.map((project, index) => <ProjectCard key={index} orientation={"land"} flexPos={index + 1} data={project} />)
            }
         </div>
      </div>
   )
}

export default Portfolio