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
            "silver_box": "images/second.png",
            "man": "images/chelovechek_bbw_small.png"
        }
    },

    ready: function(stage) {
        var self = this;
    },

    render: function(stage) {

        function _green(x, y) {
            var entity = Class.New("Entity", [stage]);
            entity.rect(641);
            entity.position(x, y);
            entity.el.drawImage("green_box");
            stage.append(entity.el);
            return entity;
        }

        var self = this;
        var param = $('#colour').val();
        switch (param) {
            case '':
                stage.empty();
                $('#first').hide();
                $('#second').hide();
                $('#third').hide();
                break;
            case 'first':
                escapeFromFirst(stage, self);
                $('#first').show();
                $('#second').hide();
                $('#third').hide();
                break;
            case 'second':
                escapeFromSecond(stage, self);
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

function drawMan(elem, man, coords) {
    elem.man = man(coords.x, coords.y);
    elem.man.initialized = true;
}

function escapeFromFirst(stage, elem) {

    function _black(x, y) {
        var entity = Class.New("Entity", [stage]);
        entity.rect(641);
        entity.position(x, y);
        entity.el.drawImage("black_box");
        stage.append(entity.el);
        return entity;
    }

    function _man(x, y) {
        var entity = Class.New("Entity", [stage]);
        entity.rect(140);
        entity.position(x, y);
        entity.el.drawImage("man");
        stage.append(entity.el);
        return entity;
    }

    function _from_lift(elem) {
        var x = parseInt(elem.man.model.x);
        var y = parseInt(elem.man.model.y);
        if(y>=410 && x < 250) {
            elem.man.position(++x, 410);
        } else {
            $('#black').val('');
        }
    }

    function _from_stairs(elem) {
        var x = parseInt(elem.man.model.x);
        var y = parseInt(elem.man.model.y);
        if(y>=410 && x > 250) {
            elem.man.position(--x, 410);
        } else {
            $('#black').val('');
        }
    }

    var where = $('#black').val();
    switch (where) {
        case '':
            if (typeof elem.man == 'undefined' || colour_changed){
                elem.box1 = _black(0, 0);
            }
            break;
        case 'lift':
            if (typeof elem.man == 'undefined' || colour_changed){
                elem.box1 = _black(0, 0);
                drawMan(elem, _man, {'x':50, 'y':50});
                colour_changed = false;
            } else {
                var x = parseInt(elem.man.model.x);
                var y = parseInt(elem.man.model.y);
                if(y<410){
                    elem.man.position(50, y+1);
                }else{
                    _from_lift(elem);
                }
            }
            break;
        case 'stairs':
            if (typeof elem.man == 'undefined' || colour_changed){
                elem.box1 = _black(0, 0);
                drawMan(elem, _man, {'x':530, 'y':50});
                colour_changed = false;
            } else {
                var x = parseInt(elem.man.model.x);
                var y = parseInt(elem.man.model.y);
                if(y<410){
                    elem.man.position(530, y+1);
                }else{
                    _from_stairs(elem);
                }
            }
            break;
        case 'no':
            if (typeof elem.man == 'undefined' || colour_changed){
                elem.box1 = _black(0, 0);
                drawMan(elem, _man, {'x':250, 'y':50});
                colour_changed = false;
            } else {
                var x = parseInt(elem.man.model.x);
                if(x>=50){
                    elem.man.position(--x, 50);
                }else{
                    $('#black').val('lift');
                }
            }
            break;
    }
}

function escapeFromSecond(stage, elem) {

    function _silver(x, y) {
        var entity = Class.New("Entity", [stage]);
        entity.rect(641);
        entity.position(x, y);
        entity.el.drawImage("silver_box");
        stage.append(entity.el);
        return entity;
    }

    function _man(x, y) {
        var entity = Class.New("Entity", [stage]);
        entity.rect(140);
        entity.position(x, y);
        entity.el.drawImage("man");
        stage.append(entity.el);
        return entity;
    }

    function _from_lift(elem) {
        var x = parseInt(elem.man.model.x);
        var y = parseInt(elem.man.model.y);
        if(y>=410 && x < 250) {
            elem.man.position(++x, 410);
        } else {
            $('#black').val('');
        }
    }

    function _from_stairs(elem) {
        var x = parseInt(elem.man.model.x);
        var y = parseInt(elem.man.model.y);
        if(y>=410 && x > 250) {
            elem.man.position(--x, 410);
        } else {
            $('#black').val('');
        }
    }

    var where = $('#silver').val();
    switch (where) {
        case '':
            if (typeof elem.man == 'undefined' || colour_changed){
                elem.box2 = _silver(0, 0);
            }
            break;
        case 'lift':

            break;
        case 'stairs':

            break;
        case 'no':

            break;
    }
}
