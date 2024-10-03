const movies = [
    { 
        title: "Avatar (2009)", 
        description: "Avatar (2009), disutradarai oleh James Cameron, adalah film fiksi ilmiah epik berlatar di planet Pandora. Ceritanya tentang Jake Sully, mantan marinir yang terlibat dalam program Avatar dan mengendalikan tubuh hibrida manusia-Na'vi. Ia menjelajahi Pandora dan mulai memahami suku Na'vi, hingga terlibat dalam konflik antara manusia yang ingin mengeksploitasi sumber daya alam dengan penduduk asli yang mempertahankan rumah mereka. Dengan visual menakjubkan dan pesan mendalam tentang lingkungan, film ini menjadi salah satu pencapaian besar dalam dunia perfilman modern.", 
        image: "assets/avatar.jpg", 
        rating: "★★★★☆" 
    },
    { 
        title: "Avengers: Endgame (2019)", 
        description: "Avengers: Endgame (2019) adalah klimaks dari perjalanan panjang Marvel Cinematic Universe. Setelah peristiwa di Infinity War, di mana setengah populasi alam semesta musnah, para Avengers yang tersisa bekerja sama untuk mengembalikan segalanya. Dengan aksi epik dan emosi yang dalam, film ini menawarkan penutupan dramatis bagi banyak karakter tercinta. Disutradarai oleh Anthony dan Joe Russo, Endgame menyuguhkan pertarungan pamungkas melawan Thanos, dengan tema pengorbanan dan harapan yang kuat, menjadikannya salah satu film terbesar sepanjang masa.", 
        image: "assets/avengers-endgame.jpg", 
        rating: "★★★☆☆" 
    },
    { 
        title: "Avatar: The Way of Water (2022)", 
        description: "Avatar: The Way of Water (2022), sekuel dari Avatar (2009), kembali disutradarai oleh James Cameron. Film ini melanjutkan kisah Jake Sully dan keluarganya saat mereka menjelajahi lautan dalam Pandora yang penuh misteri. Di bawah air, mereka menghadapi ancaman baru yang menguji persatuan keluarga dan kemampuan bertahan hidup. Visual yang memukau dan pengembangan lebih dalam tentang dunia Pandora membuat film ini sangat dinantikan, memberikan pengalaman sinematik luar biasa bagi para penonton.", 
        image: "assets/avatar-the-way-of-water.webp", 
        rating: "★★★★★" 
    },
    { 
        title: "Titanic (1997)", 
        description: "Titanic (1997), film legendaris karya James Cameron, mengisahkan kisah cinta antara Jack dan Rose di atas kapal Titanic yang tenggelam. Jack, pemuda miskin, dan Rose, wanita bangsawan, jatuh cinta di tengah perjalanan laut yang tragis setelah kapal megah tersebut menabrak gunung es. Dengan visual yang epik, akting yang memukau, serta musik yang ikonik, Titanic menjadi salah satu film paling ikonik dalam sejarah perfilman, dikenang karena romansa yang abadi dan efek visual yang luar biasa.", 
        image: "assets/titanic.jpg", 
        rating: "★★★★☆" 
    },
    { 
        title: "Star Wars: Episode VII - The Force Awakens (2015)", 
        description: "Star Wars: The Force Awakens (2015) menandai kebangkitan epik dari saga Star Wars, memperkenalkan generasi baru pahlawan. Rey, seorang pemulung misterius dari Jakku, bergabung dengan Finn, mantan Stormtrooper, untuk melawan ancaman First Order yang dipimpin Kylo Ren. Aksi seru, nostalgia bagi penggemar lama, dan kehadiran karakter-karakter klasik dari film terdahulu menjadikan film ini sebagai jembatan yang sempurna untuk masa depan saga Star Wars.", 
        image: "assets/star-wars-the-force-awakens.jpg", 
        rating: "★★★☆☆" 
    },
    { 
        title: "Avengers: Infinity War (2018)", 
        description: "Avengers: Infinity War (2018) mempertemukan semua pahlawan Marvel untuk menghadapi ancaman terbesar mereka, Thanos. Bertekad untuk mengumpulkan semua Infinity Stones dan memusnahkan setengah populasi alam semesta, Thanos menghadirkan tantangan berat bagi para Avengers dan sekutu mereka. Dengan pertempuran yang tersebar di berbagai planet dan pengorbanan yang menyayat hati, Infinity War memberikan sensasi epik serta menghadirkan salah satu cliffhanger paling mengejutkan di sejarah film superhero.", 
        image: "assets/avengers-infinity-war.jpg", 
        rating: "★★★★☆" 
    },
    { 
        title: "Spider-Man: No Way Home (2021)", 
        description: "Spider-Man: No Way Home (2021) menghadirkan petualangan multiverse yang menegangkan ketika identitas Peter Parker terungkap kepada publik. Bersama Doctor Strange, Peter mencoba membalikkan keadaan, tetapi malah membuka portal ke dunia lain, mendatangkan ancaman dari berbagai dimensi. Dengan kemunculan kembali karakter-karakter ikonik dari film-film Spider-Man sebelumnya, film ini menjadi perayaan nostalgia dan aksi yang memuaskan para penggemar di seluruh dunia.", 
        image: "assets/spiderman-no-way-home.jpg", 
        rating: "★★★★★" 
    },
    { 
        title: "Inside Out 2 (2024)", 
        description: "Inside Out 2 (2024) melanjutkan perjalanan Riley dan emosi-emosinya yang kini lebih kompleks seiring dengan pertumbuhannya. Dalam film ini, Riley menghadapi tantangan baru yang lebih besar, termasuk munculnya emosi-emosi baru saat ia beranjak dewasa. Dengan visual yang ceria dan ceritanya yang menyentuh, Inside Out 2 memberikan gambaran yang mendalam tentang dinamika emosi yang membentuk pengalaman hidup kita, mengajak penonton untuk mengeksplorasi lebih jauh dunia di dalam pikiran manusia.", 
        image: "assets/inside-out-2.jpg", 
        rating: "★★★★★" 
    },
    { 
        title: "Jurassic World (2015)", 
        description: "Jurassic World (2015) adalah kelanjutan dari waralaba Jurassic Park, mengisahkan sebuah taman hiburan penuh dinosaurus yang direkayasa secara genetika. Ketika salah satu dinosaurus paling cerdas dan mematikan lolos dari kandangnya, kekacauan pun melanda seluruh pulau. Film ini menawarkan aksi mendebarkan, dinosaurus yang menakjubkan, serta tema tentang dampak dan tanggung jawab manusia terhadap eksploitasi sains dan alam, menjadikannya film penuh ketegangan dan refleksi moral.", 
        image: "assets/jurassic-world.jpg", 
        rating: "★★☆☆☆" 
    },
    { 
        title: "The Lion King (2019)", 
        description: "The Lion King (2019) adalah remake live-action dari film animasi klasik Disney, mengikuti perjalanan Simba yang harus merebut kembali kerajaannya setelah kematian tragis ayahnya. Dengan visual CGI yang memukau, film ini membawa kembali kisah yang telah dicintai oleh banyak generasi. Musik ikonik dan visual yang indah menjadikan film ini sebagai pengalaman sinematik yang menawan, menggabungkan nostalgia dengan teknologi modern yang canggih.", 
        image: "assets/the-lion-king.jpg", 
        rating: "★★★★☆" 
    }
];

const movieList = document.getElementById('movie-list');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-md-4 mb-4';
    card.innerHTML = `
        <div class="card h-100">
            <img src="${movie.image}" class="card-img-top img-fluid" alt="${movie.title}">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="rating">${movie.rating}</p>
                <p class="card-text">${movie.description}</p>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal" onclick="openBookingModal('${movie.title}')">Book Ticket</button>
            </div>
        </div>
    `;
    movieList.appendChild(card);
});

function openBookingModal(movieTitle) {
    document.getElementById('movieTitle').value = movieTitle;
}

function bookTicket() {
    const movieName = document.getElementById('movieTitle').value;
    const name = document.getElementById('name').value;
    const seatsValue = document.getElementById('seats').value;

    const message = `Booking ${movieName} for ${seatsValue} seats by ${name}`;
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
    modal.hide();

    alert(message);

    document.getElementById('name').value = '';
    document.getElementById('seats').value = '';
}

