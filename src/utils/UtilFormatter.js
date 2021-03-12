export default class UtilFormatter {
    static numberToMoney(value = 0) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }
} // class
