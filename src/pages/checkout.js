export default function Checkout() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Чек барои тасдиқи пардохт</h2>
      <form>
        <label>Ном:<br />
          <input type="text" name="name" required />
        </label>
        <br /><br />
        <label>ID ё Email:<br />
          <input type="text" name="id" required />
        </label>
        <br /><br />
        <button type="submit">Проверить</button>
      </form>
    </div>
  );
  }
