import React from 'react';
import style from './index.module.scss';
import Link from 'next/link';
import Layout from '../../layout';

const Documentation = () => {
    return (
        <Layout>
            <div className={style.container}>
                <h1>
                    Documentation Page
                </h1>
                <Link href="/" passHref><button className={style.btnBack}>Back to home page</button></Link>
            </div>
        </Layout>
    );
}

export default Documentation;