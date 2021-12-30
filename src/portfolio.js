/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bhavya Lakhani",
  title: "Hi all, I'm Bhavya",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1uASHRPa3PYlO6rgqZwnwAuAyHk0Dlq3f/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Bhavyalakhani",
  linkedin: "www.linkedin.com/in/bhavyalakhani",
  gmail: "bhavyalakhani89@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  instagram: "https://www.instagram.com/bhavyalakhani/",
  facebook: "https://www.facebook.com/bhavya.lakhani.79",
  medium: "https://medium.com/@bhavyalakhani89",
  stackoverflow: "https://stackoverflow.com/users/13858061/bhavya-lakhani",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "git-alt",
      fontAwesomeClassname: "fab fa-git-alt"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Dwarkadas J Sanghvi College of Engineering",
      logo: require("./assets/images/DJSCE.jpg"),
      subHeader: "Bachelors of Engineering in Computer Engineering",
      duration: "August 2018 - current",
      desc: "Participated in the research of Machine Learning, NLP and published 3 papers.",
      descBullets: [
        "Maintained an average of 9.61 GPA of upto 6 semesters",
        "Treasurer of the Computer Department for Annual Festival called Trinity",
        "Part of the department's Cricket and Football Team"
      ]
    },
    {
      schoolName: "K J Somaiya College of Science and Commerce",
      logo: require("./assets/images/kj.png"),
      subHeader: "High School (HSC)",
      duration: "August 2016 - May 2018",
      desc: "Ranked top 1% in the program. Took Computer Science as a vocational course",
      descBullets: [
        "Took Science as a Stream in High School",
        "Scored 92.15% (Top 1% in the state) and scored 191/200 in computer science",
        "Scored 154/200 in MHT-CET (700th rank out of 1L students)"
      ]
    },
    {
      schoolName: "NES National Public School",
      logo: require("./assets/images/NES.jpg"),
      subHeader: "Secondary School (ICSE)",
      duration: "April 2013 - May 2016",
      desc: "Ranked top 5% in the program. Took Economic Applications as the elective.",
      descBullets: [
        "Scored 91.33% in the board exams.",
        "School Topper in Economic Applications.",
        "Part of the School's Cricket and Football Team"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning & Deep Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "JP Morgan Chase & Co.",
      companylogo: require("./assets/images/JPMC.png"),
      date: "June 2021 – August 2021",
      desc: "Worked as a Software Engineer in the CIB ( Corporate and Investment Banking) Tech",
      descBullets: [
        "Enabled Jaeger Tracing on an Event-driven and Distributed System, so the trace events across mutliple system boundaries can be monitored centrally and enabled it on various services such as Cassandra, Kafka, JMS, etc",
        "Reviewed static scan reports for their projects and fixed multiple vulnerabilities present in their project and deployed the changes in their project to their cloud",
        "Created a CI CD pipeline which reduces the deployment time significantly and deployed it on all phases of SDLC (Software Development Lifecycle) following agile methodology"
      ]
    },
    {
      role: "Application Developer",
      company: "MunchIn",
      companylogo: require("./assets/images/munchin.png"),
      date: "September 2020 - November 2020",
      desc: "Worked on the MunchIn App (Beta Version), a social media App for foodiesm",
      descBullets:[
        "Developed an App from scratch and laid down initial working of the app (React Navigation) and build 90% of app’s UI with a number of functionalities and also created the authentication for the app.",
        "Created a peer to peer messaging interface with the help of Firebase Realtime Database",
        "Designed and implemented the application with interactive screens using React Native",
        "Contributed to all phases of Software Development Lifecycle following agile methodology",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS I DELVED INTO AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/automl.png"),
      projectName: "AutoML",
      projectDesc: "Web App for Automated Machine Learning",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
        //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/mymaharaj.png"),
      projectName: "MyMaharaj",
      projectDesc: "It is a cross-platform application to bring consumers and producers from the cooking industry to a single place",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    },
    {
      image: require("./assets/images/eyeris.png"),
      projectName: "Eyeris Web",
      projectDesc: "E-Commerce app for Patni Opticians",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Publications"),
  subtitle:
    "SOME COOL STUFF THAT I HAVE PUBLISHED !",

  achievementsCards: [
    {
      title: "Neural Machine Translation from Polish to Engllish using various techniques",
      subtitle:
        "Co-authored and presented the paper in CIESD 2021, which will be published in Web of Science and Scopus indexed AIP Publishing Journal.",
      image: require("./assets/images/papernmt.png"),
      footerLink: [
        {
          name: "View Paper",
          // url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Code",
          url: "https://github.com/Bhavyalakhani/NEURAL-MACHINE-TRANSLATION-FROM-POLISH-TO-ENGLISH-USING-VARIOUS-TECHNIQUES"
        }
      ]
    },
    {
      title: "Automated Data Driven preprocessing and training of classification models",
      subtitle:
        "Co-authored and presented the paper in ICCCT 2021, will be published in IEEE Xplore.",
      image: require("./assets/images/paperautoml.png"),
      footerLink: [
        {
          name: "View Paper",
          // url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        },
        {
          name:"Code",
          url:"https://github.com/Bhavyalakhani/Auto-ML"
        }
      ]
    },

    {
      title: "Stroke Prediction using Machine Learning",
      subtitle: "Co-authored and presented the paper in ICACET 2021, will be published in Scopus Indexed IOP Publishing Journal .",
      image: require("./assets/images/paperstroke.png"),
      footerLink: [
        {name: "View Paper", 
        url: ""
      },
        // {
        //   name: "Code",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
 };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7506129040",
  email_address: "bhavyalakhani89@gmail.com"
};

// Twitter Section

const twitterDetails = {
  // userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
