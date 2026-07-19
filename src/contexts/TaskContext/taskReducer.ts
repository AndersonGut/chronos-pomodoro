import type { TaskStateModel } from '../../models/TaskStateModel';
import { type TaskActionModel, taskActionTypes } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case taskActionTypes.START_TASK: {
      return state;
    }
    case taskActionTypes.INTERRUPT_TASK: {
      return state;
    }
    case taskActionTypes.RESET_STATE: {
      return state;
    }
  }
  // Sempre deve retornar o estado
  return state;
}
