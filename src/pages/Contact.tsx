import { transition } from "../components/Transitions";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  ContactContainer,
  Input,
  StyledMotionDiv,
} from "../components/styles/Contact.styled";
import { FaSmile } from "react-icons/fa";
import { Carrousel } from "../components/Carrousel";
import { SoundWave } from "../components/SoundWave";
import { useState } from "react";
import { motion } from "framer-motion";

const animateText = (text: string) =>
  text.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        display: "inline-block",
        whiteSpace: "pre",
        transformOrigin: "bottom",
      }}
    >
      {char}
    </motion.span>
  ));

const Contact = () => {
  const [isPaused, setIsPaused] = useState(true);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      mensaje: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es requerido"),
      email: Yup.string()
        .email("Email inválido")
        .required("El email es requerido"),
      mensaje: Yup.string().required("El mensaje es requerido"),
    }),
    onSubmit: (values) => {
      console.log("Formulario enviado", values);
    },
  });

  return (
    <ContactContainer>
      <Carrousel />
      <form onSubmit={formik.handleSubmit}>
        <h1>
          {animateText("Hola")} <FaSmile />
        </h1>
        <StyledMotionDiv>
          <h1>{animateText("Mi nombre es")}</h1>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "circOut", delay: 0 }}
            style={{ width: "100%" }}
          >
            <Input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Nombre"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nombre}
            />
          </motion.div>
        </StyledMotionDiv>

        <StyledMotionDiv>
          <h1>{animateText("Este es mi correo")}</h1>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
            style={{ width: "100%" }}
          >
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </motion.div>
        </StyledMotionDiv>

        <StyledMotionDiv>
          <h1>{animateText("Y el mensaje es")}</h1>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "circOut", delay: 0.4 }}
            style={{ width: "100%" }}
          >
            <Input
              id="mensaje"
              name="mensaje"
              type="text"
              placeholder="Mensaje"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mensaje}
            />
          </motion.div>
        </StyledMotionDiv>

        <Button
          type="submit"
          onMouseEnter={() => setIsPaused(false)}
          onMouseLeave={() => setIsPaused(true)}
        >
          Enviar <SoundWave isPaused={isPaused} />
        </Button>
      </form>
    </ContactContainer>
  );
};

export const ContactPage = transition(Contact);
