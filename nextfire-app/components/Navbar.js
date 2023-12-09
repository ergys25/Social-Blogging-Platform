import Link from 'next/link';

// Top navbar
export default function Navbar() {
    const user = null;
    const username = null;

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>

                {/* user is signed-in and has username */}
                {username && (
                    <>
                        <li className="push-left">
                            <Link href="/admin">
                                <button className="btn-blue">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img src={user?.photoURL} />
                            </Link>
                        </li>
                    </>
                )}

                {/* user is not signed OR has not created username */}
                {!username && (
                    <li>
                        <Link href="/enter">
                            <button className="btn-blue">Log in</button>
                        </Link>
                    </li>
                )}
            </ul>
            <style jsx>{`
                nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 49px;
                    background-color: #fff;
                    border-bottom: 1px solid #eaeaea;
                    padding: 0px 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }



                ul {
                    display: flex;
                    list-style: none;
                    padding: 0;
                }

                li {
                    margin-right: 20px;
                }
                
                li:first-child {
                    margin-left: auto;
                }

                `}</style>
        </nav>
    );
}
