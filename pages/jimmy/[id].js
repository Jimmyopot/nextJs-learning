export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();

    const paths = data.map(shoe => {
        return {
            params: { id: shoe.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props:{ shoe:data }
    }
}

function details({ shoe }) {
    return (
        <div>
            <h1>{ shoe.name }</h1>
            <p>{ shoe.email }</p>
            <p>{ shoe.website }</p>
            <p>{ shoe.address.city }</p>
        </div>
    )
}

export default details
