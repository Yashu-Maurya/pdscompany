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
		client: {start:"_app/immutable/entry/start.DVk0FCtW.js",app:"_app/immutable/entry/app.BdPCE6Fp.js",imports:["_app/immutable/entry/start.DVk0FCtW.js","_app/immutable/chunks/DPAjIcgC.js","_app/immutable/chunks/BukE7bu8.js","_app/immutable/entry/app.BdPCE6Fp.js","_app/immutable/chunks/BukE7bu8.js","_app/immutable/chunks/C98UqQxh.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
