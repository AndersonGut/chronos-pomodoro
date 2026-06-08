import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../Defaultinput';
import type { HomeProps } from '../../pages/Home';

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime:34,
        },
        formattedSecondsRemaining:"34:00",
      }
    });
  }

  return (
    <form className='form' action=''>
      <div>
        <button type='button' onClick={handleClick}>Clicar</button>
      </div>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Proximo intervalo é de {state.config.workTime} minutos</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
