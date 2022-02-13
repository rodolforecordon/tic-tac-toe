const counterCreator = () => {
  let counter = 0;
  const result = () => {
    console.log(counter);
    counter++;
  };
  return result;
};

const counter = counterCreator();

counter();