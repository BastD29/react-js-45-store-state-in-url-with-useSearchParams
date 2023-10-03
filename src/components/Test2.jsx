import { useNavigate, useSearchParams } from "react-router-dom";
import { users } from "../data/users";

export default function Test2() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const city = searchParams.get("city") || "all";
  console.log("city", city);

  const filteredUsers = users.filter((user) => {
    if (city && city !== "all") {
      return user.city.toLowerCase() === city.toLowerCase();
    }
    return true;
  });

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    navigate(`?city=${newCity}`);
  };

  return (
    <>
      <label>
        Filter by:
        <select value={city} onChange={handleCityChange}>
          <option value="all">All</option>
          <option value="new york">New York</option>
          <option value="detroit">Detroit</option>
          <option value="metropolis">Metropolis</option>
        </select>
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
