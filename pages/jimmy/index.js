import styles from '../../styles/Jimmy.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { shoes: data }
    }
}


function jimmy_index({ shoes }) {
    return (
        <div>
            <h1>All Names</h1>
            {shoes.map(shoe => (
                <div key={shoe.id}>
                    <a className={styles.single}>
                        <h3>{ shoe.name }</h3>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default jimmy_index;
