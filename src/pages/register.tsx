import Head from "next/head";
import LoginRegisterLayout from "@/components/organism/Layout/loginregisterlayout";
type Props = {};
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { FaFingerprint, FaUser } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import { useState } from "react";
import { useFormik } from "formik";
import { registerValidate } from "@/lib/validate";
const Register = (props: Props) => {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidate,
    onSubmit: onSubmit,
  });
  console.log(formik.errors);
  async function onSubmit(values) {
    console.log(values);
  }
  return (
    <LoginRegisterLayout>
      <Head>
        <title>Register</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ut?</p>
        </div>
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input type="text" placeholder="First Name" className={`${styles.input_text} ${formik.errors.firstname && formik.touched.firstname ? "border-rose-600" : ""}`} {...formik.getFieldProps("firstname")}></input>
            <input type="text" placeholder="Last name" className={`${styles.input_text} ${formik.errors.lastname && formik.touched.lastname ? "border-rose-600" : ""}`} {...formik.getFieldProps("lastname")}></input>
            <span className="icon flex items-center px-4">
              <FaUser size={25}></FaUser>
            </span>
          </div>
          <div className={styles.input_group}>
            <input type="text" placeholder="Username" className={`${styles.input_text} ${formik.errors.username && formik.touched.username ? "border-rose-600" : ""}`} {...formik.getFieldProps("username")}></input>
            <span className="icon flex items-center px-4">
              <FaUser size={25}></FaUser>
            </span>
          </div>
          <div className={styles.input_group}>
            <input type="email" placeholder="Email" className={`${styles.input_text} ${formik.errors.email && formik.touched.email ? "border-rose-600" : ""}`} {...formik.getFieldProps("email")}></input>
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25}></HiAtSymbol>
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show.password ? "text" : "password"}`}
              placeholder="Password"
              className={`${styles.input_text} ${formik.errors.password && formik.touched.password ? "border-rose-600" : ""}`}
              {...formik.getFieldProps("password")}
            ></input>
            <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, password: !show.password })}>
              <FaFingerprint size={25}></FaFingerprint>
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              placeholder="Confirm Password"
              className={`${styles.input_text} ${formik.errors.cpassword && formik.touched.cpassword ? "border-rose-600" : ""}`}
              {...formik.getFieldProps("cpassword")}
            ></input>
            <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
              <FaFingerprint size={25}></FaFingerprint>
            </span>
          </div>
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              Sign Up with Google <Image alt="Google Login" src={"/assets/google.svg"} width={25} height={25}></Image>
            </button>
          </div>
        </form>
        <p className="text-center text-gray-400">
          {`Have an accoun? `}
          <Link href={"/login"} className="text-blue-700">
            Sign In
          </Link>
        </p>
      </section>
    </LoginRegisterLayout>
  );
};

export default Register;
