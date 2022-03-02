const logined = true;

export default function (context) {
	console.log('Middleware check logined.');
	return logined;
}
