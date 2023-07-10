import LoginRegisterLayout from "@/components/organism/Layout/loginregisterlayout";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
type Props = {};

const Login = (props: Props) => {
  return (
    <LoginRegisterLayout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ut?</p>
        </div>
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input type="email" name="email" placeholder="email" className={styles.input_text}></input>
          </div>
          <div className={styles.input_group}>
            <input type="password" name="password" placeholder="password" className={styles.input_text}></input>
          </div>
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              Sign In with Google <Image alt="Google Login" src={"/assets/google.svg"} width={25} height={25}></Image>
            </button>
          </div>
        </form>
        <p className="text-center text-gray-400">
          {`don't have an account yet? `}
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </LoginRegisterLayout>
  );
};

export default Login;
