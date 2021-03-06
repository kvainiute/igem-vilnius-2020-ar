const data = {
	// -------------------- biobrick --------------------
	biobrick: {
		meta: {
			lt: {
				name: "BioBrick",
				desc: "Ar žinojote, jog DNR fragmentai yra panašūs į LEGO kaladėles savo veikimo principu? Tokie DNR gabaliukai vadinami biologinėmis dalimis (<em class='bolded'>angl. BioBricks</em>), kurias galima vis perkonstruoti, panašiai kaip LEGO kaladėles vaizduojamas ekrane, ir taip organizmui suteikti naujų savybių. Tai yra vienas iš pagrindinių <em class='bolded'>sintetinės biologijos</em>, sutrumpintai SinBio, principų.<br><br>Sintetinė biologija yra <em class='bolded'>tarpdisciplininė</em> mokslo sritis, kuri apjungia biologijos, inžinerijos, chemijos, informacinių technologijų ir matematinio modeliavimo mokslų kryptis. Tai yra <em class='bolded'>naujų organizmų funkcijų kūrimas</em>, keičiant genetinę informaciją. Šių modifikacijų būdu gaunamos geresnės organizmų funkcijos, padedančios spręsti globalias aplinkosaugos, sveikatos bei pramonės problemas. Šio mokslo vystymąsi ypač pastūmėjo tarptautinis sintetinės biologijos konkursas iGEM (<em class='bolded'>angl. International Genetically Engineered Machine</em>), kuriame varžosi studentų ir moksleivių komandos, pristatydamos savo sugalvotus mokslinius projektus.<br><br>iGEM komandos suteikia organizmams naujas funkcijas naudodamos biologines dalis. Biologinė dalis yra tam tikras DNR fragmentas, kuris koduoja genetinę informaciją – ląstelės veikimo „instrukciją“. Visai panašiai kaip su LEGO kaladėlėmis, dėliodami skirtingas biologines dalis mokslininkai gali vis <em class='bolded'>perkonstruoti DNR sekas</em> taip pakeisdami įvairias ląstelės atliekamas funkcijas, pavyzdžiui, inicijuoti naujų baltymų gamybą, kurie būtent ir suteikia ląstelei neįprastų savybių.",
				audioRec: "./recordings/lt/biobrick.mp3"
			},
			en: {
				name: "BioBrick",
				desc: "Did you know that DNA fragments are similar to LEGO blocks in how they work? Such pieces of DNA are called <em class='bolded'>BioBricks</em>, which can be ever reconstructed, much like the LEGO blocks displayed on the screen, giving an organism new properties. This is one of the basic principles of <em class='bolded'>synthetic biology</em>, or SynBio in short. Synthetic biology is a <em class='bolded'>multidisciplinary field</em>, which encompasses a broad range of methodologies from various disciplines, such as biology, engineering, chemistry, information technologies and mathematical modelling. It is a way of <em class='bolded'>creating functions of organisms</em> by changing the genetic information. These new functions aid in solving global environmental, health and industry issues. Developments in this field have been driven in part by the <em class='bolded'>International Genetically Engineered Machine Competition</em> (iGEM), in which students compete presenting their scientific projects.",
				audioRec: "./recordings/en/biobrick.mp3"
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
				audioRec: "./recordings/lt/gfp.mp3"
			},
			en: {
				name: "Green fluorescent protein (GFP)",
				desc: "<em class='bolded'>Green fluorescent protein</em>, or <em class='bolded'>GFP</em>, was first identified in a fluorescent <em class='bolded'>jellyfish</em>. Osamu Shimomura described the biophysics of how GFP fluoresces. A few years later, Martin Chalfie reported that GFP can be used in experiments with other organisms like bacteria and nematode. Later Roger Tsien designed variants of the GFP protein that could fluoresce cyan, blue and yellow. Shimomura, Chalfie and Tsien were awarded the <em class='bolded'>Nobel Prize for Chemistry</em> in 2008 for their work in the discovery and development of this protein. What made GFP such an important tool in science is the fact that it’s “auto-catalytic” – it doesn’t need any co-factors or enzyme processing to fluoresce – so it can be easily used in a wide variety of organisms. To this day GFP is used in laboratories all over the world for protein and DNA research: <br> <img style='width: 100%' src='images/model-info/gfp.jpg'></img><br><p style='padding-top: 3px;margin: 0;font-size: 0.8em;'><em class='bolded'>Fig 1</em>. Mammalian cell parts, marked with different fluorescent proteins</p>",
				audioRec: "./recordings/en/gfp.mp3"
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
			const tray = document.getElementById('tray-container');
			tray.style.display = "flex";
		},
		onHidden: () => {
			const tray = document.getElementById('tray-container');
			tray.style.display = "none";
		}
	},

	// -------------------- crispr_cas9 --------------------
	crisprcas9: {
		meta: {
			lt: {
				name: "CRISPR-Cas9",
				desc: "Savo ekrane galite matyti CRISPR-Cas9 sistemą, kuria remiantis kuriamos naujos molekulinių žirklių technologijos. Išgyvenusios virusinę ataką bakterijos išsaugo dalelę viruso DNR savo genome, savitoje <em class='bolded'>DNR bibliotekoje</em>, vadinamoje <em class='bolded'>CRISPR</em>. Čia seka saugoma iki kol jos prireikia. Kai virusas vėl bando užpulti bakteriją, ši seka greitai nukopijuojama ir panaudojama užtaisyti slaptam ginklui – baltymui, pavadinimu <em class='bolded'>Cas9</em>. Užtaisytas baltymas ima naršyti po bakterijos vidų, ieškodamas viruso pėdsakų lygindamas kiekvieną sutiktą DNR seką su pavyzdžiu iš bibliotekos. Kai baltymas suranda visiškai sutampančią seką, jis ją <em class='bolded'>iškerpa</em>, tad virusas nebegali kenkti bakterijai. Cas9 ypatingas tuo, kad yra be galo tikslus bei lengvai pritaikomas kitokioms – tiek žmogaus, tiek gyvūno, tiek augalo – ląstelėms. Pasaulio mokslininkai, tarp jų ir <em class='bolded'>profesorius Virginijus Šikšnys</em>, išsiaiškino, jog šią sistemą yra įmanoma užprogramuoti ir <em class='bolded'>pritaikyti žmogaus reikmėms</em>, siekiant išgydyti įvairias genetiškai paveldimas ir itin komplikuotas ligas, tokias kaip vėžys, įvairios kraujo ligos ar netgi aklumas.",
				audioRec: "./recordings/lt/crispr.mp3"
			},
			en: {
				name: "CRISPR-Cas9",
				desc: "On your screen you can see the CRISPR-Cas9 system, based on which molecular scissor technology is being created. After surviving a viral attack, bacteria save a section of the virus’ DNA in its own genome, a sort of <em class='bolded'>DNA library</em> called <em class='bolded'>CRISPR</em>. Here, the virus’ sequence is stored until needed. When the same kind of virus attempts to reinfect bacteria, the stored sequence is copied and loaded into a secret weapon—a protein called <em class='bolded'>Cas9</em>. This loaded protein begins “patrolling” the insides of bacteria, looking for traces of viruses by trying to match its own sequence with the one it comes across. When a protein finds a sequence that’s completely complementary it <em class='bolded'>cuts it out</em> of the genome thus eliminating the virus’ potential to cause any harm. Cas9 is extraordinary in its specificity and wide array of potential uses in other organisms including animals and plants. Scientists of the World, including <em class='bolded'>professor Virginijus Šikšnys</em>, have discovered that the CRISPR-Cas9 system can be programmed and used to cure hereditary and other exceptionally complicated diseases such as various forms of cancer, blood related disorders and even blindness.",
				audioRec: "./recordings/en/crispr.mp3"
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
				audioRec: "./recordings/lt/bacteriophage.mp3"
			},
			en: {
				name: "Bacteriophages",
				desc: "<em class='bolded'>Bacteriophages</em> (or phages for short) are a species of viruses, which infect bacteria, but <em class='bolded'>do no harm</em> to human cells. Their shape resembles a robot: they have a head in which they store their genetic information, a tail and legs, which they use to adhere to bacteria. Upon adherence to the bacterial surface, the bacteriophage injects its <em class='bolded'>genetic code</em> into the bacteria, forcing them to synthesize new viruses, which eventually exhausts the bacteria leading them to their death. As antibiotic resistance among bacteria increases, phage therapy is aiming to <em class='bolded'>replace traditional antibiotic treatment methods</em>. That’s why scientists are trying to make phage therapy safer and more available to society. One of such examples can be found here: <a href='http://2018.igem.org/Team:Munich'>iGEM 2018 Munich</a>.",
				audioRec: "./recordings/en/bacteriophage.mp3"
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
				desc: "Papildytos realybės modelis iliustruoja genetinę informaciją koduojančią <em class='bolded'>DNR molekulę</em>. Nors ir nedidelė, šioje molekulėje koduojamos visos mūsų kognityvinės, motorikos ir kitos fiziologinės bei biocheminės funkcijos. DNR molekulę sudaro dvi spirale susipynusios grandinės, kurios vadinamos <em class='bolded'>komplementariosiomis grandinėmis</em>. DNR molekulių yra visuose mūsų ląstelių branduoliuose. Jei ištiestume vieną DNR molekulę, kuri branduolyje yra kompaktizuotoje būsenoje – gautume net 2 metrų ilgio siūlą. <em class='bolded'>DNR kodas </em>yra universalus rūšims – tai reiškia, kad grandinėje yra tos pačios 4 azotinės bazės, kurios sudaro universalias <em class='bolded'>aminorūgštis</em>, nepriklausomai nuo to, ar tai gyvūno, ar augalo DNR. Būtent ši molekulė koduoja visą žmogaus genetinę informaciją ir yra perduodama <em class='bolded'>iš kartos į kartą.</em>",
				audioRec: "./recordings/lt/dna.mp3"
			},
			en: {
				name: "DNA",
				desc: "The augmented reality model shows a <em class='bolded'>DNA molecule</em>, which encodes genetic information. Although small, this molecule encodes all of our cognitive, motor, and other physiological and biochemical functions. A DNA molecule is made up of two intertwined strands called <em class='bolded'>complementary strands</em>. DNA molecules are present in all the nuclei of our cells. If stretched out, a single DNA molecule would be up to 2 meters in length. <em class='bolded'>The DNA code </em>is universal for all species, meaning that the chain contains the same 4 nitrogenous bases that make up the <em class='bolded'>amino acids</em>, whether the DNA is of an animal or plant. The same molecule but rearranged differently encodes all human genetic information and is passed down <em class='bolded'>from generation to generation.</em>",
				audioRec: "./recordings/en/dna.mp3"
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
				desc: "Kviečiame susipažinti su genetinę medžiagą koduojančiomis molekulėmis – <em class='bolded'>RNR</em>. Šios molekulės egzistuoja kelių rūšių – visos jos atlieka skirtingą funkciją. RNR funkcija glaudžiai susijusi su <em class='bolded'>informacijos pernešimu, baltymų gaminimu  ir tinkamu jų funkcijos atlikimu mūsų organizme</em>. Papildytos realybės modelis vaizduoja matricinę RNR – kuri verčia genetinę informaciją į baltymus bei ribosominę RNR, kuri atlieka baltymo gaminimo – statymo funkciją. Taigi, nors dažniausiai girdime, kad DNR yra pagrindinė genetinės medžiagos kodavimo forma, be RNR molekulės informacija <em class='bolded'>negalėtų būti realizuojama </em>ir verčiama į baltymines struktūras.",
				audioRec: "./recordings/lt/rna.mp3"
			},
			en: {
				name: "RNA",
				desc: "Here you can see <em class='bolded'>RNA </em>molecules, which encode the genetic material. There are many types of RNA molecules, all of which perform different functions. The function of RNA is closely related to the <em class='bolded'>transfer of information, the production of proteins and the proper performance of their function in our body</em>. The augmented reality model depicts an informational RNA which translates genetic information into proteins, and a ribosomal RNA which performs protein production. We often hear that DNA is the main form of coding for genetic material but without the RNA molecule information <em class='bolded'>could not be used </em>for creating structures of proteins.",
				audioRec: "./recordings/en/rna.mp3"
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
				desc: "Prieš akis matote kelis tūkstančius kartų padidintus <em class='bolded'>virusus</em>. Visiškai jų atsikratyti nėra įmanoma, nes kol virusai gali daugintis kontaktuodami su žmonėmis, jie mutuoja, ir taip atsiranda <em class='bolded'>naujų</em>, dar nežinomų, virusų rūšių. Vis dėl to naujausios infekcijų plitimo sekimo ir prevencijos technologijos padeda sumažinti aukų skaičius. Su kiekviena nauja grėsme ligos sukelėjo nustatymo laikas nuo kelių metų sutrumpėjo iki savaičių, o vaistų gaminimo, testavimo ir patentavimo procesai vykdomi keliolika kartų <em class='bolded'>sparčiau</em>. Pandemijų turėjome ir turėsime, o kontroliuoti galima tik <em class='bolded'>atsaką </em>į jas.",
				audioRec: "./recordings/lt/virus.mp3"
			},
			en: {
				name: "Viruses",
				desc: "Here you can see some <em class='bolded'>viruses </em>magnified a few thousand times. We cannot get rid of them completely, because when viruses spread and multiply, they mutate, creating <em class='bolded'>completely new </em>and unknown types of viruses. On the bright side, the newest technologies of tracking viral infections and how they spread helps decrease the number of victims. With every new threat brought by viruses the time to identify the pathogen gets shorter and shorter, from a few years to a few weeks, medicine and treatment development, also, testing processes are performed <em class='bolded'>faster </em>by orders of magnitude. We may not be able to control the presence of pandemics, but we will be able to control the <em class='bolded'>response </em>to them.",
				audioRec: "./recordings/en/virus.mp3"
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
				audioRec: "./recordings/lt/modelOrg.mp3"
			},
			en: {
				name: "Model organisms",
				desc: "Here you can see the <em class='bolded'>E. coli</em> bacteria. Even though it was first found in the feces of humans, now it is pivotal to the <em class='bolded'>greatest scientific discoveries</em>, like the molecular scissor technology—CRISPR. Due to its simple structure and uncomplicated conditions for reproduction E. coli has earned its place in laboratories all over the World. The better an organism is studied, the more likely it will be used for other research. Such organisms are called <em class='bolded'>model organisms</em>. <em class='bolded'>Fruit flies, yeast and moulds</em> are all examples of model organisms.",
				audioRec: "./recordings/en/modelOrg.mp3"
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
				desc: "Prieš jūsų akis - bene dažniausiai mokslininkų naudojamas įrankis - <em class='bolded'>plazmidė</em>, žiedinės formos DNR seka. Jei žmogaus chromosomose DNR seką įsivaizduojame kaip begalo ilgą, itin susisukusią grandinę, šioji DNR seka yra visai kitokia. Visos šios plazmidės dydis kartais būna netgi mažesnis už žmogaus chromosomose randamus genus. Tačiau visas plazmidės žavesys - tai galimybė į ją <em class='bolded'>įdėti mūsų pasirinktą geną</em>. Plazmidė - tai uždaras žiedas, sudarytas iš nukleotidų A, T, G, C, susijungusių pagal tam tikras taisykles. Dėl sekoje esančių konkrečių vietų, kurias paveikus <em class='bolded'>molekulinėmis žirklėmis</em> mokslininkai įkerpa abi plazmidėje esančias DNR grandines, o į likusį tarpą <em class='bolded'>įklijuoja pasirinktą geną</em> - tai gali būti įvairius baltymus, pavyzdžiui alergenus ar švytinčius baltymus, koduojančios sekos. Vėliau iš šių plazmidžių gaunami baltymai naudojami įvairiuose tyrimuose siekiant gydyti ar detektuoti įvairias ligas, sutrikimus ar mechanizmus. Taip pat, kartais tokios plazmidės gali būti naudojamos ir įvairiais <em class='bolded'>komerciniais tikslais</em>, pavyzdžiui susintetinti dažus, galinčius nudažyti tekstilę.",
				audioRec: "./recordings/lt/circuit.mp3"
			},
			en: {
				name: "Genetic circuit",
				desc: "Here you can see perhaps the most common tool used by scientists - <em class='bolded'>plasmid</em>, a DNA sequence in the form of a ring. While we know that DNA sequence of human chromosomes is infinitely long and highly twisted strand, this DNA sequence is quite different. The size of this entire plasmid is sometimes even smaller than the genes found on human chromosomes. However, the whole charm of the plasmid is the ability to <em class='bolded'>insert our chosen genes</em> into it. The plasmid itself is a closed ring composed of nucleotides A, T, G, C joined together according to certain rules. Because of the specific sites in the sequence, researchers can <em class='bolded'>cut both strands of DNA</em> in the plasmid and <em class='bolded'>paste the selected gene</em> into the plasmid. These sequences might encode various proteins, such as allergens or glowing proteins. Subsequently, proteins derived from these plasmids are used in a variety of studies to treat or detect a range of diseases, disorders, or mechanisms. Sometimes such plasmids can be used for a variety of <em class='bolded'>commercial purposes</em>, such as synthesizing dyes that can dye textiles.",
				audioRec: "./recordings/en/circuit.mp3"
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
				audioRec: "./recordings/lt/sequencing.mp3"
			},
			en: {
				name: "DNA sequencing",
				desc: "All biological information about you is stored in your <em class='bolded'>genome</em>, which is made of <em class='bolded'>DNA strands</em>. These strands are made of even smaller parts, called nucleotides. Decoding of these strands can tell us a lot about a person, including their predisposition to certain diseases. The sequence of our genome is not visible to a naked eye—in order to be read DNA strands need to be pushed through a tiny protein hole located in an artificial membrane called a <em class='bolded'>nanopore</em>. A unidirectional electricity current is run through a nanopore, which is detected by a sensor. If there is an object in a nanopore, say a nucleotide, it disrupts the flow of electricity. The disruption differs depending on the object’s properties and a variation in the current flow is detected. Because <em class='bolded'>A, T, C and G nucleotides</em> are of different sizes and properties, when passing through a nanopore, they cause a unique change in the current flow. These unique changes are registered and help in identifying the sequence code in the form of A, T, C and G letters. This process is called <em class='bolded'>DNA sequencing</em>. ",
				audioRec: "./recordings/en/sequencing.mp3"
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
				desc: "Prieš tavo akis – <em class='bolded'>baltymų gamybos procesas</em>. Šios molekulės – tai itin mažos plytos, padedančios sukurti mūsų organizmą tokį, koks jis yra. Baltymų gamyba – vienas iš svarbiausių procesų gyvybei. Kiekvieno mūsų kūne yra <em class='bolded'>genai</em>, sudaryti iš <em class='bolded'>DNR </em>sekų. Ši seka transkripcijos metu verčiama į <em class='bolded'>RNR </em>molekules. O šios, vykstant transliacijos procesui, iškoduojamos į <em class='bolded'>baltymų </em>sekas sudarytas iš <em class='bolded'>aminorūgščių</em>. Būtent pastarąjį procesą ir gali matyti animacijoje. Ilga grandinė, matoma nuo pat animacijos pradžios – tai informacinė RNR molekulė. Ant šios molekulės tvirtinasi <em class='bolded'>ribosoma</em>. Ji sudaryta iš didžiojo ir mažojo subvienetų. Prie didžiojo subvieneto, kaip matyti ir animacijoje, pagal informacinės RNR seką jungiasi transportinės RNR molekulės. Kiekviena transportinė RNR molekulė padeda ribosomai iššifruoti ir įjungti vieną aminorūgštį. Šioms amino rūgštims jungiantis į vieną grandinėlę gaunamas baltymas – mūsų organizmo statybinė medžiaga, atliekanti <em class='bolded'>svarbiausias funkcijas organizmo gyvavime</em>.",
				audioRec: "./recordings/lt/translation.mp3"
			},
			en: {
				name: "Protein translation",
				desc: "Here you can see the production of a <em class='bolded'>protein</em>. These molecules are the building blocks of our bodies. Protein production is one of the most important processes in living organisms. <em class='bolded'>Genes</em> are made up of <em class='bolded'>DNA sequences</em>. These sequences are transformed into <em class='bolded'>RNA</em> molecules during transcription. The molecules are then translated into <em class='bolded'>protein </em>sequences, constructed from <em class='bolded'>amino acids</em>. This process can be seen in the animation. The long chain seen from the start of the animation is the messenger RNA molecule. A <em class='bolded'>ribosome </em>is attached to the molecule. The ribosome is made up of a large and a small subunit. Transfer RNA molecules attach to the large subunit with respect to the messenger RNA sequence. All transfer RNA molecules help the ribosome decode and connect an amino acid. The chain of amino acids make up a protein which performs the <em class='bolded'>most important functions in sustaining life.</em>",
				audioRec: "./recordings/en/translation.mp3"
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
				desc: "Best wishes from the postcard! <em class='bolded'>Vilnius-Lithuania iGEM 2020 team </em>greets you with this sneak peek of our project, which we are developing alongside our main goal. The whole idea of the “pocket-museum” was developed in purpose to educate and encourage people to be involved in life sciences and especially synthetic biology. QR codes, as well as an augmented reality environment, are accessible to anyone with a smartphone, enabling access to a <em class='bolded'>virtual museum of life sciences</em>. QR codes and AR markers are mounted on plaques installed in cities <a href='https://igem-vilnius-ar.com/map.html'>all over Lithuania</a>. By simply scanning the QR code you enter our website and by pointing your camera towards the marker you can enjoy the 3D model exhibition!<br><a href='https://igem-vilnius-ar.com/'>More...</a>",
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
			scale: 1
		}
	},
	// -------------------- synbio --------------------
	synbio: {
		meta: {
			lt: {
				name: "Sintetinė biologija",
				desc: "Modelyje matote paveikslą, kuris sudarytas iš <em class='bolded'>bakterijų, gebančių keisti spalvas</em>. Tokį paveikslą būtų galima sukurti <em class='bolded'>genų inžinerijos</em> pagalba, parenkant bakterijoms tinkamas spalvas. Šiam projektui naudojami genų inžinerijos metodai gali būti pritaikyti sprendžiant įvairias žmonijos problemas, pavyzdžiui <em class='bolded'>oro teršalų valymui</em> pasitelkiant mikroorganizmus vykdančius bioremediaciją; dumbliai, kurie žuvies organizme <em class='bolded'>naikina ligų sukėlėją</em>; vitamino A trūkumo šalinimas pasitelkiant modifikuotus ryžius. Visi šie projektai yra sukurti genų inžinerijos pagalba.",
				audioRec: "./recordings/lt/synbio.mp3"
			},
			en: {
				name: "Synthetic biology",
				desc: "In this model you can see a visual representation of carefully arranged <em class='bolded'>color-changing bacteria</em>. It is possible to recreate such art in real life by <em class='bolded'>engineering bacteria </em>accordingly. The methods used to create this masterpiece may be applied to solving the intricate problems of humanity. For example, by exploiting bacteria that perform bioremediation, we can <em class='bolded'>clean polluted air</em>, or minimize <em class='bolded'>vitamin A deficiencies </em>with genetically modified rice. There are many problems waiting to be solved, and with the help of genetic engineering, a lot of them could be alleviated.",
				audioRec: "./recordings/en/synbio.mp3"
			}
		},
		model: {
			path: "./models/synbio.glb",
			pattern: "synbio",
			pos: {
				x: 0,
				y: -0.2,
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
	// -------------------- gmo --------------------
	gmo: {
		meta: {
			lt: {
				name: "Genetiškai modifikuoti organizmai",
				desc: "Ar kada nors valgėte bananą su didelėmis, kietomis, juodomis sėklomis? Kodėl bananai, kuriuos perkame parduotuvėje yra besėkliai? Tokius, mums patrauklius produktus padėjo sukurti <em class='bolded'>biotechnologiniai pasiekimai</em>. Aneuploidija, arba kitaip – chromosomų rinkinio skaičiaus padauginimas mums leidžia išgauti daug pelningesnius ir vartojimui patrauklesnius produktus. Šis papildytos realybės modelis vaizduoja, kaip atrodo <em class='bolded'>aneuploidinis bananas</em>, kuris turi 3 chromosomų rinkinius ir, kaip atrodo laukinis bananas, su jam įprastu – dvigubu chromosomų rinkiniu. Nors neretai įsivaizduojame, kad genetiškai modifikuotas maistas yra pavojingas, atrodo nenatūraliai ir yra nesaugus vartoti, iš tiesų genetinės modifikacijos yra ypač <em class='bolded'>atsakingai tikrinamos ir testuojamos</em>, tad baimintis tikrai nereikėtų.",
				audioRec: "./recordings/lt/gmo.mp3"
			},
			en: {
				name: "Genetically modified organisms",
				desc: "Have you ever eaten a banana with large, hard, black seeds? Why are the bananas we buy in stores today seedless? Such products exist because of <em class='bolded'>biotechnological advances</em>. Knowing how to multiply the number of chromosomes in a set, called Aneuploidy, allowed us to produce much more profitable and attractive products for consumption. This augmented reality model depicts what an <em class='bolded'>aneuploid banana </em>looks like with 3 sets of chromosomes, and what a wild banana looks like with its usual double set of chromosomes. We often imagine that genetically modified foods are dangerous, unnatural, and unsafe to consume, but in reality genetic modifications are <em class='bolded'>inspected and tested very responsibly.</em>",
				audioRec: "./recordings/en/gmo.mp3"
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
