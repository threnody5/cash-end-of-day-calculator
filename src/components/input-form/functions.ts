const storeTotalInLocalStorage = (localStorageKey: string, total: number) => {
  const totalToFixed = total.toFixed(2);
  const totalToString = totalToFixed.toString();
  localStorage.setItem(localStorageKey, totalToString);
};

const isNaNChecker = (value: number): number => {
  if (isNaN(value)) {
    return 0;
  }
  return value;
};

const inputChangeHandler = (
  currencyValue: number,
  e: React.ChangeEvent<HTMLInputElement>
): number => {
  const newValue = calculateTotal(currencyValue, e.target.valueAsNumber);
  return isNaNChecker(newValue);
};

const calculateTotal = (value: number, amount: number): number => {
  return value * amount;
};

export {
  storeTotalInLocalStorage,
  isNaNChecker,
  inputChangeHandler,
  calculateTotal,
};
