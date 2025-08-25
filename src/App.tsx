import "./styles/global.css";
import { Plus } from "phosphor-react";

import logoImage from "./assets/logo.svg";

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
          <img src={logoImage} alt="habits" />

          <button
            className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
            type="button"
          >
            <Plus size={20} className="text-violet-400" />
            Novo hábito
          </button>
        </div>
      </div>
    </div>
  );
}
