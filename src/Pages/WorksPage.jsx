// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// export const WorksPage = () => {
//     const [activeFilter, setActiveFilter] = useState('all');
//     const [hoveredProject, setHoveredProject] = useState(null);

//     const projectCategories = [
//         { id: 'all', name: 'All Projects' },
//         { id: 'web', name: 'Web Development' },
//         { id: 'mobile', name: 'Mobile Apps' },
//         { id: 'ecommerce', name: 'E-Commerce' },
//         { id: 'uiux', name: 'UI/UX Design' }
//     ];

//     const projects = [
//         {
//             id: 1,
//             title: "E-Commerce Platform",
//             category: "ecommerce",
//             description: "A full-featured online shopping platform with advanced inventory management and payment integration.",
//             image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1170&q=80",
//             technologies: ["React", "Node.js", "MongoDB", "Stripe"],
//             liveLink: "#",
//             githubLink: "#",
//         },
//         {
//             id: 2,
//             title: "Healthcare Mobile App",
//             category: "mobile",
//             description: "A comprehensive healthcare application for patient management and telemedicine services.",
//             image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1170&q=80",
//             technologies: ["React Native", "Firebase", "Redux"],
//             liveLink: "#",
//             githubLink: "#",
//         },
//         {
//             id: 3,
//             title: "Corporate Website Redesign",
//             category: "web",
//             description: "Modern corporate website with CMS integration and responsive design.",
//             image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1170&q=80",
//             technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
//             liveLink: "#",
//             githubLink: "#",
//         },
//         {
//             id: 4,
//             title: "Food Delivery App",
//             category: "mobile",
//             description: "Food ordering and delivery application with real-time tracking and payment processing.",
//             image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=1170&q=80",
//             technologies: ["Flutter", "Node.js", "MongoDB"],
//             liveLink: "#",
//             githubLink: "#",
//         },
//         {
//             id: 5,
//             title: "Dashboard Analytics",
//             category: "uiux",
//             description: "Interactive dashboard with data visualization and real-time analytics.",
//             image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80",
//             technologies: ["React", "D3.js", "Python", "FastAPI"],
//             liveLink: "#",
//             githubLink: "#",
//         },
//         {
//             id: 6,
//             title: "Learning Management System",
//             category: "web",
//             description: "Complete LMS platform with course management and student progress tracking.",
//             image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1170&q=80",
//             technologies: ["Vue.js", "Laravel", "MySQL"],
//             liveLink: "#",
//             githubLink: "#",
//         }
//     ];

//     const filteredProjects = activeFilter === 'all'
//         ? projects
//         : projects.filter(project => project.category === activeFilter);

//     const container = {
//         hidden: { opacity: 0 },
//         show: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.2
//             }
//         }
//     };

//     const item = {
//         hidden: { y: 30, opacity: 0 },
//         show: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.6,
//                 ease: "easeOut"
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 overflow-hidden">
//             {/* Enhanced Hero Section */}
//             <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800 text-white py-20 md:py-28 px-4">
//                 <div className="container mx-auto px-6 text-center relative z-10">
//                     <h1 className="text-4xl md:text-5xl font-bold mb-6">
//                         Our Works
//                     </h1>
//                     <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-90">
//                         Discover our innovative projects and solutions that have helped businesses transform their digital presence.
//                     </p>
//                 </div>

//                 {/* Animated background elements */}
//                 <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//                     {[...Array(10)].map((_, i) => (
//                         <motion.div
//                             key={i}
//                             className="absolute rounded-full bg-emerald-400/10"
//                             style={{
//                                 top: `${Math.random() * 100}%`,
//                                 left: `${Math.random() * 100}%`,
//                                 width: `${Math.random() * 200 + 50}px`,
//                                 height: `${Math.random() * 200 + 50}px`,
//                             }}
//                             animate={{
//                                 scale: [1, 1.5, 1],
//                                 opacity: [0.1, 0.3, 0.1],
//                             }}
//                             transition={{
//                                 duration: Math.random() * 5 + 5,
//                                 repeat: Infinity,
//                                 ease: "easeInOut",
//                             }}
//                         />
//                     ))}
//                 </div>
//             </section>

//             {/* Projects Filter Section */}
//             <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <motion.div
//                         className="text-center mb-12"
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Creative Works</span>
//                         </h2>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                             Explore our diverse portfolio of projects that showcase our expertise and innovation in digital solutions.
//                         </p>
//                     </motion.div>

//                     {/* Filter Buttons */}
//                     <motion.div
//                         className="flex flex-wrap justify-center gap-4 mb-12"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         {projectCategories.map((category) => (
//                             <button
//                                 key={category.id}
//                                 onClick={() => setActiveFilter(category.id)}
//                                 className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === category.id
//                                     ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
//                                     : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'
//                                     }`}
//                             >
//                                 {category.name}
//                             </button>
//                         ))}
//                     </motion.div>

//                     {/* Projects Grid */}
//                     <motion.div
//                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//                         variants={container}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true, margin: "-50px" }}
//                     >
//                         {filteredProjects.map((project, index) => (
//                             <motion.div
//                                 key={project.id}
//                                 variants={item}
//                                 className="relative group"
//                                 onMouseEnter={() => setHoveredProject(project.id)}
//                                 onMouseLeave={() => setHoveredProject(null)}
//                             >
//                                 {/* Featured Badge */}
//                                 {project.featured && (
//                                     <div className="absolute top-4 left-4 z-20">
//                                         <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
//                                             Featured
//                                         </span>
//                                     </div>
//                                 )}

//                                 {/* Glow Effect */}
//                                 <motion.div
//                                     className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 opacity-0 blur-lg group-hover:opacity-30 transition-all duration-500"
//                                     animate={{
//                                         opacity: hoveredProject === project.id ? 0.4 : 0,
//                                         scale: hoveredProject === project.id ? 1.02 : 1
//                                     }}
//                                 />

//                                 {/* Project Card */}
//                                 <motion.div
//                                     className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/50 h-full flex flex-col"
//                                     whileHover={{ y: -8, rotateY: 5 }}
//                                     transition={{ duration: 0.4, ease: "easeOut" }}
//                                 >
//                                     {/* Image Container */}
//                                     <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-100 to-blue-100">
//                                         <motion.img
//                                             src={project.image}
//                                             alt={project.title}
//                                             className="w-full h-full object-cover"
//                                             animate={{
//                                                 scale: hoveredProject === project.id ? 1.1 : 1
//                                             }}
//                                             transition={{ duration: 0.6, ease: "easeOut" }}
//                                         />

//                                         {/* Overlay */}
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

//                                         {/* Action Buttons */}
//                                         <motion.div
//                                             className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
//                                             initial={{ y: 20 }}
//                                             whileHover={{ y: 0 }}
//                                         >
//                                             <a
//                                                 href={project.liveLink}
//                                                 className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-300 flex items-center gap-2"
//                                             >
//                                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                                                 </svg>
//                                                 Live Demo
//                                             </a>
//                                             <a
//                                                 href={project.githubLink}
//                                                 className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors duration-300 flex items-center gap-2"
//                                             >
//                                                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                                                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                                                 </svg>
//                                                 Code
//                                             </a>
//                                         </motion.div>
//                                     </div>

//                                     {/* Content Section */}
//                                     <div className="p-6 flex-grow flex flex-col">
//                                         <h3 className="text-xl font-bold text-gray-900 mb-3">
//                                             {project.title}
//                                         </h3>
//                                         <p className="text-gray-600 mb-4 flex-grow">
//                                             {project.description}
//                                         </p>

//                                         {/* Technologies */}
//                                         <div className="flex flex-wrap gap-2 mb-4">
//                                             {project.technologies.map((tech, techIndex) => (
//                                                 <span
//                                                     key={techIndex}
//                                                     className="bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium border border-emerald-100"
//                                                 >
//                                                     {tech}
//                                                 </span>
//                                             ))}
//                                         </div>

//                                         {/* Category Badge */}
//                                         <div className="flex justify-between items-center">
//                                             <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
//                                                 {projectCategories.find(cat => cat.id === project.category)?.name}
//                                             </span>
//                                         </div>
//                                     </div>

//                                     {/* Decorative Elements */}
//                                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400"></div>
//                                 </motion.div>
//                             </motion.div>
//                         ))}
//                     </motion.div>

//                     {/* Empty State */}
//                     {filteredProjects.length === 0 && (
//                         <motion.div
//                             className="text-center py-16"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                         >
//                             <div className="text-6xl mb-4">🔍</div>
//                             <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
//                             <p className="text-gray-600">We're working on new projects in this category. Check back soon!</p>
//                         </motion.div>
//                     )}
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800 text-white">
//                 <div className="max-w-4xl mx-auto text-center px-4">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                             Ready to Start Your Project?
//                         </h2>
//                         <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//                             Let's work together to bring your ideas to life with innovative digital solutions.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <a href="/contact">
//                                 <motion.button
//                                     className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center gap-2"
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     Start a Project
//                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                                     </svg>
//                                 </motion.button>
//                             </a>
//                         </div>
//                     </motion.div>
//                 </div>

//                 {/* Background Animation */}
//                 <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                     {[...Array(5)].map((_, i) => (
//                         <motion.div
//                             key={i}
//                             className="absolute rounded-full bg-emerald-400/10"
//                             style={{
//                                 top: `${Math.random() * 100}%`,
//                                 left: `${Math.random() * 100}%`,
//                                 width: `${Math.random() * 200 + 50}px`,
//                                 height: `${Math.random() * 200 + 50}px`,
//                             }}
//                             animate={{
//                                 scale: [1, 1.5, 1],
//                                 opacity: [0.1, 0.3, 0.1],
//                             }}
//                             transition={{
//                                 duration: Math.random() * 5 + 5,
//                                 repeat: Infinity,
//                                 ease: "easeInOut",
//                             }}
//                         />
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default WorksPage;