import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../Defaultinput';
import { useTaskContext } from '../../contexts/TaskContext';

export function MainForm() {
  const { setState } = useTaskContext();

  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: '25:00',
      }
    })
  }



  return (
    <form className='form' action=''>
      <button onClick={handleClick} type='button' >
        Clicar
      </button>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Proximo intervalo é de 25 minutos</p>
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
