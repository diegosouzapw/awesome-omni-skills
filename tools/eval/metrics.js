export function recallAtK(retrieved, relevant, k) {
  if (relevant.size === 0) return 0;
  const topK = retrieved.slice(0, k);
  let hits = 0;
  for (const id of relevant) if (topK.includes(id)) hits += 1;
  return hits / relevant.size;
}

export function reciprocalRank(retrieved, relevant) {
  for (let i = 0; i < retrieved.length; i += 1) {
    if (relevant.has(retrieved[i])) return 1 / (i + 1);
  }
  return 0;
}

export function aggregate(cases, ks = [1, 3, 5, 10]) {
  const out = { count: cases.length, mrr: 0 };
  for (const k of ks) out[`recall@${k}`] = 0;
  for (const c of cases) {
    out.mrr += reciprocalRank(c.retrieved, c.relevant);
    for (const k of ks) out[`recall@${k}`] += recallAtK(c.retrieved, c.relevant, k);
  }
  const n = cases.length || 1;
  out.mrr /= n;
  for (const k of ks) out[`recall@${k}`] /= n;
  return out;
}
