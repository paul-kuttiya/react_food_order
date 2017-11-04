const helper = {
  price(item) {
    return parseFloat(item, 10).toFixed(2);
  }
}

const { price } = helper 

export default helper;
export { price };