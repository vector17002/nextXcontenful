import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

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
  console.log(vaults);
  return (
    <>
     Hello
    </>
  )
}
