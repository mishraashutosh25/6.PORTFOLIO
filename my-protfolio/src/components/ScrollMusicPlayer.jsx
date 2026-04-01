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
      <audio ref={audioRef} src="/music.mp3" loop preload="none" />

      {/* CONTAINER: Text + Button both together */}
      <div
        className="
          fixed bottom-3 right-3 md:bottom-5 md:right-6 z-[999]
          flex flex-col items-end md:items-center gap-2
          transform scale-75 md:scale-100 origin-bottom-right
        "
      >
        {/* Dynamic Text */}
        <p className="text-white italic text-sm tracking-wide text-center w-max transition-opacity duration-300">
          {!playing ? "Wanna play music while scrolling??" : "Double tap to pause the music."}
        </p>

        {/* PLAY BUTTON */}
        <button
          onClick={toggleMusic}
          aria-label={playing ? "Pause background music" : "Play background music"}
          aria-pressed={playing}
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
            className="absolute inset-[-6px] rounded-full border-2 border-cyan-300/40 animate-[spin_6s_linear_infinite] blur-[1px]"
          ></span>

          <span className="absolute inset-0 rounded-full bg-cyan-300/30 blur-xl animate-pulse"></span>

          {playing ? (
            <FaPause className="relative text-white text-1xl" />
          ) : (
            <FaPlay className="relative text-white text-1xl" />
          )}
        </button>
      </div>
    </>
  );
}
