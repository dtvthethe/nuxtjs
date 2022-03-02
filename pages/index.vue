<template>
  <h1>Hi</h1>
</template>

<script>
export default {
  name: 'IndexPage',
  layout(context) {
    // Khi load bằng SSR thì lấy theo cách này: context.req.headers['user-agent']
    // Khi load bằng CSR thì lấy theo cách này: navigator.userAgent
    // let userAgent = '';

    // if (context.req) {
    //   userAgent = context.req.headers['user-agent'];
    // } else {
    //   userAgent = navigator.userAgent;
    // }

    // if (/mobile/i.test(userAgent)) {
    //   return 'mobile';
    // } else {
    //   return 'green';
    // }

    return context.isMobile ? 'mobile' : 'green';
  }
}
</script>
