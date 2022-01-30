import classes from "./ContactInfo.module.css";

const ContactInfo = ({ user }) => {
  return (
    <div className={classes["contact-container"]}>
      {user && (
        <>
          <div className={classes["img-wrapper"]}>
            <img src={user.picture} alt={user.picture} />
            <h1>{user.fullName}</h1>
          </div>
          <table className={classes["contact-info"]}>
            <tbody>
              <tr>
                <td className={classes["contact-info-title"]}>Age</td>
                <td>{user.age}</td>
              </tr>
              <tr>
                <td className={classes["contact-info-title"]}>Email</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td className={classes["contact-info-title"]}>Mobile</td>
                <td>{user.mobile}</td>
              </tr>
              <tr>
                <td className={classes["contact-info-title"]}>Phone</td>
                <td>{user.phone}</td>
              </tr>
              <tr>
                <td className={classes["contact-info-title"]}>Address</td>
                <td>
                  {user.address.street.number} {user.address.street.name} <br />
                  {user.address.city} <br />
                  {user.address.state} <br />
                  {user.address.postcode} {user.address.country}
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
          <div className={classes["contact-footer"]}>
            <a href={`tel:${user.phone}`}>Call</a>
            <a href={`mailto:${user.email}`}>Email</a>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactInfo;
