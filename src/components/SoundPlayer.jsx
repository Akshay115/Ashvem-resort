import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Waves } from 'lucide-react';

export default function SoundPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const timerRef = useRef(null);

  const startOceanSounds = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      const audioCtx = new AudioContext();
      audioCtxRef.current = audioCtx;

      // Master volume gain node
      const masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, audioCtx.currentTime + 2);
      masterGain.connect(audioCtx.destination);
      gainNodeRef.current = masterGain;

      // Buffer size for noise generator
      const bufferSize = 2 * audioCtx.sampleRate;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;

      // Pink noise synthesis for natural ocean wave feel
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; // Gain boost
      }

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Lowpass filter for ocean wave dynamics
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, audioCtx.currentTime);
      filter.Q.setValueAtTime(3, audioCtx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      whiteNoise.start();

      // Oscillate filter frequency to mimic rhythmic ocean waves
      let phase = 0;
      timerRef.current = setInterval(() => {
        if (!audioCtx || audioCtx.state !== 'running') return;
        phase += 0.08;
        const waveFreq = 220 + Math.sin(phase) * 180 + Math.cos(phase * 0.5) * 60;
        filter.frequency.setTargetAtTime(waveFreq, audioCtx.currentTime, 0.4);
      }, 100);

      setIsPlaying(true);
    } catch (err) {
      console.log('Audio playback error:', err);
    }
  };

  const stopOceanSounds = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setTargetAtTime(0.001, audioCtxRef.current.currentTime, 0.5);
      setTimeout(() => {
        audioCtxRef.current?.close();
        setIsPlaying(false);
      }, 600);
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
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      audioCtxRef.current?.close();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute Ocean Ambient Wave Sounds" : "Play Ambient Ocean Wave Sounds"}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-xl backdrop-blur-md border ${
        isPlaying
          ? 'bg-[#1F4045]/90 text-[#E8DFD1] border-[#D97757]/40 shadow-emerald-950/20 animate-pulse'
          : 'bg-[#191816]/80 text-[#E8DFD1] border-white/10 hover:border-[#D97757]'
      }`}
    >
      <Waves className={`w-4 h-4 ${isPlaying ? 'text-[#D97757] animate-bounce' : 'text-[#E8DFD1]'}`} />
      <span>{isPlaying ? 'Ocean Wave Sound: ON' : 'Ocean Ambience'}</span>
      {isPlaying ? <Volume2 className="w-4 h-4 text-[#D97757]" /> : <VolumeX className="w-4 h-4 opacity-60" />}
    </button>
  );
}
