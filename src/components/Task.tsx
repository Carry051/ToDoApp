import { FC } from 'react';
import { MdOutlineDoneOutline } from 'react-icons/md';
import { MdDeleteOutline } from 'react-icons/md';

type TaskProps = {
    valueArray: InputsArrayProps[];
    deleteItems: (id: string) => void;
};

type InputsArrayProps = {
    id: string;
    inputValue: string;
};

const Task: FC<TaskProps> = ({ valueArray, deleteItems }) => {
    return (
        <>
            {valueArray.map((data) => (
                <div className=' flex justify-between mx-4 px-10 border-[1px] hover:border-green-400 py-4 rounded-md text-xl'>
                    <div>
                        <ul key={data.id}>
                            <li>{data.inputValue}</li>
                        </ul>
                    </div>

                    <div className='flex gap-6'>
                        <button className='hover:text-green-500'>
                            <MdOutlineDoneOutline />
                        </button>
                        <button
                            className='hover:text-red-600'
                            onClick={() => deleteItems(data.id)}
                        >
                            <MdDeleteOutline />
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Task;
