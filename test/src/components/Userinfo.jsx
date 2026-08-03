function Userinfo({ user }) {
  return (
    <>
    <div>
    <h1> {user.name} </h1>
    <h1> {user.email} </h1>
    <h1> {user.location} </h1>
    </div>
    </>
  );
}
export default Userinfo;