import Search from "./Search";
import Head from "./head";

export default function RootLayout({
    children,
} : {
    children: React.ReactNode;
}) {
    return (
        <>
            <Head></Head>
            <main className="flex space-x-4 divide-x-2 p-5">
                <div>
                    <h1>Search</h1>
                </div>
                <div className="flex-1 pl-5">
                    <Search></Search>
                    <div>{children}</div>
                </div>
            </main>
        </>
       
    );
}