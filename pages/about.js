import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <header>
          <nav className="flex justify-between items-center bg-slate-200 h-12 px-6 shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">NextMall</a>
            </Link>
            <div>
              <Link href="/about">
                <a className="p-2 font-bold">About</a>
              </Link>
              <Link href="/cart">
                <a className="p-2 font-bold">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2 font-bold">Login</a>
              </Link>
            </div>
          </nav>
        </header>

        <div className={styles.me}>
          <br></br>
          <br></br>
          <div>
            <img
              className="p-5"
              src="/images/룰루랄라.jpg"
              alt="왜 안 뜨지"
              width="400px"
              height="400px"
            ></img>
            <br></br>
            <div className="font-bold ">
              <div className="p-5">
                <div className="mb-3">
                  <div>Name : chayoonji</div>
                </div>
                <div className="mb-2">
                  <div>2022-10-19 중간과제제출물</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="container m-auto mt-4 px-4"> {children} </main>
      </div>
    </>
  );
}
