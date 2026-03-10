import { ReactNode } from "react";

interface GlassButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  variant?: "accent" | "light";
}

const GlassButton = ({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  variant = "accent",
}: GlassButtonProps) => {
  const isAccent = variant === "accent";

  const inner = (
    <>
      {/* Volumetric under-glow */}
      <div
        className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-[140%] h-28 rounded-full blur-[50px] opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none ${
          isAccent ? "bg-accent/30" : "bg-white/20"
        }`}
      />

      {/* Inner shell with gradient border feel */}
      <div
        className={`absolute inset-[3px] rounded-full overflow-hidden backdrop-blur-xl border shadow-[inset_0_2px_10px_rgba(255,255,255,0.25)] ${
          isAccent
            ? "bg-accent border-accent/60"
            : "bg-white/10 border-white/40"
        }`}
      />

      {/* Glossy glass overlay */}
      <div className="absolute inset-[3px] rounded-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/10 opacity-70" />
        <div
          className={`absolute inset-0 rounded-full border shadow-[inset_0_4px_10px_rgba(255,255,255,0.3),inset_0_-4px_10px_rgba(0,0,0,0.1)] ${
            isAccent ? "border-accent/40" : "border-white/60"
          }`}
        />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 flex items-center gap-2.5 px-7 py-0 font-semibold text-sm md:text-base drop-shadow-sm ${
          isAccent ? "text-accent-foreground" : "text-white"
        }`}
      >
        {children}
      </div>
    </>
  );

  const baseClass = `group relative overflow-hidden transition-all duration-500 ease-out hover:scale-[1.03] active:scale-[0.98] border-none flex cursor-pointer h-[52px] md:h-[56px] rounded-full items-center justify-center w-fit ${
    disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""
  } ${className}`;

  const dropShadow = isAccent
    ? "drop-shadow(0 10px 25px rgba(180,130,20,0.35))"
    : "drop-shadow(0 10px 25px rgba(0,0,0,0.3))";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        style={{ filter: dropShadow }}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={baseClass}
      style={{ filter: dropShadow }}
    >
      {inner}
    </button>
  );
};

export default GlassButton;
