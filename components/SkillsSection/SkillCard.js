import { motion } from "motion/react";

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="flex flex-col items-center w-full min-w-[100px] max-w-[130px] bg-white/5 p-4 rounded-xl backdrop-blur-md border border-white/20 shadow-md hover:shadow-[0_0_12px_#7042f855] transition"
  >
    <skill.icon size={28} className="text-[var(--primary-color)] mb-2" />
    <p className="text-xs text-[var(--secondary-color)] text-center">
      {skill.name}
    </p>
  </motion.div>
);

export default SkillCard;
