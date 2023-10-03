import { useNavigate, useSearchParams } from "react-router-dom";
import { users } from "../data/users";

export default function Test2() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const city = searchParams.get("city") || "all";
  const age = searchParams.get("age") || "all";
  const name = searchParams.get("name") || "";

  // const filteredUsers = users.filter((user) => {
  //   if (city && city !== "all") {
  //     return user.city.toLowerCase() === city.toLowerCase();
  //   }
  //   return true;
  // });

  // const handleCityChange = (e) => {
  //   const newCity = e.target.value;
  //   navigate(`?city=${newCity}`);
  // };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    navigate({ search: `?city=${newCity}&age=${age}` });
  };

  const handleAgeChange = (e) => {
    const newAge = e.target.value;
    navigate({ search: `?city=${city}&age=${newAge}` });
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    navigate({ search: `?city=${city}&age=${age}&name=${newName}` });
  };

  const filteredUsers = users.filter((user) => {
    return (
      (city === "all" || user.city.toLowerCase() === city.toLowerCase()) &&
      (age === "all" || user.age === parseInt(age)) &&
      (name === "" || user.name.toLowerCase().includes(name.toLowerCase()))
    );
  });

  return (
    <>
      <label>
        Filter by city:
        <select value={city} onChange={handleCityChange}>
          <option value="all">All</option>
          <option value="new york">New York</option>
          <option value="detroit">Detroit</option>
          <option value="metropolis">Metropolis</option>
        </select>
      </label>
      <label>
        Filter by age:
        <select value={age} onChange={handleAgeChange}>
          <option value="all">All</option>
          <option value="21">21</option>
          <option value="106">106</option>
          <option value="47">47</option>
        </select>
      </label>
      <label>
        Search by name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.city}
          </li>
        ))}
      </ul>
    </>
  );
}
