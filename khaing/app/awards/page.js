import styles from './awards.module.css';

const Awards = () => {
    return (
        <section className={styles.awards}>
            <h1 className={styles.title}>Honors and Awards</h1>
            <h2 className={styles.subtitle}>Scholarships and Grants</h2>
            <hr></hr>
            <ul className={styles.list}>
                <li>
                    Graduate School of Natural Science and Technology Student Encouragement Research Grant, Okayama University (2024.4)
                </li>
                <li>
                    MEXT (SGU) Scholarship, Japanese Ministry of Education, Culture, Sports, Science and Technology Top Global University Project Scholarship (2023.4)
                </li>
                <li>
                    JASSO Scholarship, Monbukagakusho Honors Scholarship for Privately-Financed International Students (2022.10)
                </li>
                <li>
                    IUCHI Foundation Scholarship (2022.10)
                </li>

            </ul>
        </section>
    )
}

export default Awards;