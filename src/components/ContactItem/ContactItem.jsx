import { DeleteBtn } from "./ContactItem.styled";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/actions";

export default function ContactItem ({contact: {id, name, number}}) {
    
    const dispatch = useDispatch();
    const deleteItem = () => dispatch(deleteContact(id));
    
  return(
        <>
            <p>{name}: {number} </p>
            <DeleteBtn 
            onClick={() => deleteItem(id)}
            >Delete
            </DeleteBtn>
        </>
        
    )  
};