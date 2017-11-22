const socket = io.connect('localhost:8000');
const img = document.getElementById('emoji');
const chImg = n =>{
    const d = 'img/' + n + '.svg';
    if(!img.src.endsWith(d)) img.src = d;
};

socket.on('data', function (v) {
    const b = v.slice(3);

    let sor1 = 0;
    let sor2 = 0;
    let sor3 = 0;

    if (v[1] > 180) sor1++;
    if (v[1] > 360) sor1++;
    if (v[1] > 540) sor1++;
    if (v[1] > 620) sor1++;

    if (v[2] > 180) sor2++;
    if (v[2] > 360) sor2++;
    if (v[2] > 540) sor2++;
    if (v[2] > 620) sor2++;

    if (v[3] > 100) sor3++;
    if (v[3] > 230) sor3++;
    if (v[3] > 370) sor3++;
    if (v[3] > 490) sor3++;

//egyenlosegek
    if ((sor1 === sor2 && sor1 >= sor3 && sor1<3) ||
        (sor2 === sor3 && sor3 >= sor1 && sor2<3) ||
        (sor1 === sor3 && sor3 >= sor2 && sor1<3)) chImg(13);

//csak 1.sor
    if (sor1 === 1 && sor2 === 0 && sor3 === 0) chImg(1);
    if (sor1 === 2 && sor2 === 0 && sor3 === 0) chImg(2); //02.kep
    if (sor1 === 3 && sor2 === 0 && sor3 === 0) chImg(3); //03.kep
    if (sor1 === 4 && sor2 === 0 && sor3 === 0) chImg(4); //04.kep
//csak 2.sor
    if (sor1 === 0 && sor2 === 1 && sor3 === 0) chImg(5); //05.kep
    if (sor1 === 0 && sor2 === 2 && sor3 === 0) chImg(6); //06.kep
    if (sor1 === 0 && sor2 === 3 && sor3 === 0) chImg(7); //07.kep
    if (sor1 === 0 && sor2 === 4 && sor3 === 0) chImg(8); //08.kep
//csak 3.sor
    if (sor1 === 0 && sor2 === 0 && sor3 === 1) chImg(9); //09.kep
    if (sor1 === 0 && sor2 === 0 && sor3 === 2) chImg(10); //10.kep
    if (sor1 === 0 && sor2 === 0 && sor3 === 3) chImg(11); //11.kep
    if (sor1 === 0 && sor2 === 0 && sor3 === 4) chImg(12); //12.kep

//vidam a legnagyobb
    if (sor1 > 0 && sor2 < sor1 && sor3 < sor1 && sor2 < 3 && sor3 < 3 && (sor2 > 0 || sor3 > 0)) ; //16.kep
});
