const FormatPrice = (price, salePrecentage = 0, accuracy = 0.05) => {
    let priceAfterSale = price - (price * (0.01 * salePrecentage));
    let roundedPrice = (Math.round(priceAfterSale * (1/accuracy)) / (1/accuracy)).toFixed(2)
    return roundedPrice;
}

export default FormatPrice;