export function Header() {
  return (
    <div className="px-4 py-4 bg-background border-b-2 border-border">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-black">VibeTicket</h1>
        <button className="px-4 bg-white py-2 text-[#835AFD] text-sm border-[0.5px] border-[#835AFD] rounded-lg">
          Abrir Ticket
        </button>
      </div>
    </div>
  );
}

