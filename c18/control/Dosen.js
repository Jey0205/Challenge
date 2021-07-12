import { db } from '../model/model.js';
let Table = require("cli-table");
import { templateGaris, templateDosen } from "../view/test"
export default class Dosen {
    constructor(Dosen_id, Nama) {
        this.tampil = `SELECT * FROM Dosen;`
        this.cari = `SELECT * FROM Dosen WHERE Dosen_id = '${Dosen_id}';`
        this.tambah = `INSERT INTO Dosen VALUES('${Dosen_id}','${Nama}');`
        this.hapus = `DELETE FROM Dosen where Dosen_id = '${Dosen_id}';`
    }

    show(a) {
        db.all(this.tampil, (err, data) => {
            if (err) {
                console.log(err.mesage)
            } else if (data) {
                let table = new Table({
                    head: ['Dosen ID', 'Nama Dosen']
                })
                data.forEach((dsn) => {
                    table.push([`${dsn.Dosen_id}`, `${dsn.Nama}`])

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
                    console.log("Dosen Details");
                    console.log(templateGaris);
                    console.log(`Kode Dosen\t: ${data.Dosen_id}`);
                    console.log(`Nama Dosen\t: ${data.Nama}`);
                    console.log(templateGaris);
                    console.log(templateDosen);
                    console.log(templateGaris)
              
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

