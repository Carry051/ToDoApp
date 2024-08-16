import { FC } from 'react';

import { MdOutlineDoneOutline } from 'react-icons/md';
import { MdDeleteOutline } from 'react-icons/md';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

type TaskProps = {
    valueArray: InputsArrayProps[];
    deleteTasks: (id: string) => void;
    completeTasks: (id: string) => void;
};

type InputsArrayProps = {
    id: string;
    inputValue: string;
    complete: boolean;
};

const Task: FC<TaskProps> = ({ valueArray, deleteTasks, completeTasks }) => {
    return (
        <>
            <AnimatePresence>
                {valueArray
                    .slice()
                    .reverse()
                    .map((data, index) => (
                        <motion.div
                            key={data.id}
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{
                                x: 100,

                                backgroundColor: 'red',
                            }}
                            transition={{ duration: 0.3 }}
                            className={`${
                                data.complete && ' opacity-30'
                            }  flex justify-between mx-4 px-4 border-[1px]  py-4 rounded-md text-xl`}
                        >
                            <div>
                                <ul>
                                    <li
                                        className={`flex gap-4 ${
                                            data.complete && 'line-through'
                                        }`}
                                    >
                                        <p>{index + 1} |</p>
                                        <p>{data.inputValue}</p>
                                    </li>
                                </ul>
                            </div>

                            <div className='flex gap-6'>
                                <button
                                    title='Done'
                                    className={`${
                                        data.complete
                                            ? 'hover:text-blue-500'
                                            : 'hover:text-green-500'
                                    }`}
                                    onClick={() => completeTasks(data.id)}
                                >
                                    {data.complete ? (
                                        <IoMdCloseCircleOutline />
                                    ) : (
                                        <MdOutlineDoneOutline />
                                    )}
                                </button>
                                <button
                                    title='Delete'
                                    className='hover:text-red-600'
                                    onClick={() => deleteTasks(data.id)}
                                >
                                    <MdDeleteOutline />
                                </button>
                            </div>
                        </motion.div>
                    ))}
            </AnimatePresence>
        </>
    );
};

export default Task;
