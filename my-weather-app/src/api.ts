interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  // add other variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

const API_KEY = (import.meta as any).env.VITE_API_KEY;

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,alerts&appid=${API_KEY}`,
  );
  const data = await res.json();
  return data;
}
