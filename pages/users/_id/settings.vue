<template>
	<div>
		Setting user page
	</div>
</template>

<script>
export default {
	layout(context) {
		console.log(context.isMobile);
    return context.isMobile ? 'mobile' : 'red';
	}
}
</script>

<style>

</style>
