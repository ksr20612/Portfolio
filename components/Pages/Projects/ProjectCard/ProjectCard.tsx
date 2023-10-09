'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import CompanyIcon from 'public/icons/company.svg';
import PersonalIcon from 'public/icons/einstein.svg';
import useEnsureMounted from 'hooks/useEnsureMounted';

interface ProjectCardProps {}

function ProjectCard({}: ProjectCardProps) {
  const { mounted } = useEnsureMounted();
  const [selected, setSelected] = useState<number>(0);
  const handleClick = (index: number) => setSelected(index);
  const selectedClass = 'bg-mono-100';
  if (!mounted) return null;
  return (
    <div id="project_card" className="w-full p-3 text-[1.2rem] rounded-md shadow-xl bg-mono-0">
      <ul aria-label="프로젝트 타입" className="flex w-full font-ubuntu">
        <li
          key="company"
          className={twMerge(
            'relative cursor-pointer min-w-0 flex gap-3 items-center select-none flex-1 p-3 border-b-mono-300 border-solid border-b-[1px] rounded-t-md',
            selected === 0 ? selectedClass : '',
          )}
          onClick={() => handleClick(0)}>
          <CompanyIcon width="20px" height="20px" />
          Company
          {selected === 0 && (
            <motion.div
              className="absolute -bottom-[1px] left-0 right-0 h-[1px] bg-primary-500"
              layoutId="underline"
            />
          )}
        </li>
        <li
          key="personal"
          className={twMerge(
            'relative cursor-pointer min-w-0 flex gap-3 items-center select-none flex-1 p-3 border-b-mono-300 border-solid border-b-[1px] rounded-t-md',
            selected === 1 ? selectedClass : '',
          )}
          onClick={() => handleClick(1)}>
          <PersonalIcon width="20px" height="20px" />
          Personal
          {selected === 1 && (
            <motion.div
              className="absolute -bottom-[1px] left-0 right-0 h-[1px] bg-primary-500"
              layoutId="underline"
            />
          )}
        </li>
      </ul>
      <div className="w-full min-h-[300px]">
        <AnimatePresence mode="wait">
          {selected === 0 && (
            <motion.div
              key="company projects"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, staggerChildren: 0.05 }}
              className="flex flex-wrap gap-5 py-5"
            />
          )}
          {selected === 1 && (
            <motion.div
              key="personal projects"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, staggerChildren: 0.05 }}
              className="flex flex-wrap gap-5 py-5"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProjectCard;
