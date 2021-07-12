import { db } from '../model/model.js';
let Table = require("cli-table");
import { templateGaris, templateMatkul } from "../view/test"
export default class Matkul {
    constructor(Matkul_id, Nama, SKS) {
        this.tampil = `SELECT * FROM Matkul;`
        this.cari = `SELECT * FROM Matkul WHERE Matkul_id = '${Matkul_id}';`
        this.tambah = `INSERT INTO Matkul VALUES('${Matkul_id}','${Nama}','${SKS}');`
        this.hapus = `DELETE FROM Matkul where Matkul_id = '${Matkul_id}';`;
    }

    show(a) {
        db.all(this.tampil, (err, data) => {
            if (err) {
                console.log(err.mesage)
            } else if (data) {
                let table = new Table({
                    head: ['Matkul ID', 'Nama Matkul', 'SKS']
                })
                data.forEach((matkul) => {
                    table.push([`${matkul.Matkul_id}`, `${matkul.Nama}`, `${matkul.SKS}`])

                });
                console.log(table.toString())
                a()
            } else {
                console.log("Tidak ada data");
            }
        })


    }
    find(a) {
        db.get(this.cari, (err, data) => {
            if (err) {
                console.log(err.message)
            } else if (data) {
                
                    console.log(templateGaris);
                    console.log("Matkul details");
                    console.log(templateGaris);
                    console.log(`Kode Matkul\t: ${data.Matkul_id}`);
                    console.log(`Nama Matkul\t: ${data.Nama}`);
                    console.log(`Jumlah SKS\t: ${data.SKS}`);
                    console.log(templateGaris);
                    console.log(templateMatkul);
                    console.log(templateGaris);
                a()
            } else {
                console.log("Tidak ada Data")
            }

        })
    }
    add() {
        db.run(this.tambah, (err) => {
            if (err) throw err;
        });
    }

    delete() {
        db.run(this.hapus, (err) => {
            if (err) throw err;
        });
    }
}

