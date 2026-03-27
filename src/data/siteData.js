import {
  FaArrowTrendUp,
  FaBrush,
  FaBuilding,
  FaBuildingCircleCheck,
  FaCity,
  FaCompassDrafting,
  FaHammer,
  FaHouse,
  FaLayerGroup,
  FaPeopleGroup,
  FaRulerCombined,
  FaScrewdriverWrench,
  FaShieldHalved,
  FaStar,
  FaStopwatch,
  FaUserTie,
  FaWallet,
} from "react-icons/fa6";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Satisfied Clients" },
];

export const services = [
  {
    icon: FaHammer,
    title: "Construction Contracting",
    description: "Complete turnkey contracting solutions for premium residential and commercial developments.",
  },
  {
    icon: FaArrowTrendUp,
    title: "Real Estate Consulting",
    description: "Strategic investment guidance, site evaluation, feasibility reviews, and property advisory.",
  },
  {
    icon: FaCompassDrafting,
    title: "Building Planning",
    description: "Intelligent master planning, approvals support, and optimized space strategy for growth.",
  },
  {
    icon: FaBrush,
    title: "Interior Designing",
    description: "Sophisticated interior concepts that align aesthetics, utility, and long-term value.",
  },
  {
    icon: FaScrewdriverWrench,
    title: "Renovation Services",
    description: "High-quality renovation and structural upgrades executed with precision and care.",
  },
  {
    icon: FaLayerGroup,
    title: "Turnkey Projects",
    description: "End-to-end delivery covering design, procurement, construction, finishing, and handover.",
  },
  {
    icon: FaBuilding,
    title: "Commercial Construction",
    description: "Corporate offices, retail spaces, and institutional developments built to premium standards.",
  },
  {
    icon: FaHouse,
    title: "Residential Construction",
    description: "Luxury homes, villas, apartments, and gated living spaces designed around client lifestyles.",
  },
];

export const aboutStats = [
  { value: "10+", label: "Years Experience" },
  { value: "150+", label: "Projects" },
  { value: "200+", label: "Clients" },
  { value: "50+", label: "Team Members" },
];

export const processSteps = [
  {
    title: "Consultation",
    description: "We begin by understanding your business goals, site potential, and project vision.",
    icon: FaPeopleGroup,
  },
  {
    title: "Planning",
    description: "Our specialists map budgets, timelines, legal pathways, and execution priorities.",
    icon: FaRulerCombined,
  },
  {
    title: "Design",
    description: "Architectural and interior concepts are refined for functionality, elegance, and ROI.",
    icon: FaCompassDrafting,
  },
  {
    title: "Construction",
    description: "Dedicated project managers maintain quality, safety, coordination, and delivery accuracy.",
    icon: FaBuildingCircleCheck,
  },
  {
    title: "Delivery",
    description: "We finalize, inspect, and hand over a polished project built for confidence and growth.",
    icon: FaShieldHalved,
  },
];

export const projects = [
  {
    title: "Emerald Residency",
    location: "Bengaluru, India",
    category: "Residential Projects",
    description: "A luxury apartment development with curated amenities, premium finishes, and elegant facades.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Axis Corporate Hub",
    location: "Hyderabad, India",
    category: "Commercial Projects",
    description: "A high-performance office campus blending flexible workspace planning with modern architecture.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Skyline Villas",
    location: "Pune, India",
    category: "Villas",
    description: "An exclusive villa community designed with privacy, landscape integration, and luxury living in mind.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Urban Crest Towers",
    location: "Mumbai, India",
    category: "Apartments",
    description: "Contemporary high-rise residences developed for premium urban lifestyles and long-term value.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Orion Business Centre",
    location: "Chennai, India",
    category: "Office Buildings",
    description: "A landmark office destination built with sustainable systems, smart access, and premium presence.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
];

export const whyChooseUs = [
  {
    icon: FaUserTie,
    title: "Experienced Team",
    description: "Specialists in planning, engineering, consulting, and delivery management.",
  },
  {
    icon: FaStopwatch,
    title: "On-Time Delivery",
    description: "Structured execution frameworks keep milestones visible and schedules controlled.",
  },
  {
    icon: FaWallet,
    title: "Affordable Pricing",
    description: "Transparent commercial planning with cost-efficient solutions and premium outcomes.",
  },
  {
    icon: FaShieldHalved,
    title: "Quality Construction",
    description: "Rigorous site supervision, quality standards, and trusted material sourcing.",
  },
  {
    icon: FaCity,
    title: "Professional Planning",
    description: "Strategic, scalable planning that supports long-term use and value appreciation.",
  },
  {
    icon: FaStar,
    title: "Customer Satisfaction",
    description: "Clear communication, personalized support, and client-first project management.",
  },
];

export const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Property Investor",
    review:
      "Skyline handled both advisory and execution with remarkable professionalism. The delivery quality exceeded expectations.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Neha Sharma",
    role: "Homeowner",
    review:
      "From planning to handover, the experience felt smooth, transparent, and truly premium. Their team was dependable throughout.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Arjun Kapoor",
    role: "Business Owner",
    review:
      "They transformed our commercial project into a polished, functional space delivered on schedule with outstanding coordination.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
];

export const contactInfo = {
  company: "Skyline Real Estate & Construction",
  phone: "+91 98765 43210",
  email: "hello@skylinebuild.com",
  address: "21 Business District, MG Road, Bengaluru, Karnataka",
};
