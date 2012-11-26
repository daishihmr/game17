enchant();
window.onload = function() {
    var game = new Game();
    game.on("load", function() {

        var scene = new Scene3D();
        var cube = new Box(1, 0.25, 1);
        cube.bounding = new AABB2();
        cube.bounding.scaleX = 1;
        cube.bounding.scaleY = 0.25;
        cube.bounding.scaleZ = 1;
        scene.addChild(cube);

        game.on("enterframe", function() {
            if (this.frame % 10 !== 0) {
                return;
            }
            var b = new Sphere();
            b.scale(0.3, 0.3, 0.3);
            b.bounding.radius = 0.3;
            b.x = Math.random() * 4 - 2;
            b.y = 2;
            b.z = 0;
            b.on("enterframe", function() {
                this.y -= 0.1;
                if (this.intersect(cube)) {
                    this.mesh.setBaseColor([ 1, 1, 0, 1 ]);
                } else {
                    this.mesh.setBaseColor([ 1, 1, 1, 1 ]);
                }
                if (this.y < -2) {
                    this.parentNode.removeChild(this);
                }
            });
            scene.addChild(b);
        });
    });
    game.start();
};
