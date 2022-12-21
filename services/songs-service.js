

const getSongs = (selectedGenre) => {
    
    console.log(totalSongs);
    for(let i = 0; i< totalSongs.length; i++){
        console.log(totalSongs[i].name)
        if(totalSongs[i].name == selectedGenre){
            return totalSongs[i].songs;
        }
    }

}


const getRandomSong = (songs) => {

    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];
    console.log(randomSong)
    return randomSong;
};


let totalSongs = [{
    name: "Casual",
    songs: [{
        name: "Locked Eyes",
        image: "/songs/casual_sex/lockedeyes.jpeg",
        track: "/songs/casual_sex/y2mate.com-CasualSexLockedEyesAudio.mp3"
    },

    {
        name: "Love is a Bitch",
        image: "/songs/casual_sex/loveisabitch.jpeg",
        track: "/songs/casual_sex/y2mate.com-TwoFeetLoveIsABitch.mp3"

    },
    {
        name: "I feel Like I'm Drawning",
        image: "/songs/casual_sex/ifeellikeimdrawning.jpeg",
        track: "/songs/casual_sex/y2mate.com-TwoFeetIFeelLikeImDrowning(1).mp3"
    },
    {
        name: "Not Enough",
        image: "/songs/casual_sex/elvisnotenough.jpeg",
        track: "/songs/casual_sex/y2mate.com-ElvisDrewxAVIVIANNotEnoughOfficialLyricVideo.mp3"

    },
    {
        name: "Stream of Consciousness",
        image: "/songs/casual_sex/streamofconsciousness.jpeg",
        track: "/songs/casual_sex/y2mate.com-StreamofConsciousness.mp3"
    }
    ]
},
{
    name: "Soft RnB",

    songs: [
        {
            name: "Slow Motion",
            image: "/songs/SoftRnB/SlowMotion.jpeg",
            track: "/songs/SoftRnB/SlowMotion.mp3"
        },
        {
            name: "Pornstar",
            image: "/songs/SoftRnB/pornstar.jpeg",
            track: "/songs/SoftRnB/Pornstar.mp3"
        },
        {
            name: "Clappers",
            image: "/songs/SoftRnB/Clappers.jpeg",
            track: "/songs/SoftRnB/Clappers.mp3"
        },
        {
            name: "Animal",
            image: "/songs/SoftRnB/Animal.jpeg",
            track: "/songs/SoftRnB/Animal.mp3"
        },
        {
            name: "Nana",
            image: "/songs/SoftRnB/Nana.jpeg",
            track: "/songs/SoftRnB/Nana.mp3"
        }
    ]

},
{
    name: "Dirty RnB",

    songs: [
        {
            name: "Make Love To Me",
            image: "/songs/DirtyRnB/MakeLoveToMe.jpg",
            track: "/songs/DirtyRnB/MakeLoveToMe.mp3"
        },
        {
            name: "Hungarian Dance",
            image: "/songs/DirtyRnB/Hungarian.jpeg",
            track: "/songs/DirtyRnB/Hungarian.mp3"
        },
        {
            name: "Sexual Healing",
            image: "/songs/DirtyRnB/marvin.jpeg",
            track: "/songs/DirtyRnB/marvin.mp3"
        },
        {
            name: "Scholarship",
            image: "/songs/DirtyRnB/scholarship.jpeg",
            track: "/songs/DirtyRnB/scholarship.mp3"
        },
        {
            name: "Dancing In The Dark",
            image: "/songs/DirtyRnB/dark.png",
            track: "/songs/DirtyRnB/dark.mp3"
        }
    ]

},
{
    name: "Hardcore RnB",
    songs: [
        {
            name: "Slob On My Knob",
            image: "/songs/HardcoreRnB/slob.jpeg",
            track: "/songs/HardcoreRnB/slob.mp3"
        },
        {
            name: "Soundgasm",
            image: "/songs/HardcoreRnB/soundgasm.jpeg",
            track: "/songs/HardcoreRnB/soundgasm.mp3"
        },
        {
            name: "Face Down",
            image: "/songs/HardcoreRnB/down.jpeg",
            track: "/songs/HardcoreRnB/down.mp3"
        },
        {
            name: "Neighbours Know My Name",
            image: "/songs/HardcoreRnB/neigh.jpeg",
            track: "/songs/HardcoreRnB/neigh.mp3"
        },
        {
            name: "Like You Love Me",
            image: "/songs/HardcoreRnB/like.jpeg",
            track: "/songs/HardcoreRnB/like.mp3"
        }
    ]

},

{
    name: "Funk",
    songs: [
        {
            name: "Mulherão",
            image: "/songs/funk_sex/mulherao.jpeg",
            track: "/songs/funk_sex/mulherao.mp3"
        },
        {
            name: "O Poder Dessa Garota",
            image: "/songs/funk_sex/poder.jpeg",
            track: "/songs/funk_sex/poder.mp3"
        },
        {
            name: "Doutora",
            image: "/songs/funk_sex/doutora.jpeg",
            track: "/songs/funk_sex/doutora.mp3"
        },
        {
            name: "Simplesmente Ela",
            image: "/songs/funk_sex/simplesmente.jpeg",
            track: "/songs/funk_sex/simplesmente.mp3"
        },
        {
            name: "Toma Sua Safada",
            image: "/songs/funk_sex/safada.jpeg",
            track: "/songs/funk_sex/safada.mp3"
        }
    ]

},
{
    name: "Soul",
    songs: [
        {
            name: "What I Would Say",
            image: "/songs/soul/say.jpeg",
            track: "/songs/soul/say.mp3"
        },
        {
            name: "Stay In The Moment",
            image: "/songs/soul/moment.jpeg",
            track: "/songs/soul/moment.mp3"
        },
        {
            name: "Hit The Road Jack",
            image: "/songs/soul/road.jpeg",
            track: "/songs/soul/road.mp3"
        },
        {
            name: "Effortless",
            image: "/songs/soul/effortless.jpeg",
            track: "/songs/soul/effortless.mp3"
        },
        {
            name: "Change Is Gonna Come",
            image: "/songs/soul/change.jpeg",
            track: "/songs/soul/change.mp3"
        }
    ]

}, 

    { name: "Erotic",
     songs: [
        {
            name:"Sexy Boy",
            image: "/songs/Erotic/AIRSexyBoyOfficialVideo.jpeg",
            track:"/songs/Erotic/AIRSexyBoyOfficialVideo.mp3"
        },
        {
            name:"Come With Me",
            image: "/songs/Erotic/ComeWithMe.jpeg",
            track: "/songs/Erotic/ComeWithMe.mp3"
        },
        {
            name:"Erotic Sexual Music",
            image:"/songs/Erotic/EroticSexualMusic.jpeg",
            track: "/songs/Erotic/EroticSexualMusic.mp3"
        },
        {
            name:"Maurice Ravel Bolero",
            image:"/songs/Erotic/MauriceRavelBolero.jpeg",
            track: "/songs/Erotic/MauriceRavelBolero.mp3"
        },
        {
            name:"Punto G",
            image:"/songs/Erotic/PuntoGBrytiagoXDarrel.jpeg",
            track: "/songs/Erotic/PuntoGBrytiagoXDarrel.mp3"
        },
        {
            name:"Queen Love Of My Life",
            image:"/songs/Erotic/QueenLoveOfMyLife.jpeg",
            track: "/songs/Erotic/QueenLoveOfMyLife.mp3"
        },
        {
            name:"Sign Your Name",
            image:"/songs/hot/TerenceTrentDArbySignYourName.jpeg",
            track: "/songs/hot/TerenceTrentDArbySignYourName.mp3"
        }
    ]},
    {   name: "António Variações",
        songs:[
            {
                name:"Cancao Do Engate",
                image:"/songs/variacoes/AntonioVariacoesCancaoDoEngate.jpeg",
                track: "/songs/variacoes/y2mate.com-Cançãodeengate.mp3"
            },
           {
               name:"Anjinho Da Guarda",
               image: "/songs/variacoes/anjoguarda.jpeg",
               track:"/songs/variacoes/anjoguarda.mp3"
           },
           {
               name:"Estou Além",
               image:"/songs/variacoes/alem.jpeg",
               track: "/songs/variacoes/alem.mp3"
           },
           {
               name:"Muda De Vida",
               image: "/songs/variacoes/mudavida.jpeg",
               track: "/songs/variacoes/mudavida.mp3"
           },
           {
               name:"O Corpo é que paga",
               image:"/songs/variacoes/corpopaga.jpeg",
               track: "/songs/variacoes/corpopaga.mp3"
           },
           {
               name:"É P’ra Amanhã...",
               image:"/songs/variacoes/amanha.jpeg",
               track: "/songs/variacoes/amanha.mp3"
           }
       ]
    },
    
    {name:"Pimba",
        songs:[
           {
               name:"A Cabritinha",
               image: "/songs/pimba/cabritinha.jpeg",
               track:"/songs/pimba/cabritinha.mp3"
           },
           {
               name:"Eu Chupo",
               image:"/songs/pimba/chupo.jpeg",
               track: "/songs/pimba/chupo.mp3"
           },
           {
               name:"Eu Descasco-lhe A Banana",
               image: "/songs/pimba/banana.jpeg",
               track: "/songs/pimba/banana.mp3"
           },
           {
               name:"Pimba pimba",
               image:"/songs/pimba/nospimba.jpeg",
               track: "/songs/pimba/nospimba.mp3"
           },
           {
               name:"Coração Não Tem Idade",
               image:"/songs/pimba/noite.jpeg",
               track: "/songs/pimba/noite.mp3"
           }]
       
    }
];


export { getSongs, getRandomSong };