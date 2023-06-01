const data = {
    experience: [
        {
            company: 'Web Genius Consultants',
            position: 'Software Engineer',
            location: 'Fredericton, New Brunswick',
            startDate: 'April 2023',
            endDate: 'Present',
            icon: '/images/web-icon.avif',
            points: [
                `Collaborated with project teams to enhance and optimize clients' websites through full-stack React development.`,
                'Implemented innovative features and functionality, leveraging AI technologies such as natural language processing and machine learning algorithms.',
                'Utilized best practices in UI/UX design and coding to deliver visually appealing and user-friendly websites.',
                'Worked closely with clients to understand their specific needs and translate them into effective software solutions.',
            ],
        },
        {
            company: 'Symbodi',
            position: 'Chief Operating Officer',
            location: 'Fredericton, New Brunswick',
            startDate: 'May 2019',
            endDate: 'Jan 2023',
            icon: '/images/sym-icon.avif',
            points: [
                'Results-driven professional responsible for driving overall business development and growth, including financial planning and allocation of company resources.',
                'Led logistics and operations, resulting in a 3084% increase in company growth and recognition as one of the fastest-growing companies in Canada by the Deloitte Fast 50 program.',
                'Managed e-commerce website development utilizing customer analytics to improve web conversions by 440% and website sales by 166%.',
                'Managed engineering design, prototyping, and material sourcing for future product lines, resulting in the successful launch of new product lines.',
            ],
        },
        {
            company: 'UNB Nuclear Group',
            position: 'Graduate Research Assistant',
            location: 'Fredericton, New Brunswick',
            startDate: 'Apr 2017',
            endDate: 'Sep 2017',
            icon: '/images/unb-icon.avif',
            points: [
                'Developed CFD code to predict the corrosion and surface morphology of corrosion in nuclear reactors, resulting in improved accuracy of predictions.',
                'Researcher responsible for conducting a literature review on the chemistry and corrosion of power system coolants, fouling heat exchanger circuits, and processing used nuclear fuel.',
                'Tested coolant for flow-accelerated corrosion experiments and assisted with maintenance and removal of lab components from previous experiments, resulting in improved laboratory efficiency.',
            ]
        },
        {
            company: 'OSCO – Ocean Steel',
            position: 'Project Management Intern',
            location: 'Saint John, New Brunswick',
            startDate: 'Apr 2016',
            endDate: 'Sep 2016',
            icon: '/images/osco-icon.avif',
            points: [
               'Detail-oriented professional responsible for verifying engineering and contract drawings for accuracy before sending them to the client.',
               'Communicated effectively with clients to request information regarding engineering documents.',
               'Ensured the timely delivery of engineering documents to construction sites, resulting in improved project timelines.'
            ]
        }
    ],
    portfolio: [
        {
          title: 'Squeak Toys',
          images: ['/images/squeak1.avif', '/images/squeak2.avif'],
          description: 'A Full Stack e-commerce application for Squeak Toys built with React, Express, Stripe, and MongoDB.',
          skills: ['ReactJS', 'MongoDB', 'Express', 'Stripe', 'Node.js'],
          deployedSite: 'https://squeaktoys.herokuapp.com/',
          sourceCode: 'https://github.com/aturner1995/react-ecommerce-squeakToys',
        },
        {
          title: 'Rocket Resumes',
          images: ['/images/rocket1.avif', '/images/rocket2.avif'],
          description: 'A full stack Resume generator that utilizes AI to generate resumes that improve your chances of getting hired.',
          skills: ['OpenAI', 'Express', 'Handlebars', 'MySQL', 'Node.js'],
          deployedSite: 'https://rocket-resumes.herokuapp.com/',
          sourceCode: 'https://github.com/aturner1995/group-project-2',
        },
        {
          title: 'Mapcation',
          images: ['/images/map1.avif', '/images/map2.avif'],
          description: 'A front-end travel planning application that provides YouTube travel guides, location/restaurant suggestions.',
          skills: ['JavaScript', 'jQuery', 'HTML5', 'Bulma', 'AJAX'],
          deployedSite: 'https://aturner1995.github.io/Mapcation/index.html',
          sourceCode: 'https://github.com/aturner1995/Mapcation',
        },
        {
          title: 'AI Tech BLOG',
          images: ['/images/blog1.avif', '/images/blog2.gif'],
          description: 'A full-stack tech-blog powered by AI to quickly generate SEO optimized, tailored blog content for your business.',
          skills: ['ReactJS', 'OpenAI', 'Express', 'MySQL', 'Node.js'],
          deployedSite: 'https://www.aaron-turner.dev/blog',
          sourceCode: 'https://github.com/aturner1995/react-portfolio',
        },
      ],
      education: [
        {
          degree: 'Full Stack Developer Certificate',
          uni: 'University of New Brunswick',
          startDate: 'Jan 2023',
          endDate: 'Jun 2023',
          icon: '/images/unb-icon.avif',
        },
        {
          degree: 'Masters of Science in Chemical Engineering',
          uni: 'University of New Brunswick',
          startDate: '2017',
          endDate: '2019',
          icon: '/images/unb-icon.avif',
        },
        {
          degree: 'Bachelor of Science in Mechanical Engineering',
          uni: 'University of New Brunswick',
          startDate: '2013',
          endDate: '2017',
          icon: '/images/unb-icon.avif',
        },

      ]
}

export default data;
  