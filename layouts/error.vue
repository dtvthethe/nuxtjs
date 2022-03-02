<template>
	<div>
		<h3>Error:</h3>
		<p v-if="error.statusCode == 404">404</p>
		<p v-else>Error</p>
		<NuxtLink to="/">Goto Home Page</NuxtLink>
	</div>
</template>

<script>
export default {
	props: ['error']
}
</script>

<style>

</style>
