import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form>
      <label htmlFor="title">Qual seu compromentimento?</label>
      <input
        type="text"
        id="title"
        placeholder="ex.: dormir bem, etc..."
        autoFocus
      />

      <label htmlFor="">Qual a recorrência?</label>

      <button type="submit">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
