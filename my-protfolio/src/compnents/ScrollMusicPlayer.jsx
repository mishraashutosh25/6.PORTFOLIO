import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function FloatingMusicButton() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) audioRef.current.pause();
    else audioRef.current.play();

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

      {/* CONTAINER: Text + Button both together */}
      <div
        className="
          fixed bottom-5 right-6 z-[999]
          flex flex-col items-center gap-2
        "
      >
        {/* Dynamic Text */}
        {!playing ? (
          <p className="text-white italic text-sm tracking-wide text-center w-max">
            Wanna play music while scrolling??
          </p>
        ) : (
          <p className="text-white italic text-sm tracking-wide text-center w-max">
            Double tap to the music.
          </p>
        )}

        {/* PLAY BUTTON */}
        <button
          onClick={toggleMusic}
          className="
            relative p-3 rounded-full
            bg-gradient-to-br from-cyan-400 to-emerald-400
            shadow-[0_0_25px_rgba(0,255,200,0.9)]
            flex items-center justify-center
            hover:scale-110 active:scale-95
            transition-all duration-300
          "
        >
          <span
            className="absolute inset-[-6px] rounded-full border-2 border-cyan-300/40 animate-spin-slow blur-[1px]"
          ></span>

          <span className="absolute inset-0 rounded-full bg-cyan-300/30 blur-xl animate-pulse"></span>

          {playing ? (
            <FaPause className="relative text-white text-1xl" />
          ) : (
            <FaPlay className="relative text-white text-1xl" />
          )}
        </button>
      </div>

      {/* Spin Animation */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </>
  );
}
