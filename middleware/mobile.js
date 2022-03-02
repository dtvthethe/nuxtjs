export default function (context) {
	console.log('Middleware check mobile.');

	context.isMobile = false;
	let userAgent = '';

	if (process.server) {
		userAgent = context.req.headers['user-agent'];
	} else {
		userAgent = navigator.userAgent;
	}

	if (/mobile/i.test(userAgent)) {
		context.isMobile = true;
	}
}
