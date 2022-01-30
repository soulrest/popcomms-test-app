export const fetchUsers = async () => {
  try {
    const response = await fetch(
      "https://randomuser.me/api/?results=50&nat=gb"
    );
    if (!response.ok) throw new Error("Could not fetch users data.");
    const data = await response.json();
    const formattedData = data.results.map((el) => {
      return {
        fullName: `${el.name.first} ${el.name.last}`,
        firstName: el.name.first,
        lastName: el.name.last,
        age: el.dob.age,
        email: el.email,
        mobile: el.cell,
        phone: el.phone,
        picture: el.picture.large,
        id: el.login.uuid,
        address: {
          city: el.location.city,
          country: el.location.country,
          postcode: el.location.postcode,
          state: el.location.state,
          street: {
            name: el.location.street.name,
            number: el.location.street.number,
          },
        },
      };
    });
    return formattedData;
  } catch (error) {
    console.error(error.message);
  }
};
