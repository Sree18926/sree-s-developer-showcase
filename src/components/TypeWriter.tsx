import { useState, useEffect } from "react";

const phrases = ["Backend Systems.", "Scalable APIs.", "Reliable Code.", "Student Initiatives."];

const TypeWriter = () => {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const speed = deleting ? 40 : 80;
    const pause = !deleting && charIdx === current.length ? 1800 : deleting && charIdx === 0 ? 400 : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      } else {
        const next = deleting ? charIdx - 1 : charIdx + 1;
        setCharIdx(next);
        setText(current.substring(0, next));
      }
    }, pause);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <span>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-accent align-middle ml-1 animate-blink" />
    </span>
  );
};

export default TypeWriter;
