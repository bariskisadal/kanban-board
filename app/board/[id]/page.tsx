"use client";
import { useParams } from "next/navigation";
import Board from "@/components/Board";
import Layout from "@/components/Layout";

export default function BoardPage() {
  const params = useParams();
  const { id } = params;

  if (!id) return <div>Loading...</div>;

  return (
    <Layout>
      <div>
        <Board boardId={id} />
      </div>
    </Layout>
  );
}
