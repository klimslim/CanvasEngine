var canvas = CE.defines("canvas_id").
        extend(Hit).
        ready(function() {
            canvas.Scene.call("MyScene");
        });
            
canvas.Scene.New({
    name: "MyScene",

    materials: {
        images: {
            "lift_lb": "images/lift_lb.png",
            "lift_rt": "images/lift_rt.png",
            "stairs_lt": "images/stairs_lt.png",
            "stairs_rb": "images/stairs_rb.png",
            "black_box": "images/first.png",
            "green_box": "images/third.png",
            "silver_box": "images/second.png"
        }
    },
    
    ready: function(stage) {
        var self = this;
        
        function _black(x, y) {
            var entity = Class.New("Entity", [stage]);
            entity.rect(641);
            entity.position(x, y);
            entity.el.drawImage("black_box");
            stage.append(entity.el);
            return entity;
        }

        function _green(x, y) {
            var entity = Class.New("Entity", [stage]);
            entity.rect(641);
            entity.position(x, y);
            entity.el.drawImage("green_box");
            stage.append(entity.el);
            return entity;
        }

        function _silver(x, y) {
            var entity = Class.New("Entity", [stage]);
            entity.rect(641);
            entity.position(x, y);
            entity.el.drawImage("silver_box");
            stage.append(entity.el);
            return entity;
        }
        
        this.box1 = _black(0, 0);
        this.box3 = _green(1283, 0);
        this.box2 = _silver(642, 0);
        //this.box2 = _entity(200, 50);
        
    },
    render: function(stage) {

//        this.box1.move(2); // Position X + 2
        
//        this.box2.hit([this.box1], function(state, el) {
//            if (state == "over") {
//                el.opacity = 0.5;
//            }
//            else {
//                el.opacity = 1;
//            }
//        });
        stage.refresh();
    }
});