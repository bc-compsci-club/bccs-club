// Central course catalog
const courseCatalog = {
  "CISC 1115": { name: "Introduction to Programming using Java Programming" },
  "CISC 1170": { name: "Java for Programmers" },
  "CISC 2210": { name: "Introduction to Discrete Structures" },
  "CISC 3115": { name: "Introduction to Modern Programming Techniques" },
  "CISC 3130": { name: "Data Structures" },
  "CISC 3140": { name: "Design and Implementation of Large-Scale Web Applications" },
  "CISC 3220": { name: "Analysis of Algorithms" },
  "CISC 3310": { name: "Computer Architecture" },
  "CIS 3171": { name: "Introduction to Software Testing" },
  "CISC 3142": { name: "Programming Paradigms in C++" },
  "CISC 3320": { name: "Operating Systems" },
  "CISC 3230": { name: "Theoretical Computer Science" },
  "MAT 1201": { name: "Calculus I" },
  "MAT 1206": { name: "Calculus II" },
  "CIS 1215": { name: "Intro to Python" },
  "MAT 2501": { name: "Elementary Probability and Statistics" },
  "MAT 3501": { name: "Probability and Statistics 1" },
  "MAT 2101": { name: "Linear Algebra" },
  "CIS 3410": { name: "Artificial Intelligence" },
  "CIS 3440": { name: "Machine Learning" },
  "CIS 3610": { name: "Introduction to Multimedia Programming" },
  "CIS 3620": { name: "Computer Graphics" },
  "CIS 3630": { name: "Multimedia Computing" },
  "CIS 3650": { name: "Human-Computer Interaction" },
  "CIS 3667": { name: "Design and Game Development" },
  "CIS 3810": { name: "Database Systems" },
  "CISC 4900": { name: "Independent and Group Projects I" },
  // ...add more as needed
}; // <-- Close the courseCatalog object

export const courseResources = {
  courseCatalog,
  csMajorCore: [
    "CISC 1115", "CISC 2210", "CISC 3115", "CISC 3130", "CISC 3140", "CISC 3142", "CISC 3220", "CISC 3230", "CISC 3310", "CISC 3320", "CISC 4900"
  ],
  csMajorRequirements: {
    prerequisites: ["MAT 1201", "MAT 1206", "CISC 1115", "CISC 2210"],
    core: ["CISC 3130", "CISC 3220", "CISC 3230", "CISC 3310", "CISC 3140", "CISC 3142", "CISC 3320"],
    electives: ["See electives list below"]
  },
  dataScienceMinor: {
    core: ["MATH 1201", "MATH 1206", "CISC 1215", "MATH 2501", "MATH 3501", "MATH 2101", "MATH 4531", "CISC 3225", "CISC 3440"],
    electives: ["CIS 3410", "CIS 3610", "CIS 3620", "CIS 3630", "CIS 3650", "CIS 3667"]
  },
  recommendedElectives: ["CIS 3410", "CIS 3440", "CIS 3610", "CIS 3620", "CIS 3630", "CIS 3650", "CIS 3667", "CIS 3810"],
  csFourYearDegreeMap: {
    degree: "Computer Science, B.S.",
    bulletinYear: "2025-2026",
    totalCredits: 120,
    pathwaysCredits: 42,
    majorCredits: 56,
    generalElectiveCredits: 22,
    notes: [
      "The four-year degree map is designed to help you take the right courses in the right order so you can graduate in four years.",
      "Candidates for a B.S. degree with a major in Computer Science must complete at least 60 credits in science and mathematics; 24 of these 60 credits must be completed in advanced courses numbered 2000 and above in the Department of Computer and Information Science. These 24 credits must be completed at Brooklyn College with a grade of C or higher in each course.",
      "Review your academic plan with your advisor regularly and consult the prerequisite flowchart and Degree Works for up-to-date requirements."
    ],
    contact: {
      department: "Department of Computer and Information Science",
      location: "2109 Ingersoll Hall",
      dayAdvisor: { name: "Ira Rudowsky", email: "rudowsky@brooklyn.cuny.edu" },
      eveningAdvisor: { name: "Joseph Thurm", email: "thurm@sci.brooklyn.cuny.edu" }
    },
    years: [
      {
        year: 1,
        fall: [
          "ENGL 1010: English Composition I (3)",
          "MATH 1011: Precalculus Mathematics (3)",
          "U.S. Experience in Its Diversity (3)",
          "CISC 1115 or CISC 1170 Introduction to Programming Using Java (4)",
          "General Elective (3)"
        ],
        spring: [
          "ENGL 1012: English Composition II (3)",
          "Life & Physical Sciences (3)",
          "World Cultures & Global Issues (3)",
          "CISC 3115: Introduction to Modern Programming Techniques (4)",
          "MATH 1201: Calculus I (4)"
        ]
      },
      {
        year: 2,
        fall: [
          "Individual & Society (3)",
          "Creative Expression (3)",
          "CISC 2210: Introduction to Discrete Structures (3)",
          "CISC 3130: Data Structures (4)",
          "MATH 1206: Calculus II (4)"
        ],
        spring: [
          "Scientific World (3)",
          "Creative Expression (3)",
          "CISC 3310: Principles of Computer Architecture (3)",
          "MATH 2501: Elementary Probability and Statistics (3)",
          "General Elective (3)"
        ]
      },
      {
        year: 3,
        fall: [
          "College Option (3)",
          "College Option (3)",
          "CISC 2820W or PHIL 3318W Computers and Ethics (3)",
          "CISC 3142 Programming Paradigms in C++ (3)",
          "CISC 3220 or CISC 3230 (3)"
        ],
        spring: [
          "College Option (3)",
          "College Option (3)",
          "CISC 3320: Operating Systems (3)",
          "Advanced CISC course 3000–4899 (3)",
          "General Elective (3)"
        ]
      },
      {
        year: 4,
        fall: [
          "CISC 3140: Design and Implementation of Large-Scale Web Applications (3)",
          "Advanced CISC course 3000–4899 (3)",
          "General Elective (3)",
          "General Elective (3)"
        ],
        spring: [
          "CISC 4900 or CISC 5001 Independent Study (3)",
          "Advanced CISC course 3000–4899 (3)",
          "General Elective (3)",
          "General Elective (3)",
          "General Elective (1)"
        ]
      }
    ]
  },
  dataScienceMinorRequirements: {
    credits: "18–19 Credits",
    required: [
      "Computer and Information Science 3225",
      "Computer and Information Science 3440",
      "Mathematics 4531",
      "Either Mathematics 2001 and Mathematics 3501, or Computer and Information Science 2210 and Mathematics 2501"
    ],
    elective: "One additional course, chosen from: Business Management 2200 or 4400W; Computer and Information Science 1410 or 3130; Finance 3377; Economics 2200, 3370, 4422, or 4400W; Mathematics 3601, 4101, or 4501; Philosophy 3203, 3204, or 3423; Political Science 3014W, 3421, or 3423; Psychology 3510, 3520, 3530, 3580, or 4400; Sociology 3506 or 3604.",
    prerequisites: [
      "Mathematics 1201",
      "Mathematics 1206",
      "Mathematics 2101",
      "Computer and Information Science 1215"
    ],
    notes: [
      "Courses presented for the major in computer and information science may also be used to satisfy the minor in data science.",
      "A minor in CIS requires completing 12 credits from among courses numbered between 2000 and 4899 with a grade C or better."
    ]
  }
};
