const ContactCard = (props) => {
  return (
    <div>
      <h4>{props.contactProp.name}</h4>
      <p>
        <strong>Email:</strong> {props.contactProp.email}
      </p>
      <hr />
    </div>
  );
};

export default ContactCard;
