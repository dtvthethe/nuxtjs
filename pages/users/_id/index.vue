<template>
	<div>
		User detail id = {{ $route.params.id }}
	</div>
</template>

<script>
export default {
	mounted() {
		this.$hello('custom plugin: hihi'); // dung ntn
    // test hệ thống đã nhận `$notify` chưa:
    // console.log(this.$notify);
    setTimeout(() => {
      this.$notify({
        group: "foo",
        title: "Important message",
        text: "Hello user! This is a notification!",
      });
    }, 2000);
  }
}
</script>

<style>

</style>
