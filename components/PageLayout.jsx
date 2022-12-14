import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function PageLayout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>

            <header>
                <nav className={styles.navbar}>
                    <Link className={styles.navbarlink} href="/">Home</Link>
                    <Link className={styles.navbarlink} href="/quienes">Productos</Link>
                    <Link className={styles.navbarlink} href="/article/1.js">Quienes somos</Link>
                    <Link className={styles.navbarlink} href="/about">Contacto</Link>
                </nav>
            </header>
            <main>{children}</main>

            <footer className={styles.footer}>
                <p>
                    © Bokato Sushi. Todos los derechos reservados. Todas las
                    imágenes utilizadas en este sitio son referenciales. | Trabajo
                    Desarrollo web
                </p>
            </footer>
        </>
    );
}

