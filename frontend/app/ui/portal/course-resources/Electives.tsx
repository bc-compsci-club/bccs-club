   import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { BsPlus, BsDash } from "react-icons/bs";

// This is the courses data from your uploaded JSON file.
const courseData = {
  "courses": [
    {
      "course_code": "CISC 1001",
      "type": "Elective",
      "course_name": "Computing & Quantitative Reasoning",
      "description": "Computers, programming, and their basis in quantitative reasoning. Information representation, base systems and numeric conversions between bases. The nature of algorithms; use of graphs to compare performance of algorithms. Designing and writing programs to solve mathematical problems. Feasibility and computability based on mathematical analysis. Drawing inferences from results. Computer and network security and privacy, including encryption techniques and lockout algorithms based on algebraic methods and mathematical logic.",
      "prerequisites": ["None"],
      "credits": 3
    },
    {
      "course_code": "CISC 1002",
      "type": "Elective",
      "course_name": "The Outer Limits of Reason",
      "description": "Paradoxes and limitations arising in computer science, the physical sciences, and mathematics. Reasoning conundrums and paradoxes with an emphasis on examples from mathematics. Limitations of reason, logic, mathematics and computing. Reasoning about infinity. The inability to prove everything that is true. Problems that cannot be solved computationally in a reasonable amount of time. Unsolvable problems. The boundary between what can and cannot be known. Starting Spring 2018 Satisfies Pathways Required Core Mathematics and Quantitative Reasoning requirement. This course is the same as Philosophy 2200.",
      "prerequisites": ["None"],
      "credits": 3
    },
    {
      "course_code": "CISC 1003",
      "type": "Elective",
      "course_name": "Exploring Robotics",
      "description": "Introduction to programming through the use of project-based educational robotics activities. Small group work on a series of multi-week creative projects involving use of robots to address meaningful and socially important issues, such as urban search and rescue or elder care. Introduction to the fundamentals of robotics (including aspects of mechanical design) and elementary programming within a graphical environment. (Not open to students who have completed Core Curriculum 3303.) This course satisfies Pathways Flexible Core Scientific World requirement.",
      "prerequisites": ["None"],
      "credits": 3
    },
    {
      "course_code": "CISC 1050",
      "type": "Elective",
      "course_name": "Intro to Computer Applications",
      "description": "Introduction to the use of the computer in the home and office. Computer literacy. Word processing, database systems, and spreadsheets. Examination and evaluation of computer peripherals and software for personal computers. (Not open to students who are enrolled in or have completed Computer and Information Science 3800)",
      "prerequisites": ["None"],
      "credits": 3
    },
    {
      "course_code": "CISC 1170",
      "type": "Elective",
      "course_name": "Java for Programmers",
      "description": "Intensive introduction to Java for students who have completed a programming course in another language. The facilities of the Java programming language core and the key Java class libraries. Imperative and procedural programming in Java. Elementary object-oriented programming. File processing, exception handling, and an introduction to graphical user interface programming. (Not open to students who are enrolled in or have completed Computer and Information Science 1115, or 3115, or both of 1113 and 1114.)",
      "prerequisites": [
        "An introductory programming course in a language other than Java and permission of the chairperson"
      ],
      "credits": 2
    },
    {
      "course_code": "CISC 1215",
      "type": "Elective",
      "course_name": "Intro to Programming in Python",
      "description": "The Python programming language. Algorithms, computers and programs. Writing, debugging, and testing programs. Loops and conditional control structures. Function definition and parameter passing. Strings, Lists, and Tuples. Sorting, searching and other basic algorithms. Input and output. Programming applications selected from various areas. Python tools. History and basic concepts of computer science.",
      "prerequisites": ["None"],
      "credits": 3
    },
    {
      "course_code": "CISC 1400",
      "type": "Elective",
      "course_name": "Elementary Robotics",
      "description": "Broad introduction to robotics and elementary robot programming. Fundamentals of building, programming and troubleshooting simple, pre-fabricated robots. Elements of computer programming using a graphical interface. Applications of robots in a wide range of contexts.",
      "prerequisites": ["Mathematics 1311 or permission of the chairperson"],
      "credits": 3
    },
    {
      "course_code": "CISC 1410",
      "type": "Elective",
      "course_name": "Philosophy & Artificial Intelligence",
      "description": "Contemporary issues in philosophy and psychology, such as the mind-machine analogy, the artificial intelligence model of the human mind, intentionality, representation, consciousness, concept formation, free will, behaviorism, mechanism. Discussion and evaluation of contemporary work in the field. This course is the same as Philosophy 3423 and Psychology 3580.",
      "prerequisites": [
        "a course in CISC, and a course in philosophy; or permission of the chairperson of the offering department"
      ],
      "credits": 3
    },
    {
      "course_code": "CISC 1530",
      "type": "Elective",
      "course_name": "Electronic Commerce",
      "description": "How the Internet can be used to conduct business. Topics covered include: Internet hardware and software, tools and technologies for creating a Web site, characteristics of successful Web sites, new technologies, the future of the Internet, Web communication strategies, security issues, legal and ethical issues, Internet information services, data mining, global E-commerce. Case studies of successful E-commerce businesses will be examined. This course is the same as Business 3120.",
      "prerequisites": ["CISC 1050 or CISC 1115"],
      "credits": 3
    },
    {
      "course_code": "CISC 1580W",
      "type": "Elective",
      "course_name": "Computer Management Games",
      "description": "Simulation of a business environment providing practice in various management functions such as objective setting, planning, supervising, organizing, controlling, problem solving, and leadership. Emphasis on presentation and communication skills and presenting results and their justification. Includes games involving competition in the marketplace and use of knowledge-based management software for the business executive. The desired course objectives are enhanced negotiating skills, improved personnel observations, and optimized managerial behaviors. Writing-intensive course. (Not open to students who have completed Business 4202W or Economics [80.3].) This course is the same as Business Management 4202W.",
      "prerequisites": [
        "One of the following combinations: Business 3400, Psychology 3400, Mathematics 2501, or Mathematics 3501; Business 3430 or CISC 2531; Business 3200; CISC 1050, 1115, 1170. Additional requirement: Senior standing."
      ],
      "credits": 3
    },
    {
      "course_code": "CISC 1590",
      "type": "Elective",
      "course_name": "Management Information Systems",
      "description": "Management information systems as a business resource for achieving competitive advantage. The major IT applications used in business and how they enable competitiveness. The central role that relational databases and data warehouses play in the business world. How IT has enabled and accelerated the growth of e-commerce. The role of decision support systems and artificial intelligence in business. Overview and impact of IT infrastructure design. System Development Lifecycle, project management, outsourcing, offshoring and its impact on the US economy. Information security, intellectual property rights, copyright and patent law on a national and international level. New trends in technology and their potential impact on industry. Case studies and team project are required. This course is the same as Business 3420. (Not open to students who have completed Business 3420 [31.3].)",
      "prerequisites": ["CISC 1050; or permission of the chairperson"],
      "credits": 3
    },
    {
      "course_code": "CISC 1597",
      "type": "Elective",
      "course_name": "New Media and Business",
      "description": "The history, theory, and practice of new media in today's networked society and how this affects the profit and not-for-profit sectors; the implications of the convergence of technology and convergence of disciplines; Internet marketing; and the societal implications of the new connectedness. The latest research on the impact of second generation web-based media such as social networking, blogs, wikis, and virtual communities will be examined. This course will focus on how the new media is being used and/or should be used by the corporate world. This course is the same as Television, Radio and Emerging Media 3537 and Business 3110.",
      "prerequisites": ["Sophomore status or permission of the chairperson"],
      "credits": 3
    },
    {
      "course_code": "CISC 1600",
      "type": "Elective",
      "course_name": "Intro to Multimedia Computing",
      "description": "Introduction to multimedia topics, including: web design, game design, animation, data visualization, simulation and robotics. Introduction to multimedia hardware and software, including game boxes. Human interface design and input using multimedia devices. Graphical and other forms of output to multimedia devices. Emphasis on design and creation of web pages with HTML and cascading style sheets; interactive, graphical web-based programs; simple computer games, movies and narratives. Computer-based sound editing. Introduction to agent-based programming for simulations and robotics. Uses of multimedia in industry. Hands-on exercises.",
      "prerequisites": ["None"],
      "credits": 3
    },
    {
      "course_code": "CISC 2531",
      "type": "Elective",
      "course_name": "Operations Management",
      "description": "Study in managerial decision making to solve a wide range of operating management problems. Topics covered include: planning, evaluation and control of operations; forecasting and inventory management; scheduling; project design and management; resource allocation; queuing models; quality of the work environment; and technological change. Design and implementation of management strategy will be emphasized through computer simulation, problems, and cases. This course is the same as Business 3430. Not open to students who have enrolled in or have completed Mathematics 3606.",
      "prerequisites": [
        "CISC 1050, or 1115, or 1170; CISC 2210, or Business 3400, or Psychology 3400, or Economics 3400, or Mathematics 2501, or Mathematics 3501"
      ],
      "credits": 3
    },
    {
      "course_code": "CISC 2590",
      "type": "Elective",
      "course_name": "Foundation Business Analysis",
      "description": "Introduction to business analytics; kinds of analytics: descriptive/prescriptive/predictive; data mining and big data; data visualization; dashboards for organizational performance management; data warehouses and data marts; text and web mining; business issues in analytics. Cases, articles, projects and hands-on analytics software use. This course is the same as Business 3421.",
      "prerequisites": [
        "Business 3400, Economics 3400, Mathematics 1501, Psychology 3400, or an equivalent statistics course with a grade of C or better; and CISC 1050 or proficiency with spreadsheets"
      ],
      "credits": 3
    },
    {
      "course_code": "CISC 2600",
      "type": "Elective",
      "course_name": "Music Computing",
      "description": "Introduction to how computers can be used for a range of artistic, scientific, and technological musical applications. This course has a particular focus on the creation and control of digital sound through digital signal processing, sound analysis, and sound synthesis. Applications of these techniques to composition, sound design, new musical instruments, and games will be explored. This course is the same as Music 3264.",
      "prerequisites": ["Music 3260"],
      "credits": 3
    },
    {
      "course_code": "CISC 3160",
      "type": "Elective",
      "course_name": "Programming Languages",
      "description": "The design, implementation, and evolution of programming languages. Language features and their effects upon translation and run-time environments. Languages studied are chosen for their historical and current significance, programming paradigm, and run-time environment. Syntax and semantic specification; formal grammars.",
      "prerequisites": ["CISC 3142"],
      "credits": 4
    },
    {
      "course_code": "CISC 3171",
      "type": "Elective",
      "course_name": "Introduction to Software Engineering",
      "description": "A broad view of software engineering that introduces a variety of software engineering techniques that can be applied to practical software projects. Topics include: process models, software specification, software design, software development methods and tools, verification and validation, reliability, and human factors.",
      "prerequisites": ["CISC 3130"],
      "credits": 3
    },
    {
      "course_code": "CISC 3225",
      "type": "Elective",
      "course_name": "Data Tools and Algorithms",
      "description": "Tools for effective programming in Python. Data acquisition, munging, and visualization. Major categories of data algorithms including ranking algorithms, tree algorithms, network algorithms and clustering algorithms. Visualization of data. Introduction to important methods of artificial intelligence including machine learning and neural networks to reach logical conclusions from data aggregations.",
      "prerequisites": ["CISC 1215; CISC 2210 or Mathematics 2001"],
      "credits": 3
    },
    {
      "course_code": "CISC 3230",
      "type": "Elective",
      "course_name": "Theoretical Computer Science",
      "description": "Overview of theoretical computer science. Formal language theory, computability theory. Finite automata, context-free and regular grammars, push-down automata, and Turing machines. Other models of computation, including recursive functions. Universal program and unsolvability.",
      "prerequisites": ["CISC 2210 and CISC 3130 and MATH 1201"],
      "credits": 3
    },
    {
      "course_code": "CISC 3325",
      "type": "Elective",
      "course_name": "Information Security",
      "description": "Principles and practices of computer and network security. Fundamental concepts and principles of computer security, basic cryptography, authentication and access control, Internet vulnerability (malware, DoS attacks, etc), intrusion detection systems, firewalls, software and operating system security, database security, web and wireless security, managerial and ethical issues in computer security. Lab and project activities such as the use of network probing for illustrative and diagnostic purposes; security tool choice, deployment and configuration; secure programming techniques.",
      "prerequisites": ["CISC 3320"],
      "credits": 3
    },
    {
      "course_code": "CISC 3340",
      "type": "Elective",
      "course_name": "Computer Networks and Protocols",
      "description": "Computer networks and protocols. Network topologies and switching mechanisms. Protocol concepts and characteristics. Network protocol architectures. Physical layer concepts. Data link layer functions and protocols. Network layer concepts. Network access protocols. Local area networks and protocols. Internetworking. Transport layer functions and protocols. Upper layer issues and approaches. Application program interfaces. Network examples.",
      "prerequisites": ["CISC 3130; CISC 3310; and MATH 2501"],
      "credits": 3
    },
    {
      "course_code": "CISC 3350",
      "type": "Elective",
      "course_name": "Workstation Programming",
      "description": "Programming techniques for development of applications on networks of workstations. Process environments, file system issues. Concurrent programming, interprocess communication. Graphical user interfaces, event-driven programming. Distributed programming; remote process creation, the client-server model, message passing.",
      "prerequisites": ["CISC 3130"],
      "credits": 3
    },
    {
      "course_code": "CISC 3410",
      "type": "Elective",
      "course_name": "Artificial Intelligence",
      "description": "Techniques for making computers exhibit intelligent behavior. Topics covered are taken from the areas of problem solving, perception, game playing, knowledge representation, natural language understanding, programs that learn (adaptive programs), expert systems, and programming languages for work in artificial intelligence.",
      "prerequisites": ["CISC 3130"],
      "credits": 3
    },
    {
      "course_code": "CISC 3415",
      "type": "Elective",
      "course_name": "Principles of Robotics",
      "description": "Basic principles of mobile robotics: architectures, mathematical foundations, control algorithms, human robot interaction, and practical applications. Applications include robots in the home, and robots in search and rescue work. Involves programming different kinds of robots.",
      "prerequisites": ["CISC 3130 and 2210"],
      "credits": 3
    },
    {
      "course_code": "CISC 3440",
      "type": "Elective",
      "course_name": "Machine Learning",
      "description": "An introduction to machine learning for students with some mathematical maturity. Topics include: machine learning in relation to artificial intelligence, data sources and characteristics, linear and non-linear regression, machine learning concepts like the bias-variance tradeoff, linear and non-linear classification, hidden Markov models and the expectation-maximization algorithm, unsupervised learning, and deep learning. Examples will be drawn from several domains including natural language processing.",
      "prerequisites": ["CISC 3130 or 3225; MATH 2501 or 3501 or CISC 2210."],
      "credits": 3
    },
    {
      "course_code": "CISC 3610",
      "type": "Elective",
      "course_name": "Introduction to Multimedia Computing",
      "description": "In-depth study of multimedia programming. Multimedia authoring tools. Graphical user interface design. Multimedia project development. Effective use of media elements in a computer application and on the World Wide Web.",
      "prerequisites": ["CISC 3115"],
      "credits": 3
    },
    {
      "course_code": "CISC 3620",
      "type": "Elective",
      "course_name": "Computer Graphics",
      "description": "Fundamentals of computer graphics programming. Graphics hardware and software standards. 2D geometric primitives and raster images. 3D object representations. Data structures, algorithms, and the graphics pipeline. Graphical user interfaces. Underlying concepts in computer graphics systems, including games, animation, modeling, rendering, and paint systems.",
      "prerequisites": [
        "CISC 3130; and MATH 1011 or 1012 or 1026 or assignment to MATH *1201 by the Department of Mathematics"
      ],
      "credits": 3
    },
    {
      "course_code": "CISC 3630",
      "type": "Elective",
      "course_name": "Multimedia Computing",
      "description": "A survey of the interrelationship of state-of-the-art communication and computer technology. Hardware, software, and system design issues in the multimedia presentation of information. Multimedia standards. Audio and video compression techniques. Hypermedia database systems. Programming and the use of multimedia authoring systems. Survey of representative hypermedia applications.",
      "prerequisites": ["CISC 3130"],
      "credits": 3
    },
    {
      "course_code": "CISC 3650",
      "type": "Elective",
      "course_name": "Human-Computer Interaction",
      "description": "Overview of human-computer interfaces with an emphasis on classical and state-of-the-art approaches. Principles of human-computer interaction and human-robot interaction. Ubiquitous computing and interfaces for mobile devices. Interfaces employing speech recognition and computer vision. Sensor and robotic technologies. Computer supported cooperative work. Virtual and augmented realities.",
      "prerequisites": ["CISC 3115"],
      "credits": 3
    },
    {
      "course_code": "CISC 3667",
      "type": "Elective",
      "course_name": "Game Design and Development",
      "description": "An introduction to game design and programming. Topics include analysis of existing games, game mechanics, social games. Game development using a game engine, including the use of assets and prefabs, movement, animations, audio and data persistence. Multi-week individual and small group assignments in game design and development. (Not open to students who have taken CISC 3660 or CISC 3665.)",
      "prerequisites": ["CISC 3130"],
      "credits": 4
    },
    {
      "course_code": "CISC 3810",
      "type": "Elective",
      "course_name": "Database Systems",
      "description": "Introduction to database systems. Comparison to file processing systems. Data models. Relational, hierarchical, and network systems. Database design. Normal forms. Study of several real-world database management systems, with an emphasis on microcomputer applications. Database recovery query and transaction processing, concurrency. Distributed and object-oriented databases.",
      "prerequisites": ["CISC 3130"],
      "credits": 3
    },
    {
      "course_code": "CISC 4331",
      "type": "Elective",
      "course_name": "System and Network Administration",
      "description": "Installation, configuration, and maintenance of an operating system. Configuration of routers, networks, and sub-networks. Installation, configuration, and maintenance of network utilities such as email, web server, and other services. Use of network diagnostic tools. Identification and repair of network and configuration problems.",
      "prerequisites": ["CISC 3350 or permission of the chairperson."],
      "credits": 3
    },
    {
      "course_code": "CISC 4610",
      "type": "Elective",
      "course_name": "Multimedia Database",
      "description": "Multimedia data types and formats. Multimedia computer database design issues. Indexing and automated retrieval of text documents, audio files, images and video. Techniques and data structures for efficient multimedia similarity search. System support for distributed multimedia databases. Measurement of multimedia information retrieval effectiveness. Products, applications, and new developments.",
      "prerequisites": ["CISC 3810, 3635 or 3630"],
      "credits": 3
    },
    {
      "course_code": "CISC 4800",
      "type": "Elective",
      "course_name": "Special Topics in Computer Science",
      "description": "This course covers advanced and specialized topics in computer science that are of current interest to faculty and students but not fully explored in regular course offerings. Course description can be obtained from the department office prior to registration",
      "prerequisites": ["CISC 3130; and permission of the chairperson."],
      "credits": 3
    },
    {
      "course_code": "CISC 1115",
      "type": "Required",
      "course_name": "Introduction to Programming Using Java",
      "description": "Algorithms, computers and programs. Writing, debugging, and testing programs. Loops and conditional control structures. Method definition and parameter passing. Arrays, ArrayLists, and Strings. Sorting, searching and other basic algorithms. Input and output. Programming applications selected from various disciplines. History and basic concepts of computer science.",
      "prerequisites": ["None"],
      "credits": 4
    },
    {
      "course_code": "CISC 3115",
      "type": "Required",
      "course_name": "Introduction to Modern Programming Techniques",
      "description": "A second course in programming. Programming techniques emphasizing reliability, maintainability, and reusability. Multi-file programs. Abstract data types. Objects, classes, and object-oriented design. Test suites, test drivers, and testing strategies; debugging, assertions, and an introduction to formal techniques. Recursion, event-driven programming and threads, GUI programming, and simple network programming.",
      "prerequisites": ["CISC 1115 or 1170"],
      "credits": 4
    },
    {
      "course_code": "CISC 2210",
      "type": "Required",
      "course_name": "Introduction to Discrete Structures (Discrete Mathematics)",
      "description": "Elementary set theory, functions, relations, and Boolean algebra. Switching circuits, gating networks. Definition and analysis of algorithms. Applications of graph theory to computer science. Related algorithms. Introduction to combinatorial computing and counting arguments. Introduction to error analysis.",
      "prerequisites": ["CISC 1115 or 1170 or 1215; and MATH 1101 or 1012"],
      "credits": 3
    },
    {
      "course_code": "CISC 3130",
      "type": "Required",
      "course_name": "Data Structures",
      "description": "Container classes: their design, implementations, and applications. Sequences: vectors, linked lists, stacks, queues, deques, lists. Associative structures: sets, maps and their hash and tree underlying representations. Sorting and searching techniques. Collection frameworks and hierarchies.",
      "prerequisites": ["CISC 3115; and either 1115 or 1170"],
      "credits": 4
    },
    {
      "course_code": "CISC 3310",
      "type": "Required",
      "course_name": "Principles of Computer Architecture",
      "description": "Introduction to digital logic. Basic digital circuits. Boolean algebra and combinational logic, data representation and transfer, digital arithmetic. Instruction sets. Introduction to assembly languages: ALU and memory reference instructions, flow control, subroutine linkage, arrays and structures. Memory. I/O systems. Performance. Relationship between software and architecture.",
      "prerequisites": ["CISC 1115 or 1170; and CISC 2210"],
      "credits": 4
    },
    {
      "course_code": "CISC 2820W",
      "type": "Required",
      "course_name": "Computers and Ethics",
      "description": "Analysis of ethical issues pertaining to computers and the workplace, anonymity and privacy, copyright and patent law (as applied to software), computer crime, security, unauthorized use, codes of conduct for computer professionals, access and availability of computing technologies. Application of theoretical frameworks such as virtue ethics, deontological theories and utilitarianism to the ethical problems encountered in computing technologies. Writing intensive course. (This course is the same as Philosophy 3318W.)",
      "prerequisites": ["CISC 1115 or 1170; and English 1012"],
      "credits": 3
    },
    {
      "course_code": "CISC 3142",
      "type": "Required",
      "course_name": "Programming Paradigms in C++",
      "description": "An introduction to C++ and its roles providing support for object-oriented programming, generic programming, procedural programming, and low-level programming. The C++ memory model, and topics in explicit memory management. Storage classes, scope, and compilation stages. The Standard Template Library. Comparison with Java.",
      "prerequisites": ["CISC 1115 or 1170; and both CISC 3115 and 3130"],
      "credits": 3
    },
    {
      "course_code": "CISC 3320",
      "type": "Required",
      "course_name": "Operating Systems",
      "description": "Design and implementation of operating systems for large computers. Multiprogramming, multiprocessing, time sharing. Resource allocation and scheduling. Communications, conversational computing, computer networks. Memory protection, interrupts, segmentation, paging, and virtual memories.",
      "prerequisites": ["CISC 3130, and CISC 3310"],
      "credits": 3
    },
    {
      "course_code": "CISC 3220",
      "type": "Required",
      "course_name": "Analysis of Algorithms",
      "description": "Algorithms, data structures, and their analysis. Applications for and solution to recurrence problems. Upper and lower bounds on complexities of various problems. Classification by design structures. Sorting methods, graph and selection algorithms. Pattern matching. Efficient computation of transitive closure and equivalences. NP-completeness.",
      "prerequisites": ["CISC 2210 and CISC 3130 and MATH 1201"],
      "credits": 3
    },
    {
      "course_code": "CISC 3140",
      "type": "Required",
      "course_name": "Design and Implementation of Large-Scale Web Applications",
      "description": "Overview of design and implementation of large-scale application concerns. Team-based software development methodologies, tools, and high-impact practice. Separation of structure, style, and behavior. Interpreted and/or declarative languages, dynamic types, functional programming, prototypal classes, and closures. Networked machine communication. Simple database operations.",
      "prerequisites": ["CISC 3115 and CISC 3130"],
      "credits": 3
    },
    {
      "course_code": "CISC 4900",
      "type": "Required",
      "course_name": "Independent and Group Projects I",
      "description": "Planning and development of a real computer systems project supervised by a faculty member. Projects may involve group participation. Achievement measured by demonstrable attainment of the project's goals. Written report.",
      "prerequisites": [
        "CISC 3130 and a CISC course numbered above 3130; and permission of the chairperson."
      ],
      "credits": 3
    }
  ]
};

// Filter for upper-level CS electives: CISC 3xxx-4xxx, not core requireds, not 4900+ (project/independent study)
const coreRequired = [3115, 3130, 3140, 3142, 3220, 3310, 3320, 4900];
const filteredCourses = courseData.courses.filter(course => {
  // Only CISC courses with a 4-digit code
  const match = course.course_code.match(/^CISC\s?(\d{4})$/);
  if (!match) return false;
  const courseNumber = parseInt(match[1]);
  // 3000-4899, not in coreRequired
  return courseNumber >= 3000 && courseNumber < 4900 && !coreRequired.includes(courseNumber);
});

// Map the filtered courses into the structure needed by the Disclosure component.
const items = filteredCourses.map(course => {
  // Extract just the 4-digit course number
  const match = course.course_code.match(/(\d{4})$/);
  const courseNumOnly = match ? match[1] : course.course_code.replace(/\D/g, '');
  return {
    title: `${course.course_code} - ${course.course_name}`,
    content: course.description,
    link: `https://websql.brooklyn.cuny.edu/courses/ShowCourse.do?dsc=CISC.&crs_num=${courseNumOnly}&div=U`
  };
});

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Advanced CIS Courses
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {items.map((item) => (
            <Disclosure key={item.title} as="div" className="pt-6">
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                  <span className="text-base font-semibold leading-7">{item.title}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <BsPlus aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                    <BsDash aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-gray-600">
                    {item.content}
                    <br />
                    <br />
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base leading-7 text-bc-red hover:text-bc-yellow break-words"
                  >
                    View more details on Brooklyn College's website
                  </a>
                )}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}