import React, { useCallback, useEffect, useState } from 'react';
import { AppLayout } from '../../layouts';
import { useDispatch, useSelector } from 'react-redux';
import { calculateAction } from '../../store/calculate/actions';
import './calculate.scss';

const Calculate = () => {
  const [numbers, setNumbers] = useState<string>('0');
  const dispatch = useDispatch();
  const calculate = useSelector((state: any) => state.calculate);

  const clearResult = useCallback(() => {
    setNumbers('0');
  }, []);

  const insertNumber = useCallback(
    (event: any) => {
      const number: string = event.target.innerHTML;

      if (number === '0' && numbers === '0') {
        return;
      }

      if (number !== '0' && numbers === '0') {
        return setNumbers(number);
      }

      setNumbers((prevState: string) => prevState + number);
    },
    [numbers]
  );

  const insertOperator = useCallback(
    (event: any) => {
      const value: string = event.target.innerHTML;
      const lastChar: string = numbers.slice(-1);

      if (isOperator(value) && isOperator(lastChar)) {
        return setNumbers((prevState: string) => prevState.replace(lastChar, value));
      }

      if (numbers === '0') {
        return setNumbers(value);
      }

      setNumbers((prevState: string) => prevState + value);
    },
    [numbers]
  );

  const isOperator = useCallback((value: string) => {
    return value === '+' || value === '-' || value === '*' || value === '/';
  }, []);

  const submit = useCallback(() => {
    dispatch(calculateAction(numbers));
  }, [numbers]);

  useEffect(() => {
    if (calculate?.response?.result) {
      setNumbers(calculate?.response?.result);
    }
  }, [calculate]);

  return (
    <AppLayout>
      <div className="app_calculate app_page">
        <div className="app_page__title">
          <h1>Calculate</h1>
        </div>
        <div className="calculator">
          <input type="text" className="calculator__result" value={numbers} readOnly />
          <hr />

          <div className="calculator__buttons">
            <button className="btn btn--red" onClick={clearResult}>
              C
            </button>
            <button className="btn btn--operator" onClick={insertOperator}>
              &#40;
            </button>
            <button className="btn btn--operator" onClick={insertOperator}>
              &#41;
            </button>
            <button className="btn btn--operator" onClick={insertOperator}>
              &#47;
            </button>
            <button className="btn" onClick={insertNumber}>
              7
            </button>
            <button className="btn" onClick={insertNumber}>
              8
            </button>
            <button className="btn" onClick={insertNumber}>
              9
            </button>
            <button className="btn btn--operator" onClick={insertOperator}>
              &#42;
            </button>
            <button className="btn" onClick={insertNumber}>
              4
            </button>
            <button className="btn" onClick={insertNumber}>
              5
            </button>
            <button className="btn" onClick={insertNumber}>
              6
            </button>
            <button className="btn btn--operator" onClick={insertOperator}>
              &#45;
            </button>
            <button className="btn" onClick={insertNumber}>
              1
            </button>
            <button className="btn" onClick={insertNumber}>
              2
            </button>
            <button className="btn" onClick={insertNumber}>
              3
            </button>
            <button className="btn btn--operator" onClick={insertOperator}>
              +
            </button>
            <button className="btn" onClick={insertNumber}>
              0
            </button>
            <button className="btn btn--span-3 btn--equal" onClick={submit}>
              =
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Calculate;
