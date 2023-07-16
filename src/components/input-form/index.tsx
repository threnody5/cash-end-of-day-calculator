import { useState, useEffect } from 'react';

const InputForm = () => {
  const [nickleTotal, setNickelTotal] = useState(0);
  const [dimeTotal, setDimeTotal] = useState(0);
  const [quarterTotal, setQuarterTotal] = useState(0);
  const [dollarTotal, setDollarTotal] = useState(0);
  const [toonieTotal, setToonieTotal] = useState(0);
  const [fiveTotal, setFiveTotal] = useState(0);
  const [tenTotal, setTenTotal] = useState(0);
  const [twentyTotal, setTwentyTotal] = useState(0);
  const [fiftyTotal, setFiftyTotal] = useState(0);
  const [hundredTotal, setHundredTotal] = useState(0);
  const [cashTotal, setCashTotal] = useState(0);
  const [cashForDepositTotal, setCashForDepositTotal] = useState(0);
  const [chequeTotal, setChequeTotal] = useState(0);
  const [creditCardTotal, setCreditCardTotal] = useState(0);
  const [depositTotal, setDepositTotal] = useState(0);
  const [invoicesTotal, setInvoicesTotal] = useState(0);
  const [overOrShortTotal, setOverOrShortTotal] = useState(0);

  const currencyValues = {
    nickel: 0.05,
    dime: 0.1,
    quarter: 0.25,
    dollar: 1.0,
    toonie: 2.0,
    five: 5.0,
    ten: 10.0,
    twenty: 20.0,
    fifty: 50.0,
    hundred: 100.0,
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

  useEffect((): void => {
    setCashTotal(
      nickleTotal +
        dimeTotal +
        quarterTotal +
        dollarTotal +
        toonieTotal +
        fiveTotal +
        tenTotal +
        twentyTotal +
        fiftyTotal +
        hundredTotal
    );
    setCashForDepositTotal(cashTotal - 200);
    setDepositTotal(cashForDepositTotal + chequeTotal + creditCardTotal);
    setOverOrShortTotal(invoicesTotal - depositTotal);
  }, [
    nickleTotal,
    dimeTotal,
    quarterTotal,
    dollarTotal,
    toonieTotal,
    fiveTotal,
    tenTotal,
    twentyTotal,
    fiftyTotal,
    hundredTotal,
    cashTotal,
    cashForDepositTotal,
    chequeTotal,
    creditCardTotal,
    depositTotal,
    invoicesTotal,
  ]);

  const calculateTotal = (value: number, amount: number): number => {
    return value * amount;
  };
  return (
    <>
      <main>
        <div>
          <input
            type='text'
            placeholder='name'
          />
        </div>
        <div>
          $0.05 x{' '}
          <input
            type='number'
            name='nickel'
            onChange={(e) => {
              const updatedValue = inputChangeHandler(currencyValues.nickel, e);
              setNickelTotal(updatedValue);
            }}
          />{' '}
          = ${nickleTotal.toFixed(2)}
        </div>
        <div>
          $0.10 x{' '}
          <input
            type='number'
            name='dime'
            defaultValue={0}
            onChange={(e) => {
              setDimeTotal(calculateTotal(0.1, e.target.valueAsNumber));
            }}
          />{' '}
          = ${dimeTotal.toFixed(2)}
        </div>
        <div>
          $0.25 x{' '}
          <input
            type='number'
            name='quarter'
            onChange={(e) => {
              setQuarterTotal(calculateTotal(0.25, e.target.valueAsNumber));
            }}
          />{' '}
          = ${quarterTotal.toFixed(2)}
        </div>
        <div>
          $1.00 x{' '}
          <input
            type='number'
            name='dollar'
            onChange={(e) => {
              setDollarTotal(calculateTotal(1, e.target.valueAsNumber));
            }}
          />{' '}
          = ${dollarTotal.toFixed(2)}
        </div>
        <div>
          $2.00 x{' '}
          <input
            type='number'
            name='toonie'
            onChange={(e) => {
              setToonieTotal(calculateTotal(2, e.target.valueAsNumber));
            }}
          />{' '}
          = ${toonieTotal.toFixed(2)}
        </div>
        <div>
          $5.00 x{' '}
          <input
            type='number'
            name='five-bill'
            onChange={(e) => {
              setFiveTotal(calculateTotal(5, e.target.valueAsNumber));
            }}
          />{' '}
          = ${fiveTotal.toFixed(2)}
        </div>
        <div>
          $10.00 x{' '}
          <input
            type='number'
            name='ten-bill'
            onChange={(e) => {
              setTenTotal(calculateTotal(10, e.target.valueAsNumber));
            }}
          />{' '}
          = ${tenTotal.toFixed(2)}
        </div>
        <div>
          $20.00 x{' '}
          <input
            type='number'
            name='twenty-bill'
            onChange={(e) => {
              setTwentyTotal(calculateTotal(20, e.target.valueAsNumber));
            }}
          />{' '}
          = ${twentyTotal.toFixed(2)}
        </div>
        <div>
          $50.00 x{' '}
          <input
            type='number'
            name='fifty-bill'
            onChange={(e) => {
              setFiftyTotal(calculateTotal(50, e.target.valueAsNumber));
            }}
          />{' '}
          = ${fiftyTotal.toFixed(2)}
        </div>
        <div>
          $100.00 x{' '}
          <input
            type='number'
            name='hundred-bill'
            onChange={(e) => {
              setHundredTotal(calculateTotal(100, e.target.valueAsNumber));
            }}
          />{' '}
          = ${hundredTotal.toFixed(2)}
        </div>
        <div>
          <strong>Total Cash and Coin: </strong>= ${cashTotal.toFixed(2)}
        </div>
        <div>
          <strong>Total Cash for Deposit:</strong>= $
          {cashForDepositTotal.toFixed(2)}
        </div>
        <div>
          Total Cheques: ${' '}
          <input
            type='number'
            name='cheques'
            onChange={(e) => {
              setChequeTotal(e.target.valueAsNumber);
            }}
          />
        </div>
        <div>
          Credit Card Total: ${' '}
          <input
            type='number'
            name='credit-card'
            onChange={(e) => {
              setCreditCardTotal(e.target.valueAsNumber);
            }}
          />
        </div>
        <div>
          <strong>Total Deposit: </strong>= ${depositTotal.toFixed(2)}
        </div>
        <div>
          Total Invoices: ={' '}
          <input
            type='number'
            name='invoices'
            onChange={(e) => {
              setInvoicesTotal(e.target.valueAsNumber);
            }}
          />
        </div>
        <div>
          <strong>Over or Short: </strong>= ${overOrShortTotal.toFixed(2)}
        </div>
      </main>
    </>
  );
};

export default InputForm;
