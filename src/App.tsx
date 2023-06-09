import { FC, createContext } from 'react';
import './App.css';
import Person, { HairColor } from './components/Person';

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: 'Hasan',
    age: 29,
    country: 'Iran',
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Person
        name='Hasan'
        age={29}
        isMarried={false}
        hairColor={HairColor.Pink}
      />
    </AppContext.Provider>
  );
};

export default App;
