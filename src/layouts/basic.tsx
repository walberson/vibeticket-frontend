import History from "@/pages/history";
import { Header } from "../components/Header";

export default function BasicLayout() {
    return (
        <div className="bg-background">

            <Header/>
            <main className="flex justify-center w-full">
                <History />
            </main>
        </div>
    )
}