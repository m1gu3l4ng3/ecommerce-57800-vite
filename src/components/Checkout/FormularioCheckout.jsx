import { useState } from "react";
import "./checkout.css";

const FormularioCheckout = ({
  datosForm,
  handleChangeInput,
  handleSubmitForm,
}) => {
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);

  const handleEmailChange = (e) => {
    handleChangeInput(e);
    setShowConfirmEmail(e.target.value !== "");
  };

  return (
    <form onSubmit={handleSubmitForm} className="form-checkout">
      <label className="label">Nombre: </label>
      <input
        type="text"
        name="nombre"
        value={datosForm.nombre}
        onChange={handleChangeInput}
        className="input"
      />
      <label className="label">Telefono: </label>
      <input
        type="text"
        name="telefono"
        value={datosForm.telefono}
        onChange={handleChangeInput}
        className="input"
      />
      <label className="label">Email: </label>
      <input
        type="email"
        name="email"
        value={datosForm.email}
        onChange={handleEmailChange}
        className="input"
      />
      {showConfirmEmail && (
        <>
          <label className="label">Confirma Email:</label>
          <input
            type="email"
            name="confirmEmail"
            value={datosForm.confirmEmail}
            onChange={handleChangeInput}
            className="input"
          />
        </>
      )}
      <button type="submit" className="button-form">
        Enviar orden
      </button>
    </form>
  );
};

export default FormularioCheckout;
