
function Hamburger(size, stuffing) {
    try{
        if((size !== Hamburger.SIZE_SMALL ) && (size !== Hamburger.SIZE_LARGE)){
            throw new HamburgerEx('Invalide size');
        }
        if((stuffing !== Hamburger.STUFFING_CHEESE) && (stuffing !== Hamburger.STUFFING_POTATO) && (stuffing !== Hamburger.STUFFING_SALAD)){
            throw new HamburgerEx('Invalide stuffing');
        } 
    } catch (e) {
        throw e;
    }
    this.size = size;
    this.stuffing = stuffing;
};
Hamburger.SIZE_SMALL = {
    size: 'small',
    cal: 20,
    price: 50
};
Hamburger.SIZE_LARGE = {
    size: 'big',
    cal: 40,
    price: 100
};
Hamburger.STUFFING_CHEESE = {
    name: 'cheese',
    cal: 20,
    price: 10
};
Hamburger.STUFFING_SALAD = {
    name: 'salad',
    cal: 5,
    price: 20
};
Hamburger.STUFFING_POTATO = {
    name: 'potato',
    cal: 10,
    price: 15
};
Hamburger.TOPPING_MAYO = {
    name: 'mayo',
    cal: 5,
    price: 20
};
Hamburger.TOPPING_SPICE = {
    name: 'spice',
    cal: 0,
    price: 15
};
Hamburger.prototype.calculatePrice = function () { 
    var a = 0;
    for(var key in this){
        if(this[key].price){
            a += this[key].price
        }
    }
    return "Колличество каллорий: "+a;
};
Hamburger.prototype.calculateCalories = function() {
    var a = 0;
    for(let key in this){
        if(this[key].cal){
            a += this[key].cal
        }
    }
    return "Сумма вашего товара равна: "+ a + " тугрик";
};
Hamburger.prototype.addTopping = function(topping) {
    try{
        if(!topping){
            throw new HamburgerEx('Тут пусто');
        }
        if((topping !== Hamburger.TOPPING_MAYO) && (topping !== Hamburger.TOPPING_SPICE)){
            throw new HamburgerEx('Вы выбрали не правильный топпинг');
        }
        
    }catch(e){
            throw e;
    }
    if(topping === Hamburger.TOPPING_MAYO){
        this.TOPPING_MAYO = topping;
    }
    if(topping === Hamburger.TOPPING_SPICE){
        this.TOPPING_SPISE = topping;
    }
    
};
Hamburger.prototype.removeTopping = function(topping) {
    for(var key in this){
        if(this[key] === topping){
            delete this[key];
        }
    }
};
Hamburger.prototype.getStuffing = function() {
    console.log(this.stuffing);
};
Hamburger.prototype.getSize = function() {
    console.log(this.size)
    
};
Hamburger.prototype.getToppings = function() {
    var a = [];
    if(this.TOPPING_MAYO){
        a.push(this.TOPPING_MAYO);
    };
    if(this.TOPPING_SPISE){
        a.push(this.TOPPING_SPISE);
    };
    return a;
};
function HamburgerEx(message) {
    this._message = message;
};