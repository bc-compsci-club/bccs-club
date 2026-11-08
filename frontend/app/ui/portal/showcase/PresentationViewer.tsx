"use client";

import { ArrowTopRightOnSquareIcon, ArrowsPointingOutIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

function presentationEmbed(presentationUrl: string) {
  if (!/^https?:\/\//i.test(presentationUrl)) return null;

  const url = URL.canParse(presentationUrl) ? new URL(presentationUrl) : null;
  if (!url) return null;

  if (url.origin === "https://1drv.ms" && url.pathname.startsWith("/p/")) {
    return { src: presentationUrl, label: "PowerPoint" };
  }
  if (url.origin === "https://docs.google.com" &&
      /^\/presentation\/d\/(?:e\/)?[\w-]+\/(?:pubembed|embed)$/.test(url.pathname)) {
    return { src: presentationUrl, label: "Google Slides" };
  }

  return {
    src: `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(presentationUrl)}`,
    label: "PowerPoint",
  };
}

export default function PresentationViewer({ presentationUrl, title }: { presentationUrl: string; title: string }) {
  const [expanded, setExpanded] = useState(false);
  const embed = presentationEmbed(presentationUrl);

  return (
    <div className="mt-6">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        {embed && (
          <iframe
            title={`${title} presentation`}
            src={embed.src}
            className="block aspect-video w-full bg-white"
            loading="lazy"
            allowFullScreen
          />
        )}
        <div className="flex items-center justify-between gap-3 p-4">
          <span className="text-sm font-semibold text-gray-800">{embed?.label ?? "PowerPoint"}</span>
          <div className="flex gap-3">
            {embed && <button type="button" onClick={() => setExpanded(true)} className="inline-flex items-center gap-1 text-sm font-bold text-bc-red hover:text-bc-red/75"><ArrowsPointingOutIcon className="h-4 w-4" /> Expand</button>}
            <a href={presentationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-bc-red hover:text-bc-red/75">Open <ArrowTopRightOnSquareIcon className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      {embed && (
        <Dialog open={expanded} onClose={setExpanded} className="fixed inset-0 z-[60]">
          <div aria-hidden="true" className="fixed inset-0 bg-black/70" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="flex h-[90dvh] w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
              <div className="flex items-center justify-between gap-4 px-4 py-2">
                <DialogTitle className="font-semibold text-gray-900">{title} presentation</DialogTitle>
                <button type="button" data-autofocus onClick={() => setExpanded(false)} className="rounded-full p-2 text-gray-800 hover:bg-gray-100">
                  <XMarkIcon className="h-6 w-6" />
                  <span className="sr-only">Close presentation</span>
                </button>
              </div>
              <iframe title={`${title} presentation expanded`} src={embed.src} className="min-h-0 w-full flex-1" allowFullScreen />
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </div>
  );
}
