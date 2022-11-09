import PropTypes from 'prop-types';
import css from './ContactBook.module.css';

const ContactList = ({ data: { contacts, filter }, deleteContact }) => {
    return (
        <ul>
            {filter === '' ?
                contacts.map(contact => (
                    <li key={contact.id} className={css.item}>
                        {contact.name}: {contact.number}
                        <button type='submit' onClick={() => deleteContact(contact.id)}>Delete</button>
                    </li>
                )) :
                contacts.filter(item => (item.name.toLowerCase().includes(filter))).map(contact => (
                        <li key={contact.id} className={css.item}>
                            {contact.name}: {contact.number}
                            <button type='submit' onClick={() => deleteContact(contact.id)}>Delete</button>
                        </li>
                    ))
            }
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape),
    filter: PropTypes.string,
    deleteContact: PropTypes.func,
}

export default ContactList;