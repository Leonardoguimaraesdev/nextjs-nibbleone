import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();

  const [open, setOpen] = useState(false)

  const navegation = (e) => {
    const page = e.target.innerText;

    console.log(page);

    if (page === "HOME") {
      router.push("/");
    }
    if (page === "SOBRE") {
      router.push("/about");
    }
    if (page === "CLIENTES") {
      router.push("/clients");
    }
    if (page === "CONTATO") {
      router.push("/contact");
    }
  };

  const showMenu = (e) => {
    setOpen(!open)
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Image
            src="/logo.png"
            width="230"
            height="50"
            alt="Logo da nibbleone"
          />
        </div>
        <div className={styles.right}>
          <ul>
            <li onClick={(e) => navegation(e)}>HOME</li>
            <li onClick={(e) => navegation(e)}>SOBRE</li>
            <li onClick={(e) => navegation(e)}>CLIENTES</li>
            <li onClick={(e) => navegation(e)}>CONTATO</li>
          </ul>
        </div>
        <div className={styles.mobileMenuIcon}>
          <button onClick={(e) => showMenu(e)}>Menu</button>
        </div>
      </nav>
      <div className={ open ? styles.mobileMenuOpen : styles.mobileMenu}>
        <ul>
          <li onClick={(e) => navegation(e)}>HOME</li>
          <li onClick={(e) => navegation(e)}>SOBRE</li>
          <li onClick={(e) => navegation(e)}>CLIENTES</li>
          <li onClick={(e) => navegation(e)}>CONTATO</li>
        </ul>
      </div>
    </>
  );
}
