import { FormEvent, useState } from 'react';
import { MdDone } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import TasksList from './TasksList';

type InputsArrayProps = {
    id: string;
    inputValue: string;
};

const SubmitForm = () => {
    const [buttonAnimate, setButtonAnimate] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [inputsArray, setInputsArray] = useState<Array<InputsArrayProps>>([]);

    const handleAddTask = (e: FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            const newTask = {
                id: uuidv4(),
                inputValue: inputValue,
            };
            setInputsArray((prevArray) => [...prevArray, newTask]);
            setInputValue('');
            setButtonAnimate(true);
            setTimeout(() => {
                setButtonAnimate(false);
            }, 1000);
        }
    };

    const deleteItems = (task: string) => {
        const newTasks = inputsArray.filter((d) => d.id !== task);

        setInputsArray(newTasks);
    };

    return (
        <div className='mt-20 flex items-center font-matrix flex-col'>
            <form className='flex gap-10' onSubmit={handleAddTask}>
                <input
                    maxLength={35}
                    type='text'
                    className='inputForm'
                    placeholder='Enter task...'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    type='submit'
                    className='flex items-center justify-center w-[100px] text-2xl bg-transparent text-white border-2 rounded-xl  duration-500 hover:bg-white font-bold hover:text-[#009a22]'
                >
                    {buttonAnimate ? <MdDone /> : 'Add'}
                </button>
            </form>
            <TasksList valueArray={inputsArray} deleteItems={deleteItems} />
        </div>
    );
};

export default SubmitForm;
