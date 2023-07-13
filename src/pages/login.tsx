import LoginRegisterLayout from "@/components/organism/Layout/loginregisterlayout";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { FaFingerprint } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import { loginValidate } from "@/lib/validate";
type Props = {};

const Login = (props: Props) => {
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit: onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }
  // Google Handler Function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }
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
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input type="email" placeholder="email" className={`${styles.input_text} ${formik.errors.email && formik.touched.email ? "border-rose-600" : ""}`} {...formik.getFieldProps("email")}></input>
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25}></HiAtSymbol>
            </span>
          </div>
          <div className={styles.input_group}>
            <input type={`${show ? "text" : "password"}`} placeholder="password" className={`${styles.input_text} ${formik.errors.password && formik.touched.password ? "border-rose-600" : ""}`} {...formik.getFieldProps("password")}></input>
            <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
              <FaFingerprint size={25}></FaFingerprint>
            </span>
          </div>
          {/* {formik.errors.password && formik.touched.password ? <span className="text-rose-500">{formik.errors.password}</span> : ""} */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button type="button" className={styles.button_custom} onClick={handleGoogleSignin}>
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
