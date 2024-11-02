import type { PackageDetails } from '../types/packagesDetails';

const FEATURED_PACKAGES = [ 
  'react',
  'typescript',
  'vue',
  'vite'
]

export async function getFeaturedPackages() {
 const promises = FEATURED_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    return res.json()
  })
  const data = await Promise.all(promises)

  return data as PackageDetails[];
}