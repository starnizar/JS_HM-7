let Bulb = function () {
    this.time = 0;

    this.getInfo = function () {
        for (;;) {
            this.power = +prompt('Мощность лампочки в Ваттах');
            if (isNaN(this.power) || this.power <= 0){
                alert('Это должно быть положительное число ! ! !');
            } else break;
        }
        for (;;) {
            this.cost = +prompt('Стоимость одного КилоВатта/час в рублях');
            if (isNaN(this.cost) || this.cost <= 0){
                alert('Это должно быть положительное число ! ! !');
            } else break;
        }
    },

    this.switcher = function () {
        if (confirm('Включить лампочку?')){
            for (;;){
                this.time = +prompt('Время работы лампочки в часах')
                if (isNaN(this.time) || this.time <= 0){
                    alert('Это должно быть положительное число ! ! !');
                } else break;
        
            }
        }
    },

    this.getPrice = function () {
        this.price = this.power * this.cost * this.time / 1000;
        if (this.time == 0) {alert('Лампочка не работала . . .')}
        else {alert('Мощность лампочки в Ваттах = ' + this.power + '\nСтоимость одного Ватта в час = ' + this.cost + '\nВремя работы лампочки в часах = ' + this.time + '\nРасходы за лампочку = ' + this.price + 'р.')}
    };
}

let newBulb = new Bulb();