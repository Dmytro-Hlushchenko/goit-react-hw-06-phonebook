import { getContacts } from "redux/selectors";
import ContactItem  from "../ContactItem"
import { List, Item } from "./ComtactList.styled"
import { useSelector } from "react-redux";


export default function ContactsList ({onDelete}) {

    const contacts = useSelector(getContacts);

    return(
    <div>
        <List>
            {contacts.map(item => (
                <Item key = {item.id}>
                    <ContactItem
                        contact = {item}
                        onDelete = {onDelete}>
                    </ContactItem>
                </Item>
            ))}
        </List>
    </div>
    
    )
}