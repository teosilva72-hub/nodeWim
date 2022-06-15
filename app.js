const sql = require('./conn')
const fs = require('fs');

const data = new Date().toLocaleDateString();
Data(data);
const path = `C:/Cameras/WIM/WIM_01/${Data(data)}`;
listFiles(path);

function Data(data) {
    data = data.split('/');
    data = `${data[2]}${data[1]}${data[0]}`;
    return data;
}

function listFiles(path) {
    const files = {};
    fs.readdir(path, (err, arq) => {
        if (err) {
            console.log(err)
        } else {
            for (var i = 0; i < arq.length; i++) {
                files[i] = arq;
            }
            getFile(files[0]);
        }
    })
}
const img = [],
    plate = [],
    equip = [],
    date = [];

function getFile(files) {
    for (var i = 0; i < files.length; i++) {
        if (files[i].split('.').pop() != 'DAT') {

            let Array = files[i].split('_');
            img[i] = files[i]; //image

            equip[i] = `${Array[0]} ${Array[1]}`; //equipament
            date[i] = verifyDateHour(Array[2]); //date

            let Plate = Array[3].split('.'); //plate
            if (Plate[0] != ''.trim()) {
                plate[i] = Plate[0];
                verifyDate(img[i], equip[i], date[i], plate[i])
            }
        }
    }
}


function verifyDateHour(date) {
    try {
        date = date.split('');
        date = `${date[0]}${date[1]}${date[2]}${date[3]}-${date[4]}${date[5]}-${date[6]}${date[7]} ${date[8]}${date[9]}:${date[10]}${date[11]}:${date[12]}${date[13]}:${date[14]}${date[15]}${date[16]}`;
    } catch (err) {
        //console.log(err);
    }
    return date;
}

function verifyDate(i, e, d, p) {
    saveFilesSQL(i, e, d, p)
}
const insert = `INSERT INTO wim_vbv (siteID) VALUES (?)`;

sql.Conn(insert, 'a', (er) => {
    if (er) console.log(er)
    else console.log(sucesso)
})
async function saveFilesSQL(i, e, d, p) {


}