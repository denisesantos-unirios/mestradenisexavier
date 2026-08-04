import { QRCodeSVG } from "qrcode.react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { QrCode } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { buildPublicUrl } from "@/lib/public-url";

const LessonQRCode = () => {
  const location = useLocation();
  const fullUrl = buildPublicUrl(location.pathname);


  return (
    <ScrollReveal animation="fadeUp" delay={0.3}>
      <div className="flex flex-col items-center gap-3 py-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
          <QrCode className="w-4 h-4 text-primary" />
          <span>Escaneie para acompanhar a aula</span>
        </div>
        <motion.div
          className="glass-card p-4 inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <QRCodeSVG
            value={fullUrl}
            size={140}
            bgColor="transparent"
            fgColor="hsl(var(--foreground))"
            level="M"
            includeMargin={false}
          />
        </motion.div>
        <p className="text-xs text-muted-foreground/70 max-w-[200px] text-center break-all">
          {fullUrl}
        </p>
      </div>
    </ScrollReveal>
  );
};

export default LessonQRCode;
