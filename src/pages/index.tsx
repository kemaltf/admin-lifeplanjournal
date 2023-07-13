import AdminLayout from "@/components/organism/Layout/adminlayout";
import Image from "next/image";
import Link from "next/link";
import { getSession, useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return <>{session ? Admin({ session }) : Guest()}</>;
}
//Guest
function Guest() {
  return (
    <main className="contaienr mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link href={"/login"} className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-100">
          Sign In
        </Link>
      </div>
    </main>
  );
}

//athorized
function Admin({ session }) {
  return (
    <AdminLayout>
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
    </AdminLayout>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
