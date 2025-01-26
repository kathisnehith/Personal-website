interface ContactBoxProps {
  text: string;
  buttonText: string;
  onClick: () => void;
  bgColor: string;
}

export function ContactBox({ text, buttonText, onClick, bgColor }: ContactBoxProps) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-2xl ${bgColor} mb-4`}>
      <span className="text-lg">{text}</span>
      <button
        onClick={onClick}
        className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
}