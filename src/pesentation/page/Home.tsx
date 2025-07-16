import Card from "../common/Card";
import { useRickyData } from "../../domain/hooks/useRickyData";
const HomePage = () => {
  const STATUS = {
    ALIVE: "Alive",
    DEAD: "Dead",
  } as const;

  const { isLoading, dataRicky } = useRickyData();

  if (isLoading) {
    return (
      <div className="bg-gray-100 min-h-screen py-20">Cargando Datos...</div>
    );
  }

  return (
    <div className="bg-gray-100 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="pb-20 flex justify-between items-center">
          <img src="/Rick_and_Morty.svg" alt="logo" className="h-[80px]" />
          <div>
            <a
              href="https://github.com/Alexiis94/ricky_morty"
              target="_blank"
              className="bg-green-400  px-4 py-2 rounded-md shadow border border-green-500 hover:bg-green-400/70 duration-300"
            >
              Link del Repositorio
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dataRicky.map((item) => (
            <Card
              key={item.id}
              className="grid grid-cols-3 border border-gray-300 rounded-md bg-white shadow-lg"
            >
              <div className="h-full">
                <img src={item.image} alt={item.name} className="h-full " />
              </div>
              <div className="col-span-2 px-4 py-1 flex flex-col ">
                <div className="">
                  <h4 className="bold text-2xl">{item.name}</h4>
                  <div className="flex gap-2 items-center text-sm">
                    <div
                      className={`   ${
                        item.status === STATUS.ALIVE
                          ? "bg-green-400"
                          : item.status === STATUS.ALIVE
                          ? "bg-red-500"
                          : "bg-gray-500"
                      } size-3 rounded-full`}
                    ></div>
                    {item.status} - <span>{item.species}</span>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="text-gray-500">Localtion:</p>
                  <p>{item.location.name}</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-500">First seen in:</p>
                  <p>{item.episode}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
