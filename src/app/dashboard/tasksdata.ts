export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
  customer: string;
  assignee: string;
  tags: string[];
  comments: string[];
  attachments: string[];
  subtasks: string[];
  labels: string[];
  progress: number;
  events: string[];
};

export const data: Task[] = [
  {
    id: "TASK0001",
    title: "SBM Project Test on Linux Environment",
    description: "SBM Project Test on Linux Environment",
    status: "In Progress",
    priority: "High",
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
    dueDate: "2022-01-01T00:00:00.000Z",
    customer: "SBM",
    assignee: "Ritik",
    tags: ["Tag 1", "Tag 2"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label1", "label2"],
    progress: 0,
    events: [],
  },
  {
    id: "TASK0002",
    title: "Database Migration for CRM System",
    description:
      "Perform database migration for the CRM system to enhance performance.",
    status: "Pending",
    priority: "Medium",
    createdAt: "2022-02-05T08:00:00.000Z",
    updatedAt: "2022-02-10T12:30:00.000Z",
    dueDate: "2022-03-01T00:00:00.000Z",
    customer: "ABC Corp",
    assignee: "Alex",
    tags: ["Database", "Migration"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label3", "label4"],
    progress: 20,
    events: [],
  },
  {
    id: "TASK0003",
    title: "Website Redesign",
    description:
      "Redesign the company website to improve aesthetics and user experience.",
    status: "To Do",
    priority: "High",
    createdAt: "2022-02-15T09:30:00.000Z",
    updatedAt: "2022-02-18T14:45:00.000Z",
    dueDate: "2022-03-15T00:00:00.000Z",
    customer: "XYZ Ltd",
    assignee: "Emily",
    tags: ["Website", "Redesign"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label5", "label6"],
    progress: 0,
    events: [],
  },
  {
    id: "TASK0004",
    title: "Security Audit for Finance System",
    description:
      "Conduct a security audit for the finance system to identify vulnerabilities.",
    status: "In Progress",
    priority: "Critical",
    createdAt: "2022-03-01T14:00:00.000Z",
    updatedAt: "2022-03-05T16:30:00.000Z",
    dueDate: "2022-04-01T00:00:00.000Z",
    customer: "FinanceCorp",
    assignee: "Michael",
    tags: ["Security", "Audit"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label7", "label8"],
    progress: 40,
    events: [],
  },
  {
    id: "TASK0005",
    title: "Monthly Report Generation",
    description:
      "Generate and analyze monthly reports for key performance indicators.",
    status: "Completed",
    priority: "Medium",
    createdAt: "2022-03-10T12:00:00.000Z",
    updatedAt: "2022-03-15T09:00:00.000Z",
    dueDate: "2022-04-01T00:00:00.000Z",
    customer: "Operations Inc.",
    assignee: "Jessica",
    tags: ["Reports", "Analysis"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label9", "label10"],
    progress: 100,
    events: [],
  },
  {
    id: "TASK0006",
    title: "Employee Training Program",
    description: "Develop a comprehensive training program for new employees.",
    status: "To Do",
    priority: "High",
    createdAt: "2022-03-15T10:00:00.000Z",
    updatedAt: "2022-03-15T10:00:00.000Z",
    dueDate: "2022-04-01T00:00:00.000Z",
    customer: "HR Solutions",
    assignee: "Chris",
    tags: ["Training", "Onboarding"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label11", "label12"],
    progress: 0,
    events: [],
  },
  {
    id: "TASK0007",
    title: "Product Launch Marketing Campaign",
    description:
      "Plan and execute a marketing campaign for the upcoming product launch.",
    status: "Pending",
    priority: "High",
    createdAt: "2022-04-01T09:30:00.000Z",
    updatedAt: "2022-04-05T14:45:00.000Z",
    dueDate: "2022-05-01T00:00:00.000Z",
    customer: "Tech Innovations",
    assignee: "Sophie",
    tags: ["Marketing", "Product Launch"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label13", "label14"],
    progress: 10,
    events: [],
  },
  {
    id: "TASK0008",
    title: "Customer Support Ticket Resolution",
    description:
      "Resolve customer support tickets and ensure customer satisfaction.",
    status: "In Progress",
    priority: "High",
    createdAt: "2022-04-10T12:00:00.000Z",
    updatedAt: "2022-04-15T09:00:00.000Z",
    dueDate: "2022-05-01T00:00:00.000Z",
    customer: "CustomerCare Inc.",
    assignee: "Daniel",
    tags: ["Customer Support", "Resolution"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label15", "label16"],
    progress: 60,
    events: [],
  },
  {
    id: "TASK0009",
    title: "Network Infrastructure Upgrade",
    description:
      "Upgrade the company's network infrastructure to improve performance and security.",
    status: "To Do",
    priority: "Medium",
    createdAt: "2022-04-15T10:00:00.000Z",
    updatedAt: "2022-04-15T10:00:00.000Z",
    dueDate: "2022-05-01T00:00:00.000Z",
    customer: "IT Solutions",
    assignee: "George",
    tags: ["Network", "Infrastructure"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label17", "label18"],
    progress: 0,
    events: [],
  },
  {
    id: "TASK0010",
    title: "Social Media Content Calendar",
    description:
      "Create a content calendar for social media platforms to maintain an active online presence.",
    status: "Pending",
    priority: "Medium",
    createdAt: "2022-05-01T09:30:00.000Z",
    updatedAt: "2022-05-05T14:45:00.000Z",
    dueDate: "2022-06-01T00:00:00.000Z",
    customer: "MarketingPro",
    assignee: "Olivia",
    tags: ["Social Media", "Content"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label19", "label20"],
    progress: 5,
    events: [],
  },
  {
    id: "TASK0011",
    title: "Quality Assurance Testing for E-commerce Platform",
    description:
      "Conduct quality assurance testing for the e-commerce platform to ensure a bug-free experience.",
    status: "In Progress",
    priority: "High",
    createdAt: "2022-05-10T12:00:00.000Z",
    updatedAt: "2022-05-15T09:00:00.000Z",
    dueDate: "2022-06-01T00:00:00.000Z",
    customer: "E-Commerce Solutions",
    assignee: "Nathan",
    tags: ["Quality Assurance", "E-commerce"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label21", "label22"],
    progress: 30,
    events: [],
  },
  {
    id: "TASK0012",
    title: "Event Planning for Annual Conference",
    description:
      "Plan and coordinate logistics for the upcoming annual conference.",
    status: "To Do",
    priority: "High",
    createdAt: "2022-05-15T10:00:00.000Z",
    updatedAt: "2022-05-15T10:00:00.000Z",
    dueDate: "2022-06-01T00:00:00.000Z",
    customer: "EventMania",
    assignee: "Sophia",
    tags: ["Event Planning", "Conference"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label23", "label24"],
    progress: 0,
    events: [],
  },
  {
    id: "TASK0013",
    title: "Software Update and Patch Management",
    description:
      "Manage software updates and patches to ensure systems are up to date and secure.",
    status: "Pending",
    priority: "Medium",
    createdAt: "2022-06-01T09:30:00.000Z",
    updatedAt: "2022-06-05T14:45:00.000Z",
    dueDate: "2022-07-01T00:00:00.000Z",
    customer: "Tech Solutions",
    assignee: "Liam",
    tags: ["Software", "Updates"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label25", "label26"],
    progress: 15,
    events: [],
  },
  {
    id: "TASK0014",
    title: "Employee Performance Review",
    description:
      "Conduct performance reviews for all employees and provide feedback.",
    status: "In Progress",
    priority: "High",
    createdAt: "2022-06-10T12:00:00.000Z",
    updatedAt: "2022-06-15T09:00:00.000Z",
    dueDate: "2022-07-01T00:00:00.000Z",
    customer: "HR Management",
    assignee: "Ava",
    tags: ["Performance", "Review"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label27", "label28"],
    progress: 50,
    events: [],
  },
  {
    id: "TASK0015",
    title: "Data Backup and Disaster Recovery Testing",
    description:
      "Perform testing for data backup and disaster recovery processes to ensure readiness.",
    status: "To Do",
    priority: "Medium",
    createdAt: "2022-06-15T10:00:00.000Z",
    updatedAt: "2022-06-15T10:00:00.000Z",
    dueDate: "2022-07-01T00:00:00.000Z",
    customer: "IT Security",
    assignee: "Mia",
    tags: ["Backup", "Testing"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label29", "label30"],
    progress: 0,
    events: [],
  },
  {
    id: "TASK0016",
    title: "Content Creation for Blog",
    description:
      "Create engaging and informative content for the company blog.",
    status: "Pending",
    priority: "Medium",
    createdAt: "2022-07-01T09:30:00.000Z",
    updatedAt: "2022-07-05T14:45:00.000Z",
    dueDate: "2022-08-01T00:00:00.000Z",
    customer: "ContentCreators",
    assignee: "Ethan",
    tags: ["Content", "Blog"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label31", "label32"],
    progress: 10,
    events: [],
  },
  {
    id: "TASK0017",
    title: "Inventory Management System Implementation",
    description:
      "Implement a new inventory management system for efficient tracking and control.",
    status: "In Progress",
    priority: "High",
    createdAt: "2022-07-10T12:00:00.000Z",
    updatedAt: "2022-07-15T09:00:00.000Z",
    dueDate: "2022-08-01T00:00:00.000Z",
    customer: "Retail Solutions",
    assignee: "Logan",
    tags: ["Inventory", "System"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label33", "label34"],
    progress: 40,
    events: [],
  },
  {
    id: "TASK0018",
    title: "Training Session for Sales Team",
    description:
      "Conduct a training session for the sales team to enhance product knowledge and selling skills.",
    status: "To Do",
    priority: "High",
    createdAt: "2022-07-15T10:00:00.000Z",
    updatedAt: "2022-07-15T10:00:00.000Z",
    dueDate: "2022-08-01T00:00:00.000Z",
    customer: "Sales Excellence",
    assignee: "Aiden",
    tags: ["Training", "Sales"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label35", "label36"],
    progress: 0,
    events: [],
  },
  {
    id: "TASK0019",
    title: "Cybersecurity Awareness Training",
    description:
      "Organize a training session to enhance cybersecurity awareness among employees.",
    status: "Pending",
    priority: "Medium",
    createdAt: "2022-08-01T09:30:00.000Z",
    updatedAt: "2022-08-05T14:45:00.000Z",
    dueDate: "2022-09-01T00:00:00.000Z",
    customer: "IT Security",
    assignee: "Lily",
    tags: ["Cybersecurity", "Training"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label37", "label38"],
    progress: 5,
    events: [],
  },
  {
    id: "TASK0020",
    title: "Client Onboarding Process Optimization",
    description:
      "Optimize the client onboarding process to improve efficiency and customer satisfaction.",
    status: "In Progress",
    priority: "High",
    createdAt: "2022-08-10T12:00:00.000Z",
    updatedAt: "2022-08-15T09:00:00.000Z",
    dueDate: "2022-09-01T00:00:00.000Z",
    customer: "Client Solutions",
    assignee: "Jack",
    tags: ["Client", "Onboarding"],
    comments: [],
    attachments: [],
    subtasks: [],
    labels: ["label39", "label40"],
    progress: 20,
    events: [],
  },
];
