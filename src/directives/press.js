// Simulates a click event, when enter or spacebar are pressed
const press = {
    beforeMount(el) {
        el.addEventListener("keydown", e => {
            if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") { 
                
                e.preventDefault(); // prevent scrolling through spacebar
                
                var clickEvent = new Event( "click" );
                el.dispatchEvent(clickEvent);
            }
        });
    },
};

export default press;