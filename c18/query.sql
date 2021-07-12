
CREATE TABLE Mahasiswa(
	
	NIM VARCHAR(10),
	Nama VARCHAR(50),
	Alamat VARCHAR,
	Jurusan VARCHAR(50),
    Umur INTEGER
);

CREATE TABLE Jurusan(
    Jurusan_id INTEGER PRIMARY KEY AUTOINCREMENT,
    Nama_Jurusan VARCHAR(50)
);

CREATE TABLE Dosen(
    Dosen_id INTEGER PRIMARY KEY AUTOINCREMENT,
    Nama VARCHAR(50)
);

CREATE TABLE Matkul(
    Matkul_id INTEGER PRIMARY KEY AUTOINCREMENT,
    Nama VARCHAR(50),
    SKS INTEGER
);

CREATE TABLE SKS(
    SKS_id INTEGER PRIMARY KEY AUTOINCREMENT,
    Nama VARCHAR(50),
    Jumlah_SKS INTEGER
);

CREATE TABLE Nilai(
    Nilai_id INTEGER PRIMARY KEY AUTOINCREMENT,
    Nama VARCHAR(50),
    Nilai_Mahasiswa VARCHAR(1)
);

CREATE TABLE Kontrak(
    Kontrak_id INTEGER PRIMARY KEY AUTOINCREMENT,
    Nama_Matkul varchar(20) not null,
    NIM varchar(10),
    SKS int(3),

    FOREIGN KEY(SKS) REFERENCES Matkul(SKS),
    FOREIGN KEY(Nama_Matkul) REFERENCES Matkul(Matkul_id),
    FOREIGN KEY(NIM) REFERENCES Mahasiswa(NIM)
);



INSERT INTO Mahasiswa(NIM,Nama,Alamat,Jurusan, Umur)

VALUES  ("0202543211","Ari Sutisna","jl.Jerapah No.43",1,18),
        ("0202543212","Bima Aria","jl.Gajah No.21",1,21),
        ("0202542111","Cecilia Lawrence","jl.Kota Baru No.22",2,19),
        ("0202542112","Dadang Melawai","jl.Kota Lama No.21",2,22),
        ("0202541111","Edwin Zola","jl.Banteng No.13",3,23),
        ("0202541112","Frank Volhikar","jl.Kota Baru No.29",3,20);


INSERT INTO Jurusan(Nama_Jurusan)

VALUES  ("Matematika Terapan"),
        ("Teknologi Informatika"),
        ("Ilmu Sosiologi");


INSERT INTO Dosen(Nama)

VALUES("Fajar Nur Mulyana");

INSERT INTO Matkul(Nama,SKS)

VALUES  ("Matematika",4),
        ("English",4),
        ("Data Mining",4);

INSERT INTO SKS(Nama, Jumlah_SKS)

VALUES  ("Ari Sutisna", 8),
        ("Bima Arya", 10),
        ("Cecilia Lawrence", 12),
        ("Dadang Melawai", 10),
        ("Edwin Zola", 6),
        ("Frank Volhikar", 12);

INSERT INTO Nilai(Nama, Nilai_Mahasiswa)        

VALUES  ("Ari Sutisna", "C"),
        ("Bima Arya", "B"),
        ("Cecilia Lawrence", "A"),
        ("Dadang Melawai", "B"),
        ("Edwin Zola", "D"),
        ("Frank Volhikar", "A");


INSERT INTO Kontrak(Nama_Matkul, NIM, SKS) 
VALUES
('Data Mining', '0202542111', 8),
('English', '0202543212', 6),
('Matematika', '0202542111', 7),
('English', '0202542111', 6),
('Matematika', '0202541112', 7),
('English', '0202541112', 6),
('Data Mining', '0202541112', 8);        

SELECT * FROM Mahasiswa;

SELECT * FROM Mahasiswa WHERE Umur < 20;

SELECT * FROM Nilai WHERE Nilai_Mahasiswa >= "B";

SELECT Mahasiswa.NIM, Mahasiswa.Nama, Jumlah_SKS FROM Mahasiswa, SKS
WHERE Mahasiswa.Nama = SKS.Nama and Jumlah_SKS >= 10;

SELECT Mahasiswa.NIM , Mahasiswa.Nama, Mahasiswa.Jurusan , Matkul.Nama as Mata_Kuliah
FROM Mahasiswa, Matkul WHERE Matkul.Nama = "Data Mining";

SELECT Dosen.Nama, COUNT(Mahasiswa.Nama) as Jumlah_Mahasiswa FROM Dosen, Mahasiswa; 

SELECT * FROM Mahasiswa ORDER BY Umur ASC;

SELECT Mahasiswa.Nama , Mahasiswa.NIM, Mahasiswa.Jurusan, Matkul.Nama as Mata_Kuliah, Nilai.Nilai_Mahasiswa, Dosen.Nama as Dosen
FROM Mahasiswa LEFT JOIN Nilai ,Matkul, Dosen WHERE Mahasiswa.Nama = Nilai.Nama and Nilai_Mahasiswa > "C";
