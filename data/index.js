const val1 = 0;
const val2 = 0;
const val3 = 0;
const val4 = 0;

const butval1 = 0;
const butval2 = 0;
const butval3 = 0;
const butval4 = 0;

let sor1 = 0;
let sor2 = 0;
let sor3 = 0;

if(val1>180) sor1++;
if(val1>360) sor1++;
if(val1>540) sor1++;
if(val1>620) sor1++;

if(val2>180) sor2++;
if(val2>360) sor2++;
if(val2>540) sor2++;
if(val2>620) sor2++;

if(val3>100) sor3++;
if(val3>230) sor3++;
if(val3>400) sor3++;
if(val3>540) sor3++;

//egyenlosegek
if(sor1===sor2 && sor1>sor3); //13.kep
if(sor1===3 && sor2===3 && sor3===3); //14.kep
if(sor1===4 && sor2===4 && sor3===4); //15.kep

//csak 1.sor
if(sor1===1 && sor2===0 && sor3===0); //01.kep
if(sor1===2 && sor2===0 && sor3===0); //02.kep
if(sor1===3 && sor2===0 && sor3===0); //03.kep
if(sor1===4 && sor2===0 && sor3===0); //04.kep
//csak 2.sor
if(sor1===0 && sor2===1 && sor3===0); //05.kep
if(sor1===0 && sor2===2 && sor3===0); //06.kep
if(sor1===0 && sor2===3 && sor3===0); //07.kep
if(sor1===0 && sor2===4 && sor3===0); //08.kep
//csak 3.sor
if(sor1===0 && sor2===0 && sor3===1); //09.kep
if(sor1===0 && sor2===0 && sor3===2); //10.kep
if(sor1===0 && sor2===0 && sor3===3); //11.kep
if(sor1===0 && sor2===0 && sor3===4); //12.kep

//vidam a legnagyobb
if(sor1>0 && sor2<sor1 && sor3<sor1 && sor2<3 && sor3<3 && (sor2>0 || sor3>0)); //16.kep


/*
//egyenlosegek
if(val1<180 && val2<180 && val3<100 || val1>180 && val1<360 && aaaaaaaaaay ){
    //13.kép
}

//csak 1.sor
else if(val1>180 && val1<360 && val2<180 && val3<100) {
    //1.kép
}
else if(val1>360 && val1<540 && val2<180 && val3<100) {
    //2.kép
}
else if(val1>540 && val1<620 && val2<180 && val3<100) {
    //3.kép
}
else if(val1>620 && val2<180 && val3<100) {
    //4.kép
}

//csak 2.sor
*/
