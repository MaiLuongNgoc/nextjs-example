import React from "react";
import style from "./index.module.scss";
import Link from "next/link";
import Layout from "../../layout";

const Deploy = () => {
    return (
        <Layout>
            <div className={style.container}>
                <h1> Deploy</h1>
                <p>
                    Instantly deploy your Next.js site to a public URL with
                    Vercel.
                </p>
                <Link href="/" passHref>
                    <button className={style.btnBack}>Back to home page</button>
                </Link>
            </div>
        </Layout>
    );
}

export default Deploy;
