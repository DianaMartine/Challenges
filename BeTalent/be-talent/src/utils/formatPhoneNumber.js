function formatPhoneNumber(phoneNumber) {
    const numbers = phoneNumber.replace(/\D/g, '');

    if (numbers.length < 11) {
        return 'Número inválido';
    }

    const countryCode = numbers.slice(0, 2);
    const areaCode = numbers.slice(2, 4);
    const part1 = numbers.slice(4, 5);
    const part2 = numbers.slice(5, 9);
    const part3 = numbers.slice(9);

    return `+${countryCode} (${areaCode}) ${part1} ${part2}-${part3}`;
}

export default formatPhoneNumber;