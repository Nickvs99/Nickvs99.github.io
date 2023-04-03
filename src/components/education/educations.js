export const educations = [
    {
        title: "MSc Computational Science",
        componentPath: "components/education/EducationMSc.vue",
    },
    {
        title: "BSc Physics and astronomy",
        componentPath: "components/education/EducationBSc.vue",
    },
    {
        title: "High school",
        componentPath: "components/education/EducationHighSchool.vue",
    },
];

export function getEducationFromParams(paramValue) {

    if(!paramValue) return educations[0];        
    return educations.find(item => item.title == paramValue);
}