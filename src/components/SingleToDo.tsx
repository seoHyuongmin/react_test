import React from 'react'
import { ToDo } from '../model';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";

type Props = {
    toDo: ToDo;
    toDos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const SingleToDo = ({ toDo, toDos, setToDos }: Props) => {
    const handleDone = () => { };
    return (
        <form className="toDos__single">
            <span className="toDos__single--text">{toDo.toDo}</span>
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <AiFillDelete />
                </span>
                <span className="icon">
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleToDo
