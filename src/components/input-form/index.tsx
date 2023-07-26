import { useState, useEffect } from 'react';
import * as functions from './functions';
import './styles.css';

const InputForm = () => {
  const [nickelTotal, setNickelTotal] = useState(0);
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

  const nickelValue = nickelTotal / currencyValues.nickel;
  const dimeValue = dimeTotal / currencyValues.dime;
  const quarterValue = quarterTotal / currencyValues.quarter;
  const dollarValue = dollarTotal / currencyValues.dollar;
  const toonieValue = toonieTotal / currencyValues.toonie;
  const fiveValue = fiveTotal / currencyValues.five;
  const tenValue = tenTotal / currencyValues.ten;
  const twentyValue = twentyTotal / currencyValues.twenty;
  const fiftyValue = fiftyTotal / currencyValues.fifty;
  const hundredValue = hundredTotal / currencyValues.hundred;

  //TODO: Figure out how to remove items from local storage if the browser is closed, not if the page is reset
  // onbeforeunload = (): string => {
  //   localStorage.removeItem('localNickel');
  //   return '';
  // };

  useEffect((): void => {
    setCashTotal(
      nickelTotal +
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
    nickelTotal,
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

  useEffect((): void => {
    const getNickelTotal = localStorage.getItem('localNickel');
    const getDimeTotal = localStorage.getItem('localDime');
    const getQuarterTotal = localStorage.getItem('localQuarter');
    // const getDollarTotal = localStorage.getItem('localDollar');
    // const getToonieTotal = localStorage.getItem('localToonie');
    // const getFiveTotal = localStorage.getItem('localFive');
    // const getTenTotal = localStorage.getItem('localTen');
    // const getTwentyTotal = localStorage.getItem('localTwenty');
    // const getFiftyTotal = localStorage.getItem('localFifty');
    // const getHundredTotal = localStorage.getItem('localHundred');
    if (getNickelTotal) {
      setNickelTotal(parseFloat(getNickelTotal));
    }
    if (getDimeTotal) {
      setDimeTotal(parseFloat(getDimeTotal));
    }
    if (getQuarterTotal) {
      setQuarterTotal(parseFloat(getQuarterTotal));
    }
    //TODO: Finish setting totals if not null
  }, []);

  return (
    <main className='input-form'>
      <input
        type='text'
        placeholder='name'
        className='name-input'
      />
      <table>
        <tbody>
          <tr>
            <td>$0.05</td>
            <td>X</td>
            <td>
              <input
                type='number'
                name='nickel'
                onChange={(e) => {
                  const updatedValue = functions.inputChangeHandler(
                    currencyValues.nickel,
                    e
                  );
                  setNickelTotal(updatedValue);
                  functions.storeTotalInLocalStorage(
                    'localNickel',
                    updatedValue
                  );
                }}
                value={nickelValue}
              />
            </td>
            <td>= ${nickelTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>$0.10</td>
            <td>X</td>

            <td>
              <input
                type='number'
                name='dime'
                onChange={(e) => {
                  const updatedValue = functions.inputChangeHandler(
                    currencyValues.dime,
                    e
                  );
                  setDimeTotal(updatedValue);
                  functions.storeTotalInLocalStorage('localDime', updatedValue);
                }}
                value={dimeValue}
              />
            </td>
            <td>= ${dimeTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>$0.25</td>
            <td>X</td>

            <td>
              <input
                type='number'
                name='quarter'
                onChange={(e) => {
                  const updatedValue = functions.inputChangeHandler(
                    currencyValues.quarter,
                    e
                  );
                  setQuarterTotal(updatedValue);
                  functions.storeTotalInLocalStorage(
                    'localQuarter',
                    updatedValue
                  );
                }}
                value={quarterValue}
              />
            </td>
            <td>= ${quarterTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>$1.00</td>
            <td>X</td>
            <td>
              <input
                type='number'
                name='dollar'
                onChange={(e) => {
                  const updatedValue = functions.inputChangeHandler(
                    currencyValues.dollar,
                    e
                  );
                  setDollarTotal(updatedValue);
                }}
                value={dollarValue}
              />
            </td>
            <td>= ${dollarTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>$2.00</td>
            <td>X</td>
            <td>
              <input
                type='number'
                name='toonie'
                onChange={(e) => {
                  const updatedValue = functions.inputChangeHandler(
                    currencyValues.toonie,
                    e
                  );
                  setToonieTotal(updatedValue);
                }}
                value={toonieValue}
              />
            </td>
            <td>= ${toonieTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>$5.00</td>
            <td>X</td>
            <td>
              <input
                type='number'
                name='five-bill'
                onChange={(e) => {
                  const updatedValue = functions.inputChangeHandler(
                    currencyValues.five,
                    e
                  );
                  setFiveTotal(updatedValue);
                }}
                value={fiveValue}
              />
            </td>
            <td>= ${fiveTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>$10.00</td>
            <td>X</td>
            <td>
              <input
                type='number'
                name='ten-bill'
                onChange={(e) => {
                  const updatedValue = functions.inputChangeHandler(
                    currencyValues.ten,
                    e
                  );
                  setTenTotal(updatedValue);
                }}
                value={tenValue}
              />
            </td>
            <td>= ${tenTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>$20.00</td>
            <td>X</td>
            <td>
              <input
                type='number'
                name='twenty-bill'
                onChange={(e) => {
                  const updatedValue = functions.inputChangeHandler(
                    currencyValues.twenty,
                    e
                  );
                  setTwentyTotal(updatedValue);
                }}
                value={twentyValue}
              />
            </td>
            <td>= ${twentyTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>$50.00</td>
            <td>X</td>
            <td>
              <input
                type='number'
                name='fifty-bill'
                onChange={(e) => {
                  const updatedValue = functions.inputChangeHandler(
                    currencyValues.fifty,
                    e
                  );
                  setFiftyTotal(updatedValue);
                }}
                value={fiftyValue}
              />
            </td>
            <td>= ${fiftyTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>$100.00</td>
            <td>X</td>
            <td>
              <input
                type='number'
                name='hundred-bill'
                onChange={(e) => {
                  const updatedValue = functions.inputChangeHandler(
                    currencyValues.hundred,
                    e
                  );
                  setHundredTotal(updatedValue);
                }}
                value={hundredValue}
              />
            </td>
            <td>= ${hundredTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>
              <strong>Total Cash and Coin</strong>
            </td>
            <td>
              <strong>:</strong>
            </td>
            <td></td>
            <td>= ${cashTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>
              <strong>Total Cash for Deposit</strong>
            </td>
            <td>
              <strong>:</strong>
            </td>
            <td className='blank-area'></td>
            <td>= ${cashForDepositTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total Cheques</td>
            <td>$</td>
            <td>
              <input
                type='number'
                name='cheques'
                onChange={(e) => {
                  const updatedValue = functions.isNaNChecker(
                    e.target.valueAsNumber
                  );
                  setChequeTotal(updatedValue);
                }}
              />
            </td>

            <td> </td>
          </tr>
          <tr>
            <td>Credit Card Total</td>
            <td>$</td>
            <td>
              <input
                type='number'
                name='credit-card'
                onChange={(e) => {
                  const updatedValue = functions.isNaNChecker(
                    e.target.valueAsNumber
                  );
                  setCreditCardTotal(updatedValue);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Total Deposit</strong>
            </td>
            <td>
              <strong>:</strong>
            </td>
            <td> </td>
            <td>= ${depositTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total Invoices</td>
            <td>=</td>
            <td>
              <input
                type='number'
                name='invoices'
                onChange={(e) => {
                  const updatedValue = functions.isNaNChecker(
                    e.target.valueAsNumber
                  );
                  setInvoicesTotal(updatedValue);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Over or Short</strong>
            </td>
            <td>
              <strong>:</strong>
            </td>
            <td></td>
            <td>= ${overOrShortTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className='over-or-short-reason-title'>Over or Short Reason:</div>
      <div className='over-or-short-reason-textarea'>
        <textarea
          rows={10}
          cols={48}
        />
      </div>
    </main>
  );
};

export default InputForm;
