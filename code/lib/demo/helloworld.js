define ([
	'math',
	'code/util/demo-init'
], function(
	math,
	init
) {
	return function(id) {
		var div = document.getElementById(id);
		div.style.display       = 'flex';
		div.style.flexDirection = 'column';
		div.style.flexWrap      = 'nowrap';
		div.style.alignItems    = 'stretch';

		var w = 640;
		var h = w * 9 / 16;
		var canvas = document.createElement('canvas');
		canvas.width  = w;
		canvas.height = h;
		canvas.style.margin    = '1em';
		canvas.style.alignSelf = 'center';

		var scene = new THREE.Scene();
		var aspect = window.innerWidth / window.innerHeight;
		var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
		var renderer = new THREE.WebGLRenderer( { canvas: canvas } );
		div.appendChild(canvas);

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshNormalMaterial();
		var cube = new THREE.Mesh( geometry, material );
		scene.add( cube );
		camera.position.z = 5;

		var render = function() {
			requestAnimationFrame( render );
			cube.rotation.x += 0.1;
			cube.rotation.y += 0.1;
			renderer.render( scene, camera );
		};
		render();
	}
});
