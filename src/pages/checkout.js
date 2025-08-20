import { useState } from "react";
import StepIndicator from "@/components/StepIndicator";
import { motion } from "framer-motion";

export default function Checkout() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Checkout</h1>

        <StepIndicator step={step} />

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center"
          >
            <h2 className="text-lg font-semibold mb-4">Қадами 1: Dc Next</h2>
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition"
            >
              Dc Next интихоб кардан
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center"
          >
            <h2 className="text-lg font-semibold mb-4">Қадами 2: Чек бор кунед</h2>
            <input
              type="file"
              className="border rounded-lg p-2 w-full mb-4"
            />
            <button
              onClick={() => setStep(3)}
              className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition"
            >
              Чек бор шуд ✅
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center"
          >
            <h2 className="text-lg font-semibold mb-4">Қадами 3: Проверить</h2>
            <button
              onClick={() => alert("Пардохт тасдиқ шуд ✅")}
              className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
            >
              Проверить
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
              }
