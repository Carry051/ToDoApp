import { FC } from 'react';
import Task from './Task';

type TasksListProp = {
    valueArray: InputsArrayProps[];
    deleteItems: (id: string) => void;
};

type InputsArrayProps = {
    id: string;
    inputValue: string;
};

const TasksList: FC<TasksListProp> = ({ valueArray, deleteItems }) => {
    return (
        <div className='border-2 w-[50%]  my-10 rounded-md py-4 text-white flex flex-col gap-6'>
            {valueArray.length > 0 ? (
                <Task valueArray={valueArray} deleteItems={deleteItems} />
            ) : (
                <p className='text-center text-4xl py-8'>Add task...</p>
            )}
        </div>
    );
};

export default TasksList;
