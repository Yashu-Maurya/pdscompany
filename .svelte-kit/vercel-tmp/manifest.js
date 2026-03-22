export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/contact.png","images/hero.png","images/water-pipeline.png","images/water-tank.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.gneg2Q6j.js",app:"_app/immutable/entry/app.B5RsqVD_.js",imports:["_app/immutable/entry/start.gneg2Q6j.js","_app/immutable/chunks/DScqOKNx.js","_app/immutable/chunks/BukE7bu8.js","_app/immutable/entry/app.B5RsqVD_.js","_app/immutable/chunks/BukE7bu8.js","_app/immutable/chunks/C98UqQxh.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
