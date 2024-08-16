import { FormEvent, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from 'react-icons/fa6';
import { motion } from 'framer-motion';

import TasksList from './TasksList';

type InputsArrayProps = {
    id: string;
    inputValue: string;
    complete: boolean;
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
                complete: false,
            };
            setInputsArray((prevArray) => [...prevArray, newTask]);
            setInputValue('');
            setButtonAnimate(true);
            setTimeout(() => {
                setButtonAnimate(false);
            }, 300);
        }
    };

    const completeTasks = (id: string) => {
        setInputsArray(
            inputsArray.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : todo
            )
        );
    };

    const deleteTasks = (id: string) => {
        setTimeout(() => {
            setInputsArray((prevArray) =>
                prevArray.filter((todo) => todo.id !== id)
            );
        }, 300);
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
                    title='Add task'
                    type='submit'
                    className='flex items-center justify-center w-[100px] text-2xl bg-transparent text-white border-2 rounded-xl  duration-500 hover:bg-white font-bold hover:text-[#009a22]'
                >
                    {buttonAnimate ? (
                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{
                                opacity: 0.5,
                                y: -60,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaPlus size={35} />
                        </motion.div>
                    ) : (
                        <motion.div initial={{ opacity: 1, y: 0 }}>
                            Add
                        </motion.div>
                    )}
                </button>
            </form>
            <TasksList
                valueArray={inputsArray}
                deleteTasks={deleteTasks}
                completeTasks={completeTasks}
            />
        </div>
    );
};

export default SubmitForm;
