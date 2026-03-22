

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D1a92jWL.js","_app/immutable/chunks/BukE7bu8.js","_app/immutable/chunks/C98UqQxh.js"];
export const stylesheets = ["_app/immutable/assets/2.C46dx21h.css"];
export const fonts = [];
