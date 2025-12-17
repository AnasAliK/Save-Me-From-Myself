
        // --- CONSTANTS ---
        const THEMES = {
            whatsapp: { appBg: '#efeae2', headerBg: '#008069', headerText: '#ffffff', bubbleBg: '#dcf8c6', bubbleText: '#111b21', bubbleRecvBg: '#ffffff', bubbleRecvText: '#111b21', accent: '#00a884', fixedText: '#008069', radius: '0.5rem', font: "'Inter', sans-serif", icon: 'ph-whatsapp-logo', pattern: 'whatsapp', footerBg: '#f0f2f5' },
            imessage: { appBg: '#ffffff', headerBg: 'rgba(245,245,245,0.9)', headerText: '#000000', bubbleBg: '#3b82f6', bubbleText: '#ffffff', bubbleRecvBg: '#e5e5ea', bubbleRecvText: '#000000', accent: '#3b82f6', fixedText: '#fbbf24', radius: '1.2rem', font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif", icon: 'ph-chat-circle-dots', pattern: 'none', footerBg: '#ffffff' },
            twitter: { appBg: '#000000', headerBg: 'rgba(0,0,0,0.8)', headerText: '#ffffff', bubbleBg: '#1d9bf0', bubbleText: '#ffffff', bubbleRecvBg: '#2f3336', bubbleRecvText: '#e7e9ea', accent: '#1d9bf0', fixedText: '#ffffff', radius: '1rem', font: "'Inter', sans-serif", icon: 'ph-twitter-logo', pattern: 'none', darkMode: true, footerBg: '#000000', border: '1px solid #333' },
            discord: { appBg: '#36393f', headerBg: '#2f3136', headerText: '#ffffff', bubbleBg: '#5865F2', bubbleText: '#ffffff', bubbleRecvBg: '#2f3136', bubbleRecvText: '#dcddde', accent: '#5865F2', fixedText: '#ffffff', radius: '4px', font: "'Open Sans', sans-serif", icon: 'ph-discord-logo', pattern: 'none', darkMode: true, footerBg: '#40444b' },
            tinder: { appBg: '#ffffff', headerBg: 'linear-gradient(to right, #fd267a, #ff6036)', headerText: '#ffffff', bubbleBg: '#fd267a', bubbleText: '#ffffff', bubbleRecvBg: '#f0f2f4', bubbleRecvText: '#111', accent: '#fd267a', fixedText: '#ffffff', radius: '1.5rem', font: "'Inter', sans-serif", icon: 'ph-fire-fill', pattern: 'grid', footerBg: '#ffffff' }
        };

        // --- HISTORY MANAGER ---


        const CONVERSATIONS_DATA = {
            boss: {
                whatsapp: [
                    { id: 'wife1', title: 'Late Dinner', msgs: [
                        {type:'recv',text:"When are you finally coming home?"},
                        {type:'sent',text:"I am curently stuk at the office dealing with a crisis.",mistakes:[{o:"curently",c:"currently",l:["currently","current","currant"]},{o:"stuk",c:"stuck",l:["stuck","struck","suck"]}]},
                        {type:'recv',text:"Again? You promised to be early."},
                        {type:'sent',text:"The bord meetng ran way over time and everyone is argueing.",mistakes:[{o:"bord",c:"board",l:["board","bored","bird"]},{o:"meetng",c:"meeting",l:["meeting","meating","meet"]},{o:"argueing",c:"arguing",l:["arguing","argue","aging"]}]},
                        {type:'recv',text:"Well, your dinner is cold now."}, 
                        {type:'sent',text:"I am so sory honey, please save me a smal plat in the fridge.",mistakes:[{o:"Sory",c:"Sorry",l:["Sorry","sore","store"]},{o:"smal",c:"small",l:["small","smell","mall"]},{o:"plat",c:"plate",l:["plate","plait","plot"]}]},
                        {type:'recv',text:"I made your favorite lasagna."},
                        {type:'sent',text:"Is it the spiccy one? I am absolutly starvng right now.",mistakes:[{o:"spiccy",c:"spicy",l:["spicy","spice","icy"]},{o:"absolutly",c:"absolutely",l:["absolutely","absolute","solute"]},{o:"starvng",c:"starving",l:["starving","staring","start"]}]},
                        {type:'recv',text:"Yes. Hurry up before I eat it all."},
                        {type:'sent',text:"I am leavng the building in five minits, see you son.",mistakes:[{o:"leavng",c:"leaving",l:["leaving","leafing","living"]},{o:"minits",c:"minutes",l:["minutes","min","mints"]},{o:"son",c:"soon",l:["soon","sun","son"]}]},
                        {type:'recv',text:"Traffic looks bad on the GPS."},
                        {type:'sent',text:"I know, I will tak the shortcut through the tunel.",mistakes:[{o:"tak",c:"take",l:["take","talk","tank"]},{o:"tunel",c:"tunnel",l:["tunnel","tune","funnel"]}]},
                        {type:'recv',text:"The kids miss you a lot."},
                        {type:'sent',text:"Tell them I luv them and I will read a story tonite.",mistakes:[{o:"luv",c:"love",l:["love","live","low"]},{o:"tonite",c:"tonight",l:["tonight","to","nite"]}]},
                        {type:'recv',text:"Don't wake them up when you enter."},
                        {type:'sent',text:"I promise I will be quiet as a litlle mous.",mistakes:[{o:"litlle",c:"little",l:["little","lit","title"]},{o:"mous",c:"mouse",l:["mouse","moose","moss"]}]},
                        {type:'recv',text:"Did you call your mom back?"},
                        {type:'sent',text:"No, I totaly forgot again, my memry is terrible.",mistakes:[{o:"totaly",c:"totally",l:["totally","total","tall"]},{o:"memry",c:"memory",l:["memory","memo","merry"]}]},
                        {type:'recv',text:"She called twice today."},
                        {type:'sent',text:"I will call her tomorow morning befor work.",mistakes:[{o:"tomorow",c:"tomorrow",l:["tomorrow","marrow","row"]},{o:"befor",c:"before",l:["before","for","fore"]}]},
                        {type:'recv',text:"Bring milk on your way."},
                        {type:'sent',text:"Okey, I am stopping at the corner stor.",mistakes:[{o:"Okey",c:"Okay",l:["Okay","key","oak"]},{o:"stor",c:"store",l:["store","star","sore"]}]},
                        {type:'recv',text:"Drive safe please."},
                        {type:'sent',text:"I will be carefull. See you in a bitt.",mistakes:[{o:"carefull",c:"careful",l:["careful","care","full"]},{o:"bitt",c:"bit",l:["bit","bat","bite"]}]}
                    ]}
                ],
                gmail: [
                    { id: 'report', title: 'Q3 Report', msgs: [
                        {type:'recv',text:"Please send the Q3 report immediately."},{type:'sent',text:"I am currently finalizing the sales numbrs for the quarter.",mistakes:[{o:"finalizing",c:"finalizing",l:["finalizing","final","fin"]},{o:"numbrs",c:"numbers",l:["numbers","numb","burs"]}]},
                        {type:'recv',text:"The client is waiting for it."},{type:'sent',text:"Sending it in five minuts, just converting the fle.",mistakes:[{o:"minuts",c:"minutes",l:["minutes","nuts","mint"]},{o:"fle",c:"file",l:["file","fly","flee"]}]},
                        {type:'recv',text:"Is the revenue graph ready?"}, {type:'sent',text:"Yes, the data looks solid and acurate.",mistakes:[{o:"acurate",c:"accurate",l:["accurate","curate","rate"]}] }, 
                        {type:'recv',text:"Did you check spelling?"}, {type:'sent',text:"I ran a spel check twice to be sur.",mistakes:[{o:"spel",c:"spell",l:["spell","spill","peel"]},{o:"sur",c:"sure",l:["sure","sir","sour"]}]},
                        {type:'recv',text:"Attach as PDF only."}, {type:'sent',text:"Exportng it right now as we speek.",mistakes:[{o:"Exportng",c:"Exporting",l:["Exporting","porting","sport"]},{o:"speek",c:"speak",l:["speak","speed","peek"]}]},
                        {type:'recv',text:"The file is too big."}, {type:'sent',text:"I will compres it so it fits the email limit.",mistakes:[{o:"compres",c:"compress",l:["compress","press","come"]},{o:"email",c:"email",l:["email","mail","fail"]}]},
                        {type:'recv',text:"Don't lose image quality."}, {type:'sent',text:"It looks crispp still, very profeshional.",mistakes:[{o:"crispp",c:"crisp",l:["crisp","crisps","wisp"]},{o:"profeshional",c:"professional",l:["professional","professor","pro"]}]},
                        {type:'recv',text:"Send to legal first."}, {type:'sent',text:"The Legal dept is so sloww with aprovals.",mistakes:[{o:"sloww",c:"slow",l:["slow","low","slew"]},{o:"aprovals",c:"approvals",l:["approvals","approve","oval"]}]},
                        {type:'recv',text:"Just do it anyway."}, {type:'sent',text:"Forwording it to them right this second.",mistakes:[{o:"Forwording",c:"Forwarding",l:["Forwarding","word","for"]},{o:"second",c:"second",l:["second","send","sand"]}]},
                        {type:'recv',text:"Include the summary."}, {type:'sent',text:"The Executiv summary is attached at the botom.",mistakes:[{o:"Executiv",c:"Executive",l:["Executive","execute","cute"]},{o:"botom",c:"bottom",l:["bottom","bot","boom"]}]},
                        {type:'recv',text:"Good work."}, {type:'sent',text:"Thanks bos, have a grate evening.",mistakes:[{o:"bos",c:"boss",l:["boss","bus","bass"]},{o:"grate",c:"great",l:["great","grate","rate"]}]}
                    ]}
                ],
                twitter: [
                    { id: 'pr1', title: 'Company Vision', msgs: [
                        {type:'recv',text:"Tweet about our new vision."},{type:'sent',text:"We are inovating the future of tech today.",mistakes:[{o:"Inovating",c:"Innovating",l:["Innovating","in","ovation"]},{o:"tech",c:"tech",l:["tech","teach","tick"]}]},
                        {type:'recv',text:"Add some trending hashtags."},{type:'sent',text:"#Tech #Futur #Global #Growth",mistakes:[{o:"Futur",c:"Future",l:["Future","feature","fur"]},{o:"Global",c:"Global",l:["Global","globe","ball"]}]},
                        {type:'recv',text:"Tag the CEO in it."}, {type:'sent',text:"Hope he retwets this to his folowers.",mistakes:[{o:"retwets",c:"retweets",l:["retweets","tweets","wet"]},{o:"folowers",c:"followers",l:["followers","flowers","follow"]}]},
                        {type:'recv',text:"Keep it short and punchy."}, {type:'sent',text:"Brevity is the key to max engagment.",mistakes:[{o:"engagment",c:"engagement",l:["engagement","gage","agent"]},{o:"max",c:"max",l:["max","mix","tax"]}]},
                        {type:'recv',text:"Post it now."}, {type:'sent',text:"It is liv now on the main feed.",mistakes:[{o:"liv",c:"live",l:["live","life","love"]},{o:"feed",c:"feed",l:["feed","fed","fee"]}]},
                        {type:'recv',text:"Check the analytics."}, {type:'sent',text:"Views are climbng fast, going viral.",mistakes:[{o:"climbng",c:"climbing",l:["climbing","climb","bing"]},{o:"viral",c:"viral",l:["viral","virus","vile"]}]},
                        {type:'recv',text:"Any replies yet?"}, {type:'sent',text:"Mostly bots so far, nothing real.",mistakes:[{o:"bots",c:"bots",l:["bots","boots","bets"]},{o:"real",c:"real",l:["real","reel","deal"]}]},
                        {type:'recv',text:"Ignore the haters."}, {type:'sent',text:"I am blockng the trolls immediatly.",mistakes:[{o:"Blockng",c:"Blocking",l:["Blocking","block","king"]},{o:"immediatly",c:"immediately",l:["immediately","media","date"]}]},
                        {type:'recv',text:"Pin the tweet."}, {type:'sent',text:"Done, it is at the top of our profil.",mistakes:[{o:"profil",c:"profile",l:["profile","pro","file"]},{o:"top",c:"top",l:["top","tap","tip"]}]},
                        {type:'recv',text:"Let's hope it works."}, {type:'sent',text:"Fingers crossd for a stock bump.",mistakes:[{o:"crossd",c:"crossed",l:["crossed","cross","rose"]},{o:"bump",c:"bump",l:["bump","jump","pump"]}]}
                    ]}
                ]
            },
            sportsman: {
                twitter: [
                    { id: 'gym1', title: 'Leg Day', msgs: [
                        {type:'recv',text:"Is it leg day today?"},{type:'sent',text:"Skipping it, my knee hurs bad.",mistakes:[{o:"hurs",c:"hurts",l:["hurts","hers","hours"]},{o:"bad",c:"bad",l:["bad","bed","bid"]}]},
                        {type:'recv',text:"You skipped last week too."},{type:'sent',text:"I train chest insted, beach bod ready.",mistakes:[{o:"insted",c:"instead",l:["instead","in","stead"]},{o:"bod",c:"body",l:["body","bad","bed"]}]},
                        {type:'recv',text:"You have chicken legs."}, {type:'sent',text:"My squats are legandary when I do them.",mistakes:[{o:"legandary",c:"legendary",l:["legendary","leg","dairy"]},{o:"them",c:"them",l:["them","then","hem"]}]},
                        {type:'recv',text:"Prove it then."}, {type:'sent',text:"I will post a heavy vid tomorow.",mistakes:[{o:"vid",c:"video",l:["video","void","lid"]},{o:"tomorow",c:"tomorrow",l:["tomorrow","marrow","row"]}]},
                        {type:'recv',text:"Don't flake on us."}, {type:'sent',text:"I never flak on gains, trust me.",mistakes:[{o:"flak",c:"flake",l:["flake","flack","fake"]},{o:"trust",c:"trust",l:["trust","rust","must"]}]},
                        {type:'recv',text:"What about cardio?"}, {type:'sent',text:"I walk to the frij, that counts.",mistakes:[{o:"frij",c:"fridge",l:["fridge","fringe","bridge"]},{o:"counts",c:"counts",l:["counts","count","cents"]}]},
                        {type:'recv',text:"That's not cardio."}, {type:'sent',text:"It raisies my heart rate significantly.",mistakes:[{o:"raisies",c:"raises",l:["raises","raise","daisies"]},{o:"significantly",c:"significantly",l:["significantly","sign","cant"]}]},
                        {type:'recv',text:"You need endurance."}, {type:'sent',text:"I have staminna for heavy lifting.",mistakes:[{o:"staminna",c:"stamina",l:["stamina","stammer","min"]},{o:"lifting",c:"lifting",l:["lifting","life","loft"]}]},
                        {type:'recv',text:"What is your Bench PR?"}, {type:'sent',text:"I hit two twentty five yesterday.",mistakes:[{o:"twentty",c:"twenty",l:["twenty","tweet","tent"]},{o:"five",c:"five",l:["five","live","hive"]}]},
                        {type:'recv',text:"Liar."}, {type:'sent',text:"I am honesst bro, ask the spotter.",mistakes:[{o:"honesst",c:"honest",l:["honest","nest","host"]},{o:"spotter",c:"spotter",l:["spotter","spot","pot"]}]}
                    ]}
                ],
                tinder: [
                    { id: 'date1', title: 'Match', msgs: [
                        {type:'recv',text:"Do you only go to the gym?"},{type:'sent',text:"No I also hike and swm on weekends.",mistakes:[{o:"swm",c:"swim",l:["swim","sum","swam"]},{o:"weekends",c:"weekends",l:["weekends","weeks","ends"]}]},
                        {type:'recv',text:"That sounds cool."},{type:'sent',text:"Want to grab a protien shake later?",mistakes:[{o:"protien",c:"protein",l:["protein","teen","pro"]},{o:"later",c:"later",l:["later","late","latte"]}]},
                        {type:'recv',text:"Maybe just coffee?"}, {type:'sent',text:"Coffe makes me anxios and jittery.",mistakes:[{o:"Coffe",c:"Coffee",l:["Coffee","cough","fee"]},{o:"anxios",c:"anxious",l:["anxious","axis","any"]}]},
                        {type:'recv',text:"Tea then?"}, {type:'sent',text:"Gren tea is good for cuting weight.",mistakes:[{o:"Gren",c:"Green",l:["Green","grin","grain"]},{o:"cuting",c:"cutting",l:["cutting","cut","cute"]}]},
                        {type:'recv',text:"You talk about diet a lot."}, {type:'sent',text:"Abs are mad in the kitchen, not gym.",mistakes:[{o:"mad",c:"made",l:["made","mad","maid"]},{o:"gym",c:"gym",l:["gym","gin","gum"]}]},
                        {type:'recv',text:"What else do you do?"}, {type:'sent',text:"I lift heavy weightz and sleep.",mistakes:[{o:"weightz",c:"weights",l:["weights","waits","white"]},{o:"sleep",c:"sleep",l:["sleep","sheep","seep"]}]},
                        {type:'recv',text:"I mean hobbies."}, {type:'sent',text:"Meal prep is a full time hoby.",mistakes:[{o:"hoby",c:"hobby",l:["hobby","hobo","hub"]},{o:"time",c:"time",l:["time","tim","lime"]}]},
                        {type:'recv',text:"Sounds fun..."}, {type:'sent',text:"It requires serious disciplin.",mistakes:[{o:"disciplin",c:"discipline",l:["discipline","disc","plain"]},{o:"serious",c:"serious",l:["serious","series","source"]}]},
                        {type:'recv',text:"Are you single?"}, {type:'sent',text:"Currently Maried to the iron game.",mistakes:[{o:"Maried",c:"Married",l:["Married","Mary","marred"]},{o:"game",c:"game",l:["game","gain","gale"]}]},
                        {type:'recv',text:"Okay bye."}, {type:'sent',text:"Wait, my cheat day is Sundy!",mistakes:[{o:"Sundy",c:"Sunday",l:["Sunday","sundae","sun"]},{o:"Wait",c:"Wait",l:["Wait","weight","bait"]}]}
                    ]}
                ],
                discord: [
                    { id: 'grp1', title: 'Spotter', msgs: [
                        {type:'recv',text:"Need a spotter?"},{type:'sent',text:"Yeah benching hevy today, come over.",mistakes:[{o:"hevy",c:"heavy",l:["heavy","heave","ivy"]},{o:"over",c:"over",l:["over","oven","ever"]}]},
                        {type:'recv',text:"Omw."},{type:'sent',text:"Thanks bro, you roc, seriously.",mistakes:[{o:"roc",c:"rock",l:["rock","roc","rick"]},{o:"seriously",c:"seriously",l:["seriously","series","siri"]}]},
                        {type:'recv',text:"That looks like easy weight."}, {type:'sent',text:"Light weight babey! Nothing but peanuts.",mistakes:[{o:"babey",c:"baby",l:["baby","babe","bay"]},{o:"peanuts",c:"peanuts",l:["peanuts","pea","nuts"]}]},
                        {type:'recv',text:"One more set."}, {type:'sent',text:"I am really feeling the pumpp now.",mistakes:[{o:"pumpp",c:"pump",l:["pump","pimp","plump"]},{o:"now",c:"now",l:["now","cow","how"]}]},
                        {type:'recv',text:"Rack it up."}, {type:'sent',text:"Good lift, see you tomorow for back.",mistakes:[{o:"tomorow",c:"tomorrow",l:["tomorrow","row","marrow"]},{o:"back",c:"back",l:["back","black","pack"]}]},
                        {type:'recv',text:"Don't forget legs."}, {type:'sent',text:"I told you, I have a knee injry.",mistakes:[{o:"injry",c:"injury",l:["injury","jury","in"]},{o:"knee",c:"knee",l:["knee","bee","key"]}]},
                        {type:'recv',text:"Soft."}, {type:'sent',text:"I am just preserving my jointz.",mistakes:[{o:"jointz",c:"joints",l:["joints","join","points"]},{o:"preserving",c:"preserving",l:["preserving","serving","reserve"]}]},
                        {type:'recv',text:"Sauna after?"}, {type:'sent',text:"Yeah, need to swet out the toxins.",mistakes:[{o:"swet",c:"sweat",l:["sweat","sweet","wet"]},{o:"toxins",c:"toxins",l:["toxins","taxi","tins"]}]},
                        {type:'recv',text:"Bring water."}, {type:'sent',text:"Got my gallon jugg right here.",mistakes:[{o:"jugg",c:"jug",l:["jug","mug","hug"]},{o:"here",c:"here",l:["here","hear","her"]}]},
                        {type:'recv',text:"Let's go."}, {type:'sent',text:"Beast mode activatd.",mistakes:[{o:"activatd",c:"activated",l:["activated","act","vat"]}]}
                    ]}
                ]
            },
            kid: {
                discord: [
                    { id: 'gam1', title: 'Ranked', msgs: [
                        {type:'recv',text:" hop on ranked"},{type:'sent',text:"cant mom is very angri right now",mistakes:[{o:"cant",c:"can't",l:["can't","cat","ant"]},{o:"angri",c:"angry",l:["angry","hungry","hang"]}]},
                        {type:'recv',text:"just one game"},{type:'sent',text:"if i get caught im ded for sure",mistakes:[{o:"ded",c:"dead",l:["dead","did","dad"]},{o:"sure",c:"sure",l:["sure","surf","sue"]}]},
                        {type:'recv',text:"we need a carry"},{type:'sent',text:"ok fine invite m quickly",mistakes:[{o:"m",c:"me",l:["me","my","mu"]},{o:"quickly",c:"quickly",l:["quickly","quick","sick"]}]},
                        {type:'recv',text:"sent."}, {type:'sent',text:"joining the loby right now",mistakes:[{o:"loby",c:"lobby",l:["lobby","lob","hobby"]},{o:"joining",c:"joining",l:["joining","join","joy"]}]},
                        {type:'recv',text:"lets go."}, {type:'sent',text:"dont rush B site alone pllz",mistakes:[{o:"rush",c:"rush",l:["rush","rash","bush"]},{o:"pllz",c:"plz",l:["plz","plzz","pls"]}]},
                        {type:'recv',text:"too late i died"}, {type:'sent',text:"ur so bad omg why",mistakes:[{o:"ur",c:"you're",l:["you're","your","ur"]},{o:"omg",c:"omg",l:["omg","oh","god"]}]},
                        {type:'recv',text:"res me"}, {type:'sent',text:"i cant i am out of manna",mistakes:[{o:"manna",c:"mana",l:["mana","man","mama"]},{o:"cant",c:"can't",l:["can't","cat","ant"]}]},
                        {type:'recv',text:"drink potion"}, {type:'sent',text:"i forgot to buuy one at shop",mistakes:[{o:"buuy",c:"buy",l:["buy","guy","bay"]},{o:"shop",c:"shop",l:["shop","ship","hop"]}]},
                        {type:'recv',text:"we lost"}, {type:'sent',text:"gg go nexxt game fast",mistakes:[{o:"nexxt",c:"next",l:["next","net","text"]},{o:"fast",c:"fast",l:["fast","last","fist"]}]},
                        {type:'recv',text:"one more?"}, {type:'sent',text:"mom is coming bye bye",mistakes:[{o:"coming",c:"coming",l:["coming","comb","king"]},{o:"bye",c:"bye",l:["bye","buy","by"]}]}
                    ]}
                ]
            },
            girl: {
                whatsapp: [
                    { id: 'gos1', title: 'Becky', msgs: [
                        {type:'recv',text:"Did you see Becky?"},{type:'sent',text:"Her dress was absolutly awfull.",mistakes:[{o:"absolutly",c:"absolutely",l:["absolutely","absolute","solute"]},{o:"awfull",c:"awful",l:["awful","full","awe"]}]},
                        {type:'recv',text:"I know right!"},{type:'sent',text:"She has zero tast in fashion.",mistakes:[{o:"tast",c:"taste",l:["taste","test","toast"]},{o:"fashion",c:"fashion",l:["fashion","fish","fast"]}]},
                        {type:'recv',text:"It cost $200."}, {type:'sent',text:"What a totall waste of money.",mistakes:[{o:"Totall",c:"Total",l:["Total","tall","toll"]},{o:"waste",c:"waste",l:["waste","wait","west"]}]},
                        {type:'recv',text:"She thinks she is hot."}, {type:'sent',text:"She needs a miror asap.",mistakes:[{o:"miror",c:"mirror",l:["mirror","minor","more"]},{o:"asap",c:"ASAP",l:["ASAP","sap","ash"]}]},
                        {type:'recv',text:"So mean lol."}, {type:'sent',text:"Just being onest bestie.",mistakes:[{o:"onest",c:"honest",l:["honest","nest","one"]},{o:"bestie",c:"bestie",l:["bestie","best","beast"]}]},
                        {type:'recv',text:"She liked your pic."}, {type:'sent',text:"Which on did she like?",mistakes:[{o:"on",c:"one",l:["one","on","won"]},{o:"like",c:"like",l:["like","lake","look"]}]},
                        {type:'recv',text:"The beach one."}, {type:'sent',text:"She is so jalous of me.",mistakes:[{o:"jalous",c:"jealous",l:["jealous","jail","us"]},{o:"me",c:"me",l:["me","my","mu"]}]},
                        {type:'recv',text:"Ignore her."}, {type:'sent',text:"I will unfollow her later today.",mistakes:[{o:"later",c:"later",l:["later","late","latter"]},{o:"today",c:"today",l:["today","day","toad"]}]},
                        {type:'recv',text:"Don't create drama."}, {type:'sent',text:"I liv for the drama.",mistakes:[{o:"liv",c:"live",l:["live","life","love"]},{o:"drama",c:"drama",l:["drama","drum","dream"]}]},
                        {type:'recv',text:"Be nice."}, {type:'sent',text:"I am an angel, swear it.",mistakes:[{o:"angel",c:"angel",l:["angel","angle","age"]},{o:"swear",c:"swear",l:["swear","wear","ear"]}]}
                    ]}
                ]
            }
        };

        const CHARACTERS = {
            boss: {
                id: 'boss', name: 'The Boss', 
                apps: ['whatsapp', 'gmail', 'twitter'], 
                theme: 'office',
                colors: { skin: '#fca5a5', shirt: '#fff', tie: '#dc2626', suit: '#1e293b' },
                props: ['glasses', 'tie', 'prop-nameplate', 'prop-mug', 'prop-slab', 'prop-window', 'prop-shelf', 'prop-painting', 'prop-mat']
            },
            sportsman: {
                id: 'sportsman', name: 'Gym Bro', 
                apps: ['twitter', 'tinder', 'discord'],
                theme: 'gym',
                colors: { skin: '#eab308', shirt: '#eab308', tie: 'transparent', suit: '#3b82f6' }, /* Updated shirt/suit for tank top look */
                props: ['headband', 'prop-shaker', 'prop-lockers', 'prop-poster-gym']
            },
            kid: {
                id: 'kid', name: 'Timmy', 
                apps: ['discord'], 
                theme: 'bedroom',
                colors: { skin: '#fdba74', shirt: '#22c55e', tie: 'transparent', suit: '#1e1b4b' },
                props: ['cap', 'prop-controller', 'prop-window-night', 'prop-poster-kid', 'prop-leds', 'prop-skateboard', 'prop-mess']
            },
            girl: {
                id: 'girl', name: 'Sophie', 
                apps: ['whatsapp'], 
                theme: 'cafe',
                colors: { skin: '#fecaca', shirt: '#f472b6', tie: 'transparent', suit: '#fff1f2' },
                props: ['char-hair', 'char-necklace', 'prop-latte', 'prop-brick', 'char-bangs', 'prop-plant', 'prop-neon', 'prop-menu']
            }
        };

        // --- GAME LOGIC ---
        const AudioSys = {
            ctx: null, isMuted: false, musicTimer: null,
            init() { if(!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)(); },
            toggleMute() { this.isMuted = !this.isMuted; const btn = document.getElementById('mute-btn'); if(btn) btn.innerText = this.isMuted ? "UNMUTE SOUND" : "MUTE SOUND"; if(this.isMuted) this.stopMusic(); else if(Game.state.active && !Game.state.paused) this.playMusic(); },
            playTone(type, f, d, vol=0.1) { if(!this.ctx || this.isMuted) return; const o = this.ctx.createOscillator(); const g = this.ctx.createGain(); o.type = type; o.frequency.value = f; g.gain.setValueAtTime(vol, this.ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + d); o.connect(g); g.connect(this.ctx.destination); o.start(); o.stop(this.ctx.currentTime + d); },
            playClick() { this.playTone('sine', 800, 0.05, 0.1); },
            playRecv() { this.playTone('sine', 600, 0.1, 0.1); setTimeout(()=>this.playTone('sine', 800, 0.1, 0.1), 100); },
            playMusic() { if(this.isMuted || !this.ctx || this.musicTimer) return; const loop = () => { if(!Game.state.active || Game.state.paused) return; this.playTone('triangle', 110, 0.2, 0.05); setTimeout(() => { if(Game.state.active && !Game.state.paused) this.playTone('triangle', 164.8, 0.2, 0.05) }, 500); this.musicTimer = setTimeout(loop, 1000); }; loop(); },
            stopMusic() { if(this.musicTimer) { clearTimeout(this.musicTimer); this.musicTimer = null; } }
        };

        const Boss = {
            elem: document.getElementById('boss'),
            state(state) { this.elem.classList.remove('typing', 'angry', 'success'); if(state) this.elem.classList.add(state); },
            setColors(c) {
                const r = document.documentElement.style;
                r.setProperty('--boss-skin', c.skin); r.setProperty('--boss-shirt', c.shirt); r.setProperty('--boss-tie', c.tie); r.setProperty('--boss-suit', c.suit);
                if(c.hair) r.setProperty('--hair-color', c.hair);
            },
            setProps(propList) {
                ['glasses','cap','headband','hair-long','char-bangs','tie','necklace','prop-nameplate','prop-mug','prop-slab','prop-shaker','prop-controller','prop-latte','prop-window','prop-lockers','prop-shelf','prop-brick','prop-poster','prop-mat','prop-leds','prop-skateboard','prop-mess','prop-plant','prop-neon','prop-menu'].forEach(id => {
                    const el = document.getElementById(id.startsWith('prop') ? id : 'char-'+id.replace('hair-long','hair').replace('char-',''));
                    if(el) el.style.display = 'none';
                });
                propList.forEach(p => {
                    let elId = p;
                    if(p === 'prop-window-night') { document.getElementById('prop-window').style.display='block'; return; }
                    if(p === 'prop-poster-gym') { const el=document.getElementById('prop-poster'); el.style.display='flex'; el.className='bg-prop prop-poster gym'; return; }
                    if(p === 'prop-poster-kid') { const el=document.getElementById('prop-poster'); el.style.display='block'; el.className='bg-prop prop-poster kid'; return; }
                    
                    if(!p.startsWith('prop') && !p.startsWith('char')) elId = 'char-'+p; 
                    else if (p.startsWith('prop') && !document.getElementById(p)) elId = p; 
                    
                    if(p=='glasses') elId='char-glasses'; if(p=='tie') elId='char-tie'; if(p=='cap') elId='char-cap'; if(p=='headband') elId='char-headband'; if(p=='necklace') elId='char-necklace'; if(p=='char-hair') elId='char-hair'; if(p=='char-bangs') elId='char-bangs';
                    
                    const el = document.getElementById(elId);
                    if(el) el.style.display = (el.classList.contains('flex') ? 'flex' : (el.tagName==='DIV' && el.classList.contains('desk-upper-slab') ? 'flex' : 'block'));
                    
                    // Specific Class Toggles for body shape
                    const container = document.getElementById('boss');
                    container.classList.remove('char-girl', 'char-sportsman', 'char-kid');
                    if (propList.includes('char-hair')) container.classList.add('char-girl');
                    if (propList.includes('prop-shaker')) container.classList.add('char-sportsman');
                    if (propList.includes('prop-controller')) container.classList.add('char-kid');
                });
            }
        };

        const UI = {
            screens: { menu: document.getElementById('screen-menu'), time: document.getElementById('screen-time'), char: document.getElementById('screen-char'), game: document.getElementById('screen-game'), result: document.getElementById('screen-result'), pause: document.getElementById('screen-pause') },
            layout: document.getElementById('game-layout-container'),
            elems: { 
                timer: document.getElementById('timer'), 
                score: document.getElementById('score'), 
                msgBox: document.getElementById('message-container'), 
                header: document.getElementById('app-header'), 
                sendBtn: document.getElementById('send-btn'), 
                feedback: document.getElementById('feedback'), 
                contact: document.getElementById('contact-name'), 
                avatarIcon: document.getElementById('avatar-icon'), 
                status: document.getElementById('status-indicator'), 
                chatArea: document.getElementById('chat-scroll-area'),
                popup: document.getElementById('popup')
            },
            showScreen(id) { 
                const key = id.replace('screen-', '');
                if (['menu', 'time', 'char'].includes(key)) {
                     this.layout.classList.remove('visible');
                     Object.values(this.screens).forEach(s => { if(s && s.classList.contains('fullscreen-pane')) s.classList.remove('active'); });
                     if(this.screens[key]) this.screens[key].classList.add('active');
                } else {
                    this.layout.classList.add('visible');
                    Object.values(this.screens).forEach(s => { if(s && s.classList.contains('fullscreen-pane')) s.classList.remove('active'); });
                    ['game', 'result'].forEach(k => { if(this.screens[k]) this.screens[k].classList.remove('active'); });
                    if(key !== 'pause') this.screens.pause.classList.add('hidden');
                    if (this.screens[key]) this.screens[key].classList.add('active');
                }
            },
            togglePauseScreen(show) { if(show) this.screens.pause.classList.remove('hidden'); else this.screens.pause.classList.add('hidden'); },
            applyTheme(key) {
                const t = THEMES[key] || THEMES.imessage;
                const r = document.documentElement.style;
                const g = document.getElementById('screen-game');
                r.setProperty('--app-bg', t.appBg); r.setProperty('--header-bg', t.headerBg); r.setProperty('--header-text', t.headerText); r.setProperty('--bubble-bg', t.bubbleBg); r.setProperty('--bubble-text', t.bubbleText); r.setProperty('--bubble-recv-bg', t.bubbleRecvBg); r.setProperty('--bubble-recv-text', t.bubbleRecvText); r.setProperty('--accent', t.accent); r.setProperty('--fixed-text', t.fixedText || t.accent); r.setProperty('--font-main', t.font); r.setProperty('--border-radius', t.radius);
                g.className = `screen active app-view ${t.darkMode ? 'dark-mode' : ''} ${t.pattern === 'whatsapp' ? 'pattern-whatsapp' : ''} ${t.pattern === 'grid' ? 'pattern-grid' : ''}`;
                this.elems.avatarIcon.className = `ph-fill ${t.icon}`; this.elems.avatarIcon.style.color = t.darkMode ? '#fff' : t.accent;
                document.getElementById('footer').style.background = t.footerBg;
                if (t.border) this.elems.msgBox.style.border = t.border; else this.elems.msgBox.style.border = 'none';
            }
        };

        // --- HISTORY MANAGER ---
        const HistoryManager = {
            key: 'saveMeRunHistory_v2',
            get() {
                try { return JSON.parse(localStorage.getItem(this.key)) || []; } 
                catch(e) { return []; }
            },
            add(runData) {
                const history = this.get();
                history.push(runData);
                // Keep last 3 runs
                if (history.length > 3) history.shift();
                localStorage.setItem(this.key, JSON.stringify(history));
            },
            getLast() {
                const h = this.get();
                return h.length > 0 ? h[h.length - 1] : null;
            }
        };

        const Game = {
            state: { 
                score: 0, msgs: 0, time: 20, initialTime: 20, active: false, paused: false, 
                conversation: [], msgIndex: 0, currentCharId: 'boss', playedConvos: [],
                // New Metric Props
                correctClicks: 0, wrongClicks: 0, startTime: 0, clickHistory: [], pressureClicks: 0, pressureCorrect: 0
            },
            loop: null, typeLoop: null, currentMsg: null, mistakeCount: 0, mistakesFixed: 0, isTyping: false,
            
            goToTimeSelect() { AudioSys.init(); AudioSys.playClick(); if(AudioSys.ctx.state === 'suspended') AudioSys.ctx.resume(); UI.showScreen('screen-time'); },
            selectTime(t) { AudioSys.playClick(); this.state.initialTime = t; this.goToCharSelect(); },
            goToCharSelect() { AudioSys.playClick(); UI.showScreen('screen-char'); },
            selectChar(id) { 
                AudioSys.playClick();
                this.state.currentCharId = id;
                document.querySelectorAll('.char-select-card').forEach(c => c.classList.remove('selected'));
                document.getElementById(`char-card-${id}`).classList.add('selected');
            },
            quitToMenu() { AudioSys.playClick(); this.endGameLogic(); UI.showScreen('screen-menu'); },
            togglePause() { AudioSys.playClick(); if (!this.state.active) return; this.state.paused = !this.state.paused; if (this.state.paused) { UI.togglePauseScreen(true); AudioSys.stopMusic(); } else { UI.togglePauseScreen(false); AudioSys.playMusic(); } },

            generateEnvironment(theme) {
                const r = document.documentElement.style;
                const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
                
                if (theme === 'office') {
                    const palettes = [
                        { h: 210, name: 'Blue Corp' }, { h: 120, name: 'Eco Corp' }, { h: 0, name: 'Modern Red' }, { h: 45, name: 'Beige Law' }
                    ];
                    const p = palettes[Math.floor(Math.random() * palettes.length)];
                    const h = p.h; 
                    r.setProperty('--wall-grad-top', `hsl(${h}, ${rand(10,30)}%, ${rand(85,95)}%)`);
                    r.setProperty('--wall-grad-btm', `hsl(${h}, ${rand(20,40)}%, ${rand(75,85)}%)`);
                    r.setProperty('--floor-grad-top', `hsl(${h}, ${rand(20,40)}%, ${rand(30,40)}%)`);
                    r.setProperty('--floor-grad-btm', `hsl(${h}, ${rand(30,50)}%, ${rand(15,25)}%)`);
                    const dh = rand(15, 45); 
                    r.setProperty('--desk-top', `hsl(${dh}, 40%, 35%)`);
                    r.setProperty('--desk-side', `hsl(${dh}, 40%, 25%)`);
                    r.setProperty('--desk-front-top', `hsl(${dh}, 40%, 25%)`);
                    r.setProperty('--desk-front-btm', `hsl(${dh}, 40%, 15%)`);
                    r.setProperty('--sky-color', '#93c5fd');
                } else if (theme === 'gym') {
                    const styles = [ { wall: [0, 0, 60], floor: [0, 0, 30] }, { wall: [20, 80, 60], floor: [20, 60, 20] }, { wall: [200, 60, 60], floor: [200, 60, 20] } ];
                    const s = styles[Math.floor(Math.random() * styles.length)];
                    r.setProperty('--wall-grad-top', `hsl(${s.wall[0]}, ${s.wall[1]}%, ${s.wall[2]}%)`);
                    r.setProperty('--wall-grad-btm', `hsl(${s.wall[0]}, ${s.wall[1]}%, ${s.wall[2]-10}%)`);
                    r.setProperty('--floor-grad-top', `hsl(${s.floor[0]}, ${s.floor[1]}%, ${s.floor[2]}%)`);
                    r.setProperty('--floor-grad-btm', `hsl(${s.floor[0]}, ${s.floor[1]}%, ${s.floor[2]-10}%)`);
                    r.setProperty('--desk-top', '#475569'); r.setProperty('--desk-side', '#334155'); r.setProperty('--desk-front-top', '#334155'); r.setProperty('--desk-front-btm', '#1e293b');
                    r.setProperty('--mat-color', '#3b82f6'); r.setProperty('--sky-color', '#fff');
                } else if (theme === 'bedroom') {
                    const styles = [ { h: 240 }, { h: 270 }, { h: 150 } ];
                    const s = styles[Math.floor(Math.random() * styles.length)];
                    const h = s.h;
                    r.setProperty('--wall-grad-top', `hsl(${h}, 40%, 20%)`);
                    r.setProperty('--wall-grad-btm', `hsl(${h}, 40%, 10%)`);
                    r.setProperty('--floor-grad-top', `hsl(${h}, 50%, 15%)`);
                    r.setProperty('--floor-grad-btm', `hsl(${h}, 50%, 5%)`);
                    r.setProperty('--desk-top', '#1e1b4b'); r.setProperty('--desk-side', '#312e81'); r.setProperty('--desk-front-top', '#312e81'); r.setProperty('--desk-front-btm', '#0f172a');
                    r.setProperty('--mat-color', '#22c55e'); r.setProperty('--sky-color', '#0f172a');
                } else if (theme === 'cafe') {
                    const styles = [ { w: [20, 60, 80], f: [30, 40, 60] }, { w: [0, 0, 95], f: [0, 0, 80] }, { w: [340, 80, 90], f: [340, 40, 80] } ];
                    const s = styles[Math.floor(Math.random() * styles.length)];
                    r.setProperty('--wall-grad-top', `hsl(${s.w[0]}, ${s.w[1]}%, ${s.w[2]}%)`);
                    r.setProperty('--wall-grad-btm', `hsl(${s.w[0]}, ${s.w[1]}%, ${s.w[2]-10}%)`);
                    r.setProperty('--floor-grad-top', `hsl(${s.f[0]}, ${s.f[1]}%, ${s.f[2]}%)`);
                    r.setProperty('--floor-grad-btm', `hsl(${s.f[0]}, ${s.f[1]}%, ${s.f[2]-10}%)`);
                    r.setProperty('--desk-top', '#f3f4f6'); r.setProperty('--desk-side', '#d1d5db'); r.setProperty('--desk-front-top', '#d1d5db'); r.setProperty('--desk-front-btm', '#9ca3af');
                    r.setProperty('--mat-color', '#fbcfe8'); r.setProperty('--sky-color', '#fef3c7');
                }
            },

            startGame() {
                AudioSys.playClick();
                
                const char = CHARACTERS[this.state.currentCharId];
                this.generateEnvironment(char.theme);
                Boss.setColors(char.colors);
                Boss.setProps(char.props);

                const charConvoData = CONVERSATIONS_DATA[char.id];
                const availableApps = char.apps.filter(app => charConvoData[app]);
                const selectedApp = availableApps[Math.floor(Math.random() * availableApps.length)];
                const appConvos = charConvoData[selectedApp];
                
                let selectedConvo;
                const availableConvos = appConvos.filter(c => !this.state.playedConvos.includes(c.id));
                
                if (availableConvos.length === 0) {
                    selectedConvo = appConvos[Math.floor(Math.random() * appConvos.length)];
                } else {
                    selectedConvo = availableConvos[Math.floor(Math.random() * availableConvos.length)];
                }

                if(selectedConvo && !this.state.playedConvos.includes(selectedConvo.id)) {
                    this.state.playedConvos.push(selectedConvo.id);
                }

                this.state = { 
                    ...this.state,
                    score: 0, msgs: 0, 
                    time: this.state.initialTime, 
                    active: true, paused: false,
                    currentCharId: this.state.currentCharId,
                    conversation: selectedConvo.msgs,
                    msgIndex: 0,
                    // Reset Metrics
                    correctClicks: 0, wrongClicks: 0, startTime: Date.now(), 
                    clickHistory: [], pressureClicks: 0, pressureCorrect: 0,
                    totalMsgsInConvo: selectedConvo.msgs.length
                };
                
                const spacer = document.createElement('div'); spacer.className = "flex-1";
                UI.elems.chatArea.innerHTML = ''; UI.elems.chatArea.appendChild(spacer);
                
                UI.showScreen('screen-game');
                UI.applyTheme(THEMES[selectedApp] ? selectedApp : 'imessage');
                
                UI.elems.contact.innerText = selectedConvo.title || "Unknown";
                UI.elems.score.innerText = 0;

                AudioSys.playMusic();
                if(this.loop) clearInterval(this.loop);
                this.loop = setInterval(() => this.tick(), 100);
                this.processNextMsg();
            },

            processNextMsg() {
                if (!this.state.active || this.state.paused) return;
                if (this.state.msgIndex >= this.state.conversation.length) { this.state.score += Math.floor(this.state.time * 100); this.end(); return; }
                const msg = this.state.conversation[this.state.msgIndex];
                if (msg.type === 'recv') {
                    UI.elems.msgBox.classList.remove('active'); UI.elems.status.innerText = "Online"; UI.elems.status.classList.remove('animate-pulse'); UI.elems.sendBtn.style.opacity = '0.5';
                    setTimeout(() => { if(!this.state.active) return; this.addChatBubble(msg.text, 'recv'); AudioSys.playRecv(); this.state.msgIndex++; setTimeout(() => this.processNextMsg(), 1000); }, 500);
                } else { this.startTypingLevel(msg); }
            },

            startTypingLevel(msg) {
                this.currentMsg = msg; this.mistakeCount = 0; this.mistakesFixed = 0;
                UI.elems.sendBtn.innerHTML = `<span>Intercept</span> <i class="ph-bold ph-shield-check"></i>`; UI.elems.sendBtn.style.background = 'white'; UI.elems.sendBtn.style.color = '#94a3b8'; UI.elems.sendBtn.style.cursor = 'not-allowed'; UI.elems.sendBtn.style.opacity = '1';
                UI.elems.msgBox.innerHTML = ''; UI.elems.msgBox.classList.add('active'); UI.elems.msgBox.classList.add('typing-cursor'); UI.elems.status.innerText = "BOSS TYPING..."; UI.elems.status.classList.add('animate-pulse'); this.isTyping = true;
                const words = msg.text.split(/(\s+)/); let wordIndex = 0; const speed = 40; 
                if (this.typeLoop) clearInterval(this.typeLoop);
                this.typeLoop = setInterval(() => {
                    if (!this.state.active || this.state.paused) return;
                    if (wordIndex < words.length) {
                        const w = words[wordIndex]; const span = document.createElement('span'); span.innerText = w;
                        const clean = w.trim().replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g,"");
                        const err = msg.mistakes ? msg.mistakes.find(m => m.o === clean) : null;
                        if (err && w.trim().length > 0) { this.mistakeCount++; span.className = 'mistake-word'; span.onclick = (e) => this.showPopup(e, span, err); }
                        UI.elems.msgBox.appendChild(span); if (w.trim().length > 0) AudioSys.playClick(); wordIndex++;
                    } else { clearInterval(this.typeLoop); this.isTyping = false; UI.elems.msgBox.classList.remove('typing-cursor'); if (this.mistakeCount === 0) { this.completeMsg(); } else { UI.elems.status.innerText = "Drafting paused"; UI.elems.status.classList.remove('animate-pulse'); } }
                }, speed);
            },

            addChatBubble(text, type) { const bubble = document.createElement('div'); bubble.className = `chat-bubble ${type}`; bubble.innerText = text; UI.elems.chatArea.appendChild(bubble); UI.elems.chatArea.scrollTop = UI.elems.chatArea.scrollHeight; },
            
            tick() { 
                if (!this.state.active || this.state.paused) return; 
                this.state.time -= 0.1; 
                UI.elems.timer.innerText = Math.max(0, this.state.time).toFixed(1); 
                document.getElementById('progress-bar').style.width = (this.state.time/this.state.initialTime)*100 + "%"; 
                
                if (this.isTyping) Boss.state('typing'); 
                else if (this.state.time <= 5) { 
                    Boss.state('angry'); 
                    UI.elems.sendBtn.classList.add('animate-shake'); 
                    UI.elems.sendBtn.style.color = '#ef4444'; 
                    const pronoun = this.state.currentCharId === 'girl' ? "SHE'S" : "HE'S";
                    UI.elems.sendBtn.innerText = `${pronoun} GONNA SEND IT!`; 
                } else { 
                    Boss.state(''); 
                    UI.elems.sendBtn.classList.remove('animate-shake'); 
                } 
                if (this.state.time <= 0) this.end(); 
            },

            showPopup(e, span, err) { 
                if(this.state.paused) return; e.stopPropagation(); 
                if(span.classList.contains('word-fixed')) return; 
                AudioSys.playTone('sine', 400, 0.1); 
                const pop = UI.elems.popup; pop.innerHTML = ''; 
                
                [...err.l].sort(()=>Math.random()-.5).forEach(opt => { 
                    const btn = document.createElement('button'); 
                    btn.className = "w-full text-left px-4 py-3 hover:bg-slate-100 text-slate-800 text-sm font-semibold border-b border-slate-100 last:border-0"; 
                    btn.innerText = opt; 
                    btn.onclick = () => { 
                        // Metric Recording
                        const now = Date.now();
                        const isLowTime = this.state.time <= 5; 
                        this.state.clickHistory.push({ time: now, correct: opt === err.c });
                        if(isLowTime) this.state.pressureClicks++;

                        if(opt === err.c) { 
                            this.state.correctClicks++;
                            if(isLowTime) this.state.pressureCorrect++;
                            AudioSys.playTone('sine', 800, 0.1); 
                            const original = span.innerText; const prefix = original.match(/^\W*/)[0] || ''; const suffix = original.match(/\W*$/)[0] || ''; span.innerText = prefix + opt + suffix; span.className = 'word-fixed'; this.state.score += 100; UI.elems.score.innerText = this.state.score; this.mistakesFixed++; if (this.mistakesFixed >= this.mistakeCount && !this.isTyping) { this.completeMsg(); } 
                        } else { 
                            this.state.wrongClicks++;
                            AudioSys.playTone('sawtooth', 150, 0.2); 
                            this.state.score = Math.max(0, this.state.score - 50); UI.elems.score.innerText = this.state.score; span.classList.add('animate-shake'); setTimeout(()=>span.classList.remove('animate-shake'), 300); 
                        } 
                        pop.classList.add('hidden'); 
                    }; 
                    pop.appendChild(btn); 
                }); 
                pop.classList.remove('hidden'); 
                const rect = span.getBoundingClientRect(); const container = document.getElementById('screen-game').getBoundingClientRect(); let left = rect.left - container.left; let top = rect.top - container.top - 120; if(left < 10) left = 10; if(left > container.width - 150) left = container.width - 150; if(top < 60) top = rect.bottom - container.top + 10; pop.style.left = left + 'px'; pop.style.top = top + 'px'; setTimeout(() => document.addEventListener('click', () => pop.classList.add('hidden'), {once:true}), 10); 
            },
            
            completeMsg() { const fixedText = UI.elems.msgBox.innerText; this.state.score += 500; this.state.msgs++; AudioSys.playTone('triangle', 600, 0.1); Boss.state('success'); UI.elems.sendBtn.style.background = 'var(--accent)'; UI.elems.sendBtn.style.color = 'white'; UI.elems.sendBtn.innerHTML = `<span>SAFE!</span> <i class="ph-bold ph-check"></i>`; UI.elems.feedback.classList.remove('opacity-0', 'scale-50'); UI.elems.feedback.classList.add('opacity-100', 'scale-100', 'rotate-[-6deg]'); setTimeout(() => { this.addChatBubble(fixedText, 'sent'); UI.elems.msgBox.innerHTML = ''; UI.elems.msgBox.classList.remove('active'); UI.elems.feedback.classList.remove('opacity-100', 'scale-100', 'rotate-[-6deg]'); UI.elems.feedback.classList.add('opacity-0', 'scale-50'); this.state.msgIndex++; if (this.state.active && !this.state.paused) this.processNextMsg(); }, 1000); },
            endGameLogic() { this.state.active = false; if(this.loop) clearInterval(this.loop); if(this.typeLoop) clearInterval(this.typeLoop); AudioSys.stopMusic(); Boss.state('angry'); },
            
            end() { 
                this.endGameLogic(); 
                UI.showScreen('screen-result'); 
                const s = this.state.score; 
                const multiplier = this.state.initialTime / 20; 
                let grade = 'F', title = 'Disaster', icon = '💀'; 
                // Adjusted Scoring:
                if(s >= 2800 * multiplier) { grade = 'S'; title = 'Godlike'; icon = '👑'; } 
                else if(s >= 2300 * multiplier) { grade = 'A'; title = 'Promoted'; icon = '🔥'; } 
                else if(s >= 1400 * multiplier) { grade = 'B'; title = 'Passable'; icon = '👍'; } 
                else if(s >= 400 * multiplier) { grade = 'C'; title = 'Risky'; icon = '😬'; } 
                
                document.getElementById('rank-grade').innerText = grade; 
                document.getElementById('rank-title').innerText = title; 
                document.getElementById('rank-icon').innerText = icon; 
                document.getElementById('final-score').innerText = s; 
                document.getElementById('final-count').innerText = this.state.msgs; 

                // --- RADAR GRAPH CALCULATIONS ---
                const totalClicks = this.state.correctClicks + this.state.wrongClicks;
                const timeElapsed = (Date.now() - this.state.startTime) / 1000;

                // 1. Precision (0-100)
                const precision = totalClicks > 0 ? (this.state.correctClicks / totalClicks) * 100 : 0;

                // 2. Velocity (Clicks per second normalized to 100, target 1.5 clicks/sec)
                const speedRaw = totalClicks / (timeElapsed || 1);
                const velocity = Math.min(100, (speedRaw / 1.5) * 100);

                // 3. Efficiency (Score per second, normalized to target 150 score/sec)
                const efficiencyRaw = s / (timeElapsed || 1);
                const efficiency = Math.min(100, (efficiencyRaw / 150) * 100);

                // 4. Consistency (Streak Ratio)
                // Need max streak for this. Let's calculate from clickHistory
                let currentStreak = 0;
                let maxStreak = 0;
                this.state.clickHistory.forEach(click => {
                    if (click.correct) currentStreak++;
                    else {
                        if (currentStreak > maxStreak) maxStreak = currentStreak;
                        currentStreak = 0;
                    }
                });
                if (currentStreak > maxStreak) maxStreak = currentStreak; // Final check

                const consistency = totalClicks > 0 ? (maxStreak / totalClicks) * 100 : 0; 
                
                // 5. Pressure Handling (Accuracy under <5s)
                const pressure = this.state.pressureClicks > 0 ? (this.state.pressureCorrect / this.state.pressureClicks) * 100 : Math.max(0, precision - 10); 

                // Draw Radar
                this.drawRadarGraph(precision, velocity, efficiency, consistency, pressure); // Note: using efficiency instead of focus for 3rd axis label match

                // --- HISTORY & COMPARISON ---
                const currentMetrics = { precision, velocity, efficiency, consistency, pressure, score: s };
                const lastRun = HistoryManager.getLast();
                
                const historyEl = document.getElementById('history-section');
                const historyContent = document.getElementById('history-content');
                
                if (lastRun) {
                    historyEl.classList.remove('hidden');
                    // Compare Score
                    const scoreDiff = s - lastRun.score;
                    const scoreIcon = scoreDiff >= 0 ? '<span class="text-green-500">▲</span>' : '<span class="text-red-500">▼</span>';
                    
                    // Compare Best Metric
                    const getBest = (m) => Object.keys(m).reduce((a, b) => m[a] > m[b] ? a : b);
                    const bestMetric = getBest({Precision: precision, Velocity: velocity, Efficiency: efficiency, Consistency: consistency, Pressure: pressure});
                    
                    // Smart Insight Logic
                    const velDiff = velocity - (lastRun.velocity || 0);
                    let insight = "";

                    if (scoreDiff >= 0) {
                        // Score Improved or Same
                        if (velDiff > 5) insight = "Faster & Better score! 🚀";
                        else if (velDiff < -5) insight = "Slower, but more precise! 🎯";
                        else insight = "Consistent speed, higher score! ✅";
                    } else {
                        // Score Dropped
                        if (velDiff > 5) insight = "Faster, but accuracy dropped. 📉";
                        else if (velDiff < -5) insight = "Slower run this time. 🐢";
                        else insight = "Score dropped slightly. 📉";
                    }

                    historyContent.innerHTML = `
                        <div class="flex justify-between font-bold">
                            <span>Score: ${s}</span>
                            <span>${scoreIcon} ${Math.abs(scoreDiff)} vs last</span>
                        </div>
                        <div class="mt-1 text-xs">
                            <p>• Strength: <span class="text-blue-500">${bestMetric}</span></p>
                            <p>• ${insight}</p>
                        </div>
                    `;
                } else {
                    historyEl.classList.add('hidden');
                }

                // Save current run
                HistoryManager.add(currentMetrics);
            },

            drawRadarGraph(acc, spd, eff, con, pre) {
                const canvas = document.getElementById('radar-chart');
                const ctx = canvas.getContext('2d');
                const w = canvas.width;
                const h = canvas.height;
                const cx = w / 2;
                const cy = h / 2;
                const radius = (Math.min(w, h) / 2) - 40; // Padding
                const stats = [acc, spd, eff, con, pre];
                const labels = ["Precision", "Velocity", "Efficiency", "Consistency", "Pressure"];

                // Clear
                ctx.clearRect(0, 0, w, h);

                // Draw Web
                ctx.strokeStyle = '#e2e8f0';
                ctx.lineWidth = 1;
                for (let i = 1; i <= 5; i++) {
                    ctx.beginPath();
                    for (let j = 0; j < 5; j++) {
                        const angle = (Math.PI * 2 * j) / 5 - Math.PI / 2;
                        const r = (radius / 5) * i;
                        const x = cx + Math.cos(angle) * r;
                        const y = cy + Math.sin(angle) * r;
                        if (j === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                    }
                    ctx.closePath();
                    ctx.stroke();
                }

                // Draw Axes & Labels
                ctx.fillStyle = '#64748b';
                ctx.font = 'bold 11px Inter';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                for (let j = 0; j < 5; j++) {
                    const angle = (Math.PI * 2 * j) / 5 - Math.PI / 2;
                    const x = cx + Math.cos(angle) * radius;
                    const y = cy + Math.sin(angle) * radius;
                    ctx.beginPath();
                    ctx.moveTo(cx, cy);
                    ctx.lineTo(x, y);
                    ctx.strokeStyle = '#94a3b8';
                    ctx.stroke();

                    // Text position
                    const tx = cx + Math.cos(angle) * (radius + 20);
                    const ty = cy + Math.sin(angle) * (radius + 20);
                    ctx.fillText(labels[j], tx, ty);
                }

                // Draw Data Shape
                ctx.beginPath();
                for (let j = 0; j < 5; j++) {
                    const angle = (Math.PI * 2 * j) / 5 - Math.PI / 2;
                    const r = (radius * (stats[j] / 100)); 
                    const x = cx + Math.cos(angle) * r;
                    const y = cy + Math.sin(angle) * r;
                    if (j === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.fillStyle = 'rgba(59, 130, 246, 0.4)';
                ctx.fill();
                ctx.strokeStyle = '#2563eb';
                ctx.lineWidth = 3;
                ctx.stroke();

                // Contextual Feedback Text
                let feedback = "Balanced performance.";
                if (acc > 90 && spd > 80) feedback = "Surgical precision at high speed!";
                else if (spd > 90 && acc < 60) feedback = "Fast, but sloppy. Focus more.";
                else if (con < 50) feedback = "You panicked at the end!";
                else if (eff > 90) feedback = "Flawless focus. Zen master.";
                
                document.getElementById('radar-feedback').innerText = feedback;
            }
        };
