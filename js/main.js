var calcData = (function () {
    //материалы  
    var bs = 0;
    var box = 0;
    var skin = 0;
    var carton = 0;
    var skotch = 0;
    var count = 0;
    //грузчики 
    var pcount = 0;
    var person = 0;
    var time = 4;
    //автомобиль 
    var i;
    var summ;
    var interface = {};
    var auto;
    var summAuto = 0;
    var km = 0;
    var acount = 5;
    var pass = 0;
    var mkad = 0;

    interface.addBubbleSkin = function (e) {
        count += e;
        bs++;
        document.getElementById('span1').innerHTML = bs;
        console.log('Упаковочные материалы: + Пузырчатая плёнка: ' + count);
    };

    interface.removeBubbleSkin = function (e) {
        if (bs > 0 || count > 0) {
            count -= e;
            bs--;
            document.getElementById('span1').innerHTML = bs;
            console.log('Упаковочные материалы: - Пузырчатая плёнка: ' + count);
        }
    };

    interface.addBox = function (e) {
        count += e;
        box++;
        document.getElementById('span2').innerHTML = box;
        console.log('Упаковочные материалы: + коробка: ' + count);
    };

    interface.removeBox = function (e) {
        if (box > 0 || count > 0) {
            count -= e;
            box--;
            document.getElementById('span2').innerHTML = box;
            console.log('Упаковочные материалы: - коробка: ' + count);
        }
    };

    interface.addSkin = function (e) {
        count += e;
        skin++;
        document.getElementById('span3').innerHTML = skin;
        console.log('Упаковочные материалы: + Стрэйч плёнка: ' + count);
    };

    interface.removeSkin = function (e) {
        if (skin > 0 || count > 0) {
            count -= e;
            skin--;
            document.getElementById('span3').innerHTML = skin;
            console.log('Упаковочные материалы: - Стрэйч плёнка: ' + count);
        }
    };

    interface.addCarton = function (e) {
        count += e;
        carton++;
        document.getElementById('span4').innerHTML = carton;
        console.log('Упаковочные материалы: + Картон: ' + count);
    };

    interface.removeCarton = function (e) {
        if (carton > 0 || count > 0) {
            count -= e;
            carton--;
            document.getElementById('span4').innerHTML = carton;
            console.log('Упаковочные материалы: - Картон: ' + count);
        }
    };

    interface.addSkotch = function (e) {
        count += e;
        skotch++;
        document.getElementById('span5').innerHTML = skotch;
        console.log('Упаковочные материалы: + Картон: ' + count);
    };

    interface.removeSkotch = function (e) {
        if (skotch > 0 || count > 0) {
            count -= e;
            skotch--;
            document.getElementById('span5').innerHTML = skotch;
            console.log('Упаковочные материалы: - Картон: ' + count);
        }
    };


    //                           ГРУЗЧИКИ НАЧАЛО                      //
    interface.addPersonal = function (e) {
        pcount += e;
        person++;
        document.getElementById('personal').innerHTML = person;
        console.log('Грузчики: + работник: ' + pcount);

    };

    interface.removePersonal = function (e) {

        if (person > 0 || pcount > 0) {
            pcount -= e;
            person--;
            document.getElementById('personal').innerHTML = person;
            console.log('Грузчики: - работник: ' + pcount);
        }
    };

    interface.addTime = function (e) {
        time++;
        document.getElementById('time').innerHTML = time;
        console.log('Грузчики: всего времени: ' + time);
    };

    interface.removeTime = function (e) {
        if (time > 4) {
            time--;
            document.getElementById('time').innerHTML = time;
            console.log('Грузчики:всего времени: ' + time);
        }
    };

    interface.addTimeAuto = function () {
        acount++;
        document.getElementById('timeAuto').innerHTML = acount;
        console.log('+Час: ' + acount);
    };

    interface.removeTimeAuto = function () {
        if (acount > 5) {
            acount--;
            document.getElementById('timeAuto').innerHTML = acount;
            console.log('-Час: ' + acount);
        }
    };

    interface.changeSelectAuto = function () {
        if (document.getElementById("selectPass").options.selectedIndex == 0) {
            pass = 500;
        } else {
            pass = 0;
        }
    };

    interface.getSummAuto = function () {
        if (document.getElementById("selectAuto").options.selectedIndex == 0) {
            var gazzele = 2250;
            var gtime = 400;
            summAuto = gazzele + gtime * acount;
            console.log('Выбрана обычная газель, общая сумма: ' + summAuto + ' Стоимость машины: ' + gazzele + ' Час аренды: ' + gtime + ' Часов: ' + acount + ' Пропуск: ' + pass);

        } else {
            var lgazzele = 2500;
            var gltime = 450;
            summAuto = pass + lgazzele + gltime * acount;
            console.log('Выбрана удл газель, общая сумма: ' + summAuto + ' Стоимость машины: ' + lgazzele + ' Час аренды: ' + gltime + ' Часов: ' + acount + ' Пропуск: ' + pass);
        }
    };

    interface.addDistance = function (e) {
        km++;
        mkad += e;
        document.getElementById('km').innerHTML = km;
        console.log('Км: ' + km + 'Рублей: ' + mkad);
    };

    interface.removeDistance = function (e) {
        if (km > 0) {
            km--;
            mkad -= e;
            document.getElementById('km').innerHTML = km;
            console.log('Км: ' + km + 'Рублей: ' + mkad);
        }
    };

    interface.getCounter = function () {

        summ = pcount * time;

        console.log('Сумма за машину: ' + summAuto);
        console.log('Сумма за грузчиков: ' + summ);
        console.log('Сумма за материалы: ' + count);
        console.log('Сумма за пропуск: ' + pass);
        console.log('Сумма за км от Мкад: ' + mkad);

        total = summAuto + summ + count + pass + mkad;

        document.getElementById('total').value = total;
        console.log(total);
        return summAuto, auto, total, summ, count, pcount;
    };

    return interface;
})();