import { ChangeEvent, FC, useState } from 'react';

export enum HairColor {
  Blonde = 'Your hair color is blonde!',
  Brown = 'Your hair color is brown!',
  Pink = 'Your hair color is pink!',
}

interface Props {
  name: string;
  age: number;
  isMarried: boolean;
  hairColor: HairColor;
}

type SomeName = 'Hasan' | 'Ryan';

const Person: FC<Props> = ({ name, age, isMarried, hairColor }) => {
  const [value, setValue] = useState<number>(1);
  const [country, setCountry] = useState<string>('');

  const someName: SomeName = 'Hasan';

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <h1>{someName}</h1>
      <p>
        {name} is {age} years old and he/she {isMarried ? 'is' : "isn't"}{' '}
        married!
      </p>
      <input
        type='text'
        name='country'
        id='country'
        value={country}
        placeholder='Enter Your Country Name ...'
        onChange={handleChange}
      />
      <p>{country}</p>
      <button onClick={() => setValue(value => value * 2)}>{value}</button>
      <p>{hairColor}</p>
    </div>
  );
};

export default Person;
