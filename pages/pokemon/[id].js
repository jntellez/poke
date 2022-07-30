import Link from 'next/link';
import Image from 'next/image';

const Pokemon = ({ data }) => {

    return (
        <div>
            <h1>{data.name} numero {data.id}</h1>
            <Image src={data.sprites.front_default} width={500} height={500} />
            <Link href={'/'}>Volver al inicio</Link>
        </div>
    );
}

export const getStaticProps = async ({ params }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const data = await response.json();

    return {
        props: { data }
    }
}

export const getStaticPaths = () => {
    const paths = [
        { params: { id: '1' } },
        { params: { id: '2' } },
    ]
    return {
        paths,
        fallback: 'blocking',
    }
}

// export const getServerSideProps = async ({ params }) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
//     const data = await response.json();

//     return {
//         props: { data }
//     }
// }

export default Pokemon;