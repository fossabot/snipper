"use client";

import { Link } from "@nextui-org/react";
import { Url } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import { useState } from "react";
import { AnchorIcon, CopyUrlModal, Redirector, ShareIcon } from ".";
import DeleteLinkModal from "./DeleteLinkModal";
import { DeleteIcon } from "./ui/DeleteIcon";

export default function SnipCards({ urls }: { urls: [Url] }) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentCode, setCurrentCode] = useState<string>("");

  const handleShare = (urlCode: string) => {
    setShowCopyModal(true);
    setCurrentCode(urlCode);
  };

  const handleDelete = async (urlCode: string) => {
    setShowDeleteModal(true);
    setCurrentCode(urlCode);
  };

  return (
    <>
      {urls ? (
        urls.map((url: Url, index: number) => (
          <div
            key={index}
            className="relative group  block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-300 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-white to-slate-200/[0.2] dark:from-slate-800 dark:to-slate-800/[0.2] border border-transparent group-hover:border-slate-300 dark:group-hover:border-slate-700 relative z-20">
              <div className="relative z-20">
                <div id="icons" className="flex justify-between">
                  <ShareIcon
                    width="21"
                    height="21"
                    color="rgb(59 130 246)"
                    className="cursor-pointer"
                    onClick={() => handleShare(url.urlCode)}
                  />
                  <DeleteIcon
                    width="21"
                    height="21"
                    color="rgb(157 23 77)"
                    className="cursor-pointer"
                    onClick={() => handleDelete(url.urlCode)}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-zinc-600 dark:text-zinc-100 font-bold tracking-wide mt-4">
                    <Redirector code={url.urlCode}>{url.urlCode}</Redirector>
                    {/* <Link href={shortUrl} isExternal showAnchorIcon as={NextLink}>
                {urlCode}
              </Link> */}
                  </h4>
                  <div className="mt-8 text-zinc-500 tracking-wide leading-relaxed text-sm">
                    <p className="select-none">
                      <b>Original URL:</b>
                    </p>

                    <Link
                      href={url.originalUrl}
                      isExternal
                      showAnchorIcon
                      anchorIcon={
                        <AnchorIcon width="18" height="18" color="#0661cc" />
                      }
                      as={NextLink}
                    >
                      {url.originalUrl}
                    </Link>

                    <p className="mt-3 select-none">
                      <b>Created:</b>
                    </p>
                    <p className="text-zinc-400">
                      {new Date(url.createdAt).toLocaleDateString()}
                    </p>

                    <p className="mt-3 select-none">
                      <b>Total clicks:</b>
                    </p>
                    <p className="text-zinc-400">{url.clicks}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No urls</p>
      )}
      <CopyUrlModal
        showModal={showCopyModal}
        setShowModal={setShowCopyModal}
        code={currentCode}
      />
      <DeleteLinkModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        code={currentCode}
      />
    </>
  );
}
