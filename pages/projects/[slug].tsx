import client from "@/utils/contentful";
import  { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticPaths() {
    const res = await client.getEntries({
        content_type: "vault",
    });

    const paths = res.items.map((item) => ({
        params: { slug: item.fields.slug },
    })); 

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const res = await client.getEntries({
        content_type: "vault",
        "fields.slug": params.slug,
    }); 
    return {
        props: {
            project: res.items[0],
        },
    }
}

export default function Home({ project }: { project: any }) {
    const { title , description } = project.fields;
    return (
        <>
         <div>documentToReactComponents content={description} </div>
        </>
    );
}