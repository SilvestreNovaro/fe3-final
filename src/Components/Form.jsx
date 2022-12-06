import React from "react";
import { useFormik } from "formik"
import * as Yup from 'yup';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const formik = useFormik({
    initialValues: { //valores iniciales que precisa el formik
      nombre: '',
      email: ''
    },
    validationSchema: Yup.object({ //validacion del formulario
      nombre: Yup.string()
        .min(5, 'El nombre debe tener mas de 5 caracteres')
        .required('Debes ingresar tu nombre completo'),
      email: Yup.string().email('Direccion de email invalida').required('Debes ingresar tu direccion de email')
    }), 
    onSubmit: values => { 
      console.log(values);
      alert("Gracias " + values.nombre + ", " + "te contactaremos cuanto antes via email")
    }
  });

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={formik.handleSubmit} className="div-form">
        <label htmlFor="nombre">Nombre completo</label>
        <input id="nombre" type="text" name="nombre" onChange={formik.handleChange} value={formik.values.nombre} 
          onBlur={formik.handleBlur} required/>
          {formik.touched.nombre && formik.errors.nombre ? (<div>{formik.errors.nombre}</div>) : null}

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" onChange={formik.handleChange} value={formik.values.email} 
          onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;
