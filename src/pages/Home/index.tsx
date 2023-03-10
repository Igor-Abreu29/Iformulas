import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export function Home() {
    return (
        <main className={styles.HomeContainer}>
            <section>
                <h2>Matemática</h2>
                <div className={styles.routeLinks}>
                    <Link to={'/matters/mathematic/theory'} className={styles.mathematicRoute}>Teoria dos Conjuntos</Link>
                    <a href="#" className={styles.mathematicRoute}>Conjuntos Numéricos</a>
                    <a href="#" className={styles.mathematicRoute}>Operações Fundamentais</a>
                </div>
            </section>
            <section>
                <h2>Física</h2>
                <div className={styles.routeLinks}>
                    <Link to={'/matters/pshycs/vector'} className={styles.pshycsRoute}>Vetores</Link>
                    <a href="#" className={styles.pshycsRoute}>Movimento Retilíneo</a>
                    <a href="#" className={styles.pshycsRoute}>Lançamentos</a>
                </div>
            </section>
            <section>
                <h2>Química</h2>
                <div className={styles.routeLinks}>
                    <Link to={'matters/chemical/stoichiometry'} className={styles.chemicalRoute}>Estequiometria</Link>
                    <a href="#" className={styles.chemicalRoute}>Química Orgânica</a>
                    <a href="#" className={styles.chemicalRoute}>Cinética Química</a>
                </div>
            </section>
        </main>
    )
}