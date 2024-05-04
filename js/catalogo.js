//import { fetchAllPets } from "./modules/petsApi.js";
import { fetchAllPets } from "./modules/prodApi.js";

const createPetCard = (petObject) => {
  //let { name, breed, age, picture, specie, gender, key } = petObject;
  let { marca, procesador, pantalla, peso, pic , key } = petObject;
  let cardHtml = `
    <div class="col">
        <a href="../views/detalle.html?petKey=${key}">
        <div class="card pet-card p-0 overflow-hidden h-100">
        <div class="row g-0 h-100">
            <div class="col-md-4">
            <img
                src="${pic}"
                class="pet-card__picture"
                alt="..."
            />
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${marca}</h5>
                <ul class="list-group">
                <li class="list-group-item">Pantalla: ${pantalla}</li>
                <li class="list-group-item">Procesador: ${procesador}</li>
                <li class="list-group-item">Peso: ${peso}</li>
                 </ul>
            </div>
            </div>
        </div>
        </div>
        </a>
    </div>
  `;
  return cardHtml;
};

const printPets = (petsArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  /* la siguiente línea debe ser reemplazada por el ciclo while que borra todos los childs de un elemento */
  wrapper.innerHTML = "";

  petsArray.forEach((pet) => {
    let currentContent = wrapper.innerHTML;
    wrapper.innerHTML = currentContent + createPetCard(pet);
  });
};

const printAllPets = async () => {
  let petsArray = await fetchAllPets();
  printPets(petsArray, "pets-wrapper");
};

printAllPets();
