import { db } from '../model/model.js';
let Table = require("cli-table");
import { templateGaris, templateJurusan } from "../view/test"
export default class Jurusan {
    constructor(Jurusan_id, Nama_Jurusan) {
        this.tampil = `SELECT * FROM Jurusan;`
        this.cari = `SELECT * FROM Jurusan WHERE Jurusan_id = '${Jurusan_id}'`
        this.tambah = `INSERT INTO Jurusan VALUES('${Jurusan_id}','${Nama_Jurusan}')`
        this.hapus = `DELETE FROM Jurusan where Jurusan_id = '${Jurusan_id}'`;
    }

    show(a) {
        db.all(this.tampil, (err, data) => {
            if (err) {
                console.log(err.mesage)
            } else if (data) {
                let table = new Table({
                    head: ['Jurusan ID', 'Nama Jurusan']
                })
                data.forEach((jrs) => {
                    table.push([`${jrs.Jurusan_id}`, `${jrs.Nama_Jurusan}`])

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
                    console.log("Jurusan details");
                    console.log(templateGaris);
                    console.log(`Kode Jurusan\t: ${data.Jurusan_id}`);
                    console.log(`Nama Jurusan\t: ${data.Nama_Jurusan}`);
                    console.log(templateGaris);
                    console.log(templateJurusan);
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

