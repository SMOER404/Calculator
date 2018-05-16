        var calcData = (function () {
            var count = 0;
            var bs = 0;
            var box = 0;
            var skin = 0;
            var carton = 0;
            var interface = {};

            interface.addBubbleSkin = function (e) {
                count += e;
                bs++;
                document.getElementById('span1').innerHTML = bs;
                console.log(bs + '+ Пузырчатая плёнка: ' + count);
            };

            interface.removeBubbleSkin = function (e) {
                if (bs > 0 || count > 0) {
                count -= e;
                bs--;
                document.getElementById('span1').innerHTML = bs;
                console.log('- Пузырчатая плёнка: ' + count);
                }
            };

            interface.addBox = function (e) {
                count += e;
                box++;
                document.getElementById('span2').innerHTML = box;
                console.log('+ коробка: ' + count);
            };

            interface.removeBox = function (e) {
                if (box > 0 || count > 0) {
                count -= e;
                box--;
                document.getElementById('span2').innerHTML = box;
                console.log('- коробка: ' + count);
                }
            };


            interface.addSkin = function (e) {
                count += e;
                skin++;
                document.getElementById('span3').innerHTML = skin;
                console.log('+ Стрэйч плёнка: ' + count);
            };

            interface.removeSkin = function (e) {
                if (skin > 0 || count > 0){
                count -= e;
                skin--;
                document.getElementById('span3').innerHTML = skin;
                console.log('- Стрэйч плёнка: ' + count);
                }
            };

            interface.addCarton = function (e) {
                count += e;
                carton++;
                document.getElementById('span4').innerHTML = carton;
                console.log('+ Картон: ' + count);
            };

            interface.removeCarton = function (e) {
                if (carton > 0 || count > 0) {
                count -= e;
                carton--;
                document.getElementById('span4').innerHTML = carton;
                console.log('- Картон: ' + count);
                }
            };


            interface.getCounter = function () {
                document.getElementById('total').value = count;
                console.log(count);
                return count;
            }

            return interface;
        })();

        var calcPersonal = (function () {
            var person = 0;
            var pcount = 0;
            var time = 4;
            var summ;
            var interface = {};

            interface.addPersonal = function (e) {
                pcount += e;
                person++;
                document.getElementById('personal').innerHTML = person;
                console.log('+ Грузчик: ' + pcount);

            };

            interface.removePersonal = function (e) {
                
                if(person > 0 || pcount > 0) {
                pcount -= e;
                person--;
                document.getElementById('personal').innerHTML = person;
                console.log('- Грузчик: ' + pcount);
                }
            };

            interface.addTime = function (e) {
                time++;
                document.getElementById('time').innerHTML = time;
                console.log(time);
            }
                                                                                 // РАБОЧАЯ ПРОВЕРКА
            interface.removeTime = function (e) {
                if(time > 4) {
                time--;
                document.getElementById('time').innerHTML = time;
                console.log(time);
                }

            }

            interface.summPersonal = function () {
                summ = pcount * time;
                document.getElementById('total2').value = summ;
                console.log(summ);
                return summ;
            }

            interface.getCounter = function () {
                document.getElementById('').value = pcount;
                console.log(pcount);
                return pcount, i;
            }

            return interface;
        })();