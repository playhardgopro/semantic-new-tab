require('esbuild').buildSync({
	entryPoints: ['./src/main.tsx'],
	bundle: true,
	minify: true,
	sourcemap: true,
	target: ['chrome84', 'firefox84', 'safari11', 'edge16'],
	outfile: './build/main.js',
	define: {
		'process.env.NODE_ENV': '"production"',
	},
})
require('fs').copyFileSync('./src/manifest.json', './build/manifest.json')
require('fs').copyFileSync('./src/index.html', './build/index.html')
