import {VscGithub} from "react-icons/vsc";
import {CiLinkedin} from "react-icons/ci";
import {FaWhatsapp} from "react-icons/fa";

export const myProjects = [
    {
        id: 1,
        title: "Ecommerce Full Stack WebApp",
        description:
            "Production-deployed full-stack e-commerce platform built with a Java Spring Boot backend and React frontend, integrated with real payment, media, and email services.",
        subDescription: [
            "Configured cross-origin cookie security (httpOnly, secure, sameSite) to unblock POST requests across separate domains.",
            "Migrated from local file storage to Cloudinary for persistent cloud media management to handle Docker statelessness.",
            "Rewrote the transactional email architecture using Brevo SMTP after native Java Mail failed on Render due to security restrictions.",
            "Deployed a decoupled architecture utilizing Render for the backend API and Netlify for the React frontend."
        ],
        href: "https://ecom-webapp-hasham.netlify.app/",
        logo: "",
        image: "/assets/projects/ecommerce.jpg",
        tags: [
            { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
            { id: 2, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
            { id: 10, name: "HTML 5", path: "/assets/logos/html5.svg" },
            { id: 3, name: "Spring Boot", path: "/assets/logos/springboot.svg" },
            { id: 4, name: "java", path: "/assets/logos/java.svg" },
            { id: 5, name: "PostgreSQL", path: "/assets/logos/postgresql.png" },
            { id: 9, name: "Vite", path: "/assets/logos/vitejs.svg" },
            { id: 6, name: "Stripe", path: "/assets/logos/stripe.svg" },
            { id: 7, name: "Cloudinary", path: "/assets/logos/cloudinary.png" },
            { id: 8, name: "Docker", path: "/assets/logos/docker.png" }
        ],
    },
    {
        id: 2,
        title: "Zombie Zero",
        description:
            "A top-down survival game and custom 2D game engine built on JavaFX for CS 212: Object Oriented Programming at NUST, emphasizing clean architecture.",
        subDescription: [
            "Collaborated in a 3-person team to engineer the Main Menu, In-game HUD, and high-score leaderboard using JavaFX and FXML.",
            "Implemented core weapon mechanics, including complex fire rates, ammunition tracking, and reloading logic.",
            "Developed the GameAudioManager architecture to efficiently handle multi-instance sound effects and synchronized background audio.",
            "Applied robust OOP principles including Encapsulation for data security, Inheritance for modularity, and Polymorphism for dynamic object updates."
        ],
        href: "https://zombie-zero.itch.io/game", // Add download/repo link here if available
        logo: "",
        image: "/assets/projects/zombie-zero.png",
        tags: [
            { id: 1, name: "Java", path: "/assets/logos/java.svg" },
            { id: 2, name: "JavaFX", path: "/assets/logos/javafx.png" },
            { id: 3, name: "OOP", path: "/assets/logos/oop.png" },
            { id: 4, name: "Game Dev", path: "/assets/logos/gamedev.png" }
        ],
    },
    {
        id: 3,
        title: "CrewUp Team Task and Contribution System",
        description:
            "A comprehensive task management and contributor tracking system developed with a strong focus on custom data structures and low-level file handling.",
        subDescription: [
            "Designed and implemented optimized custom data structures in C++ to manage team workflows and track individual contributions.",
            "Built an interactive and responsive user interface using the SFML multimedia library.",
            "Developed robust file handling mechanics for secure, persistent storage of team logs and system metrics.",
            "Demonstrated core software design principles and team leadership skills to organize project milestones at NUST."
        ],
        href: "https://github.com/hashamtanveer-41/CrewUP",
        logo: "",
        image: "/assets/projects/crewup.jpeg",
        tags: [
            { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
        ],
    }
];

export const mySocials = [
    {
        name: "WhatsApp",
        href: "https://api.whatsapp.com/send?phone=923368655135",
        icon: FaWhatsapp,
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/hashamtanveerokara/",
        icon: CiLinkedin,
    },
    {
        name: "Github",
        href: "https://github.com/hashamtanveer-41",
        icon: VscGithub,
    },
];

export const experiences = [
    {
        title: "Outreach Executive",
        job: "NUST ACM Student Chapter",
        date: "Sep 2025 - Present",
        contents: [
            "Coordinate technical hackathons for over 150 participants, ensuring seamless operations and event execution.",
            "Utilize Git and GitHub to manage collaborative project documentation and version control across multiple development teams.",
            "Collaborated on cross-functional initiatives to promote software engineering best practices within the student community."
        ],
    },
    {
        title: "Java Development Intern",
        job: "CodeAlpha",
        date: "Sep 2025 - Oct 2025",
        contents: [
            "Engineered a robust Hotel Reservation System using Java and custom file handling mechanics.",
            "Optimized localized data persistence logic to seamlessly handle up to 500 simulated daily room bookings.",
            "Implemented core Object-Oriented Programming (OOP) principles to enforce clean code architecture and maximize system scalability.",
            "Debugged and optimized backend modules, improving local file data management and system execution speed by 25%."
        ],
    },
    {
        title: "Competitive Programmer",
        job: "LeetCode (Problem Solving)",
        date: "2026 - Present",
        contents: [
            "Solved advanced algorithmic and data structure challenges with over 35 distinct problems completed and 180+ active submissions.",
            "Maintained consistent problem-solving streaks to sharpen backend logical execution and runtime efficiency.",
            "Demonstrated strong logical proficiency by successfully tackling Medium-level challenges and mastering complex patterns like interval merging."
        ],
    },
];
export const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://robohash.org/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://robohash.org/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://robohash.org/john",
    },
    {
        name: "Alice",
        username: "@alice",
        body: "This is hands down the best thing I've experienced. Highly recommend!",
        img: "https://robohash.org/alice",
    },
    {
        name: "Bob",
        username: "@bob",
        body: "Incredible work! The attention to detail is phenomenal.",
        img: "https://robohash.org/bob",
    },
    {
        name: "Charlie",
        username: "@charlie",
        body: "This exceeded all my expectations. Absolutely stunning!",
        img: "https://robohash.org/charlie",
    },
    {
        name: "Dave",
        username: "@dave",
        body: "Simply breathtaking. The best decision I've made in a while.",
        img: "https://robohash.org/dave",
    },
    {
        name: "Eve",
        username: "@eve",
        body: "So glad I found this. It has changed the game for me.",
        img: "https://robohash.org/eve",
    },
];
