import Image from "next/image";
import PageLayout from "../components/PageLayout.jsx";
import PageBrijida from "../components/Home.jsx";

export default function Home() {
    return (
        <PageLayout title="NewsApp - Home">
            {/* MAIN */}
            <div>
                <PageBrijida></PageBrijida>
            </div>
        </PageLayout>
    );
}
