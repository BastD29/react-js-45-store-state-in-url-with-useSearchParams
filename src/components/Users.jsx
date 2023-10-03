export default function Users({ paginatedUsers }) {
  return (
    <ul>
      {paginatedUsers.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age} - {user.city}
        </li>
      ))}
    </ul>
  );
}
