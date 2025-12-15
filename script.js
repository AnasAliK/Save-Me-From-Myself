
        // --- CONFIG ---
        const THEMES = {
            whatsapp: {
                appBg: '#efeae2', headerBg: '#008069', headerText: '#ffffff',
                bubbleBg: '#ffffff', bubbleText: '#111b21', accent: '#00a884', fixedText: '#00a884',
                radius: '0.5rem', font: "'Inter', sans-serif",
                icon: 'ph-whatsapp-logo', pattern: 'whatsapp', footerBg: '#f0f2f5'
            },
            imessage: {
                appBg: '#ffffff', headerBg: 'rgba(245,245,245,0.9)', headerText: '#000000',
                bubbleBg: '#3b82f6', bubbleText: '#ffffff', accent: '#3b82f6', fixedText: '#fbbf24',
                radius: '1.2rem', font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                icon: 'ph-chat-circle-dots', pattern: 'none', footerBg: '#ffffff'
            },
            twitter: {
                appBg: '#000000', headerBg: 'rgba(0,0,0,0.8)', headerText: '#ffffff',
                bubbleBg: '#000000', bubbleText: '#e7e9ea', accent: '#1d9bf0', fixedText: '#1d9bf0',
                radius: '0px', font: "'Inter', sans-serif",
                icon: 'ph-twitter-logo', pattern: 'none', darkMode: true, footerBg: '#000000', border: '1px solid #333'
            },
            gmail: {
                appBg: '#ffffff', headerBg: '#ffffff', headerText: '#444444',
                bubbleBg: '#ffffff', bubbleText: '#222222', accent: '#ea4335', fixedText: '#ea4335',
                radius: '4px', font: "'Roboto', sans-serif",
                icon: 'ph-envelope-simple', pattern: 'none', footerBg: '#ffffff', shadow: '0 1px 2px rgba(0,0,0,0.2)'
            },
            discord: {
                appBg: '#36393f', headerBg: '#2f3136', headerText: '#ffffff',
                bubbleBg: '#40444b', bubbleText: '#dcddde', accent: '#5865F2', fixedText: '#5865F2',
                radius: '4px', font: "'Open Sans', sans-serif",
                icon: 'ph-discord-logo', pattern: 'none', darkMode: true, footerBg: '#40444b'
            },
            tinder: {
                appBg: '#ffffff', headerBg: 'linear-gradient(to right, #fd267a, #ff6036)', headerText: '#ffffff',
                bubbleBg: '#f0f2f4', bubbleText: '#111', accent: '#fd267a', fixedText: '#fd267a',
                radius: '1.5rem', font: "'Inter', sans-serif", icon: 'ph-fire-fill', pattern: 'grid', footerBg: '#ffffff'
            }
        };

        const MESSAGES = [
            { 
                theme: 'gmail', from: "HR Dept", context: "RE: Harassment Complaint", 
                text: "That accusation is totaly fals! I was only giving constuctive critcism to the intern about his atire. I am a profesional and I demand an appology immeditly.", 
                mistakes: [
                    {o:"totaly",c:"totally",l:["totally","total","toally"]},
                    {o:"fals",c:"false",l:["false","falls","fails"]},
                    {o:"constuctive",c:"constructive",l:["constructive","construction","constitutive"]},
                    {o:"critcism",c:"criticism",l:["criticism","critique","critical"]},
                    {o:"atire",c:"attire",l:["attire","tire","entire"]},
                    {o:"profesional",c:"professional",l:["professional","professor","provisional"]},
                    {o:"appology",c:"apology",l:["apology","ecology","apollogy"]},
                    {o:"immeditly",c:"immediately",l:["immediately","media","idly"]}
                ] 
            },
            { 
                theme: 'whatsapp', from: "Mom", context: "Where are you?? Dinner started!", 
                text: "Sory Mom, I cant make it to diner. Too much work at the ofice. Ill visit next wek I promis. Please dont be angery with me.", 
                mistakes: [
                    {o:"Sory",c:"Sorry",l:["Sorry","Store","Sore"]},
                    {o:"diner",c:"dinner",l:["dinner","diver","dimmer"]},
                    {o:"ofice",c:"office",l:["office","offal","official"]},
                    {o:"wek",c:"week",l:["week","weak","wake"]},
                    {o:"promis",c:"promise",l:["promise","miss","premise"]},
                    {o:"angery",c:"angry",l:["angry","hungry","energy"]}
                ] 
            },
            { 
                theme: 'discord', from: "Raid Leader", context: "Pulling in 10s...", 
                text: "Wait! Dont start the rade without me! I am loging in right now. My internet was laging. If you pull early I will kick you from the gild.", 
                mistakes: [
                    {o:"rade",c:"raid",l:["raid","fade","trade"]},
                    {o:"loging",c:"logging",l:["logging","lodging","lagging"]},
                    {o:"laging",c:"lagging",l:["lagging","laughing","landing"]},
                    {o:"gild",c:"guild",l:["guild","gold","gilt"]}
                ] 
            },
            { 
                theme: 'twitter', from: "Followers", context: "Compose Tweet", 
                text: "Just had a genus idea. What if we put a resturant on the Moon? The food would be good but no atmosphere haha. Investors DM me for colabaration. #visonary", 
                mistakes: [
                    {o:"genus",c:"genius",l:["genius","genus","genes"]},
                    {o:"resturant",c:"restaurant",l:["restaurant","restroom","rant"]},
                    {o:"colabaration",c:"collaboration",l:["collaboration","labor","oration"]},
                    {o:"visonary",c:"visionary",l:["visionary","visor","visual"]}
                ] 
            },
            { 
                theme: 'imessage', from: "Landlord", context: "Rent is late again.", 
                text: "I already sent the chek yesterday! Please chack your bank acount again before you acuse me. I am not lying about the mony. I am a good tenent.", 
                mistakes: [
                    {o:"chek",c:"cheque",l:["check","cheek","cheque"]},
                    {o:"chack",c:"check",l:["check","cheek","cheque"]},
                    {o:"acount",c:"account",l:["account","count","amount"]},
                    {o:"acuse",c:"accuse",l:["accuse","cause","abuse"]},
                    {o:"mony",c:"money",l:["money","many","moon"]},
                    {o:"tenent",c:"tenant",l:["tenant","tenet","tent"]}
                ] 
            },
            { 
                theme: 'tinder', from: "Jessica (24)", context: "She said: 'Hey'", 
                text: "Hey beautiful, you look gorgous in your pics. Want to grab cofee and discuss sinergy? I am a very succsesful CEO looking for a soulmate.", 
                mistakes: [
                    {o:"gorgous",c:"gorgeous",l:["gorgeous","fungus","george"]},
                    {o:"cofee",c:"coffee",l:["coffee","fee","cough"]},
                    {o:"sinergy",c:"synergy",l:["synergy","energy","sin"]},
                    {o:"succsesful",c:"successful",l:["successful","suck","stressful"]}
                ] 
            },
            { 
                theme: 'discord', from: "ModTeam", context: "#appeals", 
                text: "Unban me right now. I did not break the rools. The mod was being toxick and abused his powr. This is unfair treatmant and I will report this servr.", 
                mistakes: [
                    {o:"rools",c:"rules",l:["rules","rolls","tools"]},
                    {o:"toxick",c:"toxic",l:["toxic","tick","tock"]},
                    {o:"powr",c:"power",l:["power","poor","pour"]},
                    {o:"treatmant",c:"treatment",l:["treatment","treat","mantra"]},
                    {o:"servr",c:"server",l:["server","serve","saver"]}
                ] 
            },
            { 
                theme: 'gmail', from: "IT Support", context: "Ticket #4092", 
                text: "My laptop screen is blak again. I cannot work like this. Fix it immediatly or I will fire the whole department. Stop asking if I pluged it in!", 
                mistakes: [
                    {o:"blak",c:"black",l:["black","blank","back"]},
                    {o:"immediatly",c:"immediately",l:["immediately","medium","idly"]},
                    {o:"pluged",c:"plugged",l:["plugged","plague","pug"]}
                ] 
            },
            { 
                theme: 'imessage', from: "Ex-Wife", context: "Can I see the kids?", 
                text: "Please let me see them on Satuday. I promis I will be on time. I miss them alot. Don't be so crule to me, I am trying to chnage.", 
                mistakes: [
                    {o:"Satuday",c:"Saturday",l:["Saturday","Saturn","Day"]},
                    {o:"promis",c:"promise",l:["promise","miss","prom"]},
                    {o:"alot",c:"a lot",l:["a lot","allot","pilot"]},
                    {o:"crule",c:"cruel",l:["cruel","rule","crude"]},
                    {o:"chnage",c:"change",l:["change","charge","range"]}
                ] 
            },
            { 
                theme: 'whatsapp', from: "Employee Group", context: "Who ate my lunch?", 
                text: "Stop wasting time chating! Get back to work. Also, whoever took my sandwitch from the fridge is fired. I am not kiding. Check the camras.", 
                mistakes: [
                    {o:"chating",c:"chatting",l:["chatting","cheating","charting"]},
                    {o:"sandwitch",c:"sandwich",l:["sandwich","witch","sand"]},
                    {o:"kiding",c:"kidding",l:["kidding","kid","hiding"]},
                    {o:"camras",c:"cameras",l:["cameras","cam","karma"]}
                ] 
            },
            { 
                theme: 'twitter', from: "Customer Support", context: "DM: My order is late", 
                text: "Listen, we are doing our best. The wether is bad causing delays. Your pakage will arrive eventuly. Stop spaming us or I will block you.", 
                mistakes: [
                    {o:"wether",c:"weather",l:["weather","whether","wither"]},
                    {o:"pakage",c:"package",l:["package","pack","page"]},
                    {o:"eventuly",c:"eventually",l:["eventually","event","vent"]},
                    {o:"spaming",c:"spamming",l:["spamming","spa","same"]}
                ] 
            },
            { 
                theme: 'imessage', from: "Bro", context: "Gym?", 
                text: "Nah bro, I pulled a musle. Cant lift today. Maybe tomorow we can hit legs. Honestly I am just lazzy right now.", 
                mistakes: [
                    {o:"musle",c:"muscle",l:["muscle","mussel","muzzle"]},
                    {o:"tomorow",c:"tomorrow",l:["tomorrow","sorrow","marrow"]},
                    {o:"lazzy",c:"lazy",l:["lazy","dizzy","hazy"]}
                ] 
            },
            { 
                theme: 'tinder', from: "Sarah (22)", context: "Bio", 
                text: "Just looking for someone who can handl me. I like long walks on the beeach and watching sunsetts. Swipe right if you are ritch.", 
                mistakes: [
                    {o:"handl",c:"handle",l:["handle","hand","hold"]},
                    {o:"beeach",c:"beach",l:["beach","each","peach"]},
                    {o:"sunsetts",c:"sunsets",l:["sunsets","sets","sons"]},
                    {o:"ritch",c:"rich",l:["rich","itch","pitch"]}
                ] 
            },
            { 
                theme: 'whatsapp', from: "Neighbour", context: "Music too loud!", 
                text: "It is not that loud! Stop complaning. I have the right to listen to jazz in my own hous. If you call the copss I will sue you.", 
                mistakes: [
                    {o:"complaning",c:"complaining",l:["complaining","plane","planning"]},
                    {o:"hous",c:"house",l:["house","mouse","hose"]},
                    {o:"copss",c:"cops",l:["cops","caps","cups"]}
                ] 
            },
            { 
                theme: 'gmail', from: "All Staff", context: "Subject: Budget Cuts", 
                text: "Due to recent losses, we are frezing all bonuses. This is necesary to save the company. Also, free cofee is cancelled. Work hardr.", 
                mistakes: [
                    {o:"frezing",c:"freezing",l:["freezing","frizz","fresh"]},
                    {o:"necesary",c:"necessary",l:["necessary","nice","cesspool"]},
                    {o:"cofee",c:"coffee",l:["coffee","fee","cough"]},
                    {o:"hardr",c:"harder",l:["harder","hard","order"]}
                ] 
            }
        ];

        const AudioSys = {
            ctx: null,
            init() { if(!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)(); },
            playClick() {
                if(!this.ctx) return;
                const t = this.ctx.currentTime;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.frequency.setValueAtTime(800, t);
                osc.frequency.exponentialRampToValueAtTime(100, t + 0.05);
                gain.gain.setValueAtTime(0.3, t);
                gain.gain.exponentialRampToValueAtTime(0.01, t + 0.05);
                osc.connect(gain); gain.connect(this.ctx.destination);
                osc.start(t); osc.stop(t + 0.05);
            },
            playTone(type, f, d, vol=0.1) {
                if(!this.ctx) return;
                const o = this.ctx.createOscillator();
                const g = this.ctx.createGain();
                o.type = type; o.frequency.value = f;
                g.gain.setValueAtTime(vol, this.ctx.currentTime);
                g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + d);
                o.connect(g); g.connect(this.ctx.destination);
                o.start(); o.stop(this.ctx.currentTime + d);
            }
        };

        const Boss = {
            elem: document.getElementById('boss'),
            state(state) {
                this.elem.classList.remove('typing', 'angry', 'success');
                if (state) this.elem.classList.add(state);
            }
        }

        const UI = {
            root: document.documentElement.style,
            screens: { title: document.getElementById('title-screen'), game: document.getElementById('game-screen'), result: document.getElementById('result-screen') },
            elems: {
                timer: document.getElementById('timer'),
                score: document.getElementById('score'),
                msgBox: document.getElementById('message-container'),
                header: document.getElementById('app-header'),
                sendBtn: document.getElementById('send-btn'),
                popup: document.getElementById('popup'),
                feedback: document.getElementById('feedback'),
                ctxMsg: document.getElementById('context-msg'),
                contact: document.getElementById('contact-name'),
                avatarIcon: document.getElementById('avatar-icon'),
                status: document.getElementById('status-indicator'),
                chatArea: document.getElementById('chat-scroll-area')
            },
            showScreen(id) { Object.values(this.screens).forEach(s => s.classList.remove('active')); this.screens[id].classList.add('active'); },
            applyTheme(key) {
                const t = THEMES[key] || THEMES.imessage;
                const r = this.root;
                const g = document.getElementById('game-screen');
                r.setProperty('--app-bg', t.appBg);
                r.setProperty('--header-bg', t.headerBg);
                r.setProperty('--header-text', t.headerText);
                r.setProperty('--bubble-bg', t.bubbleBg);
                r.setProperty('--bubble-text', t.bubbleText);
                r.setProperty('--accent', t.accent);
                r.setProperty('--fixed-text', t.fixedText || t.accent);
                r.setProperty('--font-main', t.font);
                r.setProperty('--border-radius', t.radius);
                r.setProperty('--shadow', t.shadow || 'none');
                g.className = `screen active app-view ${t.darkMode ? 'dark-mode' : ''} ${t.pattern === 'whatsapp' ? 'pattern-whatsapp' : ''} ${t.pattern === 'grid' ? 'pattern-grid' : ''}`;
                this.elems.avatarIcon.className = `ph-fill ${t.icon}`;
                this.elems.avatarIcon.style.color = t.darkMode ? '#fff' : t.accent;
                document.getElementById('footer').style.background = t.footerBg;
                if (t.border) this.elems.msgBox.style.border = t.border; else this.elems.msgBox.style.border = 'none';
            }
        };

        const Game = {
            state: { score: 0, msgs: 0, time: 20, active: false, deck: [] }, // Set time to 20
            loop: null, typeLoop: null, currentMsg: null, mistakeCount: 0, mistakesFixed: 0, isTyping: false,
            start() {
                AudioSys.init();
                if(AudioSys.ctx.state === 'suspended') AudioSys.ctx.resume();
                this.state = { score: 0, msgs: 0, time: 20, active: true, deck: [...MESSAGES].sort(()=>Math.random()-.5) };
                UI.showScreen('game');
                this.nextMsg();
                this.loop = setInterval(() => this.tick(), 100);
            },
            tick() {
                if (!this.state.active) return;
                this.state.time -= 0.1;
                UI.elems.timer.innerText = Math.max(0, this.state.time).toFixed(1);
                document.getElementById('progress-bar').style.width = (this.state.time/20)*100 + "%";
                if (this.isTyping) Boss.state('typing');
                else if (this.state.time <= 5) {
                    Boss.state('angry');
                    UI.elems.sendBtn.classList.add('animate-shake');
                    UI.elems.sendBtn.style.color = '#ef4444';
                    UI.elems.sendBtn.innerText = "HE'S GONNA SEND IT!";
                } else {
                    Boss.state('');
                    UI.elems.sendBtn.classList.remove('animate-shake');
                }
                if (this.state.time <= 0) this.end();
            },
            nextMsg() {
                if(this.state.deck.length === 0) this.state.deck = [...MESSAGES].sort(()=>Math.random()-.5);
                const msg = this.state.deck.pop();
                this.currentMsg = msg;
                this.mistakeCount = 0;
                this.mistakesFixed = 0;
                
                UI.applyTheme(msg.theme);
                // Update Contact Name to reflect OUTGOING message
                UI.elems.contact.innerText = `To: ${msg.from}`; 
                UI.elems.ctxMsg.innerText = msg.context;
                UI.elems.score.innerText = this.state.score;
                UI.elems.sendBtn.innerHTML = `<span>Intercept</span> <i class="ph-bold ph-shield-check"></i>`;
                UI.elems.sendBtn.style.background = 'white';
                UI.elems.sendBtn.style.color = '#94a3b8';
                UI.elems.sendBtn.style.cursor = 'not-allowed';
                UI.elems.msgBox.innerHTML = '';
                UI.elems.msgBox.classList.add('typing-cursor');
                UI.elems.status.innerText = "BOSS TYPING...";
                UI.elems.status.classList.add('animate-pulse');
                this.isTyping = true;
                const words = msg.text.split(/(\s+)/);
                let wordIndex = 0;
                const speed = 50; 
                if (this.typeLoop) clearInterval(this.typeLoop);
                this.typeLoop = setInterval(() => {
                    if (!this.state.active) return clearInterval(this.typeLoop);
                    if (wordIndex < words.length) {
                        const w = words[wordIndex];
                        const span = document.createElement('span');
                        span.innerText = w;
                        const clean = w.trim().replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g,"");
                        const err = msg.mistakes.find(m => m.o === clean);
                        if (err && w.trim().length > 0) {
                            this.mistakeCount++;
                            span.className = 'mistake-word';
                            span.onclick = (e) => this.showPopup(e, span, err);
                        }
                        UI.elems.msgBox.appendChild(span);
                        UI.elems.chatArea.scrollTop = UI.elems.chatArea.scrollHeight;
                        if (w.trim().length > 0) AudioSys.playClick();
                        wordIndex++;
                    } else {
                        clearInterval(this.typeLoop);
                        this.isTyping = false;
                        UI.elems.msgBox.classList.remove('typing-cursor');
                        UI.elems.status.innerText = "Drafting paused";
                        UI.elems.status.classList.remove('animate-pulse');
                    }
                }, speed);
            },
            showPopup(e, span, err) {
                e.stopPropagation();
                if(span.classList.contains('word-fixed')) return;
                AudioSys.playTone('sine', 400, 0.1);
                const pop = UI.elems.popup;
                pop.innerHTML = '';
                [...err.l].sort(()=>Math.random()-.5).forEach(opt => {
                    const btn = document.createElement('button');
                    btn.className = "w-full text-left px-4 py-3 hover:bg-slate-100 text-slate-800 text-sm font-semibold border-b border-slate-100 last:border-0";
                    btn.innerText = opt;
                    btn.onclick = () => {
                        if(opt === err.c) {
                            AudioSys.playTone('sine', 800, 0.1);
                            const original = span.innerText;
                            const prefix = original.match(/^\W*/)[0] || '';
                            const suffix = original.match(/\W*$/)[0] || '';
                            span.innerText = prefix + opt + suffix;
                            span.className = 'word-fixed';
                            this.state.score += 100;
                            UI.elems.score.innerText = this.state.score;
                            this.mistakesFixed++;
                            if (this.mistakesFixed >= this.mistakeCount && !this.isTyping) {
                                this.completeMsg();
                            }
                        } else {
                            AudioSys.playTone('sawtooth', 150, 0.2);
                            this.state.score = Math.max(0, this.state.score - 50);
                            UI.elems.score.innerText = this.state.score;
                            span.classList.add('animate-shake');
                            setTimeout(()=>span.classList.remove('animate-shake'), 300);
                        }
                        pop.classList.add('hidden');
                    };
                    pop.appendChild(btn);
                });
                pop.classList.remove('hidden');
                const rect = span.getBoundingClientRect();
                const container = document.getElementById('game-screen').getBoundingClientRect();
                let left = rect.left - container.left;
                let top = rect.top - container.top - 120;
                if(left < 10) left = 10;
                if(left > container.width - 150) left = container.width - 150;
                if(top < 60) top = rect.bottom - container.top + 10;
                pop.style.left = left + 'px';
                pop.style.top = top + 'px';
                setTimeout(() => document.addEventListener('click', () => pop.classList.add('hidden'), {once:true}), 10);
            },
            completeMsg() {
                this.state.score += 500;
                this.state.msgs++;
                this.state.time = Math.min(20, this.state.time + 5);
                AudioSys.playTone('triangle', 600, 0.1);
                Boss.state('success');
                UI.elems.sendBtn.style.background = 'var(--accent)';
                UI.elems.sendBtn.style.color = 'white';
                UI.elems.sendBtn.innerHTML = `<span>SAFE!</span> <i class="ph-bold ph-check"></i>`;
                UI.elems.feedback.classList.remove('opacity-0', 'scale-50');
                UI.elems.feedback.classList.add('opacity-100', 'scale-100', 'rotate-[-6deg]');
                setTimeout(() => {
                    UI.elems.feedback.classList.remove('opacity-100', 'scale-100', 'rotate-[-6deg]');
                    UI.elems.feedback.classList.add('opacity-0', 'scale-50');
                    if (this.state.active) this.nextMsg();
                }, 1200);
            },
            end() {
                this.state.active = false;
                clearInterval(this.loop);
                clearInterval(this.typeLoop);
                Boss.state('angry'); 
                UI.showScreen('result');
                const s = this.state.score;
                let grade = 'F', title = 'Disaster', icon = '💀';
                if(s > 5000) { grade = 'S'; title = 'Godlike'; icon = '👑'; }
                else if(s > 3000) { grade = 'A'; title = 'Promoted'; icon = '🔥'; }
                else if(s > 1500) { grade = 'B'; title = 'Passable'; icon = '👍'; }
                else if(s > 500) { grade = 'C'; title = 'Risky'; icon = '😬'; }
                document.getElementById('rank-grade').innerText = grade;
                document.getElementById('rank-title').innerText = title;
                document.getElementById('rank-icon').innerText = icon;
                document.getElementById('final-score').innerText = s;
                document.getElementById('final-count').innerText = this.state.msgs;
            }
        };
