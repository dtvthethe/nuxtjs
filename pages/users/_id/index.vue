<template>
	<div>
		User detail id = {{ $route.params.id }}
	</div>
</template>

<script>
export default {
	layout(context) {
    return context.isMobile ? 'mobile' : 'red';
	}
}
</script>

<style>

</style>
