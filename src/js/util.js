export function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
};

/**
 * Scrolls towards the associated region. A offset is applied such
 * that the navigation bar does not overlap with the section. 
 */
export function scrollIntoView(id) {

    let target = document.getElementById(id);
    let targetPosition = target.getBoundingClientRect().top;

    let offset = document.getElementById("navbar").offsetHeight;
    let offsetPosition = targetPosition + window.pageYOffset - offset;

    window.scrollTo({top: offsetPosition, behavior: "smooth"});
}
