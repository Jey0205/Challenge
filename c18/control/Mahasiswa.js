import { db } from '../model/model.js';
import questionMhs from "../view/test";
import { templateGaris, templateMurid } from "../view/test"
let Table = require("cli-table");
export default class Mahasiswa {
    constructor(NIM, Nama, Alamat, Jurusan, Umur) {
        this.tampil = `SELECT * FROM Mahasiswa;`
        this.cari = `SELECT * FROM Mahasiswa where NIM = '${NIM}';`
        this.tambah = `INSERT INTO Mahasiswa VALUES('${NIM}','${Nama}','${Alamat}','${Jurusan}','${Umur}');`
        this.hapus = `DELETE FROM Mahasiswa where NIM = '${NIM}';`
    }

    show(a) {
        db.all(this.tampil, (err, data) => {
            if (err) throw err
            if (data) {
                let table = new Table({
                    head: ['NIM', 'Nama', 'Jurusan']
                })
                data.forEach((msw) => {
                    table.push([`${msw.NIM}`, `${msw.Nama}`, `${msw.Jurusan}`])

                });
                console.log(table.toString())
                a()

            } else {
                console.log("Tidak ada data");
            }
        })


    }
    find(a) {
        db.get(this.cari, (err, row) => {
            if (err) throw err;

            if (row) {

                console.log(templateGaris);
                console.log("Detail Mahasiswa");
                console.log(templateGaris);
                console.log(`NIM\t: ${row.NIM}`);
                console.log(`Nama\t: ${row.Nama}`);
                console.log(`Alamat\t: ${row.Alamat}`);
                console.log(`Jurusan\t: ${row.Jurusan}`);
                console.log(templateGaris);
                console.log(templateMurid)
                console.log(templateGaris);
                a();

            } else {
                console.log(`Data tidak ditemukan!`);
                console.log(templateGaris);
                questionMhs();
            }
        });
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

