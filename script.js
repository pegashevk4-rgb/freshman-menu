function calculateWater() {
  const weightInput = document.getElementById("weight");
  const result = document.getElementById("waterResult");

  if (!weightInput) return;

  const weight = Number(weightInput.value);

  if (!weight || weight <= 0) {
    result.innerHTML = "Введите корректный вес.";
    return;
  }

  const water = weight * 30;

  result.innerHTML =
    "Рекомендуемая норма воды: <strong>" +
    water +
    " мл</strong> в день.";
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("waterBtn");
  if (btn) {
    btn.addEventListener("click", calculateWater);
  }
});