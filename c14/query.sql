

CREATE TABLE Mahasiswa(
	Mahasiswa_id AUTO INCREMENT PRIMARY KEY,
	NIM VARCHAR(10),
	Nama VARCHAR(50),
	Alamat VARCHAR,
	Jurusan VARCHAR(50)
);

CREATE TABLE Jurusan(
    Jurusan_id AUTO INCREMENT PRIMARY KEY,
    Nama_Jurusan VARCHAR(50)
);

CREATE TABLE Dosen(
    Dosen_id AUTO INCREMENT PRIMARY KEY,
    Nama VARCHAR(50)
);

CREATE TABLE Matkul(
    Matkul_id AUTO INCREMENT PRIMARY KEY,
    Nama VARCHAR(50),
    SKS VARCHAR(50)
);


INSERT INTO Mahasiswa(
    NIM,
    Nama,
    Alamat,
    Jurusan
)

VALUES(
    "2020302130120",
    "Fajar Nur Mulyana",
    "jl.H.Kurdi II/V No.405",
    "Matematika Terapan"
);


INSERT INTO Jurusan(
    Nama_Jurusan
)

VALUES(
    "Matematika Terapan"
);


INSERT INTO Dosen(
    Nama
)

VALUES(
    "Muhammad Hadi"
);

INSERT INTO Matkul(
    Nama,
    SKS
)

VALUES(
    "Matematika",
     "2"
);