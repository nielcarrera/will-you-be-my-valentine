import { useState, useRef } from "react";

// --- IMPORTANT: Import the song from your assets folder ---
// Make sure you moved song.mp3 into src/assets/
import musicFile from "./assets/song.mp3";

// --- Components ---
const Lily = ({ x, y, scale, rotation, delay }: any) => (
  <g transform={`translate(${x}, ${y}) scale(${scale}) rotate(${rotation})`}>
    <path d="M0 0 Q-5 50 0 100" stroke="#4ade80" strokeWidth="4" fill="none" />
    <g
      className="origin-bottom animate-flower-sway"
      style={{ animationDelay: `${delay}s` }}
    >
      <path
        d="M0 0 C-10 -20 -15 -40 0 -60 C15 -40 10 -20 0 0"
        fill="#fce7f3"
        stroke="#fbcfe8"
      />
      <path
        d="M0 0 C-20 -15 -40 -20 -50 -5 C-30 5 -15 5 0 0"
        fill="#fce7f3"
        stroke="#fbcfe8"
      />
      <path
        d="M0 0 C20 -15 40 -20 50 -5 C30 5 15 5 0 0"
        fill="#fce7f3"
        stroke="#fbcfe8"
      />
      <line x1="0" y1="0" x2="-5" y2="-25" stroke="#fde047" strokeWidth="2" />
      <line x1="0" y1="0" x2="5" y2="-25" stroke="#fde047" strokeWidth="2" />
      <line x1="0" y1="0" x2="0" y2="-30" stroke="#fde047" strokeWidth="2" />
    </g>
  </g>
);

const Bouquet = () => {
  return (
    <div className="relative flex justify-center items-center h-80 w-full animate-fade-in">
      <svg
        width="300"
        height="400"
        viewBox="0 0 300 400"
        className="overflow-visible"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <path
          d="M100 250 L50 100 L250 100 L200 250 Z"
          fill="#fbcfe8"
          opacity="0.8"
        />
        <path
          d="M150 250 Q100 200 80 150"
          stroke="#166534"
          strokeWidth="5"
          fill="none"
        />
        <path
          d="M150 250 Q200 200 220 150"
          stroke="#166534"
          strokeWidth="5"
          fill="none"
        />
        <path
          d="M150 250 Q150 180 150 120"
          stroke="#166534"
          strokeWidth="5"
          fill="none"
        />
        <Lily x="150" y="200" scale="0.8" rotation="0" delay="0" />
        <Lily x="110" y="210" scale="0.7" rotation="-20" delay="0.5" />
        <Lily x="190" y="210" scale="0.7" rotation="20" delay="1" />
        <Lily x="80" y="230" scale="0.6" rotation="-40" delay="1.5" />
        <Lily x="220" y="230" scale="0.6" rotation="40" delay="2" />
        <path
          d="M100 250 Q150 280 200 250 L180 350 L120 350 Z"
          fill="#f9a8d4"
        />
        <path
          d="M120 280 Q150 290 180 280"
          stroke="#db2777"
          strokeWidth="8"
          fill="none"
        />
        <path
          d="M150 285 Q130 320 120 340"
          stroke="#db2777"
          strokeWidth="6"
          fill="none"
        />
        <path
          d="M150 285 Q170 320 180 340"
          stroke="#db2777"
          strokeWidth="6"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Music State
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const yesButtonSize = noCount * 20 + 16;

  const steps = [
    { text: "Hi loveyyy, do you miss me?" },
    { text: "Oh so you clicked next it means you do hehehe" },
    { text: "Can i have some of your time, this wont last long naman" },
    {
      text: "So I made this after I finished making our project sa OJT, I hope you're proud of me",
    },
    { text: "Sooooooooo" },
    { text: "Happy Valentine's babyyy" },
    {
      text: "I know you dont like flowers but you didn't mention hating a digital one",
    },
    { text: "so here's for you", showBouquet: true },
    { text: "I'm glad that you reached until here" },
    { text: "I know you missed me too you avoidant baddie" },
    { text: "Cause I miss youuuuuuu a lottttt my love" },
    { text: "But just like i said, i wont take much of your time" },
    { text: "So all i want to ask issss" },
  ];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Playback failed:", error);
            alert(
              "Music playback failed. Please interact with the page first or check console.",
            );
          });
      }
    }
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Loveyyy Pleaseeeee",
      "I miss you so much na",
      "Promise we'll make it right this time",
      "Pleaseeeeee huhuhuhuh",
      "Susumbong kita kay mama sige",
      "Babyyy plsss",
      "I know u still love me u avoidant baddie",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to venniel's ghost",
      "please babyy",
      ":((((",
      "Pleaseeee loveyyy",
      "I still love you hihihi",
      "Pleaseeeee",
      "Awa nalang bby",
      "Di ako naniniwalang ayaw mo",
      "Just imagine what we could do together if you say yes",
      "Pleaseeeee",
      "Just Imagineeee",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const isIntro = currentStep < steps.length;

  return (
    <div className="relative flex h-screen flex-col items-center justify-center p-4 bg-pink-50 overflow-hidden text-center">
      {/* --- MUSIC PLAYER --- */}
      <div className="absolute top-6 right-6 flex flex-col items-end z-50">
        <audio ref={audioRef} src={musicFile} loop />

        {!isPlaying && (
          <div
            className="mb-2 mr-2 animate-bounce text-pink-600 font-semibold text-sm bg-white p-2 rounded-lg shadow-md border border-pink-200 cursor-pointer"
            onClick={toggleMusic}
          >
            Click me to play a beautiful song hehehehehe ♫
          </div>
        )}

        <button
          onClick={toggleMusic}
          className="bg-white p-3 rounded-full shadow-lg border-2 border-pink-400 hover:bg-pink-100 transition-all active:scale-95 text-pink-500 font-bold"
        >
          {isPlaying ? "❚❚ Pause Music" : "▶ Play Music"}
        </button>
      </div>

      {isIntro ? (
        <div className="flex flex-col items-center justify-center max-w-2xl w-full animate-slide-up">
          {steps[currentStep].showBouquet && <Bouquet />}

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-pink-100 w-full relative mt-8">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-normal">
              {steps[currentStep].text}
            </h1>

            <div className="flex justify-end mt-8">
              <button
                onClick={handleNext}
                className="bg-pink-500 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-pink-600 transition-transform transform hover:scale-105 flex items-center gap-2"
              >
                Next ➜
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in w-full flex flex-col items-center">
          {yesPressed ? (
            <>
              <img
                src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                className="rounded-lg shadow-lg"
              />
              <div className="my-4 text-4xl font-bold text-pink-600 animate-bounce">
                YEYYYYYYYYYY, JUST SEND ME A MESSAGE BABY SO I CAN CONFIRM, I
                LOVE YOU ;))
              </div>
            </>
          ) : (
            <>
              <img
                className="h-[200px] rounded-lg shadow-lg mb-8"
                src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              />
              <h1 className="my-4 text-4xl font-bold text-gray-800 max-w-lg">
                Hi you avoidant baddie, I'm back! So can we go back na and Will
                you be my valentine?
              </h1>
              <div className="flex flex-wrap justify-center gap-4 items-center mt-4">
                <button
                  className={`rounded bg-green-500 px-8 py-4 font-bold text-white hover:bg-green-600 transition-all shadow-lg`}
                  style={{ fontSize: yesButtonSize }}
                  onClick={() => setYesPressed(true)}
                >
                  Yes
                </button>
                <button
                  onClick={handleNoClick}
                  className="rounded bg-red-500 px-8 py-4 font-bold text-white hover:bg-red-600 transition-all shadow-lg"
                >
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* GLOBAL STYLES */}
      <style>{`
        @keyframes flower-sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-flower-sway {
          animation: flower-sway 3s infinite ease-in-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fadeIn 1s ease-in forwards;
        }
      `}</style>
    </div>
  );
}
