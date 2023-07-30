
export const checkError = (name, value) => {


    switch(name){

        case "email":
        case "e-mail":
        case "correo":

            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
                return "El email es incorrecto";
            }

                return "";

        case "password":
        case "contraseña":

            if(value.length < 8){
                return "Mínimo 8 carácteres";

            }
                return "";


        case "name":
        case "nombre":
        case "usuario":
            if (value.length < 2){
                return "Mínimo 2 letras"
            }
                return "";

        break;

        default:
            console.log("Unknown format");
    }


}