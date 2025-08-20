export default function Payment() {
  // Ин ҷо кнопкаи DC Next ва Checkout мегузорем
  const handlePay = () => {
    // DC Next-ро мекушояд
    window.open("https://play.google.com/store/apps/details?id=com.dcnext", "_blank");

    // Ба саҳифаи Checkout равон мекунад
    window.location.href = "/checkout";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Саҳифаи пардохт</h1>
      <button
        onClick={handlePay}
        style={{
          background: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Пардохт кардан
      </button>
    </div>
  );
}
