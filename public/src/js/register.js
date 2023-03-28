const form = document.querySelector('#form');

form.addEventListener('submit', (event)=> {

    event.preventDefault();

    let newInform = {
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
    console.log(newInform);
})