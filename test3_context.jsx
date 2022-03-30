// v1.1
'use strict';

const assert = require("assert").strict;

{// TEST 3.1
    // todo: Исправить функцию callGetter (изменения нужно вносить в класс Obj) таким образом, чтобы вызываемый внутри getter
    //  возвращал значение obj.prop путем вызова obj.getProp
    //  !!! Для решения задания воспользоваться стрелочной функцией !!!
    function callGetter() {
        class Obj {
            prop = 123;

            getProp = () => this.prop;
            
        }
        const obj = new Obj();
        const getter = obj.getProp;
        try {
            assert.equal(typeof getter, 'function', "Test failed");

            return getter();
        }
        catch {
            return 0;
        }
    }

    {
        const result = callGetter();
        assert.equal(result, 123, "Test failed");
    }
}

{// TEST 3.2
    // todo: Исправить функцию callGetter таким образом, чтобы вызываемый внутри getter
    //  возвращал значение obj.prop путем вызова obj.getProp
    //  !!! Для решения задания воспользоваться методом объекта !!!
    function callGetter() {
        const obj = {
            prop: 777,
            getProp() {
                return this.prop;
            },
        };
        const getter = obj.getProp.bind(obj);

        try {
            assert.equal(typeof getter, 'function', "Test failed");

            return getter();
        }
        catch {
            return 0;
        }
    }

    {
        const result = callGetter();
        assert.equal(result, 777, "Test failed");
    }
}

{// TEST 3.3
    const obj = {
        prop: 123,
    };

    const getter = function() {
        return this.prop;
    };

    // todo: Исправьте код ниже. Сделайте четырьмя разными способами передачу контекста в функцию getter()
    //  При необходимости, объект obj разрешено изменять в процессе исполнения кода.

    { //todo: Способ 1
        const result = getter.call(obj);
        assert.equal(result, 123, "Test failed");
    }
    { //todo: Способ 2
        const result = getter.apply(obj);
        assert.equal(result, 123, "Test failed");
    }
    { //todo: Способ 3
        const result = getter.bind(obj)();
        assert.equal(result, 123, "Test failed");
    }
    { //todo: Способ 4
        obj.getProp = getter;
        const result = obj.getProp();
        assert.equal(result, 123, "Test failed");
    }
}
