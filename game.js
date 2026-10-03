const LV=[
{title:'Buku Dosen Hilang',T:30,plays:3,culprit:'ahmad',
 story:'Buku langka milik Ustadz lenyap dari ruang dosen. Empat mahasiswa dicurigai. Cocokkan alibi dengan kesaksian berbahasa Arab.',
 sus:[{k:'khalid',ar:'خَالِد',n:'Khalid',em:'🧑‍🎓'},{k:'fatimah',ar:'فَاطِمَة',n:'Fatimah',em:'👩‍🎓'},{k:'maryam',ar:'مَرْيَم',n:'Maryam',em:'🧕'},{k:'ahmad',ar:'أَحْمَد',n:'Ahmad',em:'🧑‍💼'}],
 key:{q:'Mengapa pelakunya Ahmad?',o:['Karena Khalid juga bertas hitam','Ia bertas hitam dan satu-satunya yang tanpa alibi','Karena Ahmad tidak ke perpustakaan'],a:1},
 clues:[
 {t:'Catatan Ustadz',type:'baca',ar:'كَانَ الْكِتَابُ عَلَى مَكْتَبِي فِي الظُّهْرِ. عِنْدَمَا رَجَعْتُ بَعْدَ الْعَصْرِ لَمْ أَجِدْهُ.',tr:'Buku itu ada di mejaku saat zuhur. Ketika aku kembali setelah asar, aku tidak menemukannya.',q:'Kapan Ustadz baru menyadari bukunya hilang?',o:['Saat zuhur','Setelah asar','Sebelum zuhur'],a:1,note:'Buku hilang di antara zuhur dan asar.'},
 {t:'Saksi: satpam',type:'dengar',ar:'كَانَ خَالِدٌ فِي الْمَكْتَبَةِ مِنَ السَّاعَةِ الْوَاحِدَةِ حَتَّى الْعَصْرِ.',tr:'Khalid ada di perpustakaan dari jam satu sampai asar.',q:'Sampai kapan Khalid berada di perpustakaan?',o:['Sampai zuhur','Sampai asar','Sampai jam satu','Sampai magrib'],a:1,note:'Khalid di perpustakaan sepanjang waktu kejadian.',fx:[{k:'khalid',tag:'Alibi: perpustakaan',clear:1}]},
 {t:'Saksi: penjual kantin',type:'dengar',ar:'لَمْ أَرَ فَاطِمَةَ فِي الْكَانْتِينِ قَبْلَ الْعَصْرِ.',tr:'Aku tidak melihat Fatimah di kantin sebelum asar.',q:'Apa maksud kesaksian penjual kantin?',o:['Fatimah sudah di kantin sejak zuhur','Penjual tidak melihat Fatimah sebelum asar','Fatimah pergi dari kantin setelah asar'],a:1,note:'Alibi kantin Fatimah runtuh. Ia mencurigakan, tapi jangan tuduh dulu.',fx:[{k:'fatimah',tag:'Alibi kantin runtuh',warn:1}]},
 {t:'Saksi: pustakawan',type:'baca',req:[2],ar:'كَانَتْ فَاطِمَةُ تَجْلِسُ بِجَانِبِ خَالِدٍ وَتَكْتُبُ بَحْثًا.',tr:'Fatimah duduk di samping Khalid dan menulis makalah.',q:'Di mana Fatimah dan apa yang ia lakukan?',o:['Di kantin, sedang makan','Di kelas, mendengarkan dosen','Di perpustakaan, menulis makalah'],a:2,note:'Fatimah bersama Khalid di perpustakaan, jadi alibinya sah.',fx:[{k:'fatimah',tag:'Alibi: bersama Khalid',clear:1}]},
 {t:'Saksi: perawat',type:'dengar',ar:'جَاءَتْ مَرْيَمُ إِلَى الْعِيَادَةِ لِأَنَّهَا مَرِيضَةٌ، وَبَقِيَتْ هُنَاكَ حَتَّى الْعَصْرِ.',tr:'Maryam datang ke klinik karena sakit, dan ia tinggal di sana sampai asar.',q:'Mengapa Maryam datang ke klinik?',o:['Karena mencari buku','Karena ia sakit','Karena bertemu dosen'],a:1,note:'Maryam di klinik sampai asar. Ia bebas.',fx:[{k:'maryam',tag:'Alibi: klinik',clear:1}]},
 {t:'Laporan kamera',type:'baca',ar:'خَرَجَ طَالِبٌ مِنْ غُرْفَةِ الْأُسْتَاذِ وَمَعَهُ حَقِيبَةٌ سَوْدَاءُ.',tr:'Seorang mahasiswa keluar dari ruangan Ustadz membawa tas hitam.',q:'Apa yang dibawa mahasiswa yang keluar dari ruangan?',o:['Tas merah','Tas hitam','Sebuah kotak buku'],a:1,note:'Pelaku bertas hitam. Khalid dan Ahmad sama-sama bertas hitam.',fx:[{k:'khalid',tag:'Tas hitam'},{k:'fatimah',tag:'Tas merah muda'},{k:'maryam',tag:'Tas merah'},{k:'ahmad',tag:'Tas hitam'}]}
 ]},
{title:'Laptop Hilang di Asrama',T:25,plays:3,culprit:'hasan',
 story:'Laptop Ali lenyap dari kamarnya saat ia ke masjid. Ada kesaksian yang saling bertabrakan, dan sebagian petunjuk terkunci sampai kamu membuktikan petunjuk sebelumnya.',
 sus:[{k:'hasan',ar:'حَسَن',n:'Hasan',em:'🧑'},{k:'umar',ar:'عُمَر',n:'Umar',em:'👨‍🎓'},{k:'yusuf',ar:'يُوسُف',n:'Yusuf',em:'🧔'},{k:'zaid',ar:'زَيْد',n:'Zaid',em:'👦'}],
 key:{q:'Mengapa pelakunya Hasan?',o:['Hanya karena laptop ada di lemarinya','Ia berbohong soal alibi, tiga lainnya punya alibi kuat, dan laptop ada di lemarinya','Karena Umar tidak menyukainya'],a:1},
 clues:[
 {t:'Pesan Ali',type:'baca',ar:'ذَهَبْتُ إِلَى الْمَسْجِدِ بَعْدَ الْمَغْرِبِ وَرَجَعْتُ بَعْدَ الْعِشَاءِ. تَرَكْتُ الْحَاسُوبَ عَلَى السَّرِيرِ.',tr:'Aku pergi ke masjid setelah magrib dan kembali setelah isya. Aku meninggalkan laptop di tempat tidur.',q:'Kapan kamar Ali kosong?',o:['Sebelum magrib','Antara magrib dan isya','Setelah isya','Sepanjang malam'],a:1,note:'Laptop hilang antara magrib dan isya.'},
 {t:'Pengakuan Hasan',type:'dengar',ar:'قَالَ حَسَنٌ: كُنْتُ فِي الْمَسْجِدِ مَعَ عُمَرَ.',tr:'Hasan berkata: Aku di masjid bersama Umar.',q:'Alibi apa yang diklaim Hasan?',o:['Di dapur bersama Yusuf','Di masjid bersama Umar','Di kamar bersama Zaid','Di luar asrama sendirian'],a:1,note:'Hasan mengaku di masjid bersama Umar. Klaim ini belum diuji.',fx:[{k:'hasan',tag:'Mengaku di masjid'}]},
 {t:'Pengakuan Umar',type:'dengar',req:[1],ar:'قَالَ عُمَرُ: لَمْ أَرَ حَسَنًا فِي الْمَسْجِدِ.',tr:'Umar berkata: Aku tidak melihat Hasan di masjid.',q:'Apa yang Umar katakan tentang Hasan?',o:['Umar melihat Hasan di masjid','Umar tidak melihat Hasan di masjid','Umar bertemu Hasan di dapur'],a:1,note:'Dua kesaksian bertabrakan. Salah satunya berbohong.'},
 {t:'Marbot masjid',type:'baca',req:[2],ar:'كَانَ عُمَرُ فِي الصَّفِّ الْأَوَّلِ مِنَ الْمَغْرِبِ إِلَى الْعِشَاءِ، وَلَمْ يَكُنْ حَسَنٌ فِي الْمَسْجِدِ.',tr:'Umar berada di saf pertama dari magrib sampai isya, dan Hasan tidak ada di masjid.',q:'Siapa yang berbohong, Hasan atau Umar?',o:['Umar berbohong','Hasan berbohong','Keduanya jujur','Keduanya berbohong'],a:1,note:'Hasan berbohong soal alibinya. Umar terbukti di masjid.',fx:[{k:'hasan',tag:'Bohong soal masjid',warn:1},{k:'umar',tag:'Alibi: saf pertama',clear:1}]},
 {t:'Pos jaga',type:'dengar',ar:'خَرَجَ زَيْدٌ مِنَ الْمَهْجَعِ قَبْلَ الْمَغْرِبِ، وَرَجَعَ بَعْدَ الْعِشَاءِ.',tr:'Zaid keluar dari asrama sebelum magrib, dan kembali setelah isya.',q:'Kapan Zaid kembali ke asrama?',o:['Sebelum magrib','Setelah isya','Setelah subuh','Saat magrib'],a:1,note:'Zaid di luar asrama saat laptop hilang.',fx:[{k:'zaid',tag:'Alibi: di luar asrama',clear:1}]},
 {t:'Rekaman dapur',type:'baca',ar:'كَانَ يُوسُفُ فِي الْمَطْبَخِ وَحْدَهُ حَتَّى الْعِشَاءِ، وَالْكَامِيرَا تُسَجِّلُ ذٰلِكَ.',tr:'Yusuf berada di dapur sendirian sampai isya, dan kamera merekamnya.',q:'Apa yang membuktikan Yusuf di dapur?',o:['Kesaksian Hasan','Rekaman kamera','Pengakuan Yusuf sendiri'],a:1,note:'Rekaman kamera membuktikan Yusuf di dapur.',fx:[{k:'yusuf',tag:'Alibi: rekaman dapur',clear:1}]},
 {t:'Hasil penggeledahan',type:'baca',req:[3],ar:'وَجَدُوا الْحَاسُوبَ فِي خِزَانَةِ حَسَنٍ.',tr:'Mereka menemukan laptop di lemari Hasan.',q:'Di mana laptop ditemukan?',o:['Di dapur','Di lemari Hasan','Di masjid','Di kamar Zaid'],a:1,note:'Laptop ada di lemari Hasan, pembohong tadi.',fx:[{k:'hasan',tag:'Laptop di lemarinya',warn:1}]}
 ]},
{title:'Uang Kas Hilang',T:20,plays:2,culprit:'nur',
 story:'Uang kas kelas hilang dari lemari. Kini ada hitungan waktu, pengakuan palsu, dan kunci yang dipegang orang yang salah. Hanya 2 kali putar suara per kesaksian.',
 sus:[{k:'salim',ar:'سَالِم',n:'Salim',em:'🧑‍🎓'},{k:'nur',ar:'نُور',n:'Nur',em:'👩‍🎓'},{k:'layla',ar:'لَيْلَى',n:'Layla',em:'🧕'},{k:'ibrahim',ar:'إِبْرَاهِيم',n:'Ibrahim',em:'👦'}],
 key:{q:'Mengapa pelakunya Nur?',o:['Karena Salim keluar kelas saat kejadian','Ia berbohong soal perpustakaan dan tiga lainnya punya alibi kuat','Karena ia tidak hadir di lab'],a:1},
 clues:[
 {t:'Catatan bendahara',type:'baca',ar:'كَانَ الْمَالُ فِي الْخِزَانَةِ عِنْدَ السَّاعَةِ الْعَاشِرَةِ، وَاخْتَفَى قَبْلَ السَّاعَةِ الْحَادِيَةَ عَشْرَةَ.',tr:'Uang ada di lemari pada jam sepuluh, dan hilang sebelum jam sebelas.',q:'Uang hilang di antara jam berapa?',o:['Jam 9 sampai 10','Jam 10 sampai 11','Jam 11 sampai 12','Jam 8 sampai 9'],a:1,note:'Waktu kejadian: jam 10 sampai 11.'},
 {t:'Pengakuan Salim',type:'dengar',ar:'قَالَ سَالِمٌ: خَرَجْتُ مِنَ الْفَصْلِ عِنْدَ السَّاعَةِ التَّاسِعَةِ وَالنِّصْفِ، وَرَجَعْتُ عِنْدَ السَّاعَةِ الْعَاشِرَةِ وَالنِّصْفِ.',tr:'Salim berkata: Aku keluar kelas jam sembilan lewat tiga puluh, dan kembali jam sepuluh lewat tiga puluh.',q:'Berapa lama Salim di luar kelas?',o:['30 menit','1 jam','2 jam','1,5 jam'],a:1,note:'Salim di luar kelas selama waktu kejadian. Mencurigakan.',fx:[{k:'salim',tag:'Keluar saat kejadian',warn:1}]},
 {t:'Kesaksian guru',type:'baca',req:[1],ar:'قَالَتِ الْمُعَلِّمَةُ: كَانَ سَالِمٌ فِي غُرْفَةِ الْمُدِيرِ مِنَ التَّاسِعَةِ وَالنِّصْفِ حَتَّى الْحَادِيَةَ عَشْرَةَ.',tr:'Guru berkata: Salim ada di ruang kepala sekolah dari jam sembilan lewat tiga puluh sampai jam sebelas.',q:'Di mana Salim selama itu?',o:['Di lapangan','Di ruang kepala sekolah','Di perpustakaan','Di lab'],a:1,note:'Salim punya alibi kuat: ruang kepala sekolah.',fx:[{k:'salim',tag:'Alibi: ruang kepala',clear:1}]},
 {t:'Pengakuan Nur',type:'dengar',ar:'قَالَتْ نُورٌ: كُنْتُ فِي الْمَكْتَبَةِ عِنْدَ السَّاعَةِ الْعَاشِرَةِ.',tr:'Nur berkata: Aku di perpustakaan pada jam sepuluh.',q:'Pukul berapa Nur mengaku di perpustakaan?',o:['Jam 9','Jam 10','Jam 11','Jam 8'],a:1,note:'Jam 10 ada dalam waktu kejadian. Klaim ini harus diuji.',fx:[{k:'nur',tag:'Mengaku di perpustakaan'}]},
 {t:'Pustakawan',type:'baca',req:[3],ar:'قَالَ أَمِينُ الْمَكْتَبَةِ: لَمْ تَدْخُلْ نُورٌ الْمَكْتَبَةَ الْيَوْمَ أَبَدًا.',tr:'Pustakawan berkata: Nur sama sekali tidak masuk perpustakaan hari ini.',q:'Apa maksud pustakawan?',o:['Nur datang terlambat','Nur tidak masuk perpustakaan sama sekali hari ini','Nur meminjam buku tadi pagi','Nur menjaga perpustakaan'],a:1,note:'Nur berbohong soal alibinya.',fx:[{k:'nur',tag:'Bohong soal perpustakaan',warn:1}]},
 {t:'Pengakuan Layla',type:'dengar',ar:'قَالَتْ لَيْلَى: كُنْتُ فِي الْمُخْتَبَرِ مَعَ الْمُعَلِّمَةِ.',tr:'Layla berkata: Aku di laboratorium bersama guru.',q:'Di mana Layla mengaku berada?',o:['Di lab bersama guru','Di kantin','Di lapangan'],a:0,note:'Layla mengaku di lab. Perlu dicek waktunya.',fx:[{k:'layla',tag:'Mengaku di lab'}]},
 {t:'Guru lab',type:'baca',req:[5],ar:'قَالَتِ الْمُعَلِّمَةُ: بَدَأَتْ حِصَّةُ الْمُخْتَبَرِ فِي الْعَاشِرَةِ وَانْتَهَتْ فِي الْحَادِيَةَ عَشْرَةَ، وَكَانَتْ لَيْلَى حَاضِرَةً.',tr:'Guru berkata: Pelajaran lab mulai jam sepuluh dan selesai jam sebelas, dan Layla hadir.',q:'Apakah alibi Layla cocok dengan waktu kejadian?',o:['Ya, pelajaran lab berlangsung jam 10 sampai 11','Tidak, pelajaran selesai jam 9','Tidak, Layla terlambat satu jam'],a:0,note:'Layla punya alibi penuh.',fx:[{k:'layla',tag:'Alibi: pelajaran lab',clear:1}]},
 {t:'Kunci lemari',type:'baca',req:[0],ar:'كَانَ الْمِفْتَاحُ مَعَ إِبْرَاهِيمَ، لَكِنَّهُ كَانَ فِي الْمَلْعَبِ مَعَ الْفَرِيقِ حَتَّى الْحَادِيَةَ عَشْرَةَ.',tr:'Kunci ada pada Ibrahim, tetapi ia di lapangan bersama tim sampai jam sebelas.',q:'Mengapa Ibrahim tidak bisa jadi pelaku meski memegang kunci?',o:['Ia sakit','Ia di lapangan bersama tim sampai jam 11','Ia sedang di rumah','Kuncinya rusak'],a:1,note:'Memegang kunci tidak cukup. Ibrahim punya alibi.',fx:[{k:'ibrahim',tag:'Alibi: lapangan',clear:1}]}
 ]}
,{title:'Proyektor Hilang',T:35,plays:3,culprit:'idris',
 story:'Proyektor kelas lenyap pada hari Minggu pagi. Kali ini tidak ada pilihan jawaban: kamu harus MENULIS atau MENGUCAPKAN jawabanmu dalam bahasa Arab.',
 sus:[{k:'bilal',ar:'بِلَال',n:'Bilal',em:'🧑‍🎓'},{k:'sara',ar:'سَارَة',n:'Sara',em:'👩‍🏫'},{k:'idris',ar:'إِدْرِيس',n:'Idris',em:'🧑'},{k:'huda',ar:'هُدَى',n:'Huda',em:'🧕'}],
 key:{q:'Mengapa pelakunya Idris?',o:['Karena ia paling pendiam','Ia berbohong soal alibi dan tiga lainnya punya alibi kuat','Karena Bilal membencinya'],a:1},
 clues:[
 {t:'Laporan petugas',type:'baca',mode:'ketik',ar:'اخْتَفَى جِهَازُ الْعَرْضِ مِنَ الْفَصْلِ يَوْمَ الْأَحَدِ صَبَاحًا.',tr:'Proyektor hilang dari kelas pada hari Minggu pagi.',q:'Tulis dalam bahasa Arab: hari apa proyektor hilang?',ans:['يَوْمَ الْأَحَدِ','الْأَحَدِ'],note:'Proyektor hilang pada hari Minggu pagi.'},
 {t:'Saksi: asisten lab',type:'dengar',mode:'suara',ar:'رَأَيْتُ بِلَالًا فِي الْمُخْتَبَرِ مَعَ الدُّكْتُورِ طَوَالَ الصَّبَاحِ.',tr:'Aku melihat Bilal di laboratorium bersama dosen sepanjang pagi.',q:'Ucapkan dalam bahasa Arab: di mana Bilal terlihat?',ans:['فِي الْمُخْتَبَرِ','الْمُخْتَبَرِ'],note:'Bilal di laboratorium sepanjang pagi.',fx:[{k:'bilal',tag:'Alibi: laboratorium',clear:1}]},
 {t:'Jadwal kelas',type:'baca',mode:'ketik',ar:'كَانَتْ سَارَةُ تُدَرِّسُ طُلَّابًا فِي الْفَصْلِ الثَّانِي طَوَالَ الصَّبَاحِ.',tr:'Sara mengajar beberapa mahasiswa di kelas kedua sepanjang pagi.',q:'Tulis dalam bahasa Arab: apa yang dilakukan Sara?',ans:['تُدَرِّسُ طُلَّابًا','تُدَرِّسُ'],note:'Sara mengajar sepanjang pagi, jadi ia punya alibi.',fx:[{k:'sara',tag:'Alibi: mengajar',clear:1}]},
 {t:'Pengakuan Idris',type:'dengar',mode:'suara',ar:'قَالَ إِدْرِيسُ: كُنْتُ فِي الْبَيْتِ.',tr:'Idris berkata: Aku di rumah.',q:'Ucapkan dalam bahasa Arab: Idris mengaku berada di mana?',ans:['فِي الْبَيْتِ','الْبَيْتِ'],note:'Idris mengaku di rumah. Klaim ini harus diuji.',fx:[{k:'idris',tag:'Mengaku di rumah'}]},
 {t:'Rekaman gerbang',type:'baca',mode:'ketik',req:[3],ar:'دَخَلَ إِدْرِيسُ الْجَامِعَةَ عِنْدَ السَّاعَةِ التَّاسِعَةِ صَبَاحًا.',tr:'Idris masuk universitas pada jam sembilan pagi.',q:'Tulis dalam bahasa Arab: jam berapa Idris masuk kampus?',ans:['السَّاعَةِ التَّاسِعَةِ','التَّاسِعَةِ'],note:'Idris berbohong: ia ada di kampus pada pagi itu, bukan di rumah.',fx:[{k:'idris',tag:'Bohong soal rumah',warn:1}]},
 {t:'Saksi: satpam perpustakaan',type:'dengar',mode:'suara',req:[4],ar:'لَمْ تَخْرُجْ هُدَى مِنَ الْمَكْتَبَةِ حَتَّى الظُّهْرِ.',tr:'Huda tidak keluar dari perpustakaan sampai zuhur.',q:'Ucapkan dalam bahasa Arab: sampai kapan Huda di perpustakaan?',ans:['حَتَّى الظُّهْرِ','الظُّهْرِ'],note:'Huda di perpustakaan sampai zuhur. Ia bebas.',fx:[{k:'huda',tag:'Alibi: perpustakaan',clear:1}]}
 ]}
];
const OA=[
[['فِي الظُّهْرِ','بَعْدَ الْعَصْرِ','قَبْلَ الظُّهْرِ'],
 ['حَتَّى الظُّهْرِ','حَتَّى الْعَصْرِ','حَتَّى السَّاعَةِ الْوَاحِدَةِ','حَتَّى الْمَغْرِبِ'],
 ['فَاطِمَةُ فِي الْكَانْتِينِ مِنَ الظُّهْرِ','لَمْ يَرَ الْبَائِعُ فَاطِمَةَ قَبْلَ الْعَصْرِ','ذَهَبَتْ فَاطِمَةُ مِنَ الْكَانْتِينِ بَعْدَ الْعَصْرِ'],
 ['فِي الْكَانْتِينِ تَأْكُلُ','فِي الْفَصْلِ تَسْمَعُ الْأُسْتَاذَ','فِي الْمَكْتَبَةِ تَكْتُبُ بَحْثًا'],
 ['لِأَنَّهَا تَبْحَثُ عَنْ كِتَابٍ','لِأَنَّهَا مَرِيضَةٌ','لِأَنَّهَا تُقَابِلُ الْأُسْتَاذَ'],
 ['حَقِيبَةٌ حَمْرَاءُ','حَقِيبَةٌ سَوْدَاءُ','صُنْدُوقُ كُتُبٍ']],
[['قَبْلَ الْمَغْرِبِ','بَيْنَ الْمَغْرِبِ وَالْعِشَاءِ','بَعْدَ الْعِشَاءِ','طَوَالَ اللَّيْلِ'],
 ['فِي الْمَطْبَخِ مَعَ يُوسُفَ','فِي الْمَسْجِدِ مَعَ عُمَرَ','فِي الْغُرْفَةِ مَعَ زَيْدٍ','خَارِجَ الْمَهْجَعِ وَحْدِي'],
 ['رَأَى عُمَرُ حَسَنًا فِي الْمَسْجِدِ','لَمْ يَرَ عُمَرُ حَسَنًا فِي الْمَسْجِدِ','قَابَلَ عُمَرُ حَسَنًا فِي الْمَطْبَخِ'],
 ['عُمَرُ كَذَبَ','حَسَنٌ كَذَبَ','كِلَاهُمَا صَادِقٌ','كِلَاهُمَا كَذَبَ'],
 ['قَبْلَ الْمَغْرِبِ','بَعْدَ الْعِشَاءِ','بَعْدَ الْفَجْرِ','عِنْدَ الْمَغْرِبِ'],
 ['شَهَادَةُ حَسَنٍ','تَسْجِيلُ الْكَامِيرَا','اعْتِرَافُ يُوسُفَ نَفْسِهِ'],
 ['فِي الْمَطْبَخِ','فِي خِزَانَةِ حَسَنٍ','فِي الْمَسْجِدِ','فِي غُرْفَةِ زَيْدٍ']],
[['مِنَ التَّاسِعَةِ إِلَى الْعَاشِرَةِ','مِنَ الْعَاشِرَةِ إِلَى الْحَادِيَةَ عَشْرَةَ','مِنَ الْحَادِيَةَ عَشْرَةَ إِلَى الثَّانِيَةَ عَشْرَةَ','مِنَ الثَّامِنَةِ إِلَى التَّاسِعَةِ'],
 ['نِصْفُ سَاعَةٍ','سَاعَةٌ وَاحِدَةٌ','سَاعَتَانِ','سَاعَةٌ وَنِصْفٌ'],
 ['فِي الْمَلْعَبِ','فِي غُرْفَةِ الْمُدِيرِ','فِي الْمَكْتَبَةِ','فِي الْمُخْتَبَرِ'],
 ['السَّاعَةُ التَّاسِعَةُ','السَّاعَةُ الْعَاشِرَةُ','السَّاعَةُ الْحَادِيَةَ عَشْرَةَ','السَّاعَةُ الثَّامِنَةُ'],
 ['جَاءَتْ نُورٌ مُتَأَخِّرَةً','لَمْ تَدْخُلْ نُورٌ الْمَكْتَبَةَ أَبَدًا','اسْتَعَارَتْ نُورٌ كِتَابًا صَبَاحًا','تَحْرُسُ نُورٌ الْمَكْتَبَةَ'],
 ['فِي الْمُخْتَبَرِ مَعَ الْمُعَلِّمَةِ','فِي الْكَانْتِينِ','فِي الْمَلْعَبِ'],
 ['نَعَمْ، حِصَّةُ الْمُخْتَبَرِ مِنَ الْعَاشِرَةِ إِلَى الْحَادِيَةَ عَشْرَةَ','لَا، انْتَهَتِ الْحِصَّةُ فِي التَّاسِعَةِ','لَا، تَأَخَّرَتْ لَيْلَى سَاعَةً'],
 ['هُوَ مَرِيضٌ','هُوَ فِي الْمَلْعَبِ مَعَ الْفَرِيقِ حَتَّى الْحَادِيَةَ عَشْرَةَ','هُوَ فِي الْبَيْتِ','الْمِفْتَاحُ مَكْسُورٌ']]
];
LV.forEach((l,i)=>l.clues.forEach((c,j)=>c.oa=OA[i]&&OA[i][j]));
const narm=s=>s.replace(/[\u064B-\u065F\u0670\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[^\u0621-\u064A0-9\s]/g,' ').replace(/\s+/g,' ').trim().split(' ').map(w=>w.length>3?w.replace(/^ال/,''):w).join(' ');
let lvi,lives,score,streak,solved,open,tleft,timer,showTxt,showTr,over,failed,left,plays,keyMode,keyFail,T;
const $=id=>document.getElementById(id);
const L=()=>LV[lvi];

let scareOn=true;try{scareOn=localStorage.getItem('scare')!=='off'}catch(e){}
function setScare(v){scareOn=v;try{localStorage.setItem('scare',v?'on':'off')}catch(e){}}
function boom(){try{
  const A=new(window.AudioContext||window.webkitAudioContext)(),t=A.currentTime,g=A.createGain();
  g.gain.setValueAtTime(.35,t);g.gain.exponentialRampToValueAtTime(.001,t+1.2);g.connect(A.destination);
  const o=A.createOscillator();o.type='sawtooth';o.frequency.setValueAtTime(900,t);o.frequency.exponentialRampToValueAtTime(70,t+1.1);o.connect(g);o.start(t);o.stop(t+1.2);
  const b=A.createBuffer(1,A.sampleRate*.6,A.sampleRate),d=b.getChannelData(0);
  for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*(1-i/d.length);
  const n=A.createBufferSource();n.buffer=b;n.connect(g);n.start(t)}catch(e){}}
function scare(cb){
  if(!scareOn||matchMedia('(prefers-reduced-motion:reduce)').matches){cb&&cb();return}
  const d=document.createElement('div');d.className='scare';d.setAttribute('aria-hidden','true');
  d.innerHTML=scareImg?'<img src="scare.jpg" alt="">':'<span>'+['💀','👻','🤡','👹'][Math.random()*4|0]+'</span>';document.body.appendChild(d);
  if(scareSnd){try{scareSnd.currentTime=0;scareSnd.volume=1;scareSnd.play().catch(boom)}catch(e){boom()}}else boom();
  if(navigator.vibrate)navigator.vibrate([200,80,200]);
  setTimeout(()=>{d.remove();cb&&cb()},1400)}
let scareSnd=null;{const a=new Audio();a.preload='auto';a.oncanplaythrough=()=>{scareSnd=a};a.src='scare.mp3'}
let scareImg=false;{const im=new Image();im.onload=()=>{scareImg=true};im.src='scare.jpg'}
$('scareTgl').checked=scareOn;
function newGame(){lives=3;score=0;lvi=0;load()}
function load(){
  const l=L();T=l.T;streak=0;solved=new Set();open=null;showTxt=false;showTr=false;over=false;failed=new Set();left={};plays={};keyMode=false;keyFail=new Set();
  clearInterval(timer);$('panel').innerHTML='';$('end').innerHTML='';
  $('title').textContent='Level '+(lvi+1)+' dari '+LV.length+': '+l.title;$('story').textContent=l.story;
  render();window.scrollTo(0,0)}
function speak(t){
  if(!('speechSynthesis' in window)){alert('Browser ini tidak mendukung suara. Coba Chrome atau Safari.');return}
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='ar-SA';u.rate=.8;speechSynthesis.speak(u)}
function play(){
  const l=L(),c=l.clues[open];
  if(c.type==='dengar'&&!solved.has(open)){if((plays[open]||0)>=l.plays)return;plays[open]=(plays[open]||0)+1}
  speak(c.ar);drawPanel()}
function locked(i){return (L().clues[i].req||[]).some(r=>!solved.has(r))}
function render(){
  const l=L(),n=solved.size,tot=l.clues.length;
  $('hud').innerHTML=`<span class="h" aria-label="${lives} nyawa">${'❤️'.repeat(lives)}${'🖤'.repeat(3-lives)}</span><span>Level ${lvi+1}/${LV.length}</span><span>Skor ${score}</span><span>Streak ${streak}🔥</span>`;
  $('fill').style.width=(n/tot*100)+'%';
  $('count').textContent=n+' dari '+tot+' petunjuk terbukti';
  $('clues').innerHTML=l.clues.map((c,i)=>{
    const lk=locked(i);
    return `<button class="clue ${solved.has(i)?'done':''} ${open===i?'open':''}" ${over||lk?'disabled':''} onclick="openClue(${i})"><b>${lk?'🔒 Terkunci':c.t}</b><small>${lk?'Buktikan petunjuk lain dulu':c.type==='baca'?'📄 Baca teks':'🎧 Dengarkan'}</small></button>`}).join('');
  const fx=[];[...solved].sort((a,b)=>a-b).forEach(i=>(l.clues[i].fx||[]).forEach(f=>fx.push(f)));
  const all=n===tot&&!over&&!keyMode;
  $('sus').innerHTML=l.sus.map(s=>{
    const m=fx.filter(f=>f.k===s.k),c=m.some(f=>f.clear),w=!c&&m.some(f=>f.warn);
    return `<button class="s ${c?'clear':''} ${w?'warn':''}" ${all?'':'disabled'} onclick="accuse('${s.k
