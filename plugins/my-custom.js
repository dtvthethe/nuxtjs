function myAlert(content) {
	console.log(content);
}

// cách tự custom plugin
// thêm biến global vào hệ thống
// https://nuxtjs.org/docs/directory-structure/plugins
export default (context, inject) => {
	inject('hello', noiDung => myAlert(noiDung));
}
