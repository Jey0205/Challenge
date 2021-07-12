import { db } from '../model/model.js';
let Table = require("cli-table");
import { templateGaris, templateKontrak } from "../view/test"
export default class Kontrak {
    constructor(Kontrak_id,Nama_Matkul,NIM, SKS) {
        this.tampil = `SELECT * FROM Kontrak;`
        this.cari = `SELECT * FROM Kontrak WHERE Kontrak_id = '${Kontrak_id}';`
        this.tambah = `INSERT INTO Kontrak VALUES('${Kontrak_id}','${Nama_Matkul}','${NIM}','${SKS}');`
        this.hapus = `DELETE FROM Kontrak where Kontrak_id = '${Kontrak_id}';`
    }

    show(a) {
        db.all(this.tampil, (err, data) => {
            if (err) {
                console.log(err.mesage)
            } else if (data) {
                let table = new Table({
                    head: ['Kontrak ID', 'Nama Matkul', 'NIM', 'SKS']
                })
                data.forEach((Kontrak) => {
                    table.push([`${Kontrak.Kontrak_id}`, `${Kontrak.Nama_Matkul}`,`${Kontrak.NIM}`, `${Kontrak.SKS}`])

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
                    console.log("Kontrak details");
                    console.log(templateGaris);
                    console.log(`ID Kontrak\t: ${data.Kontrak_id}`);
                    console.log(`Nama Matkul\t: ${data.Nama_Matkul}`);
                    console.log(`NIM Mahasiswa\t: ${data.NIM}`);
                    console.log(`Jumlah SKS\t: ${data.SKS}`);
                    console.log(templateGaris);
                    console.log(templateKontrak);
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

