const data = {
    // -------------------- biobrick --------------------
    biobrick: {
        meta: {
            lt: {
                name: "BioBrick",
                desc: "<em class='bolded'>Sintetinė biologija</em>, sutrumpintai vadinama „SinBio“, apjungia <em class='bolded'>inžinerijos ir gyvybės mokslų šakas</em>. Tai yra organizmų ir jų funkcijų kūrimas bei konstravimas keičiant genetinę informaciją. SinBio yra tarpdisciplinė mokslo sritis, kurioje persipina ne tik biologija ir inžinerija, bet ir chemija, informacinės technologijos bei matematinis modeliavimas. Pritaikius sintetinę biologiją tapo įmanoma kovoti prieš maliarinius uodus, pagaminti alternatyvų kurą, veganišką sūrį, bakterijas, kurios išskiria dažus tekstilei ir net atkurti išnykusių augalų kvapus. Šį mokslą ypač pastūmėjo tarptautinis sintetinės biologijos konkursas <em class='bolded'>iGEM</em> (angl. International Genetically Engineered Machine), kuriame varžosi studentų ir moksleivių komandos, pristatydamos savo mokslinius projektus. Pavyzdžiui, viena komanda sukūrė bakterijas, kurios ardo bioplastiką. iGEM komandos kuria naujas organizmų funkcijas naudodami <em class='bolded'>biologines dalis</em> (angl. BioBricks), kurios yra labai panašios į LEGO kaladėles. BioBrick yra tam tikra DNR dalis, kuri koduoja genetinę informaciją, pavyzdžiui, kaip turi būti pagaminamas žaliai švytintis baltymas bakterijose. Visai panašiai kaip su LEGO kaladėlėmis, dėliodami skirtingas biologines dalis mokslininkai gali vis perkonstruoti DNR ir pakeisti ląstelių funkcijas. Tam kad mokslininkai skirtingose laboratorijose galėtų greičiau sėkmingai sukonstruoti sudėtingus biocheminių reakcijų tinklus mikroorganizmuose, sintetinė biologija siekia <em class='bolded'>standartizuoti ir charakterizuoti biologines dalis</em> specialiose duombazėse.",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "BioBrick",
                desc: "BioBricks are ...",
                audioRec: "./recordings/nano.mp3"
            },
        },
        model: {
            path: "./models/lego.glb",
            pattern: "lego",
            pos: {
                x: 0,
                y: 0.1,
                z: 0
            },
            rot: {
                x: 0,
                y: -1.6,
                z: 0
            },
            scale: 0.7,
            looponce: true
        }
    },

    // -------------------- gfp --------------------
    gfp: {
        meta: {
            lt: {
                name: "Žalias fluorescencinis baltymas (GFP)",
                desc: "<em class='bolded'>Žaliai fluorescuojantis baltymas</em> arba trumpiau – <em class='bolded'>GFP</em>, buvo atrastas švytėti gebančioje <em class='bolded'>medūzoje</em>. Osamu Shimomuru primasis aprašė ir paaiškino šio baltymo veikimą. Vėliau Martin Chalfie parodė, kad GFP gali veikti ne tik medūzoje, bet ir kituose organizmuose, pavyzdžiui bakterijose arba kirmelėse. Galiausiai Roger Tsien sukūrė tokius GFP baltymo variantus, kurie švytėjo ne žaliai, o kitomis spalvomis – mėlyna ar geltona. Visi paminėti mokslininkai už šiuos darbus 2008 metais buvo apdovanoti <em class='bolded'>Chemijos mokslo Nobelio premija</em>. GFP baltymo naudojimas moksle išpopuliarėjo, nes jį lengva pritaikyti skirtingos kilmės organizmams, o švytėjimui sukelti nereikia jokių papildomų priemonių. Įvairios pasaulio laboratorijos naudoja GFP ląstelių dalijimosi, diferenciacijos, baltymų arba <em class='bolded'>DNR tyrimuose</em>: <br> <img style='width: 100%' src='images/model-info/gfp.jpg'></img><br><p style='padding-top: 3px;margin: 0;font-size: 0.8em;'><em class='bolded'>1 pav.</em> Galite matyti pavaizduotas žinduolių ląstelių dalis pažymėtas skirtingų spalvų švytinčiais baltymais</p>",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "Green fluorescent protein (GFP)",
                desc: "<em class='bolded'>Green fluorescent protein</em>, or <em class='bolded'>GFP</em>, was first identified in a fluorescent <em class='bolded'>jellyfish</em>. Osamu Shimomura described the biophysics of how GFP fluoresces. A few years later, Martin Chalfie reported that GFP can be used in experiments with other organisms like bacteria and nematode. Later Roger Tsien designed variants of the GFP protein that could fluoresce cyan, blue and yellow. Shimomura, Chalfie and Tsien were awarded the <em class='bolded'>Nobel Prize for Chemistry</em> in 2008 for their work in the discovery and development of this protein. What made GFP such an important tool in science is the fact that it’s “auto-catalytic” – it doesn’t need any co-factors or enzyme processing to fluoresce – so it can be easily used in a wide variety of organisms. To this day GFP is used in laboratories all over the world for protein and DNA research: <br> <img style='width: 100%' src='images/model-info/gfp.jpg'></img><br><p style='padding-top: 3px;margin: 0;font-size: 0.8em;'><em class='bolded'>Fig 1</em>. Mammalian cell parts, marked with different fluorescent proteins</p>",
                audioRec: "./recordings/nano.mp3"
            },
        },
        model: {
            path: "./models/gfp.glb",
            pattern: "gfp",
            pos: {
                x: 0,
                y: 0.75,
                z: 0
            },
            rot: {
                x: 0,
                y: 0,
                z: 0
            },
            scale: 0.9,
        },
        onVisible: () => {
            tray.style = "display: flex;";
        },
        onHidden: () => {
            tray.style = "display: none;";
        }
    },

    // -------------------- crispr_cas9 --------------------
    crisprcas9: {
        meta: {
            lt: {
                name: "CRISPR-Cas9",
                desc: "Savo ekrane galite matyti CRISPR-Cas9 sistemą, kuria remiantis kuriamos naujos molekulinių žirklių technologijos. Išgyvenusios virusinę ataką bakterijos išsaugo dalelę viruso DNR savo genome, savitoje <em class='bolded'>DNR bibliotekoje</em>, vadinamoje <em class='bolded'>CRISPR</em>. Čia seka saugoma iki kol jos prireikia. Kai virusas vėl bando užpulti bakteriją, ši seka greitai nukopijuojama ir panaudojama užtaisyti slaptam ginklui – baltymui, pavadinimu <em class='bolded'>Cas9</em>. Užtaisytas baltymas ima naršyti po bakterijos vidų, ieškodamas viruso pėdsakų lygindamas kiekvieną sutiktą DNR seką su pavyzdžiu iš bibliotekos. Kai baltymas suranda visiškai sutampančią seką, jis ją <em class='bolded'>iškerpa</em>, tad virusas nebegali kenkti bakterijai. Cas9 ypatingas tuo, kad yra be galo tikslus bei lengvai pritaikomas kitokioms – tiek žmogaus, tiek gyvūno, tiek augalo – ląstelėms. Pasaulio mokslininkai, tarp jų ir <em class='bolded'>profesorius Virginijus Šikšnys</em>, išsiaiškino, jog šią sistemą yra įmanoma užprogramuoti ir <em class='bolded'>pritaikyti žmogaus reikmėms</em>, siekiant išgydyti įvairias genetiškai paveldimas ir itin komplikuotas ligas, tokias kaip vėžys, įvairios kraujo ligos ar netgi aklumas.",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "CRISPR-Cas9",
                desc: "On your screen you can see the CRISPR-Cas9 system, based on which molecular scissor technology is being created. After surviving a viral attack, bacteria save a section of the virus’ DNA in its own genome, a sort of <em class='bolded'>DNA library</em> called <em class='bolded'>CRISPR</em>. Here, the virus’ sequence is stored until needed. When the same kind of virus attempts to reinfect bacteria, the stored sequence is copied and loaded into a secret weapon—a protein called <em class='bolded'>Cas9</em>. This loaded protein begins “patrolling” the insides of bacteria, looking for traces of viruses by trying to match its own sequence with the one it comes across. When a protein finds a sequence that’s completely complementary it <em class='bolded'>cuts it out</em> of the genome thus eliminating the virus’ potential to cause any harm. Cas9 is extraordinary in its specificity and wide array of potential uses in other organisms including animals and plants. Scientists of the World, including <em class='bolded'>professor Virginijus Šikšnys</em>, have discovered that the CRISPR-Cas9 system can be programmed and used to cure hereditary and other exceptionally complicated diseases such as various forms of cancer, blood related disorders and even blindness.",
                audioRec: "./recordings/nano.mp3"
            },
        },
        model: {
            path: "./models/crisprcas9.glb",
            pattern: "crisprcas",
            pos: {
                x: -0.7,
                y: 0,
                z: -0.1
            },
            rot: {
                x: 0,
                y: 4.7,
                z: 0
            },
            scale: 0.03,
        }
    },

    // -------------------- bakteriofagai --------------------
    nano: {
        meta: {
            lt: {
                name: "Bakteriofagai",
                desc: "<em class='bolded'>Bakteriofagai</em> – tai virusų rūšis, kuri puola tam tikras bakterijas, bet <em class='bolded'>nedaro žalos</em> žmogaus ląstelėms. Jų forma primena robotus: turi galvutę, kurioje saugo genetinę informaciją, uodegėlę ir kojytes, kuriomis tvirtinasi prie bakterijos. Prisikabinęs prie bakterijos bakteriofagas įleidžia savo <em class='bolded'>genetinę informaciją</em>, liepia kopijuoti naujas viruso dalis ir galiausiai sunaikina ląstelę. Didėjant bakterijų atsparumui antibiotikams, fagų terapija gali <em class='bolded'>pakeisti tradicinius gydymo būdus</em>. Todėl mokslininkai bando padaryti šią terapiją kuo saugesne ir prieinamesne visuomenei. Vienas tokių bandymų pavyzdžių: <a href='http://2018.igem.org/Team:Munich'>iGEM 2018 Munich</a>.",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "Bacteriophages",
                desc: "<em class='bolded'>Bacteriophages</em> (or phages for short) are a species of viruses, which infect bacteria, but <em class='bolded'>do no harm</em> to human cells. Their shape resembles a robot: they have a head in which they store their genetic information, a tail and legs, which they use to adhere to bacteria. Upon adherence to the bacterial surface, the bacteriophage injects its <em class='bolded'>genetic code</em> into the bacteria, forcing them to synthesize new viruses, which eventually exhausts the bacteria leading them to their death. As antibiotic resistance among bacteria increases, phage therapy is aiming to <em class='bolded'>replace traditional antibiotic treatment methods</em>. That’s why scientists are trying to make phage therapy safer and more available to society. One of such examples can be found here: <a href='http://2018.igem.org/Team:Munich'>iGEM 2018 Munich</a>.",
                audioRec: "./recordings/nano.mp3"
            },
        },
        model: {
            path: "./models/bacteriophage.glb",
            pattern: "bacteriophage",
            pos: {
                x: 0,
                y: 0.4,
                z: 0
            },
            rot: {
                x: 0,
                y: -1.5,
                z: 0
            },
            scale: 1
        }
    },

    // -------------------- dna --------------------
    dna: {
        meta: {
            lt: {
                name: "DNR",
                desc: "tekstas",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "DNA",
                desc: "tekstas",
                audioRec: "./recordings/nano.mp3"
            },
        },
        model: {
            path: "./models/DNA.glb",
            pattern: "dna",
            pos: {
                x: 0,
                y: 0,
                z: 0
            },
            rot: {
                x: 0,
                y: 3 * Math.PI / 2,
                z: 0
            },
            scale: 0.15,
        },
    },

    // -------------------- rna --------------------
    rna: {
        meta: {
            lt: {
                name: "RNR",
                desc: "tekstas",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "RNA",
                desc: "tekstas",
                audioRec: "./recordings/nano.mp3"
            },
        },
        model: {
            path: "./models/RNA.glb",
            pattern: "rna",
            pos: {
                x: 0,
                y: 0.45,
                z: 0
            },
            rot: {
                x: 0,
                y: Math.PI * 3 / 2,
                z: 0
            },
            scale: 0.3,
        },
    },

    // -------------------- sars-cov-2 --------------------
    virus: {
        meta: {
            lt: {
                name: "Virusai",
                desc: "...",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "Viruses",
                desc: "tekstas",
                audioRec: "./recordings/nano.mp3"
            },
        },
        model: {
            path: "./models/virus.glb",
            pattern: "virus",
            pos: {
                x: 0,
                y: 0.35,
                z: 0.1
            },
            rot: {
                x: 0,
                y: 4.6,
                z: 0
            },
            scale: 0.5
        }
    },

    // -------------------- model organisms --------------------
    ecoli: {
        meta: {
            lt: {
                name: "Modeliniai organizmai",
                desc: "Prieš akis matote bakteriją pavadinta <em class='bolded'>E.coli</em>. Nors pirmą kartą buvo rasta žmogaus išmatose, dabar ji prisideda prie <em class='bolded'>didžiausių mokslinių atradimų</em>, tokių kaip genetinių žirklių – CRISPR, sėkmės.Dėl savo paprastos struktūros, nesudėtingų auginimo sąlygų bei spartaus dauginimosi, bakterija užsitarnavo vietą viso pasaulio laboratorijose.O kuo geriau ištyrinėtas organizmas tuo didesnė tikimybė, jog jį panaudos dar kitiems sudėtingiems tyrimams.Tokios gyvybės formos yra vadinamos <em class='bolded'>modeliniais organizmais</em>. Tarp jų – ir dažnai sutinkamos <em class='bolded'>vaisinės muselės, mielės bei pelėsiniai grybai</em>.",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "Model organisms",
                desc: "Here you can see the <em class='bolded'>E. coli</em> bacteria. Even though it was first found in the feces of humans, now it is pivotal to the <em class='bolded'>greatest scientific discoveries</em>, like the molecular scissor technology—CRISPR. Due to its simple structure and uncomplicated conditions for reproduction E. coli has earned its place in laboratories all over the World. The better an organism is studied, the more likely it will be used for other research. Such organisms are called <em class='bolded'>model organisms</em>. <em class='bolded'>Fruit flies, yeast and moulds</em> are all examples of model organisms.",
                audioRec: "./recordings/nano.mp3"
            },
        },
        model: {
            path: "./models/ecoli.glb",
            pattern: "ecoli",
            pos: {
                x: -0.2,
                y: -0.2,
                z: -0.2
            },
            rot: {
                x: 0,
                y: 2.5,
                z: 0
            },
            scale: 2
        }
    },

    // -------------------- genetic circuit --------------------
    circuit: {
        meta: {
            lt: {
                name: "Genetinė grandinė",
                desc: "tekstas-tekstas",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "Genetic circuit",
                desc: "text",
                audioRec: "./recordings/nano.mp3"
            },
        },
        model: {
            path: "./models/circuit.glb",
            pattern: "circuit",
            pos: {
                x: -0.5,
                y: 0,
                z: 0
            },
            rot: {
                x: -Math.PI / 2,
                y: Math.PI,
                z: Math.PI
            },
            scale: 30
        }
    },

    // -------------------- sequencing --------------------
    sequencing: {
        meta: {
            lt: {
                name: "DNR sekoskaita",
                desc: "Visa biologinė informacija apie tave slypi <em class='bolded'>genome</em>, sudarytame iš <em class='bolded'>DNR grandinių</em>. Šios grandinės sudarytos iš dalių, vadinamų nukleotidais. Iššifravus jų sekas grandinėje galima perskaityti, pavyzdžiui, kokiomis ligomis esi linkęs sirgti. Plika akimi genomo seka nėra matoma, todėl norint ją perskaityti, reikia DNR grandinę perstumti per mažą baltyminę skylutę dirbtinėje membranoje, vadinama <em class='bolded'>nanopora</em>. Pro nanoporą yra leidžiama vienkryptė elektrinė srovė, kurią fiksuoja jutiklis. Jei nanoporoje atsiranda pašalinių darinių, šie sutrikdo elektros srovės tekėjimą ir, priklausomai nuo objekto savybių, atitinkamai pakeičia fiksuojamo signalo stiprumą. Kadangi <em class='bolded'>A, T, C ir G nukleotidai</em> yra skirtingų dydžių ir savybių, eidami per nanoporą jie sukelia skirtingo stiprumo elektrinės srovės pokyčus. Taip gaunami unikalūs signalai, kuriuos užfiksavus nesunku atsekti nukleotidų seką grandinėje ir paversti lengviau suprantamomis raidėmis A, T, C bei G, ir iššifruoti gautą kodą. Tai vadinama <em class='bolded'>DNR sekoskaita</em>.",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "DNA sequencing",
                desc: "All biological information about you is stored in your <em class='bolded'>genome</em>, which is made of <em class='bolded'>DNA strands</em>. These strands are made of even smaller parts, called nucleotides. Decoding of these strands can tell us a lot about a person, including their predisposition to certain diseases. The sequence of our genome is not visible to a naked eye—in order to be read DNA strands need to be pushed through a tiny protein hole located in an artificial membrane called a <em class='bolded'>nanopore</em>. A unidirectional electricity current is run through a nanopore, which is detected by a sensor. If there is an object in a nanopore, say a nucleotide, it disrupts the flow of electricity. The disruption differs depending on the object’s properties and a variation in the current flow is detected. Because <em class='bolded'>A, T, C and G nucleotides</em> are of different sizes and properties, when passing through a nanopore, they cause a unique change in the current flow. These unique changes are registered and help in identifying the sequence code in the form of A, T, C and G letters. This process is called <em class='bolded'>DNA sequencing</em>. ",
                audioRec: "./recordings/nano.mp3"
            },
        },
        model: {
            path: "./models/sekoskaita.glb",
            pattern: "sequencing",
            pos: {
                x: 0,
                y: 1,
                z: 0
            },
            rot: {
                x: 0,
                y: 0,
                z: 0
            },
            scale: 0.2
        }
    },

    // -------------------- translation --------------------
    translation: {
        meta: {
            lt: {
                name: "Baltymų transliacija",
                desc: "Prieš tavo akis – baltymų gamybos procesas. Šios molekulės – tai itin mažos plytos, padedančios sukurti mūsų organizmą tokį, koks jis yra. Baltymų gamyba – vienas iš svarbiausių procesų gyvybei. Kiekvieno mūsų kūne yra genai, sudaryti iš DNR sekų. Ši seka transkripcijos metu verčiama į RNR molekules. O šios, vykstant transliacijos procesui, iškoduojamos į baltymų sekas sudarytas iš aminorūgščių. Būtent pastarąjį procesą ir gali matyti animacijoje. Ilga grandinė, matoma nuo pat animacijos pradžios – tai informacinė RNR molekulė. Ant šios molekulės tvirtinasi ribosoma. Ji sudaryta iš didžiojo ir mažojo subvienetų. Prie didžiojo subvieneto, kaip matyti ir animacijoje, pagal informacinės RNR seką jungiasi transportinės RNR molekulės. Kiekviena transportinė RNR molekulė padeda ribosomai iššifruoti ir įjungti vieną aminorūgštį. Šioms amino rūgštims jungiantis į vieną grandinėlę gaunamas baltymas – mūsų organizmo statybinė medžiaga, atliekanti svarbiausias funkcijas organizmo gyvavime.",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "Protein translation",
                desc: "Here you can see the production of a protein. These molecules are the building blocks of our bodies. Protein production is one of the most important processes in living organisms. Genes are made up of DNA sequences. These sequences are transformed into RNA molecules during transcription. The molecules are then translated into protein sequences, constructed from amino acids. This process can be seen in the animation. The long chain seen from the start of the animation is the messenger RNA molecule. A ribosome is attached to the molecule. The ribosome is made up of a large and a small subunit. Transfer RNA molecules attach to the large subunit with respect to the messenger RNA sequence. All transfer RNA molecules help the ribosome decode and connect an amino acid. The chain of amino acids make up a protein which performs the most important functions in sustaining life.",
                audioRec: "./recordings/nano.mp3"
            },
        },
        model: {
            path: "./models/transliacija.glb",
            pattern: "translation",
            pos: {
                x: 0,
                y: 0,
                z: 0
            },
            rot: {
                x: 0,
                y: -1,
                z: 0
            },
            scale: 25
        }
    },
    // -------------------- iGEM logo --------------------
    igem: {
        meta: {
            en: {
                name: "Vilnius iGEM",
                desc: "Best wishes from the postcard! Vilnius-Lithuania iGEM 2020 team greets you with this sneak peek of our project, which we are developing alongside our main goal. The whole idea of the “pocket-museum” was developed in purpose to educate and encourage people to be involved in life sciences and especially synthetic biology. QR codes, as well as an augmented reality environment, are accessible to anyone with a smartphone, enabling access to a virtual museum of life sciences. QR codes and AR markers are mounted on plaques installed in cities <a href='https://igem-vilnius-ar.com/map.html'>all over Lithuania</a>. By simply scanning the QR code you enter our website and by pointing your camera towards the marker you can enjoy the 3D model exhibition!<br><a href='https://igem-vilnius-ar.com/'>More...</a>",
            },
        },
        model: {
            path: "./models/igem-logo.glb",
            pattern: "igem-logo",
            pos: {
                x: 0,
                y: 0,
                z: 0
            },
            rot: {
                x: 0,
                y: -1,
                z: 0
            },
            scale: 25
        }
    },
    // -------------------- painting --------------------
    painting: {
        meta: {
            lt: {
                name: "Sintetinė biologija",
                desc: "tekstas",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "Synthetic biology",
                desc: "text",
                audioRec: "./recordings/nano.mp3"
            }
        },
        model: {
            path: "./models/painting.glb",
            pattern: "paveikslas",
            pos: {
                x: 0,
                y: 0.5,
                z: 0.5
            },
            rot: {
                x: -0.7,
                y: Math.PI / 2,
                z: 0
            },
            scale: 0.3
        }
    },
    // -------------------- gmo --------------------
    gmo: {
        meta: {
            lt: {
                name: "Genetiškai modifikuoti organizmai",
                desc: "tekstas",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "Genetically modified organisms",
                desc: "text",
                audioRec: "./recordings/nano.mp3"
            }
        },
        model: {
            path: "./models/gmo.glb",
            pattern: "gmo",
            pos: {
                x: 0,
                y: 0.4,
                z: 0
            },
            rot: {
                x: 0,
                y: Math.PI,
                z: 0
            },
            scale: 2
        }
    }
};
