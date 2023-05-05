import { Header } from "@/components/Header";
import { Ticket } from "@/components/Ticket";

export default function Tickets() {
  return (
    <div className="flex flex-col flex-1 min-h-screen ">
     <Header/>
      <div className="flex flex-col flex-1 px-4 bg-slate-50">
        <h1 className="text-4xl font-bold text-black">Ticket</h1>
        <Ticket/>
      </div>
    </div>
  );
}
