const overrideDefault = () => {
    Number.prototype.toMoney = function () {
        return this.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', maximumFractionDigits: 2})
    }
}

export default overrideDefault;