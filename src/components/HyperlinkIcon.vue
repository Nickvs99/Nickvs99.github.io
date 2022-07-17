<template>
    <a :href="`${href}`">
        
        <div class="trapezoid ">
        
            <img :src="require(`@/${src_icon}`)" :alt="`${src_alt}`">

        </div>
    </a>
</template>


<script>

export default {
    props: ["href", "src_icon", "src_alt"],
}

</script>

<style>

/* TEMP styling */
.trapezoid {
	border-bottom: 50px solid #555;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	height: 0;
	width: 125px;
}

</style>