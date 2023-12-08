import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <Link prefetch={false} href={{
                pathnamea: '/[username]',
                query: { username: 'Ergys' }
            }}>
                 Ergys's Profile     

            </Link>
        </div>
    );
    
}
