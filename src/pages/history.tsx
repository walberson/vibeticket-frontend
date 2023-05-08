import { Ticket } from "@/components/Ticket";
import { IoFilterOutline } from 'react-icons/io5'

export default function History() {
  return (
    <div className="grid grid-cols-1 gap-4 content-center w-2/4">
      {/* ---------Formulário--------- */}
      <form className=" w-full">
        <div className="flex justify-between w-full mt-5">
          <h1 className="text-text-color text-2xl font-bold leading-9">
            Histórico
          </h1>
          <button
          type="button"
          className="flex justify-center items-center w-24 h-10 ml-24 border-solid border-2 border-gray-200 rounded-md"
          >
            <IoFilterOutline />
            <h4 className="ml-2">Filtrar</h4>
            </button>
          <div />
        </div>
        <div className="mt-50">
          <div className="pb-12">
            <div className="mt-10 grid grid-cols-1">
              <div className="flex w-full mb-5">
                <div className="sm:col-span-4 mr-5">
                  <label
                    htmlFor="username"
                    className="block text-base font-medium leading-6 text-gray-900"
                  >
                    Código
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      placeholder="#XXXXXX"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-60 rounded-md border-0 py-1.5 text-gray-900 font-normal text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:pl-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-base font-medium leading-6 text-gray-900"
                  >
                    Responsável
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-60 h-9 mr-5 rounded-md py-1.5 border-0 text-gray-900 font-normal text-base shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Hernanda</option>
                      <option>Renan</option>
                      <option>Walberson</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-base font-medium leading-6 text-gray-900"
                  >
                    Status
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-60 h-9 rounded-md border-0 py-1.5 text-gray-900 font-normal text-base shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Aberto</option>
                      <option>Fechado</option>
                      <option>Aguardando atendimento</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex w-full mb-5">
                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-base font-medium leading-6 text-gray-900"
                  >
                    Assunto
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-60 h-9 mr-5 rounded-md border-0 py-1.5 text-gray-900 font-normal text-base shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Férias</option>
                      <option>Atestado</option>
                      <option>Plano Odontologico</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-base font-medium leading-6 text-gray-900"
                  >
                    Abertura
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      // placeholder="#XXXXXX"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-60 h-9 mr-5 rounded-md border-0 py-1.5 text-gray-900 font-normal text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:pl-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-base font-medium leading-6 text-gray-900"
                  >
                    Conclusão
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      // placeholder="#XXXXXX"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-60 h-9 rounded-md border-0 py-1.5 text-gray-900 font-normal text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:pl-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-base font-medium leading-6 text-gray-900"
                  >
                    Etiqueta
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-60 h-9 mr-5 rounded-md border-0 py-1.5 text-gray-900 font-normal text-base shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Urgente</option>
                      <option>Urgente</option>
                      <option>Urgente</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-base font-medium leading-6 text-gray-900"
                  >
                    Solicitante
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-60 h-9 rounded-md border-0 py-1.5 text-gray-900 font-normal text-base leading-6 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Hernanda</option>
                      <option>Renan</option>
                      <option>Walberson</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* ----------------------------------------------------------------------- */}

      <div className="w-full">
        <Ticket />
      </div>
    </div>
  );
}
