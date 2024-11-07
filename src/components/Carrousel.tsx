import { motion } from "framer-motion";
import { RedSeparator, BlueCenterLine } from "./styles/Carrousel.styled";

export function Carrousel() {
  const text = `| Hello | Hola | 你好 | नमस्ते | مرحبا | Здравствуйте | হ্যালো | Olá | こんにちは | 안녕하세요 | Hallo | Bonjour | Ciao | سلام | வணக்கம் | สวัสดี | Merhaba | Xin chào | सलाम | Halo | வணக்கம் | สวัสดี | Merhaba | Xin chào | سلام | Halo | שלום | नमस्कार | ਸਤ ਸ੍ਰੀ ਅਕਾਲ | Selamat | ሰላም | مرحبا | Kumusta | สวัสดี | Xin chào | Здраво`;

  const formattedText = text
    .replace(/\s+/g, "")
    .split("|")
    .map((part, index) => (
      <span key={index}>
        {part}
        {index < text.split("|").length - 1 && (
          <RedSeparator>
            {" "}
            <BlueCenterLine />
          </RedSeparator>
        )}
      </span>
    ));

  return (
    <div
      style={{ position: "relative", overflow: "hidden", whiteSpace: "nowrap" }}
    >
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 250,
        }}
        style={{ display: "inline-block", fontSize: "14vw", margin: 0 }}
      >
        {formattedText}
        {formattedText}
      </motion.div>
    </div>
  );
}
