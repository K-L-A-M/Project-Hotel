export const formatPhoneNumber = (value:string) => {
    // Remove caracteres que não são dígitos
    const cleanedValue = value.replace(/\D/g, "");
  
    // Adiciona a formatação do telefone
    const phoneNumberArray = cleanedValue.split("");
    phoneNumberArray.splice(0, 0, "+"); // Adiciona o código do país
    phoneNumberArray.splice(3, 0, "("); // Adiciona o parêntese do DDD
    phoneNumberArray.splice(6, 0, ")"); // Adiciona o parêntese do DDD
    phoneNumberArray.splice(7, 0, " "); // Adiciona um espaço após o DDD
    phoneNumberArray.splice(12, 0, "-"); // Adiciona o hífen após o número
    return phoneNumberArray.join("").slice(0, 18); // Limita o comprimento para o formato desejado
  };