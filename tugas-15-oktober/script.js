/*  1.Tulislah program untuk menentukan angka ganjil dan genap !
    2.Buatlah program looping dari 1 hingga 15 yang nantinya angka akan di cetak dengan tambahan kondisi di dalam looping, yaitu :
    -jika angka bisa dibagi 3, maka cetak "fazz" bukan angka
    -jika angka bisa dibagi 5, maka cetak "track" bukan angka
    -jika angka bisa dibagi 3 & 5, maka cetak "fazztrack" bukan angka
    -jika tidak memenuhi kondisi di atas maka akan cetak angka
*/
//tugas 1
function ganjilAtauGenap (parameter){
    //deklarasi variable bilangan
    let bilangan;
    //menambahkan kondisi if else
    if(parameter % 2 == 0 ){
        bilangan = "genap";
    }
    else if (parameter % 2 == 1 ){
        bilangan = "ganjil";
    }
    else{
        bilangan = "bukan bilangan ganjil ataupun genap";
    }
    console.log("Jadi angka "+parameter+" adalah "+bilangan);
};
//memanggil function ganjilAtauGenap
// ganjilAtauGenap(1/2);




// tugas nomor 2

//deklarasi variable angka
let angka = 15;
//menambahkan perulangan atau looping for
for(let x = 1; x <= angka ; x++){
    if(x % 3 == 0 && x % 5 == 0 ){
        console.log("fazztrack");
    }
    else if(x % 3 == 0 ){
        console.log("fazz");
    }
    else if(x % 5 == 0 ){
        console.log("track");
    }
    else{
        console.log(x)
    }
};




