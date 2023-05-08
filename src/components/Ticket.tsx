export function Ticket() {
  return (
    <div className="flex flex-col w-full px-8 py-4 bg-white border-l-8 rounded-md border-l-green-600">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-2xl">#543465 - Como eu tiro minhas férias?</h1>
          <p className="max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta saepe
            molestias necessitatibus alias id voluptatem sequi soluta voluptatum
            assumenda ut suscipit, aperiam cupiditate aspernatur incidunt dolor
            consequuntur ipsum. Consequuntur, illum!
          </p>
        </div>

        <h1>SIMBOL</h1>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row space-x-4">
          <p>20/01/22 às 14h</p>
          <p>Recursos Humanos</p>
        </div>
        <p>Mariana Moura</p>
      </div>
    </div>
  );
}
