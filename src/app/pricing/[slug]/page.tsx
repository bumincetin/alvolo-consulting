// src/app/pricing/[slug]/page.tsx
// ────────────────────────────────────────────────────────────────────────────
// NO 'use client' in this file
import ServiceDetailClient from './ServiceDetailClient';

export const runtime = 'edge';
/** params is delivered as a *Promise* in App Router v15+  */
type SlugParams = Promise<{ slug: string }>;

export default async function Page({
  params,
}: {
  params: SlugParams;        // ← ✨ 1. expect the promise
}) {
  const { slug } = await params;  // ← ✨ 2. await it once
  return <ServiceDetailClient slug={slug} />;
}
