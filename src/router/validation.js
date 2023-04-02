import { educations } from "@/components/education/educations.js";
import { projects } from "@/components/projects/projects.js";

export function isValidEducation(educationTitle) {
    
    if(educations.find(item => item.title == educationTitle)) {
        return true;
    }

    return false;
}

export function isValidProject(projectTitle) {
    
    if(projects.find(item => item.title == projectTitle)) {
        return true;
    }

    return false;
}

