import { useState } from 'react';

export default function Home() {
  const [playerId, setPlayerId] = useState('');
  const [nickname, setNickname] = useState('');
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const products = [
    {id: 1, name: '100💎', price: 10},
    {id: 2, name: '210💎', price: 20},
    {id: 3, name: '500💎', price: 45},
  ];

  const fakeApiNickname = (id) => {
    return "ProGamerTJ"; // always fake
  };

  const handleLogin = () => {
    setNickname(fakeApiNickname(playerId));
    setStep(2);
  };

  const handleCheckout = (p) => {
    setProduct(p);
    setStep(3);
  };

  const handleVerify = () => {
    setStep(4);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {step === 1 && (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <h1 className="text-xl font-bold mb-4">Воридшавӣ бо ID</h1>
          <input
            className="border p-2 w-full mb-4"
            placeholder="Player ID"
            value={playerId}
            onChange={(e) => setPlayerId(e.target.value)}
          />
          <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
            Дохил шудан
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-lg font-semibold mb-2">Салом, {nickname} ✅</h2>
          <p className="mb-4">Маҳсулотро интихоб кунед:</p>
          <div className="space-y-2">
            {products.map((p) => (
              <button key={p.id} onClick={() => handleCheckout(p)} className="border p-3 rounded w-full text-left hover:bg-gray-50">
                {p.name} - {p.price} TJS
              </button>
            ))}
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-lg font-semibold mb-2">Checkout</h2>
          <p className="mb-4">Шумо интихоб кардед: {product.name} ({product.price} TJS)</p>
          <p className="mb-2">Усули пардохт:</p>
          <select className="border p-2 w-full mb-4">
            <option>DC Next (TJ)</option>
            <option>Visa</option>
          </select>
          <input type="file" className="mb-4" onChange={(e) => setReceipt(e.target.files[0])} />
          <button onClick={handleVerify} className="bg-green-500 text-white px-4 py-2 rounded w-full">
            Проверить
          </button>
        </div>
      )}
      {step === 4 && (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center">
          <h2 className="text-lg font-bold mb-4">✅ Пардохт муваффақ шуд!</h2>
          <p>💎 {product.name} ба ID {playerId} фиристода шуд.</p>
        </div>
      )}
    </div>
  );
    }
