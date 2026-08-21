import React, { useState, useEffect, useRef } from 'react';
import { Waves } from 'lucide-react';

export default function SoundPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const timerRef = useRef(null);

  const startOceanSounds = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        setIsPlaying(true);
        return;
      }

      const audioCtx = new AudioContext();
      audioCtxRef.current = audioCtx;

      const masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.16, audioCtx.currentTime + 1.5);
      masterGain.connect(audioCtx.destination);
      gainNodeRef.current = masterGain;

      const bufferSize = 2 * audioCtx.sampleRate;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5;
      }

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(280, audioCtx.currentTime);
      filter.Q.setValueAtTime(2.5, audioCtx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      whiteNoise.start();

      let phase = 0;
      timerRef.current = setInterval(() => {
        if (!audioCtx || audioCtx.state !== 'running') return;
        phase += 0.08;
        const waveFreq = 200 + Math.sin(phase) * 160 + Math.cos(phase * 0.5) * 50;
        filter.frequency.setTargetAtTime(waveFreq, audioCtx.currentTime, 0.4);
      }, 100);

      setIsPlaying(true);
    } catch (err) {
      console.log('Audio playback initialized:', err);
    }
  };

  const stopOceanSounds = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setTargetAtTime(0.001, audioCtxRef.current.currentTime, 0.4);
      setTimeout(() => {
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 450);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopOceanSounds();
    } else {
      startOceanSounds();
    }
  };

  useEffect(() => {
    // Attempt auto-start on load or first user click
    const handleFirstClick = () => {
      startOceanSounds();
      window.removeEventListener('click', handleFirstClick);
      window.removeEventListener('keydown', handleFirstClick);
      window.removeEventListener('touchstart', handleFirstClick);
    };

    window.addEventListener('click', handleFirstClick);
    window.addEventListener('keydown', handleFirstClick);
    window.addEventListener('touchstart', handleFirstClick);

    return () => {
      window.removeEventListener('click', handleFirstClick);
      window.removeEventListener('keydown', handleFirstClick);
      window.removeEventListener('touchstart', handleFirstClick);
      if (timerRef.current) clearInterval(timerRef.current);
      audioCtxRef.current?.close();
    };
  }, []);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleSound();
      }}
      aria-label={isPlaying ? "Mute Ocean Sound" : "Play Ocean Sound"}
      title={isPlaying ? "Ocean Sound: Playing (Click to mute)" : "Ocean Sound: Muted (Click to play)"}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full transition-all duration-500 shadow-xl border backdrop-blur-md cursor-pointer ${
        isPlaying
          ? 'bg-[#1F4045] text-emerald-300 border-emerald-400/40 shadow-emerald-950/20 animate-pulse scale-110'
          : 'bg-white/90 text-[#7A7067] border-[#E2D7C3] hover:text-[#D97757] hover:border-[#D97757] hover:scale-105'
      }`}
    >
      <Waves className={`w-6 h-6 transition-transform duration-300 ${isPlaying ? 'text-emerald-300 animate-spin-slow' : ''}`} />
    </button>
  );
}
