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
          Hola <FaSmile />
        </h1>
        <StyledMotionDiv>
          <h1>Mi nombre es</h1>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nombre}
          />
        </StyledMotionDiv>

        <StyledMotionDiv>
          <h1>Este es mi correo</h1>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </StyledMotionDiv>

        <StyledMotionDiv>
          <h1>Y el mensaje es</h1>
          <Input
            id="mensaje"
            name="mensaje"
            type="text"
            placeholder="Mensaje"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mensaje}
          />
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
