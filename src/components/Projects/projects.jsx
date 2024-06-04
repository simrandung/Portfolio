import React from "react";
import "./projects.css";
import Card from '../card';
import job from '../../assests/job.jpeg';
import airtable from '../../assests/airtable.png';
import cms from '../../assests/cms java.jpeg';


const Projects = () => {
    return (
        <div className="p" id="projects">
           <Card 
            title = "JobCoach - Job Recruitment Platform"
            image={job}
            description="JobCoach: Transforming job recruitment by connecting job seekers and employers through a dynamic platform. Our user-centric approach bridges the gap between talent and organizations seamlessly. "
           />
           <Card 
            title = "Airtable Data Migration"
            image={airtable}
            description="Integrated Airtable API with MongoDB for efficient data sync and automation, leveraging their strengths to streamline workflows and enhance collaboration."
           />
           <Card 
            title = "Course Management System"
            image={cms}
            description="Designed a comprehensive course management system using Java's OOP, featuring intuitive UI, robust database management, and automated workflows."
           />
          

        
        </div>
    )
}

export default Projects;