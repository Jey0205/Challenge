const readline = require('readline')
import { db } from "../model/model";
import Mahasiswa from "../control/Mahasiswa";
import Jurusan from "../control/Jurusan";
import Dosen from "../control/Dosen";
import Matkul from "../control/Matkul";
import Kontrak from "../control/Kontrak";
const templateAwal = 'Pilihlah salah satu opsi dibawah ini:\n [1] Mahasiswa\n [2] Jurusan\n [3] Dosen\n [4] Mata Kuliah\n [5] Kontrak\n [6] Keluar'
const templateMurid = 'Pilihlah salah satu opsi dibawah ini:\n [1] Daftar murid\n [2] Cari murid\n [3] Tambah murid\n [4] Hapus murid\n [5] Kembali'
const templateDosen = 'Pilihlah salah satu opsi dibawah ini:\n [1] Daftar dosen\n [2] Cari dosen\n [3] Tambah dosen\n [4] Hapus dosen\n [5] Kembali'
const templateJurusan = 'Pilihlah salah satu opsi dibawah ini:\n [1] Daftar jurusan\n [2] Cari jurusan\n [3] Tambah jurusan\n [4] Hapus jurusan\n [5] Kembali'
const templateMatkul = 'Pilihlah salah satu opsi dibawah ini:\n [1] Daftar Mata Kuliah\n [2] Cari Mata Kuliah\n [3] Tambah Mata Kuliah\n [4] Hapus Mata Kuliah\n [5] Kembali'
const templateGaris = '====================================================================================================='
const templateKontrak = 'Pilihlah salah satu opsi dibawah ini:\n [1] Daftar Kontrak\n [2] Cari Kontrak\n [3] Tambah Kontrak\n [4] Hapus Kontrak\n [5] Kembali'

console.log('Welcome to Universitas Pendidikan Indonesia\n Jl.Setiabudhi no.255')
console.log(templateGaris)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

function login() {
    rl.question('Username : ', (user) => {
        console.log(templateGaris);
        rl.question('Password : ', (pass) => {
            if (pass.toLowerCase() == 'admin') {
                console.log(`${templateGaris}\nSelamat Datang, ${user}. Akses level anda : Admin\n${templateGaris}`)
                console.log(templateAwal, `\n${templateGaris}`)
                menuAwal()
            } else {
                console.log(`${templateGaris}\nPassword yang anda masukan salah!!!!\n${templateGaris}`);
                login()
            }
        })
    })

}
function menuAwal() {
    rl.question('Silahkan pilih opsi di atas : ', (opsi) => {
        if (opsi == '1') {
            console.log(`${templateGaris}\n${templateMurid}\n${templateGaris}`)
            mahasiswa()
        } else if (opsi ==  '2') {
            console.log(templateJurusan, `\n${templateGaris}`)
            jurusan()
        } else if (opsi ==  '3') {
            console.log(templateDosen, `\n${templateGaris}`)
            dosen()
        } else if (opsi ==  '4') {
            console.log(templateMatkul, `\n${templateGaris}`)
            matkul()
        } else if (opsi ==  '5') {
            console.log(templateKontrak, `\n${templateGaris}`)
            kontrak()
        } else if (opsi ==  '6') {
            console.log(`${templateGaris}\nAnda telah keluar\n${templateGaris}`)
            login()
        } else {
            console.log(templateAwal, `\n${templateGaris}`)
            menuAwal()
        }
    })
}

function mahasiswa() {
    rl.question('Silahkan pilih opsi di atas : ', (opsi) => {
        if (opsi == '1') {
            let mhs = new Mahasiswa()
            mhs.show(() => {
                console.log(`${templateGaris}\n${templateMurid}\n${templateGaris}`)
                mahasiswa()
            })



            console.log(templateGaris)
            rl.question('Masukan nim : ', (nim) => {
                let mhs = new Mahasiswa(nim)
                mhs.find(() => mahasiswa())
            })


        } else if (opsi == '3') {
            console.log(`${templateGaris}\n Silahkan masukan data ! \n${templateGaris}`)

            rl.question('Masukan nim : ', (nim) => {
                rl.question('Masukan Nama : ', (Nama) => {
                    rl.question('Masukan Alamat : ', (Alamat) => {
                        rl.question('Masukan Jurusan : ', (Jurusan) => {
                            rl.question('Masukan Umur : ', (Umur) => {
                                let mhs = new Mahasiswa(nim, Nama, Alamat, Jurusan, Umur)
                                mhs.add(() => {
                                    console.log(`${templateGaris}\n`);
                                })
                                mhs.show(() => {
                                    console.log(`${templateGaris}\n${templateMurid}\n${templateGaris}`)
                                    mahasiswa()
                                })
                            })
                        })
                    })
                })
            })

        } else if (opsi == '4') {
            console.log(`${templateGaris}\n Silahkan masukan data ! \n${templateGaris}`)
            rl.question('Masukan nim yang akan dihapus : ', (nim) => {
                let mhs = new Mahasiswa(nim)
                mhs.delete()
                mhs.show(() => {
                    console.log(`${templateGaris}\n`);
                    console.log(`Mahasiswa dengan nim ${nim} telah dihapus.\n`)
                    console.log(`${templateGaris}\n${templateMurid}\n${templateGaris}`)
                    mahasiswa()
                })
            })
        } else if (opsi == '5') {
            console.log(`${templateGaris}\n${templateAwal}\n${templateGaris}`)
            menuAwal()
        } else {
            console.log(`${templateMurid}\n${templateGaris}`);
            mahasiswa()
        }
    })
}

function dosen() {
    rl.question('Silahkan pilih opsi di atas : ', (opsi) => {
        if (opsi =='1') {
            let dos = new Dosen()
            dos.show(() => {
                console.log(`${templateGaris}\n${templateDosen}\n${templateGaris}`)
                dosen()
            })
        } else if (opsi == '2') {
            console.log(templateGaris)
            rl.question('Masukan Dosen ID : ', (Dosen_id) => {
                let dos = new Dosen(Dosen_id)
                dos.find(() => dosen())
            })
        } else if (opsi == '3') {
            console.log(`${templateGaris}\n Silahkan masukan data ! \n${templateGaris}`)
            rl.question('Masukan Dosen ID : ', (Dosen_id) => {
                rl.question('Masukan Nama Dosen baru : ', (Nama) => {
                    let dos = new Dosen(Dosen_id, Nama)
                    dos.add(() => {
                        console.log(`${templateGaris}\n`);
                    })
                    dos.show(() => {
                        console.log(`${templateGaris}\n${templateDosen}\n${templateGaris}`)
                        dosen()
                    })

                })
            })
        } else if (opsi == '4') {
            console.log(`${templateGaris}\n Silahkan masukan data ! \n${templateGaris}`)
            rl.question('Masukan Id Dosen yang akan dihapus : ', (Dosen_id) => {
                let dos = new Dosen(Dosen_id)
                dos.delete()
                dos.show(() => {
                    console.log(`${templateGaris}\n`);
                    console.log(`Dosen dengan ID ${Dosen_id} telah dihapus.\n`)
                    console.log(`${templateGaris}\n${templateDosen}\n${templateGaris}`)
                    dosen()
                })
            })
        } else if (opsi == '5') {
            console.log(`${templateGaris}\n${templateAwal}\n${templateGaris}`)
            menuAwal()
        } else {
            console.log(`${templateDosen}\n${templateGaris}`);
            dosen()
        }
    })

}

function jurusan() {
    rl.question('Silahkan pilih opsi di atas : ', (opsi) => {
        if (opsi == '1') {
            let jrs = new Jurusan()
            jrs.show(() => {
                console.log(`${templateGaris}\n${templateJurusan}\n${templateGaris}`)
                jurusan()
            })
        } else if (opsi == '2') {
            console.log(templateGaris)
            rl.question('Masukan Jurusan ID : ', (Jurusan_id) => {
                let jrs = new Jurusan(Jurusan_id)
                jrs.find(() => jurusan())
            })
        } else if (opsi == '3') {
            console.log(`${templateGaris}\n Silahkan masukan data ! \n${templateGaris}`)
            rl.question('Masukan Jurusan ID : ', (Jurusan_id) => {
                rl.question('Masukan Nama Dosen baru : ', (Nama_Jurusan) => {
                    let jrs = new Jurusan(Jurusan_id, Nama_Jurusan)
                    jrs.add(() => {
                        console.log(`${templateGaris}\n`);
                    })
                    jrs.show(() => {
                        console.log(`${templateGaris}\n${templateJurusan}\n${templateGaris}`)
                        jurusan()
                    })

                })
            })
        } else if (opsi == '4') {
            console.log(`${templateGaris}\n Silahkan masukan data ! \n${templateGaris}`)
            rl.question('Masukan Id Jurusan yang akan dihapus : ', (Jurusan_id) => {
                let jrs = new Jurusan(Jurusan_id)
                jrs.delete()
                jrs.show(() => {
                    console.log(`${templateGaris}\n`);
                    console.log(`Jurusan dengan ID ${Jurusan_id} telah dihapus.\n`)
                    console.log(`${templateGaris}\n${templateJurusan}\n${templateGaris}`)
                    jurusan()
                })
            })
        } else if (opsi == '5') {
            console.log(`${templateGaris}\n${templateAwal}\n${templateGaris}`)
            menuAwal()
        } else {
            console.log(`${templateJurusan}\n${templateGaris}`);
            jurusan()
        }
    })
}

function matkul() {
    rl.question('Silahkan pilih opsi di atas : ', (opsi) => {
        if (opsi == '1') {
            let mat = new Matkul()
            mat.show(() => {
                console.log(`${templateGaris}\n${templateMatkul}\n${templateGaris}`)
                matkul()
            })
        } else if (opsi == '2') {
            console.log(templateGaris)
            rl.question('Masukan Matkul ID : ', (Matkul_id) => {
                let mat = new Matkul(Matkul_id)
                mat.find(() => matkul())
            })
        } else if (opsi == '3') {
            console.log(`${templateGaris}\n Silahkan masukan data ! \n${templateGaris}`)
            rl.question('Masukan Jurusan ID : ', (Matkul_id) => {
                rl.question('Masukan nama Mata Kuliah baru : ', (Nama) => {
                    rl.question('Masukan Jumlah SKS : ', (sks) => {
                        let mat = new Matkul(Matkul_id, Nama, sks)
                        mat.add(() => {
                            console.log(`${templateGaris}\n`);
                        })
                        mat.show(() => {
                            console.log(`${templateGaris}\n${templateJurusan}\n${templateGaris}`)
                            matkul()
                        })

                    })
                })
            })
        } else if (opsi == '4') {
            console.log(`${templateGaris}\n Silahkan masukan data ! \n${templateGaris}`)
            rl.question('Masukan Id Jurusan yang akan dihapus : ', (Matkul_id) => {
                let jrs = new Matkul(Matkul_id)
                jrs.delete()
                jrs.show(() => {
                    console.log(`${templateGaris}\n`);
                    console.log(`Matkul dengan ID ${Matkul_id} telah dihapus.\n`)
                    console.log(`${templateGaris}\n${templateJurusan}\n${templateGaris}`)
                    matkul()
                })
            })
        } else if (opsi == '5') {
            console.log(`${templateGaris}\n${templateAwal}\n${templateGaris}`)
            menuAwal()
        } else {
            console.log(`${templateJurusan}\n${templateGaris}`);
            matkul()
        }
    })
}

function kontrak() {
    rl.question('Silahkan pilih opsi di atas : ', (opsi) => {
        if (opsi == '1') {
            let knt = new Kontrak()
            knt.show(() => {
                console.log(`${templateGaris}\n${templateKontrak}\n${templateGaris}`)
                kontrak()
            })
        } else if (opsi == '2') {
            console.log(templateGaris)
            let knt = new Kontrak()
            knt.show(() => {
                console.log(`${templateGaris}\n${templateKontrak}\n${templateGaris}`)

                rl.question('Masukan NIM : ', (nim) => {
                    let knt = new Kontrak(nim)
                    knt.find(() => kontrak())
                })
            })
        } else if (opsi == '3') {
            console.log(`${templateGaris}\n Silahkan masukan data ! \n${templateGaris}`)
           let mahs = new Mahasiswa()
           let mtkl = new Matkul()
           mahs.show(() =>{
               rl.question('silahkan masukan NIM berdasarkan tabel diatas : ',(nim) =>{
                mtkl.show(() =>{
                    rl.question('Masukan Kode Matkul berdasarkan tabel diatas : ',(Kode_Matkul) =>{
                        rl.question('Masukan SKS : ',(sks) =>{
                            rl.question('Masukan Nilai : ', (Nilai) =>{
                                let knt = new Kontrak(nim,Kode_Matkul,sks,Nilai)
                                knt.add()
                                knt.show(() =>{
                                    console.log(`${templateGaris}\n Data telah ditambahkan \n${templateGaris}`)
                                    kontrak()
                                })
                            })
                        })
                    })
                })
               })
           })
        } else if (opsi == '4') {
            console.log(`${templateGaris}\n Silahkan masukan data ! \n${templateGaris}`)
            rl.question('NIM yang akan dihapus : ', (Kode_Kontrak) => {
                let knt = new Kontrak(Kode_Kontrak)
                knt.delete()
                knt.show(() => {
                    console.log(`${templateGaris}\n`);
                    console.log(`Kode Kontrak ${Kode_Kontrak} telah dihapus.\n`)
                    console.log(`${templateGaris}\n${templateKontrak}\n${templateGaris}`)
                    kontrak()
                })
            })
        } else if (opsi == '5') {
            console.log(`${templateGaris}\n${templateAwal}\n${templateGaris}`)
            menuAwal()
        } else {
            console.log(`${templateKontrak}\n${templateGaris}`);
            kontrak()
        }

    })
}

export default function questionMhs() {

    rl.question("Masukkan nim : ", (nim) => {
        let mhs = new Mahasiswa(nim);
        mhs.find(() => mahasiswa());
    });
}

export { rl, readline };
export { templateGaris, templateAwal, templateJurusan, templateDosen, templateMurid, templateKontrak, templateMatkul }
login()