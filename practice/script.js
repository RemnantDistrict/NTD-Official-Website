const officers = [
    { id: "off1", name:"John Paul", role:"President" },
    { id: "off2", name:"Pauline", role:"Vice President" },
    { id: "off3", name:"Paul John", role:"Secretary" },
    { id: "off4", name:"Pau", role:"Tresurer" },
    { id: "off5", name:"Pau Laurence", role:"Auditor" },
];

const selectElement = document.getElementById("officerSelect");
const cardsContainer = document.getElementById("cardsContainer");

officers.forEach(officer => {
    const option = document.createElement("option");
    option.value = officer.id;
    option.textContent = `${officer.name} (${officer.role})`
    selectElement.appendChild(option);

    const card = document.createElement("div");
    card.id = officer.id;
    card.className = 'officer-card';
    card.innerHTML = `
        <h3>${officer.name}</h3>
        <p><strong>Position</strong>${officer.role}</p>
    `
    cardsContainer.appendChild(card);
});

selectElement.addEventListener("change", function() {
    const selectedId = this.value;

    const cards = document.querySelectorAll(".officer-card");

    cards.forEach(card => {
        if(card.id === selectedId) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        };
    });
});