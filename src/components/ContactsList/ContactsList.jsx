import { getContacts, getFilter } from "redux/selectors";
import ContactItem  from "../ContactItem"
import { List, Item } from "./ComtactList.styled"
import { useSelector } from "react-redux";


export default function ContactsList ({onDelete}) {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    
    const filteredContacts = () => {
        const lowerCaseFilter = filter.toLocaleLowerCase();
        return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCaseFilter));
    };

return(
    <div>
        <List>
            {filteredContacts().map(item => (
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
};