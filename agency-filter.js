"use strict";
(() => {
  const select = document.getElementById("agency-filter");
  const count = document.getElementById("agency-count");
  const records = Array.from(document.querySelectorAll(".records article"));
  const agencies = records.map(record => record.querySelector("dd").textContent.trim());
  Array.from(new Set(agencies)).sort().forEach(agency => {
    const option = document.createElement("option");
    option.value = agency;
    option.textContent = agency;
    select.appendChild(option);
  });
  function update() {
    let visible = 0;
    records.forEach((record, index) => {
      record.hidden = select.value !== "" && agencies[index] !== select.value;
      if (!record.hidden) visible += 1;
    });
    count.textContent = `${visible} of ${records.length} contracts shown`;
  }
  select.addEventListener("change", update);
  update();
  document.getElementById("agency-controls").hidden = false;
})();
