// In Next.js, when you're using Cloudflare Pages or other platforms that
// leverage Edge functions, you need to tell Next.js which routes should
// run in the Edge Runtime instead of the Node.js Runtime. By default, Next.js
// assumes that certain dynamic server-side routes are handled by Node.js.
// However, on platforms like Cloudflare Pages, which use Edge functions to
// handle requests, you need to explicitly configure these routes to be
// compatible with the Edge Runtime.
export const runtime = 'edge'; // Tell Next.js to use the Edge Runtime for this route instead of the Node.js Runtime

import {notFound} from "next/navigation"

export default function NotFoundCatchAll() {
  notFound()
}