<template>
  <div>
    <header class="mobile-header">
			<h1>Mobile layout</h1>
		</header>
		<hr>
		<Nuxt />
		<hr>
    <footer class="mobile-footer">
			<h1>Mobile layout footer</h1>
		</footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
	.mobile-header, .mobile-footer {
		color: blueviolet;
		text-align: center;
	}
</style>
