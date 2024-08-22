'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';

import { ScrollArea } from '@/components/ui/scroll-area';
import { SiTailwindcss, SiNextdotjs, SiMongodb } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

const about = {
  title: 'About me',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit voluptates quibusdam, sunt explicabo inventore',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Joshua Muriithi',
    },
    {
      fieldName: 'Profession',
      fieldValue: 'Software Developer',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+254) 740 859 483',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Kenyan',
    },
    {
      fieldName: 'Email',
      fieldValue: 'muriithijoshua39@gmail.com',
    },
    {
      fieldName: 'Language',
      fieldValue: 'English, Swahili',
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Education',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit voluptates quibusdam, sunt explicabo inventore',
  items: [
    {
      institution: 'GOMYCODE',
      degree: 'Full stack Web Development Bootcamp',
      duration: '2023',
    },
    {
      institution: 'United States International University',
      degree: 'BSc CS',
      duration: '2024',
    },
    {
      institution: 'MongoDB University',
      degree: 'MongoDb Node.js Developer',
      duration: '2024',
    },
  ],
};

const skills = {
  title: 'My skills',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia arcu eget nulla.',
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML 5' },
    { icon: <FaCss3 />, name: 'CSS 3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiMongodb />, name: 'MongoDB' },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 space-y-5">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px]">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-12"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="text-sm bg-black text-white p-2 rounded">
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;