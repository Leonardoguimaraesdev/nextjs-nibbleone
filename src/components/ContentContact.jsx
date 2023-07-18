import styles from "../styles/ContentContact.module.scss";
import React, { useState } from "react";

export default function ContentContact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nome,
      email,
      telefone,
      mensagem,
    };

    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}/api/enviar-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
      setEmailSent(true);
      setLoading(false); // Define o estado de loading como false após o envio do e-mail
    } catch (error) {
      console.error(error);
      setLoading(false); // Define o estado de loading como false em caso de erro
    }
  };
  return (
    <section className={styles.content}>
      <h1>ENTRE EM CONTATO</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Celular"
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <button type="submit">
        {emailSent ? 'Email enviado com sucesso!' : loading ? 'Enviando...' : 'Enviar formulário'}
        </button>
      </form>
    </section>
  );
}
