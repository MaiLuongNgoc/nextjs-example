import React from 'react'; //bắt buộc
import style from './index.module.scss'; //mỗi cái index.js lại có một cái index.module.scss kèm theo
import Link from 'next/link'; //thằng next sẽ hỗ trợ 'Link' nên cần khai báo trước khi dùng
import Layout from '../../layout'; //khai báo Layout đã được defined 

const Learn = () => {
    return (
        <Layout>
            <div className={style.container}>
                <h1>
                    Learn
                </h1>
                <p>
                    Learn about Next.js in an interactive course with quizzes!
                </p>
                <Link href="/" passHref><button className={style.btnBack}>Back to home page</button></Link>
            </div>

        </Layout>
    );
}


export default Learn;