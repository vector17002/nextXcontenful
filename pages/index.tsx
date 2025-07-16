import { Project } from "@/components/Project";
import client from "@/utils/contentful";


export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "vault",
  });

  return {
    props:{
      vaults: res.items,
    }
  }
}
export default function Home({ vaults } : { vaults: any[] }) {
  return (
    <>
     {vaults.map((project, index) => (
       <Project project={project} key={index}/>
     ))}
    </>
  )
}
