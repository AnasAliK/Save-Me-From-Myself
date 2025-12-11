GAME DESIGN DOCUMENT (GDD)
Game Title (Working Title): “Save Me From Myself”
Genre: Fast-paced Text Puzzle / Humor
Platform: Web (HTML5, itch.io)
Playtime: 20 seconds per run
Dev : --- 
________________________________________
1. High Concept
A frantic, humorous micro-game where the player is the virtual assistant of a dyslexic character.
You must quickly spot and correct spelling mistakes in emails, messages, and texts before the character accidentally presses SEND.
The entire game lasts 20 seconds, creating instant tension, comedy, and replayability.
________________________________________
2. Core Pillars
1.	Instant Readability
Player understands gameplay within 1 second.
2.	Fast, Snappy Interactions
Click → Fix → Next → Repeat.
3.	Humor & Personality
Messages are silly, embarrassing, or important.
4.	High Pressure, Low Friction
No typing — only clicking, for accessible web gameplay.
________________________________________
3. Gameplay Overview
The player sees a message on-screen containing:
•	Several correct words
•	2–4 misspelled words
•	A ticking 20-second countdown
Each misspelled word is clickable.
Clicking it opens a small pop-up with correction options (2–3 choices).
Correcting all mistakes triggers the next message instantly.
The goal:
Fix as many messages as possible before time runs out.
________________________________________
4. Player Goals
Primary Goal:
Correct maximum mistakes before the 20 seconds expire.
Secondary Goals:
•	Avoid embarrassing the character
•	Climb the score categories
•	Discover funny message endings
________________________________________
5. Game Loop
1.	Timer starts at 20 seconds
2.	Display Message #1
3.	Player clicks misspelled words
4.	Chooses correction
5.	When all mistakes are fixed → auto-advance to next message
6.	Repeat until time = 0
7.	Show results + final message based on performance
________________________________________
6. Controls
Mouse Only (Web Friendly)
•	Left Click:
o	Select word
o	Choose correction option
o	Press UI buttons
No keyboard typing required (fast + intuitive).
________________________________________
7. Difficulty Curve
Message #1:
•	2 mistakes
•	Easy errors (e.g., “liek”, “teh”)
Message #2:
•	2–3 mistakes
•	Slightly tricky (e.g., homophones, swapped letters)
Message #3+
•	3+ mistakes
•	Longer words
•	More misleading choices
As time goes down:
•	UI shakes
•	Character tries to “press SEND” (fake animation)
•	Stress increases
________________________________________
8. Messages & Mistakes (Examples)
Message 1 (Text to boss):
"I wil be late for werk becase of trafiic."
Mistakes:
•	wil → will
•	werk → work
•	becase → because
•	trafiic → traffic
________________________________________
Message 2 (Text to crush):
"U look amazeng taday, wanna hung out?"
Mistakes:
•	amazeng → amazing
•	taday → today
•	hung → hang
________________________________________
Message 3 (Email to professor):
"Respeccted Sir, plese accept my asignment late submision."
Mistakes:
•	Respeccted → Respected
•	plese → please
•	asignment → assignment
•	submision → submission
________________________________________
9. Scoring System
Per Corrected Mistake:
•	100 points
Per Completed Message:
•	200 bonus
Accuracy Score:
If player selects wrong option:
•	Penalty: -50
•	No retry on that word
Final Score Breakdown:
•	Mistakes fixed
•	Messages completed
•	Accuracy %
•	Time efficiency
________________________________________
10. Endings (Based on Score)
S Rank (Perfect Assistant):
“You saved my entire reputation. I owe you cookies.”
A Rank (Great Assistant):
“Only one embarrassing slip-up today. Nice work!”
B Rank (Average Assistant):
“You did okay… I guess? My boss laughed a bit though.”
C Rank (Bad Assistant):
“Bro… I just texted my crush: ‘I liek ur face hole’.”
F Rank (Disaster):
“I’ve been banned from emailing. You are fired.”
________________________________________
11. Game Flow
1. Title Screen
•	Game Logo
•	Start Button
•	Credits
2. Main Game (20 seconds)
•	Message displayed
•	Mistakes clickable
•	Popup corrections appear
•	Timer ticks
•	Progress immediately to next message
3. Results Screen
•	Score breakdown
•	Rank (S → F)
•	Funny message
4. Replay Option
•	Quick restart
•	Unlimited attempts
________________________________________
12. UI Design
Layout (Web Optimized)
 
Pop-up Correction
Appears above/below the word:
Incorrect Word: "amazeng"
[ amazing ]
[ amusing ]
[ Amazon ]
________________________________________
13. Art Style
Style:
•	Flat UI
•	Simple icons
•	Minimalist
•	Light humor emojis
•	Soft shadows
•	No textures > 256px (for web optimization)
Color Palette:
•	Light backgrounds
•	Highlight incorrect words in pastel red
•	Buttons in friendly blue/green
Visual Theme:
“Modern virtual assistant interface”
Like Gmail + ChatGPT + OS UI combined.
________________________________________
14. Audio Style
Sound Effects:
•	Click → small pop sound
•	Correct → ding
•	Wrong → “error” beep
•	Timer low → ticking
•	Final score → soft jingle
Music:
•	Light office-style music
•	Short loop under 1 MB
•	Only starts after Start button (web audio requirement)
________________________________________
15. Technical Requirements
Engine:
2D only
Canvas-based UI layout
Web Specific:
•	Avoid large fonts
•	Use PNG compression
•	Disable HDR
•	No heavy particles
•	Keep ZIP > 20 MB
________________________________________
16. Scenes (Godot)
/scenes
  TitleScreen.tscn
  Game.tscn
  ResultScreen.tscn
  WordPopup.tscn

/scripts
  GameManager.gd
  MessageManager.gd
  WordButton.gd
  TimerManager.gd
Game.tscn Structure:
Game
├── MessagePanel (RichTextLabel / FlowContainer)
├── TimerLabel
├── PopupLayer
├── SendButtonFake
└── MessageManager
________________________________________
17. Gameplay Systems
1. Message System
•	Stores message text
•	Stores mistake list and correct answers
•	Replaces mistake with button
•	Loads next message instantly
2. Word Interaction System
•	Each misspelled word becomes a clickable Control node
•	On click → spawn pop-up options
•	On selection → replace word with correct text
3. Timer System
•	Global 20-second countdown
•	Updates UI
•	Ends game when reaches 0
4. Score System
•	Track mistakes fixed
•	Track messages completed
•	Calculate rank
________________________________________
18. Performance Considerations (Web)
•	No dynamic fonts > 256px
•	No looping particles > 20
•	UI updates throttled (avoid updating every frame)
•	Message parsed only once per display
•	Preload all scenes/components
•	Use theme instead of multiple unique fonts
________________________________________
19. Polish Additions
•	Shake SEND button every 3 seconds
•	Character “attempts” to send early
•	Screen flashes lightly at 3 seconds left
•	Mistakes glow for 0.2 sec on click
•	Random mini pop-up messages:
o	“Typing…”
o	“Thinking…”
________________________________________
20. Monetization
None — jam game.
But possible future:
•	Expanded version
•	100+ messages
•	Daily challenges
•	Steam release

