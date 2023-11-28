export const formatCPF = (value: string): string => {
    // Remove characters que não são dígitos
    const cleanedValue = value.replace(/\D/g, "");
  
    // Adiciona a formatação do CPF
    const cpfArray = cleanedValue.split("");
    cpfArray.splice(3, 0, ".");
    cpfArray.splice(7, 0, ".");
    cpfArray.splice(11, 0, "-");
  
    return cpfArray.join("").slice(0, 14); // Limita o comprimento para o tamanho máximo do CPF
  };