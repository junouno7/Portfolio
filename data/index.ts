export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Combining mechanical design & software to create seamless engineering solutions.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/robot_arm.webp",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm flexible with different time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I'm constantly improving",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "",
      description: "",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "w-full h-[95%] object-cover -translate-x-2 md:-translate-x-2 lg:-translate-x-3",
      titleClassName: "justify-between w-full h-full",
      content: {
        mechanical: {
          icon: "/gear-icon.svg",
          title: "Mechanical Design",
          tools: "Solidworks, Fusion 360, AutoCAD"
        },
        shop: {
          icon: "/wrench-icon.svg",
          title: "Shop Tools",
          tools: "Band Saws, Drill Press, Sanders, Grinders, and Hand Tools"
        }
      },
      img: "/grid.svg",
      spareImg: "",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center lg:text-left lg:justify-start",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Concept AGV/AMR Project (In Progress)",
      des: "Developing a concept AGV/AMR using a Yahboom JetBot Mini, where a YOLO-based machine learning model enables the robot to detect objects through its camera and autonomously sort them into the correct locations",
      img: "/final-project.png",
      iconLists: ["/react.svg", "/flask.svg", "/tail.svg", "/ros.svg", "/opencv.svg"],
      link: "https://github.com/CompetitionSoo/Final-Project",
      
    },
    {
      id: 2,
      title: "Portfolio Website",
      des: "This portfolio website, built with Next.js for the user interface, Three.js for immersive 3D visuals, Framer Motion for smooth animations, and elegantly styled with TailwindCSS.",
      img: "/Portfolio.png",
      iconLists: ["/next.svg", "/tail.svg", "/framer.svg", "/three.svg", "/node.svg"],
      link: "https://github.com/junouno7/Portfolio",
    },
    {
      id: 3,
      title: "Self-Driving AI RC Car",
      des: "A self-driving AI RC car using OpenCV for lane detection and YOLO for real-time object detection.",
      img: "/AICAR2.png",
      iconLists: ["/python.svg", "/opencv.svg"],
      link: "https://github.com/junouno7/selfdriving-car",
      
    },
    {
      id: 4,
      title: "Stock Tracking Web App",
      des: "A stock tracking web app built with Flask, JavaScript, and SQLite that uses the YFinance API to fetch real-time stock data.",
      img: "/stocktracker.png",
      iconLists: ["/python.svg", "/flask.svg", "/javascript.svg", "/css.svg", "/html.svg", "/sqlite.svg"],
      link: "https://github.com/junouno7/Stock-Tracker",
    },
  ];
  
 
  
  // export const companies = [
  //   {
  //     id: 1,
  //     name: "cloudinary",
  //     img: "/cloud.svg",
  //     nameImg: "/cloudName.svg",
  //   },
  //   {
  //     id: 2,
  //     name: "appwrite",
  //     img: "/app.svg",
  //     nameImg: "/appName.svg",
  //   },
  //   {
  //     id: 3,
  //     name: "HOSTINGER",
  //     img: "/host.svg",
  //     nameImg: "/hostName.svg",
  //   },
  //   {
  //     id: 4,
  //     name: "stream",
  //     img: "/s.svg",
  //     nameImg: "/streamName.svg",
  //   },
  //   {
  //     id: 5,
  //     name: "docker.",
  //     img: "/dock.svg",
  //     nameImg: "/dockerName.svg",
  //   },
  // ];
  
  interface WorkExperience {
    id: number;
    title: string;
    desc: string;
    className: string;
    thumbnail: string;
    url: string;
  }

  export const workExperience: WorkExperience[] = [
    {
      id: 1,
      title: "Mechanical Design Engineer - DARIM SYSTEMS",
      desc: "Designed, manufactured, and operated VR Simulators.",
      className: "md:col-span-2",
      thumbnail: "/Darim.avif",
      url: "https://imgur.com/a/CMwGtDO"
    },
    {
      id: 2,
      title: "Maintenance & Support Team - KATUSA",
      desc: "Provided maintenance and support for US ARMY radio towers all over Korea.",
      className: "md:col-span-2",
      thumbnail: "/usfk.png",
      url: "https://imgur.com/a/AjK0UjQ"
    },
    {
      id: 3,
      title: "English Teacher - Chungdahm Institute",
      desc: "Taught english to grades 1-6.",
      className: "md:col-span-2",
      thumbnail: "/chungdahm.webp",
      url: "https://www.chungdahm.com/"
    },
    {
      id: 4,
      title: "Kitchen Manager - Happy Teriyaki",
      desc: "Kitchen manager for teriyaki restaurant with 13 locations in Idaho and Utah.",
      className: "md:col-span-2",
      thumbnail: "/happy.png",
      url: "https://www.ilovehappyteriyaki.com/"
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url: "https://github.com/junouno7"
    },
    {
      id: 2,
      img: "/instagram.svg",
      url: "https://instagram.com/junouno7"
    },
    {
      id: 3,
      img: "/link.svg",
      url: "https://linkedin.com/in/juneaukim"
    },
  ];