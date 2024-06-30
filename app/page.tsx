import CardItem from "@/components/CardItem";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div>
        <CardItem category={""} />
      </div>
    </Layout>
  );
}

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { v4 as uuidv4 } from "uuid";

// const Home = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const newBoardId = uuidv4();
//     router.push(`/${newBoardId}`);
//   }, [router]);

//   return null;
// };

// export default Home;
