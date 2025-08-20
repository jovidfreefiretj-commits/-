import { useState } from "react";
import { motion } from "framer-motion";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);

  const handleDcNext = () => {
    window.open("https://play.google.com/store/apps/details?id=com.dcnext", "_blank");
    setStep(2);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    if (e.target.files[0]) setStep(3);
  };

  const handleVerify = () => {
    if (file) {
      alert("✅ Чек қабул шуд. Пардохт санҷида мешавад!");
    } else {
      alert("⚠️ Лутфан аввал чекро бор кунед!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-8">Checkout</h2>

      {/* Progress bar бо анимация */}
      <div className="flex items-center justify-between mb-10 relative">
        {[1, 2, 3].map((s, idx) => (
          <div key={s} className="flex-1 flex flex-col items-center relative">
            {/* Хати байни қадамҳо */}
            {idx < 2 && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: step > s ? "100%" : "0%" }}
                transition={{ duration: 0.6 }}
                className={`absolute top-5 left-1/2 h-1 -z-10 rounded-full ${
                  step > s ? "bg-green-500" : "bg-red-400"
                }`}
              ></motion.div>
            )}

            {/* Глазок бо анимация */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: step >= s ? 1.2 : 1, backgroundColor: step >= s ? "#22c55e" : "#ef4444" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-10 w-10 flex items-center justify-center rounded-full font-bold text-white z-10"
            >
              {step >= s ? "✔" : "✖"}
            </motion.div>

            {/* Номи қадам */}
            <span className="mt-2 text-sm font-medium text-gray-700">
              {s === 1 && "DC Next"}
              {s === 2 && "Чек"}
              {s === 3 && "Проверить"}
            </span>
          </div>
        ))}
      </div>

      {/* Қадами 1 */}
      {step === 1 && (
        <motion.div className="mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h3 className="text-lg font-semibold mb-2">Қадами 1: Пардохт тавассути DC Next</h3>
          <button
            onClick={handleDcNext}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition"
          >
            DC Next-ро кушодан
          </button>
        </motion.div>
      )}

      {/* Қадами 2 */}
      {step === 2 && (
        <motion.div className="mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h3 className="text-lg font-semibold mb-2">Қадами 2: Чек бор кунед</h3>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </motion.div>
      )}

      {/* Қадами 3 */}
      {step === 3 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h3 className="text-lg font-semibold mb-2">Қадами 3: Проверить</h3>
          <button
            onClick={handleVerify}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl transition"
          >
            Проверить
          </button>
        </motion.div>
      )}
    </div>
  );
        }
