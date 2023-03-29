import {registers} from "./service.js";

const form = document.querySelector('#form');

form.addEventListener('submit', (event)=> {

    event.preventDefault();

    let newRegister = {
        name:form.name.value,
        lastName:form.lastName.value,
        cpf:form.cpf.value,
        birthDate:form.birthDate.value,
        city:form.city.value,
        state:form.state.value,
        country:form.country.value,
        email:form.email.value,
        about:form.about.value
    }
    console.log(newRegister);
    registers.add(newRegister).then((docRef) => {
        form.reset();
        alert(`Cadastro de ${newRegister.name} realizado com sucesso!`);
    })
    .catch ((error) => {
        alert(`O cadastro de ${newRegister.name} não pode ser concluido!`);
        console.error("Error adding document: ", error);
    });
  
})