const companies = [
  { name: "TCS", domain: "tcs.com" },
  { name: "Infosys", domain: "infosys.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "HCL", domain: "hcltech.com" },
  { name: "Tech Mahindra", domain: "techmahindra.com" },
  { name: "Capgemini", domain: "capgemini.com" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "IBM", domain: "ibm.com" },
  { name: "Samsung", domain: "samsung.com" },
  { name: "Cognizant", domain: "cognizant.com" }
];

const locations = [
  "Noida","Delhi","Gurgaon","Pune","Bangalore",
  "Hyderabad","Mumbai","Chennai"
];

const types = ["Full-time","Remote","Hybrid"];

const titles = [
  "Frontend Developer","Backend Developer","Full Stack Developer",
  "Java Developer","Python Developer","React Developer",
  "Angular Developer","DevOps Engineer","Cloud Engineer",
  "Data Analyst","Data Scientist","AI Engineer",
  "Machine Learning Engineer","Cyber Security Analyst",
  "UI/UX Designer","QA Engineer","Software Tester",
  "Android Developer","iOS Developer","Flutter Developer",
  "Blockchain Developer","SAP Consultant","Business Analyst",
  "Product Manager","Network Engineer","Database Administrator",
  "System Administrator","Technical Lead","Golang Developer",
  "PHP Developer","WordPress Developer","Ruby Developer",
  "ETL Developer","RPA Developer","Power BI Developer",
  "Game Developer","AR/VR Developer","Big Data Engineer",
  "Embedded Engineer","Salesforce Developer","Cloud Architect",
  "IT Support Engineer","Digital Marketing Manager",
  "SEO Specialist","Technical Writer","Content Developer",
  "HR Executive","Automation Engineer","Site Reliability Engineer",
  "Solutions Architect"
];

export const jobs = Array.from({ length: 50 }, (_, i) => {

  const company = companies[i % companies.length];

  return {

    id: i + 1,

    title: titles[i],

    company: company.name,

    logo: `https://logo.clearbit.com/${company.domain}`,

    fallbackLogo:
      `https://ui-avatars.com/api/?name=${company.name}&background=0D6EFD&color=fff`,

    location: locations[i % locations.length],

    salary: `${6 + (i % 15)} LPA`,

    type: types[i % types.length],

    experience: `${1 + (i % 5)} Years`,

    featured: Math.random() > 0.75,

    description:
      `We are hiring ${titles[i]} with strong technical expertise to build scalable applications and modern solutions.`,

    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "REST APIs",
      "Git"
    ],

    qualification: [
      "B.Tech / BCA / MCA",
      "Strong programming fundamentals",
      "Problem solving ability"
    ],

    responsibilities: [
      "Develop scalable applications",
      "Work with cross-functional teams",
      "Write clean and maintainable code"
    ],

    benefits: [
      "Health Insurance",
      "Flexible Working Hours",
      "Work From Home",
      "Paid Leaves"
    ]

  };

});
