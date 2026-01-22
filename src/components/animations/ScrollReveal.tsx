import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

type AnimationType = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "rotate" | "blur" | "slideUp" | "stagger";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const animations: Record<AnimationType, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  rotate: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1 }
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" }
  },
  slideUp: {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  },
  stagger: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }
};

const ScrollReveal = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  threshold = 0.2
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
