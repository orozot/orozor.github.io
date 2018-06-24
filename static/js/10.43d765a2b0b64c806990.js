webpackJsonp([10],{dBuc:function(n,t){n.exports="#  JavaScript设计模式  \n##  状态模式  \n优缺点： \n1. 状态模式定义了状态和行为之间的关系，并将他们封装在一个类中，通过增加新的状态类，很容易增加新的状态和转换  \n\n2. 避免执行上下文`Context`无线膨胀，切换状态的逻辑被分布在状态类中，也去掉了`Context`中原本过多的条件分支\n\n3. 用对象代替字符串记录当前状态，使得状态的切换更加的一目了然  \n\n4. 缺点是会在系统中定义许多的状态类和对象，另外由于逻辑分散在状态类中，造成了逻辑分散的问题，无法在一个地方看出整个状态机的逻辑\n\n首先，定义一个`light`类，设置两个属性:\n````javascript\n // 定义状态类\n    var FSM = {\n        off: {\n            // 状态对应的行为\n            buttonWasPressed: function () {\n                console.log('关灯');\n                this.button.innerHTML = '下次开灯';\n                // 定义好要切换到的下一个状态\n                this.currState = FSM.on;\n            }\n        },\n        on: {\n            buttonWasPressed: function () {\n                console.log('开灯');\n                this.button.innerHTML = '下次关灯';\n                this.currState = FSM.off;\n            }\n        }\n    }\n\n    var Light = function () {\n        // 设置初始状态\n        this.currState = FSM.off;\n        this.button = null;\n    }\n\n    Light.prototype.init = function () {\n        var button = document.createElement('button');\n        var self = this;\n\n        button.innerHTML = '已关灯'\n        this.button = document.body.appendChild(button);\n        this.button.onclick = function () {\n            self.currState.buttonWasPressed.call(self);\n        }\n    }\n\n    var light = new Light();\n    light.init();\n````\n\n```javascript\nclass Contra {\n  constructor () {\n    //存储当前待执行的动作 们\n    this._currentstate = {};\n  }\n  //添加动作\n  changeState (){\n    //清空当前的动作集合\n    this._currentstate = {};\n    //遍历添加动作\n    Object.keys(arguments).forEach(\n      (i) => this._currentstate[arguments[i]] = true\n    )\n    return this;\n  }\n  //执行动作\n  contraGo (){\n    //当前动作集合中的动作依次执行\n    Object.keys(this._currentstate).forEach(\n      (k) => Actions[k] && Actions[k].apply(this)\n    )\n    return this;\n  }\n};\n\nconst Actions = {\n  up : function(){\n    //向上跳\n    console.log('up');\n  },\n  down : function(){\n    //趴下\n    console.log('down');\n  },\n  forward : function(){\n    //向前跑\n    console.log('forward');\n  },\n  backward : function(){\n    //往老家跑\n    console.log('backward');\n  },\n  shoot : function(){\n    //开枪吧\n    console.log('shoot');\n  },\n};\nvar littlered = new Contra();\nlittlered.changeState('shoot','up').contraGo();\n```\n\n###  有限状态机  \n是状态模式的一个模型，满足以下特点：\n1.事务拥有多种状态，且任一时间不会处于多种状态。  \n2.动作可以改变事务状态。\n3.状态总数是有限的。  \n\n符合以上场景的都可以用状态机模型描述。  \n\n*PS:Vuex就是一种有限状态机的实现*\n\n##  策略模式  \n策略模式定义了算法家族，分别封装起来，让他们可以互相替换。  \n\n数据合法性校验时，通常采用`switch`语句进行判断，但是后期增加需求时还要修改对应代码。根据`策略模式`，我们可以将工作代码单独封装成不同的类，然后统一用策略类处理。  \n````javascript\nvar obj = {\n        \"A\": function(salary) {\n            return salary * 4;\n        },\n        \"B\" : function(salary) {\n            return salary * 3;\n        },\n        \"C\" : function(salary) {\n            return salary * 2;\n        } \n};\nvar calculateBouns =function(level,salary) {\n    return obj[level](salary);\n};\nconsole.log(calculateBouns('A',10000)); // 40000\n````\n策略模式优缺点:  \n\n1. 策略模式利用组合，委托等技术和思想，有效的避免很多if条件语句。\n\n2. 策略模式提供了开放-封闭原则，使代码更容易理解和扩展。\n\n3. 策略模式中的代码可以复用。\n\n4. 使用策略模式会在程序中增加许多策略类或者策略对象 \n\n5. 其次，要使用策略模式，必须了解所有的strategy\n\n\n"}});
//# sourceMappingURL=10.43d765a2b0b64c806990.js.map