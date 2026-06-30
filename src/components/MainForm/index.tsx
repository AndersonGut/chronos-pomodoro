import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../Defaultinput';


export function MainForm() {
  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('DEU CERTO');
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
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
