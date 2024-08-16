import { FC } from 'react';

import Task from './Task';

type TasksListProp = {
    valueArray: InputsArrayProps[];
    deleteTasks: (id: string) => void;
    completeTasks: (id: string) => void;
};

type InputsArrayProps = {
    id: string;
    inputValue: string;
    complete: boolean;
};

const TasksList: FC<TasksListProp> = ({
    valueArray,
    deleteTasks,
    completeTasks,
}) => {
    return (
        <div className=' w-[50%]  my-10 rounded-md py-4 text-white flex flex-col gap-6 '>
            {valueArray.length > 0 ? (
                <Task
                    valueArray={valueArray}
                    deleteTasks={deleteTasks}
                    completeTasks={completeTasks}
                />
            ) : (
                <p className='text-center text-4xl py-8'>Please add task...</p>
            )}
        </div>
    );
};

export default TasksList;
