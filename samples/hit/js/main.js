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
    },

    render: function(stage) {
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

        var param = $('#colour').val();
        switch (param) {
            case '':
                stage.empty();
                $('#first').hide();
                $('#second').hide();
                $('#third').hide();
                break;
            case 'first':
                this.box1 = _black(0, 0);
                $('#first').show();
                $('#second').hide();
                $('#third').hide();
                break;
            case 'second':
                this.box2 = _silver(0, 0);
                $('#first').hide();
                $('#second').show();
                $('#third').hide();
                break;
            case 'third':
                this.box3 = _green(0, 0);
                $('#first').hide();
                $('#second').hide();
                $('#third').show();
                break;
        }
        stage.refresh();
    }
});
