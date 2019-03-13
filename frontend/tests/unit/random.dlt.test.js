const getRandomNumber = (min, max) => (
  Math.random() * (max - min) + min
);

const constructTemp = () => {
  const decimal = getRandomNumber(0, 9000) / 1000;
  return 30 + Number(decimal.toFixed(3));
};

const constructOD = () => {
  const decimal = getRandomNumber(20, 40) / 1000;
  return 1 + Number(decimal.toFixed(3));
};

const constructSensorMessage = reactor => (
  `${reactor},OD: ${constructOD()},temperature: ${constructTemp()}`
);

describe('example', () => {
  test('true to be true', () => {
    const temp = constructTemp();
    const od = constructOD();
    const res = constructSensorMessage('ZeePrime');
    console.log(res);
    console.log('ZeePrime,OD: 3.984,Temperature: 33.437');
    const actual = true;
    const expected = true;
    expect(actual).toBe(expected);
  });
});
