import Layout from "@/components/organism/Layout";
import { useSession } from "next-auth/react";
import Image from "next/image";
export default function Home() {
  const { data: session } = useSession();
  if (!session) return;
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session!.user!.name}</b>
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <div className="w-6 h-6 relative">
            <Image src={session!.user!.image!} alt="profile" fill style={{ objectFit: "cover" }}></Image>
          </div>
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
