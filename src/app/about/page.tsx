import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | Snipper",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <section
        className="relative bg-cover bg-center bg-no-repeat py-8"
        style={{ backgroundImage: "url(/public/screen01.png)" }}
      >
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[rgba(85, 64, 174, 0.95)] to-[rgba(65, 47, 144, 0.93)] bg-cover bg-center bg-no-repeat"></div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
              <img
                src="/assets/img/blog-author.jpg"
                className="h-48 rounded-full sm:h-56"
                alt="author"
              />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I'm Jeremias Villane!
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">
                    Full Stack Developer
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <article className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              What is this?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black dark:text-white sm:text-2xl lg:text-3xl">
              <b>Snipper</b> is a little project to continue to learn full stack web
              development
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              I am an enthusiastic web developer in constant search of knowledge
              and creative solutions. My adventure in the development world
              began when I discovered the power of technology to change the way
              we live and work, thanks to my studies in Computer Science. Since
              then, I have been immersed in learning new technologies.
              <br />
              My experience with <b>JavaScript/Typescript</b> has allowed me to
              create interactive and dynamic web applications, using{" "}
              <b>React</b> and <b>Redux</b> as fundamental tools and recently
              with <b>NextJS</b>. In addition, I have worked with <b>Node.js</b>{" "}
              to develop robust and scalable backend services, managing{" "}
              <b>SQL</b> databases primarely using <b>PostgreSQL</b> and <b>Express</b>.
            </p>
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <a href="/">
                  <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div>
              <div className="flex items-end justify-between">
                <h4 className="font-body text-lg font-semibold uppercase text-grey-20">
                  Tech Stack:
                </h4>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold text-black dark:text-white">
                  Framework: NEXTJS 14
                </h4>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold text-black dark:text-white">
                  Language: TYPESCRIPT
                </h4>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold text-black dark:text-white">
                  Database: PRISMA, POSTGRESQL
                </h4>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold text-black dark:text-white">
                  Styles: TAILWIND CSS, NEXT-THEMES, NEXTUI, FRAMER MOTION
                </h4>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
