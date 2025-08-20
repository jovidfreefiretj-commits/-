import { motion } from "framer-motion";

export default function StepIndicator({ step }) {
  const steps = [
    { id: 1, label: "Dc Next" },
    { id: 2, label: "Чек" },
    { id: 3, label: "Проверить" },
  ];

  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((s) => (
        <motion.div
          key={s.id}
          className="flex flex-col items-center w-1/3"
          initial={{ scale: 0.8 }}
          animate={{ scale: step === s.id ? 1.1 : 1 }}
        >
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-4 ${
              step >= s.id
                ? "bg-green-500 border-green-600"
                : "bg-red-500 border-red-600"
            } text-white font-bold`}
          >
            {s.id}
          </div>
          <p className="mt-2 text-sm">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
