export default function itemsReducer(items, action) {
  switch (action.type) {
    case "incremented": {
      const itemToIncrement = action.item;
      const alreadyInTheCart = items.find((x) => x.id === itemToIncrement.id);
      if (alreadyInTheCart) {
        return items.map((x) =>
          x.id === itemToIncrement.id
            ? { ...alreadyInTheCart, qty: alreadyInTheCart.qty + 1 }
            : x
        );
      } else {
        return [...items, { ...itemToIncrement, qty: 1 }];
      }
    }
    case "decremented": {
      const itemToDecrement = action.item;
      const alreadyInTheCart = items.find((x) => x.id === itemToDecrement.id);
      if (alreadyInTheCart.qty === 1) {
        return items.filter((x) => x.id !== itemToDecrement.id);
      } else {
        return items.map((x) =>
          x.id === itemToDecrement.id
            ? { ...alreadyInTheCart, qty: alreadyInTheCart.qty - 1 }
            : x
        );
      }
    }
    case "cleared": {
      const itemToClear = action.item;
      return items.filter((x) => x.id !== itemToClear.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
